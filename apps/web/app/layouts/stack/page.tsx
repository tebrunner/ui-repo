"use client"

import { useState } from "react"
import { Container, Stack, Cluster, Grid } from "@repo/ui/layouts"
import type { Gap } from "@repo/ui/layouts"
import {
  Alert,
  AlertTitle,
  AlertDescription,
  Avatar,
  AvatarFallback,
  Badge,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Input,
  Label,
  Separator,
  Switch,
  Textarea,
} from "@repo/ui/primitives"
import { SectionHeader } from "@repo/ui/patterns"
import { InfoIcon, TriangleAlertIcon } from "lucide-react"

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

const alignOptions = ["stretch", "start", "center", "end"] as const

export default function StackDemo() {
  const [activeGap, setActiveGap] = useState<Gap>("md")
  const [activeAlign, setActiveAlign] = useState<typeof alignOptions[number]>("stretch")

  return (
    <Container width="lg">
      <Stack gap="xl">
        <Stack gap="xs">
          <h1 className="text-2xl font-bold">Stack</h1>
          <p className="text-muted-foreground max-w-prose">
            Vertical flow with consistent spacing. The most-used layout in the system.
            The parent Stack owns the gap — children never set margin-top/margin-bottom.
          </p>
        </Stack>

        <Separator />

        {/* ━━━ GAP SCALE ━━━ */}
        <Stack gap="lg">
          <SectionHeader
            title="gap"
            description="Vertical gap between children via gapMap in _scale.ts. Default &quot;md&quot; (16px)."
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
                  <Stack gap={activeGap}>
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="flex h-10 items-center rounded bg-primary/10 px-4"
                      >
                        <span className="text-xs text-primary/60">
                          Stack child {i}
                        </span>
                      </div>
                    ))}
                  </Stack>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Stack>

        {/* ━━━ ALIGN ━━━ */}
        <Stack gap="lg">
          <SectionHeader
            title="align"
            description="Cross-axis alignment. Default &quot;stretch&quot;."
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
              <div className="rounded border border-dashed border-border p-4 min-h-40">
                <Stack gap="sm" align={activeAlign}>
                  <div className="rounded bg-primary/10 px-4 py-2">
                    <span className="text-xs text-primary/60">Short</span>
                  </div>
                  <div className="rounded bg-primary/10 px-4 py-2">
                    <span className="text-xs text-primary/60">A much wider child element</span>
                  </div>
                  <div className="rounded bg-primary/10 px-4 py-2">
                    <span className="text-xs text-primary/60">Medium width</span>
                  </div>
                </Stack>
              </div>
              <code className="text-[10px] text-muted-foreground mt-2 block">
                {'<Stack gap="sm" align="' + activeAlign + '">'}
              </code>
            </CardContent>
          </Card>
        </Stack>

        {/* ━━━ RECURSIVE ━━━ */}
        <Stack gap="lg">
          <SectionHeader
            title="recursive"
            description="Apply spacing to ALL descendants via the &quot;lobotomized owl&quot; selector. For prose/CMS content only — it reaches into nested layouts."
          />

          <Grid columns={2} gap="lg">
            <Card>
              <CardHeader>
                <Cluster justify="between">
                  <CardTitle className="text-base">Normal</CardTitle>
                  <Badge variant="outline" className="text-[10px]">recursive=false</Badge>
                </Cluster>
              </CardHeader>
              <CardContent>
                <div className="rounded border border-border p-4">
                  <Stack gap="md">
                    <p className="text-sm">First paragraph.</p>
                    <div>
                      <p className="text-sm">Nested wrapper:</p>
                      <p className="text-sm">These two have no gap.</p>
                    </div>
                    <p className="text-sm">Third paragraph.</p>
                  </Stack>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Cluster justify="between">
                  <CardTitle className="text-base">Recursive</CardTitle>
                  <Badge className="text-[10px]">recursive=true</Badge>
                </Cluster>
              </CardHeader>
              <CardContent>
                <div className="rounded border border-border p-4">
                  <Stack gap="md" recursive>
                    <p className="text-sm">First paragraph.</p>
                    <div>
                      <p className="text-sm">Nested wrapper:</p>
                      <p className="text-sm">These two also get spacing.</p>
                    </div>
                    <p className="text-sm">Third paragraph.</p>
                  </Stack>
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
            description="Stack is the backbone of most UI patterns. These examples show how gap tokens map to component distance."
          />

          <Grid columns={2} gap="lg">
            {/* Profile card */}
            <Card>
              <CardHeader>
                <Cluster justify="between">
                  <CardTitle className="text-base">Form layout</CardTitle>
                  <Badge variant="secondary" className="text-[10px]">gap=&quot;md&quot; + gap=&quot;xs&quot;</Badge>
                </Cluster>
              </CardHeader>
              <CardContent>
                <Stack gap="md">
                  <Stack gap="xs">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue="Jefferson Kidd" />
                  </Stack>
                  <Stack gap="xs">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="jeff@example.com" />
                  </Stack>
                  <Stack gap="xs">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea id="bio" placeholder="Tell us about yourself..." />
                  </Stack>
                  <Cluster gap="sm" align="center">
                    <Switch id="public" />
                    <Label htmlFor="public">Make profile public</Label>
                  </Cluster>
                </Stack>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>

            {/* Notification feed */}
            <Card>
              <CardHeader>
                <Cluster justify="between">
                  <CardTitle className="text-base">Feed / list</CardTitle>
                  <Badge variant="secondary" className="text-[10px]">gap=&quot;sm&quot;</Badge>
                </Cluster>
                <CardDescription>Tight spacing for dense information</CardDescription>
              </CardHeader>
              <CardContent>
                <Stack gap="sm">
                  {[
                    { initials: "AK", name: "Anna Kim", action: "commented on your PR" },
                    { initials: "MJ", name: "Marcus Jones", action: "approved your review" },
                    { initials: "SL", name: "Sara Lee", action: "mentioned you in a thread" },
                  ].map((item) => (
                    <Cluster key={item.name} gap="sm" wrap={false}>
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>{item.initials}</AvatarFallback>
                      </Avatar>
                      <Stack gap="none">
                        <span className="text-sm font-medium">{item.name}</span>
                        <span className="text-xs text-muted-foreground">{item.action}</span>
                      </Stack>
                    </Cluster>
                  ))}
                </Stack>
              </CardContent>
            </Card>

            {/* Alerts */}
            <Card>
              <CardHeader>
                <Cluster justify="between">
                  <CardTitle className="text-base">Stacked alerts</CardTitle>
                  <Badge variant="secondary" className="text-[10px]">gap=&quot;sm&quot;</Badge>
                </Cluster>
                <CardDescription>Consistent rhythm between sibling blocks</CardDescription>
              </CardHeader>
              <CardContent>
                <Stack gap="sm">
                  <Alert>
                    <InfoIcon className="h-4 w-4" />
                    <AlertTitle>Heads up</AlertTitle>
                    <AlertDescription>
                      Stacked alerts maintain consistent vertical rhythm.
                    </AlertDescription>
                  </Alert>
                  <Alert variant="destructive">
                    <TriangleAlertIcon className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                      Something went wrong with your submission.
                    </AlertDescription>
                  </Alert>
                </Stack>
              </CardContent>
            </Card>

            {/* Vertical badge list */}
            <Card>
              <CardHeader>
                <Cluster justify="between">
                  <CardTitle className="text-base">Vertical tags</CardTitle>
                  <Badge variant="secondary" className="text-[10px]">gap=&quot;xs&quot;</Badge>
                </Cluster>
                <CardDescription>Tight spacing for compact lists</CardDescription>
              </CardHeader>
              <CardContent>
                <Stack gap="xs" align="start">
                  <Badge variant="default">Published</Badge>
                  <Badge variant="secondary">Draft</Badge>
                  <Badge variant="outline">Archived</Badge>
                  <Badge variant="destructive">Deleted</Badge>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Stack>
      </Stack>
    </Container>
  )
}
