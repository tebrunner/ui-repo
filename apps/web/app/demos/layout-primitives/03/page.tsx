"use client"

import { useState } from "react"
import { AppTemplate } from "@repo/ui/templates"
import { PageHeader } from "@repo/ui/patterns"
import { Container, Stack, Cluster, Grid } from "@repo/ui/layouts"
import type { Gap } from "@repo/ui/layouts"
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Separator,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@repo/ui/primitives"

// ── Sidebar ──

const navItems = [
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
          {navItems.map((item) => (
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

// ── Local UI pieces for the test content ──

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
    <Badge
      asChild={!!onClick}
      variant={active ? "default" : "outline"}
      className={
        active
          ? "bg-primary/10 text-primary tracking-wide cursor-pointer"
          : "tracking-wide cursor-pointer hover:border-foreground/25 hover:text-foreground/70"
      }
    >
      {onClick ? (
        <button onClick={onClick}>{children}</button>
      ) : (
        children
      )}
    </Badge>
  )
}

function LabeledCard({
  label,
  children,
  className = "",
}: {
  label?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <Card className={`gap-0 rounded-lg py-0 ${className}`}>
      {label && (
        <CardHeader className="px-4 pt-4 pb-0">
          <CardTitle className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            {label}
          </CardTitle>
        </CardHeader>
      )}
      <CardContent className={`px-4 ${label ? "pt-2 pb-4" : "py-4"}`}>
        <Stack gap="sm">
          {children}
        </Stack>
      </CardContent>
    </Card>
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
    <Card className="gap-0 rounded-lg py-0">
      <CardContent className="px-4 py-4">
        <Stack gap="xs">
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="text-2xl font-semibold">{value}</p>
          {sub && <p className="text-xs text-muted-foreground">{sub}</p>}
        </Stack>
      </CardContent>
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
    <code className="block font-mono text-xs text-primary/70">
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
      className="border-b border-border pb-3"
    >
      <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
        {children}
      </span>
      <code className="rounded bg-muted px-2 py-0.5 font-mono text-[10px] text-primary/60">
        {comp}
      </code>
    </Cluster>
  )
}

// ── Layout test content ──

const gapOptions: Gap[] = ["xs", "sm", "md", "lg", "xl", "2xl"]

function LayoutTestContent() {
  const [activeGap, setActiveGap] = useState<Gap>("md")

  return (
    <Stack gap="xl">
      {/* ━━━ GAP SCALE ━━━ */}
      <Stack gap="lg">
        <SectionLabel comp="Stack > Grid > Card">
          Gap Scale Visualization
        </SectionLabel>
        <Grid columns={2} gap="lg">
          <LabeledCard label="Tier Map">
            <Stack gap="sm">
              <Swatch name="xs" tier="tight" twClass="w-1" />
              <Swatch name="sm" tier="tight" twClass="w-2" />
              <Swatch name="md" tier="normal" twClass="w-4" />
              <Swatch name="lg" tier="normal" twClass="w-6" />
              <Swatch name="xl" tier="loose" twClass="w-8" />
              <Swatch name="2xl" tier="loose" twClass="w-12" />
              <Swatch name="3xl" tier="loose" twClass="w-16" />
            </Stack>
          </LabeledCard>
          <LabeledCard label="Interactive Gap">
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
          </LabeledCard>
        </Grid>
      </Stack>

      {/* ━━━ CONTAINER WIDTHS ━━━ */}
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
                <span className="text-[10px] text-muted-foreground">
                  {desc}
                </span>
              </Cluster>
            </Container>
          ))}
        </Stack>
      </Stack>

      {/* ━━━ CLUSTER ━━━ */}
      <Stack gap="lg">
        <SectionLabel comp="Stack > Grid > Cluster (various)">
          Cluster Wrapping & Justify
        </SectionLabel>
        <Grid columns={2} gap="lg">
          <LabeledCard label="wrap + gap=xs">
            <Cluster gap="xs">
              {[
                "react", "typescript", "tailwind", "radix", "cva",
                "next.js", "turborepo", "pnpm", "vercel", "figma",
                "comfyui", "ableton",
              ].map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </Cluster>
          </LabeledCard>
          <LabeledCard label='justify="between"'>
            <Stack gap="md">
              <Cluster justify="between">
                <span className="text-sm font-medium">Dashboard</span>
                <Cluster gap="xs">
                  <Badge variant="secondary" className="text-[10px]">Export</Badge>
                  <Badge className="bg-primary/10 text-primary/60 text-[10px]">Settings</Badge>
                </Cluster>
              </Cluster>
              <Separator />
              <Cluster justify="between">
                <span className="text-sm font-medium">Analytics</span>
                <Cluster gap="xs">
                  <Badge variant="secondary" className="text-[10px]">7d</Badge>
                  <Badge variant="secondary" className="text-[10px]">30d</Badge>
                  <Badge className="bg-primary/10 text-primary/60 text-[10px]">90d</Badge>
                </Cluster>
              </Cluster>
            </Stack>
          </LabeledCard>
          <LabeledCard label='justify="center"' className="col-span-2">
            <Cluster justify="center" gap="lg">
              <Stack gap="none" align="center">
                <span className="text-2xl font-light">01</span>
                <span className="text-[10px] text-muted-foreground">
                  Design
                </span>
              </Stack>
              <span className="text-muted-foreground/30">→</span>
              <Stack gap="none" align="center">
                <span className="text-2xl font-light">02</span>
                <span className="text-[10px] text-muted-foreground">
                  Build
                </span>
              </Stack>
              <span className="text-muted-foreground/30">→</span>
              <Stack gap="none" align="center">
                <span className="text-2xl font-light">03</span>
                <span className="text-[10px] text-muted-foreground">
                  Ship
                </span>
              </Stack>
            </Cluster>
          </LabeledCard>
        </Grid>
      </Stack>

      {/* ━━━ GRID VARIATIONS ━━━ */}
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
              <LabeledCard key={title}>
                <span className="text-lg font-light">{title}</span>
                <span className="text-xs text-muted-foreground">{desc}</span>
              </LabeledCard>
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

      {/* ━━━ COMPOSITION CHEAT SHEET ━━━ */}
      <Stack gap="lg">
        <SectionLabel comp="Stack > Card > CodeLine">
          Composition Cheat Sheet
        </SectionLabel>
        <LabeledCard label="Standard page wrapper">
          <Stack gap="none">
            <CodeLine>{'<Container as="main" width="lg">'}</CodeLine>
            <CodeLine>{'  <Stack gap="lg">'}</CodeLine>
            <CodeLine>{"    {children}"}</CodeLine>
            <CodeLine>{"  </Stack>"}</CodeLine>
            <CodeLine>{"</Container>"}</CodeLine>
          </Stack>
        </LabeledCard>
        <LabeledCard label="Full-bleed section with constrained content">
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
        </LabeledCard>
        <LabeledCard label="Header with spaced-apart groups">
          <Stack gap="none">
            <CodeLine>{'<Cluster justify="between">'}</CodeLine>
            <CodeLine>{"  <Logo />"}</CodeLine>
            <CodeLine>{'  <Cluster gap="sm">'}</CodeLine>
            <CodeLine>{"    <NavLink />"}</CodeLine>
            <CodeLine>{"    <NavLink />"}</CodeLine>
            <CodeLine>{"  </Cluster>"}</CodeLine>
            <CodeLine>{"</Cluster>"}</CodeLine>
          </Stack>
        </LabeledCard>
      </Stack>
    </Stack>
  )
}

// ── Page ──

export default function LayoutPrimitivesPage() {
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
                <Button variant="outline" size="sm">
                  View Source
                </Button>
                <Button size="sm">
                  _scale.ts
                </Button>
              </Cluster>
            }
          />
        }
        content={<LayoutTestContent />}
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