"use client"

import { useState } from "react"
import { Container, Stack, Cluster, Grid } from "@repo/ui/layouts"
import type { Gap, GridMin } from "@repo/ui/layouts"
import {
  Avatar,
  AvatarFallback,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Progress,
  Separator,
  Skeleton,
} from "@repo/ui/primitives"
import { SectionHeader } from "@repo/ui/patterns"
import {
  BarChart3Icon,
  UsersIcon,
  CreditCardIcon,
  ActivityIcon,
  ImageIcon,
  FileTextIcon,
  VideoIcon,
  FolderIcon,
} from "lucide-react"

// ── Scale data ──

const gapTokens: { token: Gap; tw: string; px: string; tier: string }[] = [
  { token: "none", tw: "gap-0", px: "0px", tier: "—" },
  { token: "xs", tw: "gap-1", px: "4px", tier: "tight" },
  { token: "sm", tw: "gap-2", px: "8px", tier: "tight" },
  { token: "md", tw: "gap-4", px: "16px", tier: "normal" },
  { token: "lg", tw: "gap-6", px: "24px", tier: "normal" },
  { token: "xl", tw: "gap-8", px: "32px", tier: "loose" },
  { token: "2xl", tw: "gap-12", px: "48px", tier: "loose" },
  { token: "3xl", tw: "gap-16", px: "64px", tier: "loose" },
]

const columnOptions = [1, 2, 3, 4, 5, 6] as const
const autoOptions = ["auto-fill", "auto-fit"] as const
const gridMinTokens: { token: GridMin; px: string }[] = [
  { token: "12rem", px: "192px" },
  { token: "15rem", px: "240px" },
  { token: "20rem", px: "320px" },
  { token: "25rem", px: "400px" },
  { token: "30rem", px: "480px" },
]

