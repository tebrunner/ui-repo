import { Container, Stack, Cluster, Grid } from "@repo/ui/layouts"
import {
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Separator,
} from "@repo/ui/primitives"
import { SectionHeader } from "@repo/ui/patterns"

export default function ContainerDemo() {
  return (
    <Container width="lg">
      <Stack gap="xl">
        <Stack gap="xs">
          <h1 className="text-2xl font-bold">Container</h1>
          <p className="text-muted-foreground max-w-prose">
            The outermost spatial contract. Constrains content width, centers it,
            applies consistent horizontal padding, and optionally establishes
            section-level vertical rhythm or a CSS container-query context.
          </p>
        </Stack>

        <Separator />

        {/* ━━━ WIDTH ━━━ */}
        <Stack gap="lg">
          <SectionHeader
            title="width"
            description="Maximum content width via containerWidthMap in _scale.ts. Default &quot;lg&quot;."
          />
          <Stack gap="sm">
            {([
              { w: "xs", label: "max-w-xl", px: "576px", desc: "auth pages, narrow forms" },
              { w: "sm", label: "max-w-2xl", px: "672px", desc: "single-column content" },
              { w: "md", label: "max-w-4xl", px: "896px", desc: "docs, articles" },
              { w: "lg", label: "max-w-6xl", px: "1152px", desc: "standard page content" },
              { w: "xl", label: "max-w-7xl", px: "1280px", desc: "wide dashboards" },
              { w: "2xl", label: "max-w-screen-2xl", px: "1536px", desc: "full-bleed inner" },
              { w: "full", label: "max-w-none", px: "—", desc: "no constraint" },
            ] as const).map(({ w, label, px, desc }) => (
              <Container
                key={w}
                width={w}
                px="none"
                className="rounded border border-border bg-muted/20"
              >
                <Cluster justify="between" className="px-4 py-2">
                  <Cluster gap="sm" wrap={false}>
                    <Badge variant="outline" className="font-mono text-[10px]">
                      width=&quot;{w}&quot;
                    </Badge>
                    <code className="text-[10px] text-primary/50">{label}</code>
                  </Cluster>
                  <Cluster gap="sm" wrap={false}>
                    <span className="text-[10px] text-muted-foreground">{desc}</span>
                    <span className="font-mono text-[10px] text-primary/40">{px}</span>
                  </Cluster>
                </Cluster>
              </Container>
            ))}
          </Stack>
        </Stack>

        {/* ━━━ PX (horizontal padding) ━━━ */}
        <Stack gap="lg">
          <SectionHeader
            title="px"
            description="Horizontal padding via paddingXMap in _scale.ts. Keeps content from touching viewport edges. Default &quot;md&quot;."
          />
          <Container width="md" px="none" className="border border-border rounded-lg overflow-hidden">
            <Stack gap="none">
              {([
                { px: "none", label: "px-0", val: "0px" },
                { px: "xs", label: "px-1", val: "4px" },
                { px: "sm", label: "px-2", val: "8px" },
                { px: "md", label: "px-4", val: "16px" },
                { px: "lg", label: "px-6", val: "24px" },
                { px: "xl", label: "px-8", val: "32px" },
                { px: "2xl", label: "px-12", val: "48px" },
              ] as const).map(({ px, label, val }, i) => (
                <Container
                  key={px}
                  width="full"
                  px={px}
                  className={i % 2 === 0 ? "bg-muted/20" : "bg-muted/40"}
                >
                  <div className="border-x border-dashed border-primary/20 py-2">
                    <Cluster justify="between" gap="sm">
                      <Cluster gap="xs" wrap={false}>
                        <Badge variant="outline" className="font-mono text-[10px]">
                          px=&quot;{px}&quot;
                        </Badge>
                        <code className="text-[10px] text-primary/50">{label}</code>
                      </Cluster>
                      <span className="font-mono text-[10px] text-primary/40">{val} per side</span>
                    </Cluster>
                  </div>
                </Container>
              ))}
            </Stack>
          </Container>
          <p className="text-xs text-muted-foreground max-w-prose">
            The dashed borders show where content begins. Wider padding means more
            breathing room between content and the container edge.
          </p>
        </Stack>

        {/* ━━━ SECTION SPACING ━━━ */}
        <Stack gap="lg">
          <SectionHeader
            title="section"
            description="Vertical rhythm via sectionSpacingMap in _scale.ts. For full page sections (hero, features, CTA) — not inline containers."
          />
          <Stack gap="none" className="border border-border rounded-lg overflow-hidden">
            {([
              { s: "sm", label: "py-8", px: "32px", desc: "compact sections" },
              { s: "md", label: "py-16", px: "64px", desc: "standard section rhythm" },
              { s: "lg", label: "py-24", px: "96px", desc: "generous breathing room" },
              { s: "xl", label: "py-32", px: "128px", desc: "hero-level prominence" },
            ] as const).map(({ s, label, px, desc }, i) => (
              <Container
                key={s}
                width="full"
                px="lg"
                section={s}
                className={`border-b border-border last:border-b-0 ${
                  ["bg-primary/[0.02]", "bg-primary/[0.03]", "bg-primary/[0.05]", "bg-primary/[0.07]"][i]
                }`}
              >
                <Cluster justify="between">
                  <Cluster gap="sm" wrap={false}>
                    <Badge variant="outline" className="font-mono text-[10px]">
                      section=&quot;{s}&quot;
                    </Badge>
                    <span className="text-xs text-muted-foreground">{desc}</span>
                  </Cluster>
                  <Cluster gap="sm" wrap={false}>
                    <code className="text-[10px] text-primary/50">{label}</code>
                    <span className="font-mono text-[10px] text-primary/40">{px}</span>
                  </Cluster>
                </Cluster>
              </Container>
            ))}
          </Stack>
        </Stack>

        {/* ━━━ SEMANTIC ELEMENT ━━━ */}
        <Stack gap="lg">
          <SectionHeader
            title="as"
            description="Render as a semantic HTML element. Default &quot;div&quot;."
          />
          <Grid columns={3} gap="md">
            {(["div", "section", "main", "article", "aside", "header", "footer"] as const).map((tag) => (
              <Container
                key={tag}
                as={tag}
                width="full"
                px="md"
                className="rounded border border-border bg-muted/10 py-3"
              >
                <Cluster justify="between">
                  <Badge variant="outline" className="font-mono text-[10px]">
                    as=&quot;{tag}&quot;
                  </Badge>
                  <code className="text-[10px] text-muted-foreground">
                    &lt;{tag}&gt;
                  </code>
                </Cluster>
              </Container>
            ))}
          </Grid>
        </Stack>

        {/* ━━━ CONTAINER QUERIES ━━━ */}
        <Stack gap="lg">
          <SectionHeader
            title="query"
            description="Enable CSS container-query context. true for anonymous, or a string for named containers."
          />
          <Grid columns={2} gap="lg">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Anonymous</CardTitle>
                <CardDescription>
                  <code className="text-[10px]">query=&#123;true&#125;</code> — children use <code className="text-[10px]">@md:</code> variants
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Container query className="border border-dashed border-border rounded p-4">
                  <div className="grid grid-cols-1 @md:grid-cols-2 gap-3">
                    <div className="rounded bg-primary/10 p-3 text-center">
                      <span className="text-xs text-primary/60">A</span>
                    </div>
                    <div className="rounded bg-primary/10 p-3 text-center">
                      <span className="text-xs text-primary/60">B</span>
                    </div>
                  </div>
                </Container>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Named</CardTitle>
                <CardDescription>
                  <code className="text-[10px]">query=&quot;sidebar&quot;</code> — children use <code className="text-[10px]">@md/sidebar:</code> variants
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Container query="sidebar" className="border border-dashed border-border rounded p-4 max-w-xs">
                  <Stack gap="sm">
                    <span className="text-sm font-medium">Sidebar panel</span>
                    <p className="text-xs text-muted-foreground">
                      Container named &quot;sidebar&quot; — children target it specifically
                      with scoped <code className="text-[10px]">@md/sidebar:</code> queries.
                    </p>
                  </Stack>
                </Container>
              </CardContent>
            </Card>
          </Grid>
        </Stack>

        {/* ━━━ COMPOSITION PATTERNS ━━━ */}
        <Stack gap="lg">
          <SectionHeader
            title="Composition Patterns"
            description="Container composes with other layouts. These are the most common patterns."
          />
          <Grid columns={2} gap="lg">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Standard page wrapper</CardTitle>
              </CardHeader>
              <CardContent>
                <Stack gap="none" className="font-mono text-xs text-primary/70">
                  <code className="block">{'<Container as="main" width="lg">'}</code>
                  <code className="block pl-4">{'<Stack gap="lg">'}</code>
                  <code className="block pl-8">{'{children}'}</code>
                  <code className="block pl-4">{'</Stack>'}</code>
                  <code className="block">{'</Container>'}</code>
                </Stack>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Full-bleed with constrained content</CardTitle>
              </CardHeader>
              <CardContent>
                <Stack gap="none" className="font-mono text-xs text-primary/70">
                  <code className="block">{'<Container width="full" section="lg" className="bg-muted">'}</code>
                  <code className="block pl-4">{'<Container width="lg">'}</code>
                  <code className="block pl-8">{'<Grid columns="auto-fit" min="20rem">'}</code>
                  <code className="block pl-12">{'...'}</code>
                  <code className="block pl-8">{'</Grid>'}</code>
                  <code className="block pl-4">{'</Container>'}</code>
                  <code className="block">{'</Container>'}</code>
                </Stack>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Narrow form layout</CardTitle>
              </CardHeader>
              <CardContent>
                <Stack gap="none" className="font-mono text-xs text-primary/70">
                  <code className="block">{'<Container width="xs" px="lg">'}</code>
                  <code className="block pl-4">{'<form>...</form>'}</code>
                  <code className="block">{'</Container>'}</code>
                </Stack>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Container-query responsive</CardTitle>
              </CardHeader>
              <CardContent>
                <Stack gap="none" className="font-mono text-xs text-primary/70">
                  <code className="block">{'<Container query="sidebar">'}</code>
                  <code className="block pl-4">{'<div className="@md/sidebar:flex-row flex flex-col">'}</code>
                  <code className="block pl-8">{'...'}</code>
                  <code className="block pl-4">{'</div>'}</code>
                  <code className="block">{'</Container>'}</code>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Stack>
      </Stack>
    </Container>
  )
}
