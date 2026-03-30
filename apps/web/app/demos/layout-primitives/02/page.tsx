"use client"

import { useState } from "react"
import { AppTemplate } from "@repo/ui/templates"
import { PageHeader } from "@repo/ui/patterns"
import { Container, Stack, Cluster, Grid } from "@repo/ui/layouts"
import type { Gap } from "@repo/ui/layouts"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@repo/ui/primitives"

/*
  apps/web/app/layout-test/page.tsx

  Two views of the same content:
    - Standalone: full-page layout using Container section spacing
    - Template:   same content inside AppTemplate's content slot

  Toggle between them to see how the layout primitives
  compose in both contexts. The content components are
  shared — only the outer shell changes.
*/

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Shared UI pieces (local to this test page)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

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
          ? "border-primary bg-primary/10 text-primary"
          : "border-border text-muted-foreground hover:border-foreground/25 hover:text-foreground/70"
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
    <div className={`rounded-lg border border-border bg-card p-4 ${className}`}>
      <Stack gap="sm">
        {label && (
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
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
    <div className="rounded-lg border border-border p-4">
      <Stack gap="xs">
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="text-2xl font-semibold">{value}</p>
        {sub && <p className="text-xs text-muted-foreground">{sub}</p>}
      </Stack>
    </div>
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
    <Cluster gap="sm" wrap={false}>
      <div
        className={`h-8 rounded bg-primary/80 ${twClass}`}
        style={{ minWidth: "2px" }}
      />
      <Stack gap="none">
        <span className="text-xs font-medium">{name}</span>
        <span className="text-[10px] text-muted-foreground">
          {tier} · {twClass}
        </span>
      </Stack>
    </Cluster>
  )
}

function CodeLine({ children }: { children: React.ReactNode }) {
  return (
    <code className="block font-mono text-xs text-primary/70">{children}</code>
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
    <Cluster gap="sm" justify="between" className="border-b border-border pb-3">
      <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
        {children}
      </span>
      <code className="rounded bg-muted px-2 py-0.5 font-mono text-[10px] text-primary/60">
        {comp}
      </code>
    </Cluster>
  )
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Shared content sections
//
// These are the actual test blocks. Both views
// render them — the standalone view wraps them
// in Container sections, the template view
// places them inside AppTemplate's content slot.
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const gapOptions: Gap[] = ["xs", "sm", "md", "lg", "xl", "2xl"]

function GapScaleSection({
  activeGap,
  setActiveGap,
}: {
  activeGap: Gap
  setActiveGap: (g: Gap) => void
}) {
  return (
    <Stack gap="lg">
      <SectionLabel comp="Stack > Grid > Card">
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
            <div className="rounded border border-border bg-muted/30 p-4">
              <Stack gap={activeGap}>
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="flex h-8 items-center rounded bg-primary/10 px-4"
                  >
                    <span className="text-xs text-primary/60">
                      Stack child {i}
                    </span>
                  </div>
                ))}
              </Stack>
            </div>
            <code className="text-[10px] text-muted-foreground">
              {'<Stack gap="' + activeGap + '">'}
            </code>
          </Stack>
        </Card>
      </Grid>
    </Stack>
  )
}

function ContainerWidthsSection() {
  return (
    <Stack gap="lg">
      <SectionLabel comp="Stack > Container (various widths)">
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
            className="rounded border border-border bg-muted/20"
          >
            <Cluster justify="between" className="px-4 py-2">
              <code className="font-mono text-[10px] text-primary/60">
                {label}
              </code>
              <span className="text-[10px] text-muted-foreground">{desc}</span>
            </Cluster>
          </Container>
        ))}
      </Stack>
    </Stack>
  )
}

function ClusterSection() {
  return (
    <Stack gap="lg">
      <SectionLabel comp="Stack > Grid > Cluster (various)">
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
              <span className="text-sm font-medium">Dashboard</span>
              <Cluster gap="xs">
                <span className="rounded bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">
                  Export
                </span>
                <span className="rounded bg-primary/10 px-2 py-0.5 text-[10px] text-primary/60">
                  Settings
                </span>
              </Cluster>
            </Cluster>
            <div className="h-px bg-border" />
            <Cluster justify="between">
              <span className="text-sm font-medium">Analytics</span>
              <Cluster gap="xs">
                <span className="rounded bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">
                  7d
                </span>
                <span className="rounded bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">
                  30d
                </span>
                <span className="rounded bg-primary/10 px-2 py-0.5 text-[10px] text-primary/60">
                  90d
                </span>
              </Cluster>
            </Cluster>
          </Stack>
        </Card>
        <Card label='justify="center"' className="col-span-2">
          <Cluster justify="center" gap="lg">
            <Stack gap="none" align="center">
              <span className="text-2xl font-light">01</span>
              <span className="text-[10px] text-muted-foreground">Design</span>
            </Stack>
            <span className="text-muted-foreground/30">→</span>
            <Stack gap="none" align="center">
              <span className="text-2xl font-light">02</span>
              <span className="text-[10px] text-muted-foreground">Build</span>
            </Stack>
            <span className="text-muted-foreground/30">→</span>
            <Stack gap="none" align="center">
              <span className="text-2xl font-light">03</span>
              <span className="text-[10px] text-muted-foreground">Ship</span>
            </Stack>
          </Cluster>
        </Card>
      </Grid>
    </Stack>
  )
}

