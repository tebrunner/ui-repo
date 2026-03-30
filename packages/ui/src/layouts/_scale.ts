/**
 * _scale.ts — Spatial vocabulary for all layout primitives.
 *
 * This is the single source of truth for every spacing decision
 * in the design system. Treat changes here like schema migrations:
 * every layout component depends on these types and maps.
 *
 * ┌─────────────────────────────────────────────────────────┐
 * │  TIER MODEL                                             │
 * │                                                         │
 * │  tight  (xs–sm)  → within composites (icon↔label)       │
 * │  normal (md–lg)  → between composites in a pattern      │
 * │  loose  (xl–3xl) → between patterns/sections in layout  │
 * └─────────────────────────────────────────────────────────┘
 *
 * Adding a new step? Update the union type, ALL maps that
 * reference it, and leave a note in the changelog below.
 *
 * Changelog:
 *   2026-03-29 — initial: gap, padding, margin, width, measure, section
 *   2026-03-30 — add CenterMax (fine-grained max-width for Center), GUTTER constant
 */

// ─────────────────────────────────────────────
// GAP — flex/grid gap between children
// ─────────────────────────────────────────────

export type Gap = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"

export const gapMap: Record<Gap, string> = {
  none: "gap-0",
  xs:   "gap-1",    // 4px  — tight
  sm:   "gap-2",    // 8px  — tight
  md:   "gap-4",    // 16px — normal
  lg:   "gap-6",    // 24px — normal
  xl:   "gap-8",    // 32px — loose
  "2xl":"gap-12",   // 48px — loose
  "3xl":"gap-16",   // 64px — loose (section-level)
}

// ─────────────────────────────────────────────
// PADDING — internal spacing (Container, Card, Section)
// ─────────────────────────────────────────────

export type Padding = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"

export const paddingMap: Record<Padding, string> = {
  none: "p-0",
  xs:   "p-1",
  sm:   "p-2",
  md:   "p-4",
  lg:   "p-6",
  xl:   "p-8",
  "2xl":"p-12",
}

/** Axis-specific padding for asymmetric layouts (e.g. Container with px but no py) */
export const paddingXMap: Record<Padding, string> = {
  none: "px-0",
  xs:   "px-1",
  sm:   "px-2",
  md:   "px-4",
  lg:   "px-6",
  xl:   "px-8",
  "2xl":"px-12",
}

export const paddingYMap: Record<Padding, string> = {
  none: "py-0",
  xs:   "py-1",
  sm:   "py-2",
  md:   "py-4",
  lg:   "py-6",
  xl:   "py-8",
  "2xl":"py-12",
}

// ─────────────────────────────────────────────
// SPACE — external spacing / margin
//
// Use sparingly. Prefer parent `gap` over child `margin`.
// This exists for the cases where a component genuinely
// needs to declare its own outer spacing (e.g. a Divider
// that always wants breathing room, or section-level
// vertical rhythm in a template).
// ─────────────────────────────────────────────

export type Space = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"

/** Vertical (block-axis) margin — the most common external spacing need */
export const spaceYMap: Record<Space, string> = {
  none: "my-0",
  xs:   "my-1",
  sm:   "my-2",
  md:   "my-4",
  lg:   "my-6",
  xl:   "my-8",
  "2xl":"my-12",
  "3xl":"my-16",
}

// ─────────────────────────────────────────────
// CONTAINER WIDTHS — max-width constraints
//
// These define how wide content can get. Used by
// Container/Wrapper to enforce consistent widths
// across all three apps.
// ─────────────────────────────────────────────

export type ContainerWidth = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full"

export const containerWidthMap: Record<ContainerWidth, string> = {
  xs:   "max-w-xl",     // 576px  — narrow forms, auth pages
  sm:   "max-w-2xl",    // 672px  — single-column content
  md:   "max-w-4xl",    // 896px  — docs, articles
  lg:   "max-w-6xl",    // 1152px — standard page content
  xl:   "max-w-7xl",    // 1280px — wide dashboards
  "2xl":"max-w-screen-2xl", // 1536px — full bleed sections
  full: "max-w-none",   // no constraint
}

