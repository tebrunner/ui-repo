"use client"

import { useState } from "react"
import { Container, Stack, Cluster, Grid } from "../layouts"
import type { Gap } from "@repo/ui/layouts"

/*
  Layout Primitives — Test Page
  
  Drop this at apps/web/app/layout-test/page.tsx
  then hit localhost:3000/layout-test
  
  Every section uses your real layout components
  importing from packages/ui. No mocks, no copies.
  
  Fix the import paths below if your barrel exports
  differ from the paths shown above.
*/

// ── Small UI pieces (local to this test page) ──

function Tag({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode
  active?: boolean
  onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-3 py-1 text-xs font-medium tracking-wide transition-all ${
        active
          ? "border-amber-400 bg-amber-400/10 text-amber-300"
          : "border-white/10 text-white/50 hover:border-white/25 hover:text-white/70"
      }`}
    >
      {children}
    </button>
  )
}

function Card({
  label,
  children,
  className = "",
}: {
  label?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`rounded-lg border border-white/[0.06] bg-white/[0.02] p-5 ${className}`}
    >
      <Stack gap="sm">
        {label && (
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/25">
            {label}
          </span>
        )}
        {children}
      </Stack>
    </div>
  )
}

function Stat({
  value,
  label,
  sub,
}: {
  value: string
  label: string
  sub?: string
}) {
  return (
    <Card>
      <p className="text-3xl font-light tracking-tight text-white">{value}</p>
      <p className="text-sm text-white/60">{label}</p>
      {sub && <p className="text-xs text-white/30">{sub}</p>}
    </Card>
  )
}

function Swatch({
  name,
  tier,
  twClass,
}: {
  name: string
  tier: string
  twClass: string
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`h-8 rounded bg-amber-400/80 ${twClass}`}
        style={{ minWidth: "2px" }}
      />
      <Stack gap="none">
        <span className="text-xs font-medium text-white/80">{name}</span>
        <span className="text-[10px] text-white/30">
          {tier} · {twClass}
        </span>
      </Stack>
    </div>
  )
}

function CodeLine({ children }: { children: React.ReactNode }) {
  return (
    <code className="block font-mono text-xs text-amber-300/70">
      {children}
    </code>
  )
}

function SectionLabel({
  comp,
  children,
}: {
  comp: string
  children: React.ReactNode
}) {
  return (
    <Cluster
      gap="sm"
      justify="between"
      className="border-b border-white/[0.06] pb-3"
    >
      <span className="text-xs font-medium uppercase tracking-[0.15em] text-white/40">
        {children}
      </span>
      <code className="rounded bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] text-amber-400/60">
        {comp}
      </code>
    </Cluster>
  )
}

// ── Page ──

const gapOptions: Gap[] = ["xs", "sm", "md", "lg", "xl", "2xl"]

export default function LayoutTestPage() {
  const [activeGap, setActiveGap] = useState<Gap>("md")

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      {/* ━━━ HERO ━━━ */}
      <Container as="header" width="lg" section="lg">
        <Stack gap="xl" align="start">
          <Stack gap="xs">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-400/60">
              packages/ui · layout primitives
            </span>
            <h1 className="text-4xl font-light tracking-tight text-white/90">
              Spatial Vocabulary
              <br />
              <span className="text-white/30">Test Page</span>
            </h1>
          </Stack>
          <p className="max-w-[55ch] text-sm leading-relaxed text-white/40">
            Every section below is composed using your real layout primitives
            importing from packages/ui. The component composition is labeled in
            each section header.
          </p>
        </Stack>
      </Container>

      {/* ━━━ GAP SCALE — full-bleed + nested Container ━━━ */}
      <Container
        as="section"
        width="full"
        section="md"
        className="border-y border-white/[0.04] bg-white/[0.01]"
      >
        <Container width="lg">
          <Stack gap="lg">
            <SectionLabel comp='Container "full" > Container "lg" > Stack > Grid'>
              Gap Scale Visualization
            </SectionLabel>
            <Grid columns={2} gap="lg">
              <Card label="Tier Map">
                <Stack gap="sm">
                  <Swatch name="xs" tier="tight" twClass="w-1" />
                  <Swatch name="sm" tier="tight" twClass="w-2" />
                  <Swatch name="md" tier="normal" twClass="w-4" />
                  <Swatch name="lg" tier="normal" twClass="w-6" />
                  <Swatch name="xl" tier="loose" twClass="w-8" />
                  <Swatch name="2xl" tier="loose" twClass="w-12" />
                  <Swatch name="3xl" tier="loose" twClass="w-16" />
                </Stack>
              </Card>
              <Card label="Interactive Gap">
                <Stack gap="sm">
                  <Cluster gap="xs">
                    {gapOptions.map((g) => (
                      <Tag
                        key={g}
                        active={activeGap === g}
                        onClick={() => setActiveGap(g)}
                      >
                        {g}
                      </Tag>
                    ))}
                  </Cluster>
                  <div className="rounded border border-white/[0.06] bg-white/[0.02] p-4">
                    <Stack gap={activeGap}>
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="flex h-8 items-center rounded bg-amber-400/10 px-3"
                        >
                          <span className="text-xs text-amber-300/60">
                            Stack child {i}
                          </span>
                        </div>
                      ))}
                    </Stack>
                  </div>
                  <code className="text-[10px] text-white/30">
                    {'<Stack gap="' + activeGap + '">'}
                  </code>
                </Stack>
              </Card>
            </Grid>
          </Stack>
        </Container>
      </Container>

      {/* ━━━ CONTAINER WIDTHS ━━━ */}
      <Container as="section" width="lg" section="md">
        <Stack gap="lg">
          <SectionLabel comp='Container width="lg" > Stack'>
            Container Width Comparison
          </SectionLabel>
          <Stack gap="sm">
            {(
              [
                { w: "xs", label: "xs · max-w-xl · 576px", desc: "auth, narrow forms" },
                { w: "sm", label: "sm · max-w-2xl · 672px", desc: "single-column" },
                { w: "md", label: "md · max-w-4xl · 896px", desc: "docs, articles" },
                { w: "lg", label: "lg · max-w-6xl · 1152px", desc: "standard page" },
                { w: "xl", label: "xl · max-w-7xl · 1280px", desc: "wide dashboards" },
              ] as const
            ).map(({ w, label, desc }) => (
              <Container
                key={w}
                width={w}
                px="none"
                className="rounded border border-white/[0.06] bg-white/[0.02]"
              >
                <Cluster justify="between" className="px-3 py-2">
                  <code className="font-mono text-[10px] text-amber-400/60">
                    {label}
                  </code>
                  <span className="text-[10px] text-white/25">{desc}</span>
                </Cluster>
              </Container>
            ))}
          </Stack>
        </Stack>
      </Container>

      {/* ━━━ CLUSTER ━━━ */}
      <Container
        as="section"
        width="full"
        section="md"
        className="border-y border-white/[0.04] bg-white/[0.01]"
      >
        <Container width="lg">
          <Stack gap="lg">
            <SectionLabel comp="Container > Stack > Cluster (various)">
              Cluster Wrapping & Justify
            </SectionLabel>
            <Grid columns={2} gap="lg">
              <Card label="wrap + gap=xs">
                <Cluster gap="xs">
                  {[
                    "react", "typescript", "tailwind", "radix", "cva",
                    "next.js", "turborepo", "pnpm", "vercel", "figma",
                    "comfyui", "ableton",
                  ].map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </Cluster>
              </Card>
              <Card label='justify="between"'>
                <Stack gap="md">
                  <Cluster justify="between">
                    <span className="text-sm font-medium text-white/70">
                      Dashboard
                    </span>
                    <Cluster gap="xs">
                      <span className="rounded bg-white/[0.06] px-2 py-0.5 text-[10px] text-white/40">
                        Export
                      </span>
                      <span className="rounded bg-amber-400/10 px-2 py-0.5 text-[10px] text-amber-300/60">
                        Settings
                      </span>
                    </Cluster>
                  </Cluster>
                  <div className="h-px bg-white/[0.06]" />
                  <Cluster justify="between">
                    <span className="text-sm font-medium text-white/70">
                      Analytics
                    </span>
                    <Cluster gap="xs">
                      <span className="rounded bg-white/[0.06] px-2 py-0.5 text-[10px] text-white/40">
                        7d
                      </span>
                      <span className="rounded bg-white/[0.06] px-2 py-0.5 text-[10px] text-white/40">
                        30d
                      </span>
                      <span className="rounded bg-amber-400/10 px-2 py-0.5 text-[10px] text-amber-300/60">
                        90d
                      </span>
                    </Cluster>
                  </Cluster>
                </Stack>
              </Card>
              <Card label='justify="center"' className="col-span-2">
                <Cluster justify="center" gap="lg">
                  <Stack gap="none" align="center">
                    <span className="text-2xl font-light text-white/80">01</span>
                    <span className="text-[10px] text-white/30">Design</span>
                  </Stack>
                  <span className="text-white/10">→</span>
                  <Stack gap="none" align="center">
                    <span className="text-2xl font-light text-white/80">02</span>
                    <span className="text-[10px] text-white/30">Build</span>
                  </Stack>
                  <span className="text-white/10">→</span>
                  <Stack gap="none" align="center">
                    <span className="text-2xl font-light text-white/80">03</span>
                    <span className="text-[10px] text-white/30">Ship</span>
                  </Stack>
                </Cluster>
              </Card>
            </Grid>
          </Stack>
        </Container>
      </Container>

      {/* ━━━ GRID — fixed + auto-fit ━━━ */}
      <Container as="section" width="lg" section="md">
        <Stack gap="lg">
          <SectionLabel comp="Container > Stack > Grid (fixed + auto-fit)">
            Grid Variations
          </SectionLabel>

          <Stack gap="xs">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/25">
              columns=3 · gap="md"
            </span>
            <Grid columns={3} gap="md">
              <Stat value="2.4k" label="Components" sub="across 3 apps" />
              <Stat value="147ms" label="Build Time" sub="turborepo cached" />
              <Stat value="98" label="Lighthouse" sub="performance score" />
            </Grid>
          </Stack>

          <Stack gap="xs">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/25">
              columns="auto-fit" · min="15rem" · gap="lg"
            </span>
            <Grid columns="auto-fit" min="15rem" gap="lg">
              {[
                { title: "Stack", desc: "Vertical flow" },
                { title: "Cluster", desc: "Horizontal wrap" },
                { title: "Container", desc: "Width + padding" },
                { title: "Grid", desc: "Column layouts" },
              ].map(({ title, desc }) => (
                <Card key={title}>
                  <span className="text-lg font-light text-white/80">
                    {title}
                  </span>
                  <span className="text-xs text-white/30">{desc}</span>
                </Card>
              ))}
            </Grid>
          </Stack>

          <Stack gap="xs">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/25">
              columns="auto-fit" · min="12rem" · gap="sm" — dense
            </span>
            <Grid columns="auto-fit" min="12rem" gap="sm">
              {Array.from({ length: 8 }, (_, i) => (
                <div
                  key={i}
                  className="flex h-16 items-center justify-center rounded border border-white/[0.04] bg-white/[0.02]"
                >
                  <span className="font-mono text-xs text-white/20">
                    {i + 1}
                  </span>
                </div>
              ))}
            </Grid>
          </Stack>
        </Stack>
      </Container>

      {/* ━━━ SECTION SPACING — visual comparison ━━━ */}
      <Container
        as="section"
        width="full"
        className="border-t border-white/[0.04]"
      >
        <Container width="lg" px="md" className="py-6">
          <SectionLabel comp='Container section="sm|md|lg|xl"'>
            Section Spacing Scale
          </SectionLabel>
        </Container>
        {(
          [
            { size: "sm", label: "sm · py-8 · 32px", bg: "bg-amber-400/[0.02]" },
            { size: "md", label: "md · py-16 · 64px", bg: "bg-amber-400/[0.03]" },
            { size: "lg", label: "lg · py-24 · 96px", bg: "bg-amber-400/[0.04]" },
            { size: "xl", label: "xl · py-32 · 128px", bg: "bg-amber-400/[0.06]" },
          ] as const
        ).map(({ size, label, bg }) => (
          <Container
            key={size}
            as="div"
            width="full"
            section={size}
            className={`border-b border-white/[0.04] ${bg}`}
          >
            <Container width="lg">
              <Cluster justify="between">
                <code className="font-mono text-xs text-amber-400/50">
                  section=&quot;{size}&quot;
                </code>
                <span className="text-[10px] text-white/25">{label}</span>
              </Cluster>
            </Container>
          </Container>
        ))}
      </Container>

      {/* ━━━ FULL COMPOSITION — marketing section pattern ━━━ */}
      <Container
        as="section"
        width="full"
        section="lg"
        className="bg-gradient-to-b from-amber-400/[0.03] to-transparent"
      >
        <Container width="lg">
          <Stack gap="xl" align="center">
            <Stack gap="sm" align="center">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-400/50">
                Full Composition Test
              </span>
              <h2 className="text-center text-2xl font-light tracking-tight text-white/80">
                Nested Container → Stack → Grid → Cards
              </h2>
              <p className="max-w-[50ch] text-center text-sm text-white/30">
                This section uses the full-bleed nested Container pattern with
                section spacing, just like a real marketing page would.
              </p>
            </Stack>
            <Grid columns="auto-fit" min="20rem" gap="lg" className="w-full">
              <Card>
                <Stack gap="sm">
                  <span className="text-lg font-light text-white/80">
                    Spatial Vocabulary
                  </span>
                  <p className="text-xs leading-relaxed text-white/30">
                    One file, one contract. Gap, padding, container widths,
                    measure, section spacing — all typed, all constrained.
                  </p>
                  <Cluster gap="xs">
                    <Tag>_scale.ts</Tag>
                    <Tag>Record&lt;T, string&gt;</Tag>
                  </Cluster>
                </Stack>
              </Card>
              <Card>
                <Stack gap="sm">
                  <span className="text-lg font-light text-white/80">
                    Layout Owns the Gap
                  </span>
                  <p className="text-xs leading-relaxed text-white/30">
                    Children never set their own outer margin. The parent Stack,
                    Grid, or Cluster controls the space between its children.
                  </p>
                  <Cluster gap="xs">
                    <Tag>gap not margin</Tag>
                    <Tag>parent decides</Tag>
                  </Cluster>
                </Stack>
              </Card>
              <Card>
                <Stack gap="sm">
                  <span className="text-lg font-light text-white/80">
                    Composition Scales
                  </span>
                  <p className="text-xs leading-relaxed text-white/30">
                    Four primitives compose into any layout. Nest them freely —
                    each one respects the spatial contract of its parent.
                  </p>
                  <Cluster gap="xs">
                    <Tag>Stack</Tag>
                    <Tag>Cluster</Tag>
                    <Tag>Container</Tag>
                    <Tag>Grid</Tag>
                  </Cluster>
                </Stack>
              </Card>
            </Grid>
          </Stack>
        </Container>
      </Container>

      {/* ━━━ CODE REFERENCE ━━━ */}
      <Container as="section" width="md" section="md">
        <Stack gap="lg">
          <SectionLabel comp='Container width="md"'>
            Composition Cheat Sheet
          </SectionLabel>
          <Card label="Standard page wrapper" className="overflow-x-auto">
            <Stack gap="none">
              <CodeLine>{'<Container as="main" width="lg">'}</CodeLine>
              <CodeLine>{"  <Stack gap=\"lg\">"}</CodeLine>
              <CodeLine>{"    {children}"}</CodeLine>
              <CodeLine>{"  </Stack>"}</CodeLine>
              <CodeLine>{"</Container>"}</CodeLine>
            </Stack>
          </Card>
          <Card
            label="Full-bleed section with constrained content"
            className="overflow-x-auto"
          >
            <Stack gap="none">
              <CodeLine>
                {'<Container as="section" width="full" section="lg" className="bg-slate-950">'}
              </CodeLine>
              <CodeLine>{'  <Container width="lg">'}</CodeLine>
              <CodeLine>{'    <Stack gap="xl" align="center">'}</CodeLine>
              <CodeLine>
                {'      <Grid columns="auto-fit" min="20rem" gap="lg">'}
              </CodeLine>
              <CodeLine>{"        ..."}</CodeLine>
              <CodeLine>{"      </Grid>"}</CodeLine>
              <CodeLine>{"    </Stack>"}</CodeLine>
              <CodeLine>{"  </Container>"}</CodeLine>
              <CodeLine>{"</Container>"}</CodeLine>
            </Stack>
          </Card>
        </Stack>
      </Container>

      {/* ━━━ FOOTER ━━━ */}
      <Container
        as="footer"
        width="lg"
        section="sm"
        className="border-t border-white/[0.04]"
      >
        <Cluster justify="between">
          <span className="text-[10px] text-white/20">
            packages/ui · layout primitives test
          </span>
          <span className="text-[10px] text-white/20">
            _scale.ts · container · stack · cluster · grid
          </span>
        </Cluster>
      </Container>
    </div>
  )
}