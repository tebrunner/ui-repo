# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Prerequisites: Node.js 18+, pnpm 10+

```bash
pnpm dev              # Start all apps/packages in dev mode (Turbo)
pnpm build            # Build everything (Turbo, respects dependency order)
pnpm lint             # Lint all packages
pnpm typecheck        # Type-check all packages

# Scoped to a single workspace
pnpm --filter web dev              # Next.js dev server only
pnpm --filter @repo/ui typecheck   # Type-check UI package only

# Add a shadcn component (run from packages/ui/)
cd packages/ui && npx shadcn@latest add <component-name>
```

There is no test framework configured.

## Architecture

Turborepo monorepo: `apps/web` (Next.js 16, App Router) consumes `packages/ui` (framework-agnostic React component library). `packages/ui` has no build step — Next.js transpiles it directly via `transpilePackages`. Shared configs live in `packages/eslint-config` and `packages/typescript-config`.

Dependency versions are pinned in the `catalog:` section of `pnpm-workspace.yaml`. When adding or updating shared dependencies (React, Next.js, TypeScript, Tailwind, etc.), update the catalog — not individual `package.json` files.

### UI Package Layer Hierarchy

```
lib/           Pure utilities (cn, slot) — no UI
  ↑
hooks/         Shared hooks (useIsMobile)
  ↑
layouts/       Structural primitives — spacing, alignment, distribution
  ↑
primitives/    Atomic visual components — shadcn/ui (Button, Input, Card, etc.)
  ↑
composites/    Multi-primitive widgets with internal state (Logo, ThemeProvider)
  ↑
blocks/        Domain-specific assembled sections (PortalNav, MarketingNav, MarketingFooter, NewsletterForm, SiteHeader, AppSidebar, DataTable, SectionCards)
  ↑
patterns/      Stateless UI recipes (PageHeader, EmptyState, SectionHeader, FormSection)
  ↑
templates/     Full page shells with named slots (AppTemplate, AuthTemplate, DataTemplate, MarketingTemplate, DashboardTemplate, LinkInBioTemplate)
```

**Each layer may only import from layers below it.** Internal cross-layer imports use relative paths.

### Layout Primitives

