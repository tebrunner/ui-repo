"use client"

import { useState } from "react"
import { Container, Stack, Center, Cluster, Grid } from "@repo/ui/layouts"
import {
  Alert,
  AlertTitle,
  AlertDescription,
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
} from "@repo/ui/primitives"
import { SectionHeader } from "@repo/ui/patterns"
import { CheckCircleIcon, RocketIcon, MailIcon } from "lucide-react"

// ── Scale data ──

const maxOptions = [
  { token: "sm", tw: "max-w-sm", px: "384px" },
  { token: "md", tw: "max-w-md", px: "448px" },
  { token: "lg", tw: "max-w-lg", px: "512px" },
  { token: "xl", tw: "max-w-xl", px: "576px" },
  { token: "2xl", tw: "max-w-2xl", px: "672px" },
  { token: "3xl", tw: "max-w-3xl", px: "768px" },
  { token: "4xl", tw: "max-w-4xl", px: "896px" },
  { token: "5xl", tw: "max-w-5xl", px: "1024px" },
  { token: "6xl", tw: "max-w-6xl", px: "1152px" },
  { token: "7xl", tw: "max-w-7xl", px: "1280px" },
  { token: "prose", tw: "max-w-prose", px: "~65ch" },
  { token: "full", tw: "max-w-full", px: "100%" },
] as const

type MaxToken = typeof maxOptions[number]["token"]

