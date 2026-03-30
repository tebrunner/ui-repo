"use client"

import { useState } from "react"
import { Container, Stack, Cluster, Grid } from "@repo/ui/layouts"
import type { Gap } from "@repo/ui/layouts"
import {
  Avatar,
  AvatarFallback,
  Badge,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Separator,
} from "@repo/ui/primitives"
import { SectionHeader } from "@repo/ui/patterns"
import {
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  AlignLeftIcon,
  AlignCenterIcon,
  AlignRightIcon,
  PlusIcon,
  FilterIcon,
  DownloadIcon,
  ShareIcon,
  StarIcon,
  HeartIcon,
  BookmarkIcon,
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

const alignOptions = ["start", "center", "end", "baseline"] as const
const justifyOptions = ["start", "center", "end", "between", "around"] as const

export default function ClusterDemo() {
  const [activeGap, setActiveGap] = useState<Gap>("md")
  const [activeAlign, setActiveAlign] = useState<typeof alignOptions[number]>("center")
  const [activeJustify, setActiveJustify] = useState<typeof justifyOptions[number]>("start")
  const [activeWrap, setActiveWrap] = useState(true)

  return (
    <Container width="lg">
      <Stack gap="xl">
        <Stack gap="xs">
          <h1 className="text-2xl font-bold">Cluster</h1>
          <p className="text-muted-foreground max-w-prose">
            Horizontal wrapping flow with consistent inline spacing. Use for any row of items
            that should break to the next line when space runs out: tags, buttons, nav links,
            icon groups, metadata lines.
          </p>
        </Stack>

        <Separator />

        {/* ━━━ GAP SCALE ━━━ */}
        <Stack gap="lg">
          <SectionHeader
            title="gap"
            description="Inline gap between items via gapMap in _scale.ts. Default &quot;md&quot; (16px)."
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
                  <Cluster gap={activeGap}>
                    {["React", "TypeScript", "Tailwind", "Next.js", "Turbo", "ESLint", "Prettier"].map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </Cluster>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Stack>

        {/* ━━━ JUSTIFY ━━━ */}
        <Stack gap="lg">
          <SectionHeader
            title="justify"
            description="Main-axis distribution. Default &quot;start&quot;."
          />

          <Card>
            <CardHeader>
              <Cluster gap="sm">
                {justifyOptions.map((j) => (
                  <Badge
                    key={j}
                    variant={activeJustify === j ? "default" : "outline"}
                    className="cursor-pointer text-[10px]"
                    onClick={() => setActiveJustify(j)}
                  >
                    {j}
                  </Badge>
                ))}
              </Cluster>
            </CardHeader>
            <CardContent>
              <div className="rounded border border-dashed border-border p-4">
                <Cluster gap="sm" justify={activeJustify}>
                  <div className="rounded bg-primary/10 px-4 py-2">
                    <span className="text-xs text-primary/60">Alpha</span>
                  </div>
                  <div className="rounded bg-primary/10 px-4 py-2">
                    <span className="text-xs text-primary/60">Bravo</span>
                  </div>
                  <div className="rounded bg-primary/10 px-4 py-2">
                    <span className="text-xs text-primary/60">Charlie</span>
                  </div>
                </Cluster>
              </div>
              <code className="text-[10px] text-muted-foreground mt-2 block">
                {'<Cluster gap="sm" justify="' + activeJustify + '">'}
              </code>
            </CardContent>
          </Card>
        </Stack>

        {/* ━━━ ALIGN ━━━ */}
        <Stack gap="lg">
          <SectionHeader
            title="align"
            description="Cross-axis alignment. Default &quot;center&quot;."
          />

          <Card>
            <CardHeader>
              <Cluster gap="sm">
                {alignOptions.map((a) => (
                  <Badge
                    key={a}
                    variant={activeAlign === a ? "default" : "outline"}
                    className="cursor-pointer text-[10px]"
                    onClick={() => setActiveAlign(a)}
                  >
                    {a}
                  </Badge>
                ))}
              </Cluster>
            </CardHeader>
            <CardContent>
              <div className="rounded border border-dashed border-border p-4 min-h-32">
                <Cluster gap="sm" align={activeAlign}>
                  <div className="rounded bg-primary/10 px-4 py-1">
                    <span className="text-xs text-primary/60">Small</span>
                  </div>
                  <div className="rounded bg-primary/10 px-4 py-4">
                    <span className="text-xs text-primary/60">Tall item</span>
                  </div>
                  <div className="rounded bg-primary/10 px-4 py-2">
                    <span className="text-xs text-primary/60">Medium</span>
                  </div>
                  <div className="rounded bg-primary/10 px-4 py-1">
                    <span className="text-[10px] leading-tight text-primary/60">Two<br />lines</span>
                  </div>
                </Cluster>
              </div>
              <code className="text-[10px] text-muted-foreground mt-2 block">
                {'<Cluster gap="sm" align="' + activeAlign + '">'}
              </code>
            </CardContent>
          </Card>
        </Stack>

        {/* ━━━ WRAP ━━━ */}
        <Stack gap="lg">
          <SectionHeader
            title="wrap"
            description="Allow items to flow to the next line. Default true. Set false for fixed-width toolbars or nav bars."
          />

          <Grid columns={2} gap="lg">
            <Card>
              <CardHeader>
                <Cluster justify="between">
                  <CardTitle className="text-base">wrap=true</CardTitle>
                  <Badge variant="outline" className="text-[10px]">default</Badge>
                </Cluster>
                <CardDescription>Items flow to the next line</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded border border-border p-4 max-w-xs">
                  <Cluster gap="sm" wrap>
                    {["React", "TypeScript", "Tailwind", "Next.js", "Turbo", "Node"].map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </Cluster>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Cluster justify="between">
                  <CardTitle className="text-base">wrap=false</CardTitle>
                  <Badge className="text-[10px]">nowrap</Badge>
                </Cluster>
                <CardDescription>Items stay on one line, may overflow</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded border border-border p-4 max-w-xs overflow-x-auto">
                  <Cluster gap="sm" wrap={false}>
                    {["React", "TypeScript", "Tailwind", "Next.js", "Turbo", "Node"].map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </Cluster>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Stack>

        <Separator />

        {/* ━━━ REAL-WORLD EXAMPLES ━━━ */}
        <Stack gap="lg">
          <SectionHeader
            title="Real-World Patterns"
            description="Cluster is the horizontal counterpart to Stack. These examples show how gap and justify combine for common UI patterns."
          />

          <Grid columns={2} gap="lg">
            {/* Toolbar */}
            <Card>
              <CardHeader>
                <Cluster justify="between">
                  <CardTitle className="text-base">Toolbar</CardTitle>
                  <Badge variant="secondary" className="text-[10px]">gap=&quot;sm&quot;</Badge>
                </Cluster>
                <CardDescription>Icon buttons with separator grouping</CardDescription>
              </CardHeader>
              <CardContent>
                <Cluster gap="sm">
                  <Button variant="outline" size="icon"><BoldIcon className="h-4 w-4" /></Button>
                  <Button variant="outline" size="icon"><ItalicIcon className="h-4 w-4" /></Button>
                  <Button variant="outline" size="icon"><UnderlineIcon className="h-4 w-4" /></Button>
                  <Separator orientation="vertical" className="h-6" />
                  <Button variant="outline" size="icon"><AlignLeftIcon className="h-4 w-4" /></Button>
                  <Button variant="outline" size="icon"><AlignCenterIcon className="h-4 w-4" /></Button>
                  <Button variant="outline" size="icon"><AlignRightIcon className="h-4 w-4" /></Button>
                </Cluster>
              </CardContent>
            </Card>

            {/* Filter bar */}
            <Card>
              <CardHeader>
                <Cluster justify="between">
                  <CardTitle className="text-base">Filter bar</CardTitle>
                  <Badge variant="secondary" className="text-[10px]">justify=&quot;between&quot;</Badge>
                </Cluster>
                <CardDescription>Nested clusters for split toolbar layout</CardDescription>
              </CardHeader>
              <CardContent>
                <Cluster gap="sm" justify="between">
                  <Cluster gap="sm">
                    <Button variant="outline" size="sm">
                      <FilterIcon className="h-3 w-3 mr-1" />
                      Filter
                    </Button>
                    <Badge variant="secondary">Active</Badge>
                    <Badge variant="secondary">Last 7 days</Badge>
                  </Cluster>
                  <Cluster gap="sm">
                    <Button variant="ghost" size="sm">
                      <DownloadIcon className="h-3 w-3 mr-1" />
                      Export
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ShareIcon className="h-3 w-3 mr-1" />
                      Share
                    </Button>
                  </Cluster>
                </Cluster>
              </CardContent>
            </Card>

            {/* Avatar group */}
            <Card>
              <CardHeader>
                <Cluster justify="between">
                  <CardTitle className="text-base">Team members</CardTitle>
                  <Badge variant="secondary" className="text-[10px]">gap=&quot;sm&quot; + align=&quot;center&quot;</Badge>
                </Cluster>
                <CardDescription>Avatars with a trailing action button</CardDescription>
              </CardHeader>
              <CardContent>
                <Cluster gap="sm" align="center">
                  {["AK", "MJ", "SL", "JP", "RW"].map((initials) => (
                    <Avatar key={initials} className="h-9 w-9 border-2 border-background">
                      <AvatarFallback>{initials}</AvatarFallback>
                    </Avatar>
                  ))}
                  <Button variant="outline" size="icon" className="h-9 w-9 rounded-full">
                    <PlusIcon className="h-4 w-4" />
                  </Button>
                </Cluster>
              </CardContent>
            </Card>

            {/* Social actions */}
            <Card>
              <CardHeader>
                <Cluster justify="between">
                  <CardTitle className="text-base">Post actions</CardTitle>
                  <Badge variant="secondary" className="text-[10px]">gap=&quot;md&quot;</Badge>
                </Cluster>
                <CardDescription>Inline social interaction buttons</CardDescription>
              </CardHeader>
              <CardContent>
                <Cluster gap="md">
                  <Button variant="ghost" size="sm">
                    <HeartIcon className="h-4 w-4 mr-1" />
                    24
                  </Button>
                  <Button variant="ghost" size="sm">
                    <StarIcon className="h-4 w-4 mr-1" />
                    12
                  </Button>
                  <Button variant="ghost" size="sm">
                    <BookmarkIcon className="h-4 w-4 mr-1" />
                    Save
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ShareIcon className="h-4 w-4 mr-1" />
                    Share
                  </Button>
                </Cluster>
              </CardContent>
            </Card>

            {/* Breadcrumb-style */}
            <Card>
              <CardHeader>
                <Cluster justify="between">
                  <CardTitle className="text-base">Metadata line</CardTitle>
                  <Badge variant="secondary" className="text-[10px]">gap=&quot;xs&quot; + align=&quot;baseline&quot;</Badge>
                </Cluster>
                <CardDescription>Tight spacing for inline metadata</CardDescription>
              </CardHeader>
              <CardContent>
                <Cluster gap="xs" align="baseline">
                  <span className="text-sm font-medium">Jefferson Kidd</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-xs text-muted-foreground">Mar 29, 2026</span>
                  <span className="text-muted-foreground">·</span>
                  <Badge variant="outline" className="text-[10px]">Published</Badge>
                </Cluster>
              </CardContent>
            </Card>

            {/* Centered group */}
            <Card>
              <CardHeader>
                <Cluster justify="between">
                  <CardTitle className="text-base">Centered group</CardTitle>
                  <Badge variant="secondary" className="text-[10px]">justify=&quot;center&quot;</Badge>
                </Cluster>
                <CardDescription>Centered button group for dialogs or CTAs</CardDescription>
              </CardHeader>
              <CardContent>
                <Cluster gap="sm" justify="center">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save changes</Button>
                </Cluster>
              </CardContent>
            </Card>
          </Grid>
        </Stack>
      </Stack>
    </Container>
  )
}
