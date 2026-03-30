import Link from "next/link"
import { Container, Stack, Cluster, Grid } from "@repo/ui/layouts"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Badge,
  Separator,
} from "@repo/ui/primitives"
import { PageHeader, SectionHeader } from "@repo/ui/patterns"

// ── Layout index data ──

const layouts = [
  { href: "/layouts/stack", title: "Stack", description: "Vertical flow with consistent spacing", tier: "foundational" },
  { href: "/layouts/cluster", title: "Cluster", description: "Horizontal wrapping groups", tier: "foundational" },
  { href: "/layouts/grid", title: "Grid", description: "Multi-column grid arrangements", tier: "foundational" },
  { href: "/layouts/center", title: "Center", description: "Centered content with max-width", tier: "foundational" },
  { href: "/layouts/container", title: "Container", description: "Width constraint + padding + container queries", tier: "foundational" },
  { href: "/layouts/split", title: "Split", description: "Two-column ratio layouts", tier: "structural" },
  { href: "/layouts/cover", title: "Cover", description: "Full-height with centered principal", tier: "structural" },
  { href: "/layouts/box", title: "Box", description: "Consistent padding with optional border", tier: "structural" },
  { href: "/layouts/switcher", title: "Switcher", description: "Horizontal to vertical based on container width", tier: "specialized" },
  { href: "/layouts/frame", title: "Frame", description: "Aspect-ratio container that crops content", tier: "specialized" },
  { href: "/layouts/reel", title: "Reel", description: "Horizontal scrolling strip with snap", tier: "specialized" },
  { href: "/layouts/imposter", title: "Imposter", description: "Positioned overlay with 7 placements", tier: "specialized" },
  { href: "/layouts/icon", title: "Icon", description: "Inline icon+text alignment at font size", tier: "specialized" },
]

const tierColors: Record<string, "default" | "secondary" | "outline"> = {
  foundational: "default",
  structural: "secondary",
  specialized: "outline",
}

// ── Scale visualization data ──

const gapScale = [
  { token: "none", tw: "gap-0", px: "0px", tier: "—" },
  { token: "xs", tw: "gap-1", px: "4px", tier: "tight" },
  { token: "sm", tw: "gap-2", px: "8px", tier: "tight" },
  { token: "md", tw: "gap-4", px: "16px", tier: "normal" },
  { token: "lg", tw: "gap-6", px: "24px", tier: "normal" },
  { token: "xl", tw: "gap-8", px: "32px", tier: "loose" },
  { token: "2xl", tw: "gap-12", px: "48px", tier: "loose" },
  { token: "3xl", tw: "gap-16", px: "64px", tier: "loose" },
]

const containerWidths = [
  { token: "xs", tw: "max-w-xl", px: "576px", use: "auth, narrow forms" },
  { token: "sm", tw: "max-w-2xl", px: "672px", use: "single-column" },
  { token: "md", tw: "max-w-4xl", px: "896px", use: "docs, articles" },
  { token: "lg", tw: "max-w-6xl", px: "1152px", use: "standard page" },
  { token: "xl", tw: "max-w-7xl", px: "1280px", use: "wide dashboards" },
  { token: "2xl", tw: "max-w-screen-2xl", px: "1536px", use: "full-bleed inner" },
  { token: "full", tw: "max-w-none", px: "none", use: "no constraint" },
]

const sectionSpacing = [
  { token: "sm", tw: "py-8", px: "32px", use: "compact sections" },
  { token: "md", tw: "py-16", px: "64px", use: "standard rhythm" },
  { token: "lg", tw: "py-24", px: "96px", use: "generous breathing" },
  { token: "xl", tw: "py-32", px: "128px", use: "hero prominence" },
]

// ── Page ──