13 composable primitives based on [Every Layout](https://every-layout.dev/) by Pickering & Bell. They control **where things go** — spacing, alignment, distribution. No colors, borders, or typography.

**Foundational (used on nearly every page):**
- **Stack** — vertical flow with gap. `recursive` prop applies spacing to all descendants (for prose/CMS content).
- **Center** — horizontal centering + max-width + gutter. `intrinsic` prop centers content-width elements.
- **Cluster** — horizontal wrapping flow (tags, buttons, breadcrumbs).
- **Grid** — multi-column grid. `auto-fill`/`auto-fit` with configurable `min` column width.

**Structural (common patterns):**
- **Split** — two-column layout using the Every Layout Sidebar pattern (flexbox wrapping). Columns stack when the container is too narrow. `sideWidth`/`contentMin` for custom thresholds.
- **Cover** — vertical centering between header/footer. Only vertically centers — compose with Center for horizontal.
- **Box** — consistent padding + optional border. The fundamental "apply spacing" primitive.

**Specialized:**
- **Switcher** — horizontal↔vertical based on container width (flexbox calc trick). Needs `SwitcherItem` children.
- **Frame** — aspect-ratio container that crops content to fit.
- **Reel** — horizontal scrolling strip with optional snap and hidden scrollbar.
- **Imposter** — positioned overlay (7 placements). For floating actions, badges, corner-anchored UI.
- **Icon** — inline icon+text alignment that scales with font size.
- **Container** — CSS container-query context wrapper. Children use `@md:` variants.

**Shared scale:** All layouts share a `Gap` type and `gapMap` from `layouts/_scale.ts` — `none | xs | sm | md | lg | xl | 2xl`.

### Layouts vs Templates

Layouts control **where things go**. Templates (`AppTemplate`, `AuthTemplate`, `DataTemplate`, `MarketingTemplate`, `DashboardTemplate`, `LinkInBioTemplate`) are **full page shells** with named slots (`nav`, `header`, `content`, `footer`). They compose layouts internally.

Next.js `layout.tsx` files in `apps/web/` are a **routing concern** — they use templates but are not stored in `packages/ui/`.

### Primitives vs Composites

Primitives are single-element atoms (Button, Input, Badge). Composites combine multiple primitives into interactive widgets with their own state (Logo, ThemeProvider). Both come from shadcn/ui; the distinction is about complexity, not origin.

### CSS / Design Token Architecture

- **Tailwind CSS v4** — no `tailwind.config.js`
- **Canonical tokens** live in `packages/ui/src/styles/tokens.css` — oklch colors, shadows, radii, fonts for both `:root` and `.dark`, plus `@theme inline` mappings and `@layer base` rules. This file does NOT contain `@import "tailwindcss"` so consuming apps can import it.
- **`packages/ui/src/styles/globals.css`** — the package's own stylesheet (`@import "tailwindcss"` + same tokens). Used when the package runs standalone.
- **Consuming app pattern** (`apps/web/app/globals.css`):
  ```css
  @import "tailwindcss";
  @import "@repo/ui/styles/tokens.css";
  @source "../../../packages/ui/src/**/*.{ts,tsx}";
  ```
  The app owns `@import "tailwindcss"` and pulls tokens from the package. The `@source` directive tells Tailwind to scan the UI package for class usage.
- **Package exports** for CSS: `@repo/ui/styles/globals.css` and `@repo/ui/styles/tokens.css`
- **shadcn/ui** new-york style, configured in `packages/ui/components.json`
- **`cn()`** (`clsx` + `tailwind-merge`) for all class merging — every component accepts `className`
- Color tokens: `background`, `foreground`, `primary`, `secondary`, `muted`, `accent`, `destructive`, `border`, `input`, `ring`, `chart-1`–`chart-5`, plus `sidebar-*` variants — all with dark mode overrides
- Use layout components for page structure instead of inlining `flex`/`grid` utilities

### Import Paths

```tsx
import { cn } from "@repo/ui"
import { Stack, Grid } from "@repo/ui/layouts"
import { Button } from "@repo/ui/primitives"
import { Logo, ThemeProvider } from "@repo/ui/composites"
import { PortalNav, MarketingNav, AppSidebar, DataTable, NewsletterForm } from "@repo/ui/blocks"
import { PageHeader, SectionHeader, FormSection } from "@repo/ui/patterns"
import { AppTemplate } from "@repo/ui/templates"
```

Per-layer imports are preferred over the barrel `@repo/ui` import. Exports must be added to each layer's `index.ts` — shadcn CLI drops files into `src/primitives/` but does not update the barrel.

### shadcn CLI Alias Mapping

`packages/ui/components.json` maps shadcn's default paths to the project structure:

| shadcn alias   | Mapped to          |
|----------------|--------------------|
| `ui`           | `src/primitives`   |
| `components`   | `src/composites`   |
| `blocks`       | `src/blocks`       |
| `lib`          | `src/lib`          |
| `hooks`        | `src/hooks`        |

After `npx shadcn@latest add`, verify the file landed in the correct layer and update that layer's `index.ts`.

### Import Conventions Within `packages/ui/`

- Same-layer imports: use `./` relative paths (e.g., `import { Button } from "./button"` inside primitives)
- Cross-layer imports: use `../` relative paths (e.g., `import { cn } from "../lib/cn"`)
- **Never** use absolute `src/primitives/...` paths or `../primitives/...` self-references — always `./` for same-directory

### Key Libraries

Charts: Recharts. Tables: TanStack Table. Forms: React Hook Form + Zod. Drag & drop: dnd-kit. Headless UI: Radix UI (via `radix-ui` unified package) + Base UI (`@base-ui/react`). Icons: Lucide React + Tabler Icons (`@tabler/icons-react`). Date handling: date-fns + react-day-picker. Carousel: Embla Carousel.

### Figma Integration

The design system has Figma Code Connect files in `.figma/` directories within each layer. These map Figma component variants to code props.

- Config: `packages/ui/figma.config.json`
- Dependency: `@figma/code-connect` (devDependency on `@repo/ui`)
- Figma file: `ZIDu0vPHrPmPywhIAzXegB` — pages for Layouts, Primitives, Composites, Blocks, Patterns, Templates
- Publish (requires Org/Enterprise plan): `npx figma connect publish`

### Demo App Routes

`apps/web/` has demo/showcase pages:

- **`(home)`** — root landing page only (`/`)
- **`(pages)`** — standalone full-page demos: `/dashboard`, `/comic`, `/scratch`, `/test`
- **`layouts/`**, **`patterns/`**, **`templates/`** — top-level route segments, each with its own `layout.tsx` using `PortalNav` for section navigation

Key routes:
- `/` — Link-in-bio landing page (LinkInBioTemplate)
- `/dashboard` — Full dashboard demo (DashboardTemplate + AppSidebar, DataTable, SectionCards, ChartAreaInteractive)
- `/layouts/*` — all 13 layout primitives (stack, cluster, split, grid, center, cover, box, switcher, frame, reel, imposter, icon, container)
- `/patterns/*` — page-header, empty-state, section-header, form-section
- `/templates/*` — app, auth, dashboard, data, link-in-bio, marketing

### Client Wrapper Pattern

`packages/ui` components are framework-agnostic (plain `<a>` tags, no Next.js imports). When a UI component needs Next.js hooks (e.g., `usePathname` for active link state), create a `"use client"` wrapper in `apps/web/components/`:

```tsx
"use client"
import { usePathname } from "next/navigation"
import { PortalNav, type PortalNavProps } from "@repo/ui/blocks"

type Props = Omit<PortalNavProps, "pathname">

export function PortalNavWrapper(props: Props) {
  const pathname = usePathname()
  return <PortalNav {...props} pathname={pathname} />
}
```

Existing wrappers: `MarketingNavWrapper`, `PortalNavWrapper`. Import with alias to keep consuming code clean: `import { PortalNavWrapper as PortalNav } from "../../components/portal-nav-wrapper"`.

### Figma-to-Code Rules

1. Pick a **template** for the page shell
2. Use **layouts** to arrange sections — do not inline `flex`/`grid` for page structure
3. Use existing **primitives** before creating new ones
4. Use existing **patterns** where they match
5. Map colors to token system (`bg-background`, `text-muted-foreground`) — no raw hex values
6. Icons use **Lucide React** (`lucide-react`) — installed in both `@repo/ui` and `web`