export default function CenterDemo() {
  const [activeMax, setActiveMax] = useState<MaxToken>("lg")
  const [activeGutter, setActiveGutter] = useState(true)
  const [activeText, setActiveText] = useState(false)
  const [activeIntrinsic, setActiveIntrinsic] = useState(false)

  return (
    <Container width="lg">
      <Stack gap="xl">
        <Stack gap="xs">
          <h1 className="text-2xl font-bold">Center</h1>
          <p className="text-muted-foreground max-w-prose">
            Horizontal centering with constrained max-width and optional gutter padding.
            The workhorse for prose content, forms, and CTAs. Unlike Container (which
            manages page-level width + padding + section spacing + container queries),
            Center is for content-level centering within a region.
          </p>
        </Stack>

        <Separator />

        {/* ━━━ MAX ━━━ */}
        <Stack gap="lg">
          <SectionHeader
            title="max"
            description="Maximum content width via a local maxMap (not _scale.ts). Center uses Tailwind's max-w-* scale directly. Default &quot;lg&quot; (512px)."
          />

          <Grid columns={2} gap="lg">
            {/* Token reference */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Max Scale</CardTitle>
                <CardDescription>All 12 tokens from Center&apos;s maxMap</CardDescription>
              </CardHeader>
              <CardContent>
                <Stack gap="xs">
                  {maxOptions.map((m) => (
                    <Cluster key={m.token} justify="between" gap="sm">
                      <Cluster gap="xs" wrap={false}>
                        <Badge
                          variant={activeMax === m.token ? "default" : "outline"}
                          className="font-mono text-[10px] w-12 justify-center cursor-pointer"
                          onClick={() => setActiveMax(m.token)}
                        >
                          {m.token}
                        </Badge>
                        <code className="text-[10px] text-primary/50">{m.tw}</code>
                      </Cluster>
                      <span className="font-mono text-[10px] text-primary/40">{m.px}</span>
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
                    max=&quot;{activeMax}&quot;
                  </Badge>
                </Cluster>
                <CardDescription>Click a token to change the max-width</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded border border-dashed border-border bg-muted/30 p-4 min-h-40">
                  <Center max={activeMax} gutter={false} className="border border-primary/20 rounded bg-primary/5 py-6">
                    <div className="flex h-8 items-center justify-center">
                      <span className="text-xs text-primary/60">
                        Centered content ({maxOptions.find((m) => m.token === activeMax)?.px})
                      </span>
                    </div>
                  </Center>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Stack>

        {/* ━━━ GUTTER ━━━ */}
        <Stack gap="lg">
          <SectionHeader
            title="gutter"
            description="Horizontal padding that prevents content from touching viewport edges. Default true. Applies px-4 sm:px-6."
          />

          <Grid columns={2} gap="lg">
            <Card>
              <CardHeader>
                <Cluster justify="between">
                  <CardTitle className="text-base">gutter=true</CardTitle>
                  <Badge variant="outline" className="text-[10px]">default</Badge>
                </Cluster>
                <CardDescription>Content stays away from edges</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded border border-border overflow-hidden">
                  <Center max="full" gutter>
                    <div className="border-x border-dashed border-primary/20 bg-primary/5 py-3">
                      <span className="text-xs text-primary/60 px-2">Content with gutter padding</span>
                    </div>
                  </Center>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Cluster justify="between">
                  <CardTitle className="text-base">gutter=false</CardTitle>
                  <Badge className="text-[10px]">no padding</Badge>
                </Cluster>
                <CardDescription>Content touches container edges</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded border border-border overflow-hidden">
                  <Center max="full" gutter={false}>
                    <div className="border-x border-dashed border-primary/20 bg-primary/5 py-3">
                      <span className="text-xs text-primary/60 px-2">Content flush to edges</span>
                    </div>
                  </Center>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Stack>

        {/* ━━━ TEXT ━━━ */}
        <Stack gap="lg">
          <SectionHeader
            title="text"
            description="Center text alignment in addition to the box itself. Default false. Adds text-center."
          />

          <Grid columns={2} gap="lg">
            <Card>
              <CardHeader>
                <Cluster justify="between">
                  <CardTitle className="text-base">text=false</CardTitle>
                  <Badge variant="outline" className="text-[10px]">default</Badge>
                </Cluster>
              </CardHeader>
              <CardContent>
                <div className="rounded border border-dashed border-border p-4">
                  <Center max="md" gutter={false} text={false}>
                    <p className="text-sm text-primary/60">This text is left-aligned within a centered box. The box is centered, but the text inside starts from the left edge.</p>
                  </Center>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Cluster justify="between">
                  <CardTitle className="text-base">text=true</CardTitle>
                  <Badge className="text-[10px]">text-center</Badge>
                </Cluster>
              </CardHeader>
              <CardContent>
                <div className="rounded border border-dashed border-border p-4">
                  <Center max="md" gutter={false} text>
                    <p className="text-sm text-primary/60">This text is center-aligned within a centered box. Both the container and the text are centered — ideal for hero sections and CTAs.</p>
                  </Center>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Stack>

        {/* ━━━ INTRINSIC ━━━ */}
        <Stack gap="lg">
          <SectionHeader
            title="intrinsic"
            description="Center children at their natural content width instead of stretching to fill. Adds flex flex-col items-center. Default false."
          />

          <Grid columns={2} gap="lg">
            <Card>
              <CardHeader>
                <Cluster justify="between">
                  <CardTitle className="text-base">intrinsic=false</CardTitle>
                  <Badge variant="outline" className="text-[10px]">default — children stretch</Badge>
                </Cluster>
              </CardHeader>
              <CardContent>
                <Center max="md" gutter={false} className="border border-dashed border-border rounded p-4">
                  <Button>I stretch to fill the width</Button>
                </Center>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Cluster justify="between">
                  <CardTitle className="text-base">intrinsic=true</CardTitle>
                  <Badge className="text-[10px]">children size to content</Badge>
                </Cluster>
              </CardHeader>
              <CardContent>
                <Center max="md" intrinsic gutter={false} className="border border-dashed border-border rounded p-4">
                  <Button>I size to my content</Button>
                </Center>
              </CardContent>
            </Card>

            {/* Multi-child intrinsic */}
            <Card className="col-span-2">
              <CardHeader>
                <Cluster justify="between">
                  <CardTitle className="text-base">Intrinsic with multiple children</CardTitle>
                  <Badge variant="secondary" className="text-[10px]">each child centers independently</Badge>
                </Cluster>
              </CardHeader>
              <CardContent>
                <Center max="lg" intrinsic gutter={false} className="border border-dashed border-border rounded p-6">
                  <Stack gap="sm" align="center">
                    <Badge variant="secondary">Centered badge</Badge>
                    <span className="text-sm text-muted-foreground">Each child centers at its own width</span>
                    <Button variant="outline" size="sm">Action button</Button>
                  </Stack>
                </Center>
              </CardContent>
            </Card>
          </Grid>
        </Stack>

        <Separator />

        {/* ━━━ CENTER vs CONTAINER ━━━ */}
        <Stack gap="lg">
          <SectionHeader
            title="Center vs Container"
            description="Both center content, but they serve different roles. Center is for content-level centering. Container is for page-level width + padding + section spacing + container queries."
          />

          <Grid columns={2} gap="lg">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Center</CardTitle>
                <CardDescription>Content-level centering</CardDescription>
              </CardHeader>
              <CardContent>
                <Stack gap="xs" className="font-mono text-xs text-primary/70">
                  <span>max — Tailwind max-w-* scale (sm–7xl, prose, full)</span>
                  <span>gutter — px-4 sm:px-6 edge padding</span>
                  <span>text — text-center alignment</span>
                  <span>intrinsic — flex items-center for content-width</span>
                </Stack>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Container</CardTitle>
                <CardDescription>Page-level structure</CardDescription>
              </CardHeader>
              <CardContent>
                <Stack gap="xs" className="font-mono text-xs text-primary/70">
                  <span>width — containerWidthMap from _scale.ts</span>
                  <span>px — paddingXMap for horizontal padding</span>
                  <span>section — sectionSpacingMap for vertical rhythm</span>
                  <span>query — CSS container-query context</span>
                  <span>as — semantic HTML element</span>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Stack>

        <Separator />

        {/* ━━━ REAL-WORLD EXAMPLES ━━━ */}
        <Stack gap="lg">
          <SectionHeader
            title="Real-World Patterns"
            description="Center is the go-to for narrowing content within a wider container. These show the most common compositions."
          />

          <Grid columns={2} gap="lg">
            {/* Prose content */}
            <Card>
              <CardHeader>
                <Cluster justify="between">
                  <CardTitle className="text-base">Prose block</CardTitle>
                  <Badge variant="secondary" className="text-[10px]">max=&quot;prose&quot; + text</Badge>
                </Cluster>
                <CardDescription>Readable text with centered alignment</CardDescription>
              </CardHeader>
              <CardContent>
                <Center max="prose" text gutter={false}>
                  <Stack gap="md">
                    <h2 className="text-lg font-semibold">Welcome to the platform</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      This content is centered with a prose-width constraint, ideal for
                      long-form reading at ~65 characters per line.
                    </p>
                    <Alert>
                      <CheckCircleIcon className="h-4 w-4" />
                      <AlertTitle>All systems operational</AlertTitle>
                      <AlertDescription>Your account is ready.</AlertDescription>
                    </Alert>
                  </Stack>
                </Center>
              </CardContent>
            </Card>

            {/* Subscribe form */}
            <Card>
              <CardHeader>
                <Cluster justify="between">
                  <CardTitle className="text-base">Narrow form</CardTitle>
                  <Badge variant="secondary" className="text-[10px]">max=&quot;sm&quot;</Badge>
                </Cluster>
                <CardDescription>Centered card for auth / subscribe flows</CardDescription>
              </CardHeader>
              <CardContent>
                <Center max="sm" gutter={false}>
                  <Card className="w-full">
                    <CardHeader>
                      <CardTitle className="text-base text-center">Subscribe</CardTitle>
                      <CardDescription className="text-center">
                        Get notified about updates.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Stack gap="sm">
                        <Stack gap="xs">
                          <Label htmlFor="sub-email">Email</Label>
                          <Input id="sub-email" type="email" placeholder="you@example.com" />
                        </Stack>
                        <Cluster gap="xs">
                          <Badge variant="outline">Weekly</Badge>
                          <Badge variant="outline">Product news</Badge>
                        </Cluster>
                      </Stack>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">
                        <MailIcon className="h-4 w-4 mr-2" />
                        Subscribe
                      </Button>
                    </CardFooter>
                  </Card>
                </Center>
              </CardContent>
            </Card>

            {/* CTA section */}
            <Card className="col-span-2">
              <CardHeader>
                <Cluster justify="between">
                  <CardTitle className="text-base">Hero CTA</CardTitle>
                  <Badge variant="secondary" className="text-[10px]">max=&quot;md&quot; + text + intrinsic</Badge>
                </Cluster>
                <CardDescription>Centered call-to-action with intrinsic button sizing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded border border-dashed border-border bg-muted/20 py-12">
                  <Center max="md" text intrinsic>
                    <Stack gap="lg" align="center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground">
                        <RocketIcon className="h-6 w-6 text-background" />
                      </div>
                      <Stack gap="xs" align="center">
                        <h2 className="text-2xl font-bold">Ready to launch?</h2>
                        <p className="text-muted-foreground text-sm">
                          Start building with our component library today.
                        </p>
                      </Stack>
                      <Cluster gap="sm">
                        <Button>Get started</Button>
                        <Button variant="outline">View docs</Button>
                      </Cluster>
                    </Stack>
                  </Center>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Stack>
      </Stack>
    </Container>
  )
}
