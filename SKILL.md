---
name: layout-primitives
description: >
  Architect spatial vocabulary and layout primitives for React + Tailwind design systems.
  Use this skill whenever the user is building or refactoring layout components (Stack, Cluster,
  Container, Grid), defining spacing tokens or scales, setting up a _scale.ts or similar
  spatial contract file, creating a component taxonomy (primitive → composite → pattern →
  layout → template), working in a monorepo with shared UI packages, or discussing how
  components should own their spacing. Also trigger when the user mentions gap tiers,
  section spacing, container widths, content measure, CVA layout variants, or the
  relationship between layout and composition in a design system — even if they don't
  use the exact term "layout primitives." If someone is building a packages/ui folder
  structure or asking how layout components should relate to Tailwind tokens, this is the skill.
---

# Layout Primitives

A methodology for building the spatial foundation of a React + Tailwind CSS design system.
The core principle: **spatial vocabulary first, layout primitives second, everything else after.**

## Why this order matters

Most design systems start with visible components (Button, Card, Input) and bolt on
spacing later. This creates entropy — every component makes its own spatial decisions,
gap values drift, and composition becomes unpredictable.

The fix is to treat spacing like a typed schema. Define the vocabulary in one file,
build layout primitives that speak that vocabulary, and then compose everything else
inside those primitives. Components never decide how much space goes *between* them —
their parent layout does.

## The authoring sequence

The taxonomy describes complexity: `primitive → composite → pattern → layout → template`.
But the **authoring sequence** is different:

```
1. Spatial vocabulary (_scale.ts)    — the shared type contract
2. Layout primitives                  — Stack, Cluster, Container, Grid
3. Primitives                         — Button, Input, Badge
4. Composites                         — SearchField, NavItem
5. Patterns                           — Hero, FeatureGrid, PricingTable
6. Templates                          — MarketingPage, DashboardShell
```

Layout comes early because you can't compose anything coherently if you haven't
decided how space works first.

## Step 1 — Build the spatial vocabulary

Create a single file (typically `_scale.ts` in your layout primitives folder) that
exports every spacing type and its corresponding Tailwind class map. The underscore
prefix signals "shared infrastructure, not a public component."

Read `references/scale-reference.md` for the full annotated code pattern.

### What the vocabulary must cover

These are the spatial domains, in priority order:

**Gap scale** — flex/grid gap between children. This is the most-used spatial token.
Define a union type and a class map. The key insight: not every Tailwind spacing
value should be in the scale. Constrain it to the steps your system actually uses.
Organize them into conceptual tiers:

- **Tight** (xs–sm): within composites, icon-to-label distances
- **Normal** (md–lg): between composites in a pattern
- **Loose** (xl–3xl): between patterns/sections in a layout

**Padding** — internal spacing for containers, cards, sections. Needs axis variants
(px, py) because the most common container pattern is generous horizontal padding
with no vertical padding. A symmetric `p-*` is rarely what you want on a page wrapper.

**Container widths** — max-width constraints. Without this, your apps disagree on
what "page width" means. Semantic names (xs through full) mapped to Tailwind's
max-w classes. This is the missing contract in most systems.

**Content measure** — max-width for readable text. Distinct from container width.
Governs how wide prose can get before readability degrades (~45–75ch). Three tiers:
narrow (captions), prose (articles), wide (code blocks).

**Section spacing** — vertical rhythm between major page regions. Larger than gap
(starts at 32px, goes to 128px). Uses `py-*` classes. Separate type from Padding
because it operates at a fundamentally different scale — mixing them is a type error
that TypeScript should catch.

**Grid minimums** — constrained min-width values for auto-fill/auto-fit grids.
These are just a type (the values pass through as-is to CSS), not a class map.

### Design rules for the vocabulary file

- One file, one spatial vocabulary. Don't split gap into one module and padding
  into another. Co-location makes drift visible.
- Every map must be `Record<YourType, string>` — exhaustive by construction.
  Adding a new tier to the type forces you to add it to every map.
