# ui-repo

A layered design system and component library built with React 19, Tailwind CSS v4, and shadcn/ui — organized so every component has exactly one place to live.

```
pnpm install && pnpm dev
```

## Why layers?

Most UI codebases end up as a flat folder of 80+ components with no clear hierarchy. A `<Button>` sits next to a `<DataTable>` sits next to a full page shell. When everything is at the same level, it's hard to know what to reach for, what depends on what, and where new code should go.

This repo solves that with **eight layers**, from lowest to highest abstraction:

```
lib/           Pure utilities — cn(), slot types
  ↑
hooks/         Shared React hooks — useIsMobile
  ↑
layouts/       Where things go — spacing, alignment, distribution
  ↑
primitives/    What things look like — Button, Input, Card (55 components)
  ↑
composites/    Interactive widgets with state — Logo, ThemeProvider
  ↑
blocks/        Domain sections — PortalNav, MarketingNav, AppSidebar, DataTable, SiteHeader
  ↑
patterns/      Recurring recipes — PageHeader, EmptyState, Skeleton
  ↑
templates/     Full page shells — App, Auth, Data, Marketing, Dashboard, LinkInBio
```

**Each layer may only import from layers below it.** No exceptions. This keeps the dependency graph clean and every piece independently composable.

## Monorepo structure

```
apps/
  web/                 Next.js 16 (App Router) — demo app & playground
packages/
  ui/                  @repo/ui — the component library
  typescript-config/   Shared tsconfig presets
  eslint-config/       Shared ESLint rules
```