function GridSection() {
  return (
    <Stack gap="lg">
      <SectionLabel comp="Stack > Grid (fixed + auto-fit)">
        Grid Variations
      </SectionLabel>

      <Stack gap="xs">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
          columns=3 · gap="md"
        </span>
        <Grid columns={3} gap="md">
          <Stat value="2.4k" label="Components" sub="across 3 apps" />
          <Stat value="147ms" label="Build Time" sub="turborepo cached" />
          <Stat value="98" label="Lighthouse" sub="performance score" />
        </Grid>
      </Stack>

      <Stack gap="xs">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
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
              <span className="text-lg font-light">{title}</span>
              <span className="text-xs text-muted-foreground">{desc}</span>
            </Card>
          ))}
        </Grid>
      </Stack>

      <Stack gap="xs">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
          columns="auto-fit" · min="12rem" · gap="sm" — dense
        </span>
        <Grid columns="auto-fit" min="12rem" gap="sm">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="flex h-16 items-center justify-center rounded border border-border bg-muted/20"
            >
              <span className="font-mono text-xs text-muted-foreground">
                {i + 1}
              </span>
            </div>
          ))}
        </Grid>
      </Stack>
    </Stack>
  )
}

function SectionSpacingSection() {
  return (
    <Stack gap="lg">
      <SectionLabel comp='Container section="sm|md|lg|xl"'>
        Section Spacing Scale
      </SectionLabel>
      <Stack gap="none">
        {(
          [
            { size: "sm", label: "sm · py-8 · 32px" },
            { size: "md", label: "md · py-16 · 64px" },
            { size: "lg", label: "lg · py-24 · 96px" },
            { size: "xl", label: "xl · py-32 · 128px" },
          ] as const
        ).map(({ size, label }, i) => (
          <Container
            key={size}
            width="full"
            px="none"
            section={size}
            className={`border-b border-border ${
              ["bg-primary/[0.02]", "bg-primary/[0.03]", "bg-primary/[0.05]", "bg-primary/[0.07]"][i]
            }`}
          >
            <Cluster justify="between">
              <code className="font-mono text-xs text-primary/50">
                section=&quot;{size}&quot;
              </code>
              <span className="text-[10px] text-muted-foreground">{label}</span>
            </Cluster>
          </Container>
        ))}
      </Stack>
    </Stack>
  )
}

function CheatSheetSection() {
  return (
    <Stack gap="lg">
      <SectionLabel comp="Stack > Card > CodeLine">
        Composition Cheat Sheet
      </SectionLabel>
      <Card label="Standard page wrapper">
        <Stack gap="none">
          <CodeLine>{'<Container as="main" width="lg">'}</CodeLine>
          <CodeLine>{'  <Stack gap="lg">'}</CodeLine>
          <CodeLine>{"    {children}"}</CodeLine>
          <CodeLine>{"  </Stack>"}</CodeLine>
          <CodeLine>{"</Container>"}</CodeLine>
        </Stack>
      </Card>
      <Card label="Full-bleed section with constrained content">
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
      <Card label="Header with spaced-apart groups">
        <Stack gap="none">
          <CodeLine>{'<Cluster justify="between">'}</CodeLine>
          <CodeLine>{"  <Logo />"}</CodeLine>
          <CodeLine>{'  <Cluster gap="sm">'}</CodeLine>
          <CodeLine>{"    <NavLink />"}</CodeLine>
          <CodeLine>{"    <NavLink />"}</CodeLine>
          <CodeLine>{"  </Cluster>"}</CodeLine>
          <CodeLine>{"</Cluster>"}</CodeLine>
        </Stack>
      </Card>
    </Stack>
  )
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Template view — content inside AppTemplate
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const sidebarNav = [
  { label: "Overview", active: false },
  { label: "Layout Primitives", active: true },
  { label: "Tokens", active: false },
  { label: "Components", active: false },
  { label: "Patterns", active: false },
]

function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-4 border-b border-border">
        <span className="text-sm font-bold">MonoFly UI</span>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          {sidebarNav.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton isActive={item.active}>
                {item.label}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t border-border">
        <Cluster gap="sm" wrap={false}>
          <div className="h-7 w-7 rounded-full bg-foreground/10" />
          <span className="text-xs text-muted-foreground">
            user@monofly-ui.com
          </span>
        </Cluster>
      </SidebarFooter>
    </Sidebar>
  )
}