- Include the px values as comments next to each entry. Future you (or your
  teammate) shouldn't have to memorize that `gap-6` is 24px.
- Add a changelog comment at the top. Treat edits like schema migrations.
- If you add helper functions (resolveGap, resolvePadding), keep them in this
  file too. They're part of the vocabulary, not component logic.

## Step 2 — Build layout primitives

Four layout primitives cover ~90% of composition needs:

### Stack
Vertical flow with consistent gap. Your most-used component.

- Default `gap="md"`, `align="stretch"`
- `align` maps to `items-*` classes
- Gap comes from the shared `gapMap`
- Optional `recursive` mode (lobotomized owl selector) for prose content, but
  document it clearly as prose-only — the descendant selector will fight nested
  layout components' own gap values

### Cluster (or Inline)
Horizontal wrapping flow.

- Default `gap="md"`, `align="center"`, `wrap=true`
- `justify` prop for distribution (start, center, end, between, around)
- Same `gapMap` as Stack — spatial vocabulary is shared

### Container
The outermost spatial contract. Not a generic wrapper div.

Must answer three questions every page region needs to agree on:
1. How wide can content get? (`width` → containerWidthMap)
2. How much horizontal breathing room? (`px` → paddingXMap)
3. Does this region respond to its own width or the viewport? (`query`)

Also supports:
- `section` prop for vertical rhythm (uses sectionSpacingMap, NOT paddingYMap)
- `as` prop for semantic HTML (section, main, article, aside, header, footer)
- Nested container pattern: `width="full"` outer (background) + `width="lg"` inner (content)

Common mistake to prevent: building Container as *only* a container-query wrapper.
Container queries are an opt-in feature, not the component's identity.

### Grid
CSS grid with column conventions.

- Fixed columns (1–6) via Tailwind's grid-cols-*
- Auto-fill/auto-fit with constrained min-widths (typed, not arbitrary strings)
- Same `gapMap` as everything else

### Component API guidelines

- All layout primitives use the same `Gap` type from `_scale.ts`
- On React 19+, use regular function components with `ref` as a prop — no `forwardRef`
- Use `cn()` (clsx + twMerge) for class composition
- Accept `className` for escape-hatch customization
- Accept `children` implicitly via HTMLAttributes spread

## The cardinal rule of composition

> **Layout owns the gap between children. Children own their internal spacing.**

This is the "margin is the parent's job" principle, and it maps directly to `gap`
on the layout component. If patterns start setting their own `margin-top` or
`margin-bottom`, the contract is broken and composition becomes unpredictable.

The one exception: components that genuinely own their outer breathing room
(Divider, SectionSeparator). These should use the `spaceYMap` from the shared
vocabulary — never freehand Tailwind margin classes.

## Files to watch with high vigilance

In priority order, these are the files where spatial drift causes the most damage:

1. **The `_scale.ts` vocabulary file** — every layout component depends on it.
   Adding a tier to one component without adding it here breaks the contract.
2. **Layout component files** — Stack, Container, Cluster, Grid. These define
   the spatial contracts everything else assumes.
3. **CVA variant definitions with size variants** — Button size="sm"|"md"|"lg"
   makes implicit claims about space. Must be coherent with the gap tiers.
4. **Root layout files** — app/layout.tsx in each app. Inconsistency here means
   apps feel like different products.
5. **Barrel exports** — packages/ui/index.ts. If an internal layout helper leaks,
   someone will depend on it.

## Anti-patterns

- **Gap freestyle**: using `gap-3`, `gap-5`, `gap-7` (values outside the scale)
  instead of the semantic tokens. The scale exists to prevent this.
- **Margin on children**: a Card setting `mb-6` to space itself from siblings.
  The parent Stack's `gap` should handle this.
- **Conflating section spacing with component padding**: a hero section using
  `p-8` (component-level) instead of `py-24` (section-level). These are
  different tiers for a reason.
- **Container-only query wrapping**: building Container as just a container-query
  context without max-width or padding logic.
- **Recursive Stack for non-prose**: the lobotomized owl selector reaches into
  nested components and fights their gap values. Only use for prose/article content.