Managed by [Turborepo](https://turbo.build/) + [pnpm workspaces](https://pnpm.io/workspaces). `@repo/ui` has no build step — Next.js transpiles it directly.

## Quick start

```bash
# Prerequisites: Node.js 18+, pnpm 10+
pnpm install
pnpm dev          # Starts everything — web app at http://localhost:3000
```

## Commands

| Command | What it does |
|---|---|
| `pnpm dev` | Start all workspaces in dev mode |
| `pnpm build` | Build everything (respects dependency order) |
| `pnpm lint` | Lint all packages |
| `pnpm typecheck` | Type-check all packages |
| `pnpm --filter web dev` | Next.js dev server only |
| `pnpm --filter @repo/ui typecheck` | Type-check UI package only |

## Using the components

Import from the layer, not the barrel:

```tsx
import { Stack, Grid, Split } from "@repo/ui/layouts"
import { Button, Card, Input } from "@repo/ui/primitives"
import { Logo, ThemeProvider } from "@repo/ui/composites"
import { PortalNav, AppSidebar, DataTable, MarketingNav } from "@repo/ui/blocks"
import { PageHeader, EmptyState } from "@repo/ui/patterns"
import { AppTemplate } from "@repo/ui/templates"
```

Compose them top-down — pick a template, fill slots with patterns and composites, arrange with layouts:

```tsx
<AppTemplate
  nav={<AppSidebar />}
  header={<PageHeader title="Users" actions={<Button>Add User</Button>} />}
  content={
    <Stack gap="lg">
      <Grid columns="auto-fit" gap="md">
        <Card>...</Card>
        <Card>...</Card>
      </Grid>
      <DataTable columns={columns} data={data} />
    </Stack>
  }
/>
```

## The layout system

13 composable layout primitives based on [Every Layout](https://every-layout.dev/) by Pickering & Bell. They control **where things go** — no colors, borders, or typography.

| Layout | Purpose | Example use |
|---|---|---|
| **Stack** | Vertical flow with gap | Page sections, form fields, card content |
| **Cluster** | Horizontal flow, wraps | Tag lists, button groups, toolbars |
| **Split** | Two-column with wrapping | Sidebar + content, 50/50 splits |
| **Grid** | Multi-column repeating grid | Card grids, dashboards, galleries |
| **Center** | Horizontal centering + max-width | Page containers, article bodies |
| **Cover** | Vertical centering, full height | Login pages, hero sections, error pages |
| **Box** | Padding + optional border | Cards, panels, notification areas |
| **Switcher** | Horizontal↔vertical by container width | Pricing cards, feature comparisons |
| **Frame** | Aspect-ratio container | Images, videos, thumbnails |
| **Reel** | Horizontal scrolling strip | Carousels, tag strips, galleries |
| **Imposter** | Positioned overlay | FABs, notification badges, modals |
| **Icon** | Inline icon+text alignment | Icon buttons, labeled indicators |
| **Container** | CSS container-query context | Responsive cards, adaptive panels |

```tsx
<Split ratio="sidebar" gap="md">
  <nav>Sidebar</nav>
  <Stack gap="lg">
    <Center max="prose">
      <article>Centered content</article>
    </Center>
    <Grid columns="auto-fit" gap="md">
      <Card /><Card /><Card />
    </Grid>
  </Stack>
</Split>
```

## Styling

- **Tailwind CSS v4** — no config file, design tokens are CSS custom properties in oklch color space
- **Token architecture** — canonical tokens live in `packages/ui/src/styles/tokens.css` (no Tailwind import, safe for consuming apps to `@import`). The package also exports `globals.css` (includes `@import "tailwindcss"`) for standalone use.
- **Consuming app pattern** — `@import "tailwindcss"` locally, then `@import "@repo/ui/styles/tokens.css"` to pull in all design tokens, theme mappings, and base layer rules
- **shadcn/ui** new-york style with neutral base color
- **`cn()`** everywhere — `clsx` + `tailwind-merge` so `className` overrides always win
- **Dark mode** via `.dark` class with CSS variable swaps (oklch values)

Color tokens map directly to Tailwind utilities:

| Token | Class | Purpose |
|---|---|---|
| `--color-background` | `bg-background` | Page backgrounds |
| `--color-foreground` | `text-foreground` | Primary text |
| `--color-primary` | `bg-primary` | Brand / interactive elements |
| `--color-secondary` | `bg-secondary` | Supporting backgrounds |
| `--color-muted` | `bg-muted` | Subtle backgrounds |
| `--color-muted-foreground` | `text-muted-foreground` | Secondary text |
| `--color-accent` | `bg-accent` | Highlighted elements |
| `--color-destructive` | `bg-destructive` | Danger actions |
| `--color-border` | Via CSS reset | All borders |
| `--color-sidebar-*` | `bg-sidebar` etc. | Sidebar-specific tokens |
| `--color-chart-1`–`5` | `text-chart-1` etc. | Chart color scale |

## Adding a shadcn component

```bash
cd packages/ui && npx shadcn@latest add <component-name>
```

The CLI drops files into `src/primitives/` (mapped via `components.json`). After adding, **export the component from `src/primitives/index.ts`** — the CLI doesn't do this automatically.

## Demo routes

The web app at `apps/web/` showcases every layer. Section pages (`/layouts`, `/patterns`, `/templates`) each have their own `layout.tsx` with a `PortalNav` for navigation between demos.

| Route | Shows |
|---|---|
| `/` | Link-in-bio landing page (LinkInBioTemplate) |
| `/dashboard` | Full dashboard demo (AppSidebar, DataTable, SectionCards, Charts) |
| `/layouts/*` | All 13 layout primitives (stack, cluster, split, grid, center, cover, box, switcher, frame, reel, imposter, icon, container) |
| `/patterns/*` | page-header, empty-state, section-header, form-section |
| `/templates/*` | app, auth, dashboard, data, link-in-bio, marketing |

## Figma integration

The design system connects to Figma via [Code Connect](https://github.com/figma/code-connect). Each layer has a `.figma/` directory with mapping files that link Figma component variants to code props.

```bash
# Publish mappings (requires Figma Org/Enterprise plan)
npx figma connect publish
```

Config: `packages/ui/figma.config.json`

## Tech stack

| | |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **UI Library** | React 19 |
| **Styling** | Tailwind CSS v4 |
| **Components** | shadcn/ui (new-york) + Radix UI |
| **Icons** | Lucide React |
| **Charts** | Recharts |
| **Tables** | TanStack Table |
| **Forms** | React Hook Form + Zod |
| **Drag & Drop** | dnd-kit |
| **Monorepo** | Turborepo + pnpm workspaces |
| **TypeScript** | Strict mode, ES2022 target |

## License

Private.