// ─────────────────────────────────────────────
// CENTER MAX-WIDTH — fine-grained max-width for Center
//
// Different from ContainerWidth: this uses Tailwind's raw
// max-w-* values for precise width control at any level
// (components, text blocks, marketing sections).
// ContainerWidth is a semantic page-level scale with
// fewer, larger steps.
//
// Both scales live here so drift between them is visible.
// ─────────────────────────────────────────────

export type CenterMax =
  | "xs" | "sm" | "md" | "lg" | "xl"
  | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl"
  | "prose" | "full"

export const centerMaxMap: Record<CenterMax, string> = {
  xs:    "max-w-xs",       // 320px
  sm:    "max-w-sm",       // 384px
  md:    "max-w-md",       // 448px
  lg:    "max-w-lg",       // 512px
  xl:    "max-w-xl",       // 576px
  "2xl": "max-w-2xl",     // 672px
  "3xl": "max-w-3xl",     // 768px
  "4xl": "max-w-4xl",     // 896px
  "5xl": "max-w-5xl",     // 1024px
  "6xl": "max-w-6xl",     // 1152px
  "7xl": "max-w-7xl",     // 1280px
  prose: "max-w-prose",    // ~65ch
  full:  "max-w-full",     // 100%
}

// ─────────────────────────────────────────────
// CONTENT MEASURE — max-width for readable text
//
// Distinct from container width. This governs how
// wide a block of prose/text can get before it
// becomes hard to read (~45-75 characters ideal).
// ─────────────────────────────────────────────

export type Measure = "narrow" | "prose" | "wide"

export const measureMap: Record<Measure, string> = {
  narrow: "max-w-[45ch]",  // short-form: captions, card descriptions
  prose:  "max-w-prose",   // ~65ch — articles, docs, long-form
  wide:   "max-w-[85ch]",  // code blocks, tables, wider reading contexts
}

// ─────────────────────────────────────────────
// SECTION SPACING — vertical rhythm between
// major page regions (hero → features → CTA)
//
// Larger than gap. These are for template-level
// composition where you're stacking full sections.
// ─────────────────────────────────────────────

export type SectionSpacing = "sm" | "md" | "lg" | "xl"

export const sectionSpacingMap: Record<SectionSpacing, string> = {
  sm:  "py-8",      // 32px  — compact sections
  md:  "py-16",     // 64px  — standard section rhythm
  lg:  "py-24",     // 96px  — generous breathing room
  xl:  "py-32",     // 128px — hero-level prominence
}

// ─────────────────────────────────────────────
// AUTO-GRID MINIMUMS — constrained min-width
// values for auto-fill / auto-fit grids
// ─────────────────────────────────────────────

export type GridMin = "12rem" | "15rem" | "20rem" | "25rem" | "30rem"

/**
 * Used directly in CSS `repeat(auto-fill, minmax(value, 1fr))`.
 * The type itself is the constraint — no map needed since the
 * values are passed through as-is. Exists as a type to prevent
 * arbitrary strings from leaking into grid templates.
 */
export const gridMinValues: readonly GridMin[] = [
  "12rem",
  "15rem",
  "20rem",
  "25rem",
  "30rem",
] as const

// ─────────────────────────────────────────────
// GUTTER — responsive horizontal padding for
// viewport-edge breathing room
//
// Used by Center's `gutter` prop. Defined here
// so the value is part of the spatial vocabulary,
// not hardcoded in a component.
// ─────────────────────────────────────────────

export const GUTTER = "px-4 sm:px-6"

// ─────────────────────────────────────────────
// HELPERS — composition utilities
// ─────────────────────────────────────────────

/**
 * Resolve a semantic gap to its Tailwind class.
 * Useful in CVA compound variants or other contexts
 * where you're building class strings programmatically.
 *
 * @example
 *   const styles = cva({
 *     variants: {
 *       spacing: Object.fromEntries(
 *         Object.entries(gapMap).map(([k, v]) => [k, v])
 *       ),
 *     },
 *   })
 */
export function resolveGap(gap: Gap): string {
  return gapMap[gap]
}

export function resolvePadding(
  padding: Padding,
  axis?: "x" | "y"
): string {
  if (axis === "x") return paddingXMap[padding]
  if (axis === "y") return paddingYMap[padding]
  return paddingMap[padding]
}