function TemplateView({
  activeGap,
  setActiveGap,
  onSwitch,
}: {
  activeGap: Gap
  setActiveGap: (g: Gap) => void
  onSwitch: () => void
}) {
  return (
    <div className="h-[calc(100vh-49px)]">
      <AppTemplate
        nav={<AppSidebar />}
        header={
          <PageHeader
            title="Layout Primitives"
            description="Spatial vocabulary test — Container, Stack, Cluster, Grid composing through _scale.ts tokens."
            actions={
              <Cluster gap="sm">
                <button
                  onClick={onSwitch}
                  className="rounded-md border border-border px-4 py-1.5 text-sm"
                >
                  Standalone View
                </button>
                <button className="rounded-md bg-foreground px-4 py-1.5 text-sm font-medium text-background">
                  _scale.ts
                </button>
              </Cluster>
            }
          />
        }
        content={
          <Stack gap="xl">
            <GapScaleSection activeGap={activeGap} setActiveGap={setActiveGap} />
            <ContainerWidthsSection />
            <ClusterSection />
            <GridSection />
            <SectionSpacingSection />
            <CheatSheetSection />
          </Stack>
        }
        panel={
          <Cluster justify="between" className="text-xs text-muted-foreground">
            <span>packages/ui · layout primitives</span>
            <span>_scale.ts · container · stack · cluster · grid</span>
          </Cluster>
        }
      />
    </div>
  )
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Standalone view — full-page Container layout
//
// Same content, but composed using Container
// section spacing instead of AppTemplate.
// Exercises the full-bleed nesting pattern.
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function StandaloneView({
  activeGap,
  setActiveGap,
  onSwitch,
}: {
  activeGap: Gap
  setActiveGap: (g: Gap) => void
  onSwitch: () => void
}) {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <Container as="header" width="lg" section="lg">
        <Stack gap="xl" align="start">
          <Stack gap="xs">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/60">
              packages/ui · layout primitives
            </span>
            <h1 className="text-4xl font-light tracking-tight">
              Spatial Vocabulary
              <br />
              <span className="text-muted-foreground">Test Page</span>
            </h1>
          </Stack>
          <Cluster gap="sm">
            <p className="max-w-[55ch] text-sm leading-relaxed text-muted-foreground">
              Standalone full-page view. Same content as the template view,
              composed with Container section spacing instead of AppTemplate.
            </p>
            <button
              onClick={onSwitch}
              className="shrink-0 rounded-md border border-border px-4 py-1.5 text-sm"
            >
              Template View
            </button>
          </Cluster>
        </Stack>
      </Container>

      {/* Gap Scale — full-bleed section */}
      <Container
        as="section"
        width="full"
        section="md"
        className="border-y border-border bg-muted/30"
      >
        <Container width="lg">
          <GapScaleSection activeGap={activeGap} setActiveGap={setActiveGap} />
        </Container>
      </Container>

      {/* Container Widths */}
      <Container as="section" width="lg" section="md">
        <ContainerWidthsSection />
      </Container>

      {/* Cluster — full-bleed section */}
      <Container
        as="section"
        width="full"
        section="md"
        className="border-y border-border bg-muted/30"
      >
        <Container width="lg">
          <ClusterSection />
        </Container>
      </Container>

      {/* Grid */}
      <Container as="section" width="lg" section="md">
        <GridSection />
      </Container>

      {/* Section Spacing */}
      <Container
        as="section"
        width="full"
        section="md"
        className="border-y border-border bg-muted/30"
      >
        <Container width="lg">
          <SectionSpacingSection />
        </Container>
      </Container>

      {/* Cheat Sheet — narrower container */}
      <Container as="section" width="md" section="md">
        <CheatSheetSection />
      </Container>

      {/* Footer */}
      <Container
        as="footer"
        width="lg"
        section="sm"
        className="border-t border-border"
      >
        <Cluster justify="between" className="text-xs text-muted-foreground">
          <span>packages/ui · layout primitives</span>
          <span>_scale.ts · container · stack · cluster · grid</span>
        </Cluster>
      </Container>
    </div>
  )
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Page — toggle between views
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export default function LayoutTestPage() {
  const [view, setView] = useState<"template" | "standalone">("template")
  const [activeGap, setActiveGap] = useState<Gap>("md")

  const toggle = () =>
    setView((v) => (v === "template" ? "standalone" : "template"))

  return view === "template" ? (
    <TemplateView
      activeGap={activeGap}
      setActiveGap={setActiveGap}
      onSwitch={toggle}
    />
  ) : (
    <StandaloneView
      activeGap={activeGap}
      setActiveGap={setActiveGap}
      onSwitch={toggle}
    />
  )
}