export default function LayoutsIndex() {
  return (
    <Container width="lg">
      <Stack gap="xl">
        <PageHeader
          title="Layout Primitives"
          description="13 composable primitives based on Every Layout. They control where things go — spacing, alignment, distribution. No colors, borders, or typography."
        />

        {/* ━━━ SCALE REFERENCE ━━━ */}
        <Stack gap="lg">
          <SectionHeader
            title="_scale.ts"
            description="Shared spatial tokens consumed by all layout primitives. One file, every spacing decision."
          />

          <Grid columns={3} gap="lg">
            {/* Gap scale */}
            <Card>
              <CardHeader>
                <CardTitle>Gap Scale</CardTitle>
                <CardDescription>flex/grid gap between children</CardDescription>
              </CardHeader>
              <CardContent>
                <Stack gap="xs">
                  {gapScale.map((g) => (
                    <Cluster key={g.token} justify="between" gap="sm">
                      <Cluster gap="xs" wrap={false}>
                        <Badge variant="outline" className="font-mono text-[10px] w-10 justify-center">
                          {g.token}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{g.tw}</span>
                      </Cluster>
                      <Cluster gap="xs" wrap={false}>
                        <span className="text-[10px] text-muted-foreground">{g.tier}</span>
                        <span className="font-mono text-[10px] text-primary/50">{g.px}</span>
                      </Cluster>
                    </Cluster>
                  ))}
                </Stack>
              </CardContent>
            </Card>

            {/* Container widths */}
            <Card>
              <CardHeader>
                <CardTitle>Container Widths</CardTitle>
                <CardDescription>max-width constraints for page regions</CardDescription>
              </CardHeader>
              <CardContent>
                <Stack gap="xs">
                  {containerWidths.map((w) => (
                    <Cluster key={w.token} justify="between" gap="sm">
                      <Cluster gap="xs" wrap={false}>
                        <Badge variant="outline" className="font-mono text-[10px] w-10 justify-center">
                          {w.token}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{w.use}</span>
                      </Cluster>
                      <span className="font-mono text-[10px] text-primary/50">{w.px}</span>
                    </Cluster>
                  ))}
                </Stack>
              </CardContent>
            </Card>

            {/* Section spacing */}
            <Card>
              <CardHeader>
                <CardTitle>Section Spacing</CardTitle>
                <CardDescription>vertical rhythm between page regions</CardDescription>
              </CardHeader>
              <CardContent>
                <Stack gap="sm">
                  {sectionSpacing.map((s) => (
                    <Cluster key={s.token} justify="between" gap="sm">
                      <Cluster gap="xs" wrap={false}>
                        <Badge variant="outline" className="font-mono text-[10px] w-10 justify-center">
                          {s.token}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{s.use}</span>
                      </Cluster>
                      <Cluster gap="xs" wrap={false}>
                        <span className="text-xs text-muted-foreground">{s.tw}</span>
                        <span className="font-mono text-[10px] text-primary/50">{s.px}</span>
                      </Cluster>
                    </Cluster>
                  ))}
                  <Separator className="my-1" />
                  <Stack gap="xs">
                    <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                      Also in _scale.ts
                    </span>
                    <Cluster gap="xs">
                      <Badge variant="secondary" className="text-[10px]">Padding</Badge>
                      <Badge variant="secondary" className="text-[10px]">PaddingX/Y</Badge>
                      <Badge variant="secondary" className="text-[10px]">Space (margin)</Badge>
                      <Badge variant="secondary" className="text-[10px]">Measure</Badge>
                      <Badge variant="secondary" className="text-[10px]">GridMin</Badge>
                    </Cluster>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Stack>

        {/* ━━━ TIER MODEL ━━━ */}
        <Stack gap="lg">
          <SectionHeader
            title="Tier Model"
            description="Three tiers of spacing intent — tight, normal, loose — map to component distance, pattern distance, and section distance."
          />

          <Grid columns={3} gap="lg">
            <Card className="border-primary/20">
              <CardHeader>
                <Cluster gap="sm" justify="between">
                  <CardTitle>Tight</CardTitle>
                  <Badge className="text-[10px]">xs — sm</Badge>
                </Cluster>
                <CardDescription>Within composites: icon to label, input to helper text</CardDescription>
              </CardHeader>
              <CardContent>
                <Stack gap="xs">
                  <div className="flex h-6 items-center rounded bg-primary/10 px-3">
                    <span className="text-[10px] text-primary/60">gap-1 (4px)</span>
                  </div>
                  <div className="flex h-6 items-center rounded bg-primary/10 px-3">
                    <span className="text-[10px] text-primary/60">gap-2 (8px)</span>
                  </div>
                </Stack>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Cluster gap="sm" justify="between">
                  <CardTitle>Normal</CardTitle>
                  <Badge className="text-[10px]">md — lg</Badge>
                </Cluster>
                <CardDescription>Between composites in a pattern: cards in a grid, form fields</CardDescription>
              </CardHeader>
              <CardContent>
                <Stack gap="md">
                  <div className="flex h-6 items-center rounded bg-primary/10 px-3">
                    <span className="text-[10px] text-primary/60">gap-4 (16px)</span>
                  </div>
                  <div className="flex h-6 items-center rounded bg-primary/10 px-3">
                    <span className="text-[10px] text-primary/60">gap-6 (24px)</span>
                  </div>
                </Stack>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Cluster gap="sm" justify="between">
                  <CardTitle>Loose</CardTitle>
                  <Badge className="text-[10px]">xl — 3xl</Badge>
                </Cluster>
                <CardDescription>Between patterns/sections in a page layout</CardDescription>
              </CardHeader>
              <CardContent>
                <Stack gap="xl">
                  <div className="flex h-6 items-center rounded bg-primary/10 px-3">
                    <span className="text-[10px] text-primary/60">gap-8 (32px)</span>
                  </div>
                  <div className="flex h-6 items-center rounded bg-primary/10 px-3">
                    <span className="text-[10px] text-primary/60">gap-12 / gap-16</span>
                  </div>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Stack>

        <Separator />

        {/* ━━━ LAYOUT INDEX ━━━ */}
        <Stack gap="lg">
          <SectionHeader
            title="All 13 Primitives"
            description="Grouped by usage frequency — foundational (nearly every page), structural (common patterns), specialized (specific use cases)."
          />

          {(["foundational", "structural", "specialized"] as const).map((tier) => {
            const items = layouts.filter((l) => l.tier === tier)
            return (
              <Stack key={tier} gap="sm">
                <Cluster gap="sm" align="baseline">
                  <Badge variant={tierColors[tier]} className="capitalize text-xs">
                    {tier}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {items.length} primitive{items.length !== 1 && "s"}
                  </span>
                </Cluster>
                <Grid columns="auto-fit" min="15rem" gap="md">
                  {items.map((l) => (
                    <Link key={l.href} href={l.href} className="no-underline">
                      <Card className="h-full hover:border-foreground/30 transition-colors">
                        <CardHeader>
                          <CardTitle>{l.title}</CardTitle>
                          <CardDescription>{l.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    </Link>
                  ))}
                </Grid>
              </Stack>
            )
          })}
        </Stack>
      </Stack>
    </Container>
  )
}