export default function GridDemo() {
  const [activeGap, setActiveGap] = useState<Gap>("md")
  const [activeCols, setActiveCols] = useState<1 | 2 | 3 | 4 | 5 | 6>(3)
  const [activeAuto, setActiveAuto] = useState<"auto-fill" | "auto-fit">("auto-fit")
  const [activeMin, setActiveMin] = useState<GridMin>("15rem")

  return (
    <Container width="lg">
      <Stack gap="xl">
        <Stack gap="xs">
          <h1 className="text-2xl font-bold">Grid</h1>
          <p className="text-muted-foreground max-w-prose">
            CSS grid with fixed column counts or intrinsic auto-fill/auto-fit sizing.
            Uses the shared gap scale from _scale.ts. The most common layout for
            card grids, stat rows, and uniform item arrangements.
          </p>
        </Stack>

        <Separator />

        {/* ━━━ COLUMNS (fixed) ━━━ */}
        <Stack gap="lg">
          <SectionHeader
            title="columns (fixed)"
            description="Fixed column count from 1–6 via Tailwind grid-cols-N classes. Default 3."
          />

          <Card>
            <CardHeader>
              <Cluster justify="between">
                <Cluster gap="sm">
                  {columnOptions.map((n) => (
                    <Badge
                      key={n}
                      variant={activeCols === n ? "default" : "outline"}
                      className="cursor-pointer text-[10px] font-mono w-6 justify-center"
                      onClick={() => setActiveCols(n)}
                    >
                      {n}
                    </Badge>
                  ))}
                </Cluster>
                <Badge variant="outline" className="font-mono text-[10px]">
                  columns=&#123;{activeCols}&#125;
                </Badge>
              </Cluster>
            </CardHeader>
            <CardContent>
              <div className="rounded border border-border bg-muted/30 p-4">
                <Grid columns={activeCols} gap="sm">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex h-12 items-center justify-center rounded bg-primary/10"
                    >
                      <span className="text-xs text-primary/60">{i + 1}</span>
                    </div>
                  ))}
                </Grid>
              </div>
            </CardContent>
          </Card>
        </Stack>

        {/* ━━━ GAP ━━━ */}
        <Stack gap="lg">
          <SectionHeader
            title="gap"
            description="Grid gap between cells via gapMap in _scale.ts. Default &quot;md&quot; (16px)."
          />

          <Grid columns={2} gap="lg">
            {/* Token reference */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Gap Scale</CardTitle>
                <CardDescription>All 8 tokens from _scale.ts</CardDescription>
              </CardHeader>
              <CardContent>
                <Stack gap="xs">
                  {gapTokens.map((g) => (
                    <Cluster key={g.token} justify="between" gap="sm">
                      <Cluster gap="xs" wrap={false}>
                        <Badge
                          variant={activeGap === g.token ? "default" : "outline"}
                          className="font-mono text-[10px] w-10 justify-center cursor-pointer"
                          onClick={() => setActiveGap(g.token)}
                        >
                          {g.token}
                        </Badge>
                        <code className="text-[10px] text-primary/50">{g.tw}</code>
                      </Cluster>
                      <Cluster gap="xs" wrap={false}>
                        <span className="text-[10px] text-muted-foreground">{g.tier}</span>
                        <span className="font-mono text-[10px] text-primary/40">{g.px}</span>
                      </Cluster>
                    </Cluster>
                  ))}
                </Stack>
              </CardContent>
            </Card>

            {/* Interactive preview */}
            <Card>
              <CardHeader>
                <Cluster justify="between">
                  <CardTitle className="text-base">Preview</CardTitle>
                  <Badge variant="outline" className="font-mono text-[10px]">
                    gap=&quot;{activeGap}&quot;
                  </Badge>
                </Cluster>
                <CardDescription>Click a token to change the gap</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded border border-border bg-muted/30 p-4">
                  <Grid columns={3} gap={activeGap}>
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex h-10 items-center justify-center rounded bg-primary/10"
                      >
                        <span className="text-xs text-primary/60">{i + 1}</span>
                      </div>
                    ))}
                  </Grid>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Stack>

        {/* ━━━ AUTO-FILL vs AUTO-FIT ━━━ */}
        <Stack gap="lg">
          <SectionHeader
            title="columns: auto-fill vs auto-fit"
            description="Intrinsic sizing with CSS repeat(). auto-fill creates empty tracks, auto-fit collapses them. Both use the min prop for minimum column width."
          />

          <Card>
            <CardHeader>
              <Cluster justify="between">
                <Cluster gap="sm">
                  {autoOptions.map((a) => (
                    <Badge
                      key={a}
                      variant={activeAuto === a ? "default" : "outline"}
                      className="cursor-pointer text-[10px] font-mono"
                      onClick={() => setActiveAuto(a)}
                    >
                      {a}
                    </Badge>
                  ))}
                </Cluster>
                <Badge variant="outline" className="font-mono text-[10px]">
                  columns=&quot;{activeAuto}&quot; min=&quot;{activeMin}&quot;
                </Badge>
              </Cluster>
            </CardHeader>
            <CardContent>
              <Stack gap="md">
                <div className="rounded border border-border bg-muted/30 p-4">
                  <Grid columns={activeAuto} min={activeMin} gap="md">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex h-16 items-center justify-center rounded bg-primary/10"
                      >
                        <span className="text-xs text-primary/60">Item {i + 1}</span>
                      </div>
                    ))}
                  </Grid>
                </div>
                <p className="text-xs text-muted-foreground max-w-prose">
                  With only 3 items, <code className="text-[10px]">auto-fit</code> stretches them to fill the row.{" "}
                  <code className="text-[10px]">auto-fill</code> leaves empty tracks where more items could go.
                  Resize the browser to see them wrap.
                </p>
              </Stack>
            </CardContent>
          </Card>
        </Stack>

        {/* ━━━ MIN (GridMin) ━━━ */}
        <Stack gap="lg">
          <SectionHeader
            title="min"
            description="Minimum column width for auto-fill/auto-fit grids. Constrained to GridMin tokens from _scale.ts. Default &quot;15rem&quot; (240px). Ignored when columns is a number."
          />

          <Card>
            <CardHeader>
              <Cluster gap="sm">
                {gridMinTokens.map((m) => (
                  <Badge
                    key={m.token}
                    variant={activeMin === m.token ? "default" : "outline"}
                    className="cursor-pointer text-[10px] font-mono"
                    onClick={() => setActiveMin(m.token)}
                  >
                    {m.token}
                  </Badge>
                ))}
              </Cluster>
            </CardHeader>
            <CardContent>
              <Stack gap="md">
                <Stack gap="xs">
                  {gridMinTokens.map((m) => (
                    <Cluster key={m.token} justify="between" gap="sm">
                      <Cluster gap="xs" wrap={false}>
                        <Badge
                          variant={activeMin === m.token ? "default" : "outline"}
                          className="font-mono text-[10px] w-16 justify-center"
                        >
                          {m.token}
                        </Badge>
                      </Cluster>
                      <span className="font-mono text-[10px] text-primary/40">{m.px}</span>
                    </Cluster>
                  ))}
                </Stack>
                <div className="rounded border border-border bg-muted/30 p-4">
                  <Grid columns="auto-fit" min={activeMin} gap="sm">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex h-12 items-center justify-center rounded bg-primary/10"
                      >
                        <span className="text-xs text-primary/60">{i + 1}</span>
                      </div>
                    ))}
                  </Grid>
                </div>
                <code className="text-[10px] text-muted-foreground block">
                  {'<Grid columns="auto-fit" min="' + activeMin + '" gap="sm">'}
                </code>
              </Stack>
            </CardContent>
          </Card>
        </Stack>

        <Separator />

        {/* ━━━ REAL-WORLD EXAMPLES ━━━ */}
        <Stack gap="lg">
          <SectionHeader
            title="Real-World Patterns"
            description="Grid is the go-to for uniform card arrangements. These examples show how columns, gap, and min combine for common dashboard and content patterns."
          />

          <Grid columns={2} gap="lg">
            {/* KPI stat cards */}
            <Card className="col-span-2">
              <CardHeader>
                <Cluster justify="between">
                  <CardTitle className="text-base">KPI stat row</CardTitle>
                  <Badge variant="secondary" className="text-[10px]">columns=&#123;4&#125; gap=&quot;md&quot;</Badge>
                </Cluster>
                <CardDescription>Fixed 4-column grid for dashboard metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <Grid columns={4} gap="md">
                  {[
                    { icon: BarChart3Icon, label: "Revenue", value: "$45,231", change: "+20.1%" },
                    { icon: UsersIcon, label: "Users", value: "2,350", change: "+12.5%" },
                    { icon: CreditCardIcon, label: "Sales", value: "12,234", change: "+8.2%" },
                    { icon: ActivityIcon, label: "Active now", value: "573", change: "+2.1%" },
                  ].map((stat) => (
                    <Card key={stat.label}>
                      <CardHeader>
                        <Cluster justify="between" align="center">
                          <CardDescription>{stat.label}</CardDescription>
                          <stat.icon className="h-4 w-4 text-muted-foreground" />
                        </Cluster>
                        <CardTitle className="text-2xl">{stat.value}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Badge variant="secondary">{stat.change}</Badge>
                      </CardContent>
                    </Card>
                  ))}
                </Grid>
              </CardContent>
            </Card>

            {/* Team directory */}
            <Card>
              <CardHeader>
                <Cluster justify="between">
                  <CardTitle className="text-base">Team directory</CardTitle>
                  <Badge variant="secondary" className="text-[10px]">columns=&#123;2&#125; gap=&quot;sm&quot;</Badge>
                </Cluster>
                <CardDescription>Compact grid for people cards</CardDescription>
              </CardHeader>
              <CardContent>
                <Grid columns={2} gap="sm">
                  {[
                    { initials: "AK", name: "Anna Kim", role: "Design" },
                    { initials: "MJ", name: "Marcus J.", role: "Backend" },
                    { initials: "SL", name: "Sara Lee", role: "Product" },
                    { initials: "JP", name: "Jake Park", role: "Frontend" },
                  ].map((member) => (
                    <Cluster key={member.initials} gap="sm" wrap={false}>
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>{member.initials}</AvatarFallback>
                      </Avatar>
                      <Stack gap="none">
                        <span className="text-sm font-medium">{member.name}</span>
                        <span className="text-xs text-muted-foreground">{member.role}</span>
                      </Stack>
                    </Cluster>
                  ))}
                </Grid>
              </CardContent>
            </Card>

            {/* Storage breakdown */}
            <Card>
              <CardHeader>
                <Cluster justify="between">
                  <CardTitle className="text-base">Storage breakdown</CardTitle>
                  <Badge variant="secondary" className="text-[10px]">columns=&#123;2&#125; gap=&quot;md&quot;</Badge>
                </Cluster>
                <CardDescription>Progress bars in a grid</CardDescription>
              </CardHeader>
              <CardContent>
                <Grid columns={2} gap="md">
                  {[
                    { icon: ImageIcon, label: "Images", pct: 42 },
                    { icon: VideoIcon, label: "Videos", pct: 54 },
                    { icon: FileTextIcon, label: "Docs", pct: 26 },
                    { icon: FolderIcon, label: "Other", pct: 16 },
                  ].map((item) => (
                    <Stack key={item.label} gap="xs">
                      <Cluster gap="xs" wrap={false}>
                        <item.icon className="h-3.5 w-3.5 text-muted-foreground" />
                        <span className="text-xs font-medium">{item.label}</span>
                        <span className="text-[10px] text-muted-foreground ml-auto">{item.pct}%</span>
                      </Cluster>
                      <Progress value={item.pct} />
                    </Stack>
                  ))}
                </Grid>
              </CardContent>
            </Card>

            {/* Responsive auto-fit */}
            <Card>
              <CardHeader>
                <Cluster justify="between">
                  <CardTitle className="text-base">Responsive cards</CardTitle>
                  <Badge variant="secondary" className="text-[10px]">auto-fit min=&quot;15rem&quot;</Badge>
                </Cluster>
                <CardDescription>Cards wrap based on available space</CardDescription>
              </CardHeader>
              <CardContent>
                <Grid columns="auto-fit" min="12rem" gap="sm">
                  {["Design", "Develop", "Test", "Deploy"].map((phase) => (
                    <div
                      key={phase}
                      className="rounded border border-border bg-muted/20 p-3 text-center"
                    >
                      <span className="text-sm font-medium">{phase}</span>
                    </div>
                  ))}
                </Grid>
              </CardContent>
            </Card>

            {/* Loading skeleton */}
            <Card>
              <CardHeader>
                <Cluster justify="between">
                  <CardTitle className="text-base">Loading state</CardTitle>
                  <Badge variant="secondary" className="text-[10px]">columns=&#123;3&#125; gap=&quot;md&quot;</Badge>
                </Cluster>
                <CardDescription>Skeleton placeholders in grid</CardDescription>
              </CardHeader>
              <CardContent>
                <Grid columns={3} gap="md">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <Stack key={i} gap="sm">
                      <Skeleton className="h-4 w-3/4" />
                      <Skeleton className="h-4 w-1/2" />
                      <Skeleton className="h-16 w-full" />
                    </Stack>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Stack>
      </Stack>
    </Container>
  )
}
