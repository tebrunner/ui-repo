import Link from "next/link"
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
import { PageHeader, SectionHeader } from "@repo/ui/patterns"
import {
  PanelLeftIcon,
  LockIcon,
  LayoutDashboardIcon,
  TableIcon,
  GlobeIcon,
  LinkIcon,
} from "lucide-react"

// ── Template data ──

const templates = [
  {
    href: "/templates/app",
    title: "AppTemplate",
    description: "Sidebar + header + content shell for admin and SaaS apps",
    icon: PanelLeftIcon,
    slots: ["nav", "header", "content", "panel?"],
    layouts: ["SidebarProvider", "SidebarInset", "Stack", "Container"],
    tier: "sidebar",
  },
  {
    href: "/templates/dashboard",
    title: "DashboardTemplate",
    description: "Data-heavy page with sidebar, stat cards, and charts",
    icon: LayoutDashboardIcon,
    slots: ["nav", "header", "cards?", "chart?", "content?"],
    layouts: ["SidebarProvider", "SidebarInset", "Stack", "Container"],
    tier: "sidebar",
  },
  {
    href: "/templates/data",
    title: "DataTemplate",
    description: "Header + filters + scrollable table content",
    icon: TableIcon,
    slots: ["header", "nav?", "filters?", "content", "stickyHeader?"],
    layouts: ["Stack", "Cluster", "Container"],
    tier: "content",
  },
  {
    href: "/templates/marketing",
    title: "MarketingTemplate",
    description: "Sticky nav + content sections + footer",
    icon: GlobeIcon,
    slots: ["nav", "children", "footer?"],
    layouts: ["Stack", "Center", "Cluster", "Container"],
    tier: "content",
  },
  {
    href: "/templates/auth",
    title: "AuthTemplate",
    description: "Centered card on full-screen background for login and signup",
    icon: LockIcon,
    slots: ["logo?", "children", "footer?", "maxWidth?"],
    layouts: ["Cover", "Stack", "Center", "Container"],
    tier: "fullscreen",
  },
  {
    href: "/templates/link-in-bio",
    title: "LinkInBioTemplate",
    description: "Single-page link tree with avatar and social links",
    icon: LinkIcon,
    slots: ["avatar?", "heading", "description?", "socialLinks?", "links?", "background?"],
    layouts: ["Cover", "Center", "Container", "Stack", "Cluster"],
    tier: "fullscreen",
  },
]

const tiers: { key: string; label: string; badge: "default" | "secondary" | "outline"; description: string }[] = [
  { key: "sidebar", label: "Sidebar-based", badge: "default", description: "SidebarProvider + SidebarInset shell — for apps with persistent navigation" },
  { key: "content", label: "Content-focused", badge: "secondary", description: "Stack/Center root — for marketing pages, docs, and data views" },
  { key: "fullscreen", label: "Full-screen", badge: "outline", description: "Cover for viewport centering — for auth flows and single-page layouts" },
]

// ── Page ──

export default function TemplatesIndex() {
  return (
    <Container width="lg" className="py-6">
      <Stack gap="xl">
        <PageHeader
          title="Templates"
          description="6 full-page shells with named slots. Templates compose layouts internally — they control where nav, header, content, and footer go. Consumers fill the slots."
        />

        {/* ━━━ HOW TEMPLATES WORK ━━━ */}
        <Stack gap="lg">
          <SectionHeader
            title="Anatomy"
            description="Every template follows the same contract: named ReactNode slots, layout primitives for structure, no visual opinions (colors, borders, typography)."
          />

          <Grid columns={3} gap="md">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Named slots</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  Props like <code className="text-[10px]">nav</code>,{" "}
                  <code className="text-[10px]">header</code>,{" "}
                  <code className="text-[10px]">content</code> accept ReactNode.
                  The template decides where each slot renders.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Layout primitives</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  Internally uses Stack, Container, Cover, Center, Cluster,
                  and SidebarProvider — all sharing _scale.ts tokens for
                  consistent spacing.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">No visual opinions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  Templates control structure only. Colors, borders, and
                  typography come from the primitives and tokens you pass
                  into each slot.
                </p>
              </CardContent>
            </Card>
          </Grid>
        </Stack>

        <Separator />

        {/* ━━━ ALL TEMPLATES BY TIER ━━━ */}
        <Stack gap="lg">
          <SectionHeader
            title="All 6 Templates"
            description="Grouped by shell type — sidebar-based, content-focused, and full-screen."
          />

          {tiers.map((tier) => {
            const items = templates.filter((t) => t.tier === tier.key)
            return (
              <Stack key={tier.key} gap="md">
                <Cluster gap="sm" align="baseline">
                  <Badge variant={tier.badge} className="text-xs">
                    {tier.label}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{tier.description}</span>
                </Cluster>

                <Grid columns={items.length === 1 ? 1 : 2} gap="md">
                  {items.map((t) => (
                    <Link key={t.href} href={t.href} className="no-underline">
                      <Card className="h-full hover:border-foreground/30 transition-colors">
                        <CardHeader>
                          <Cluster justify="between" align="start">
                            <Stack gap="xs">
                              <Cluster gap="sm" align="center" wrap={false}>
                                <t.icon className="h-4 w-4 text-muted-foreground" />
                                <CardTitle>{t.title}</CardTitle>
                              </Cluster>
                              <CardDescription>{t.description}</CardDescription>
                            </Stack>
                          </Cluster>
                        </CardHeader>
                        <CardContent>
                          <Stack gap="sm">
                            <Stack gap="xs">
                              <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                                Slots
                              </span>
                              <Cluster gap="xs">
                                {t.slots.map((slot) => (
                                  <Badge
                                    key={slot}
                                    variant="outline"
                                    className="font-mono text-[10px]"
                                  >
                                    {slot}
                                  </Badge>
                                ))}
                              </Cluster>
                            </Stack>
                            <Stack gap="xs">
                              <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                                Layouts used
                              </span>
                              <Cluster gap="xs">
                                {t.layouts.map((layout) => (
                                  <Badge
                                    key={layout}
                                    variant="secondary"
                                    className="text-[10px]"
                                  >
                                    {layout}
                                  </Badge>
                                ))}
                              </Cluster>
                            </Stack>
                          </Stack>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </Grid>
              </Stack>
            )
          })}
        </Stack>

        <Separator />

        {/* ━━━ COMPOSITION PATTERN ━━━ */}
        <Stack gap="lg">
          <SectionHeader
            title="Usage Pattern"
            description="Templates are consumed in Next.js pages. The page fills the slots, the template handles structure."
          />

          <Grid columns={2} gap="lg">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Sidebar app</CardTitle>
              </CardHeader>
              <CardContent>
                <Stack gap="none" className="font-mono text-xs text-primary/70">
                  <code className="block">{'<AppTemplate'}</code>
                  <code className="block pl-4">{'nav={<AppSidebar />}'}</code>
                  <code className="block pl-4">{'header={<Breadcrumbs />}'}</code>
                  <code className="block pl-4">{'content={<DataTable />}'}</code>
                  <code className="block pl-4">{'panel={<StatusBar />}'}</code>
                  <code className="block">{'/>'}</code>
                </Stack>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Marketing page</CardTitle>
              </CardHeader>
              <CardContent>
                <Stack gap="none" className="font-mono text-xs text-primary/70">
                  <code className="block">{'<MarketingTemplate'}</code>
                  <code className="block pl-4">{'nav={<MarketingNav />}'}</code>
                  <code className="block pl-4">{'footer={<MarketingFooter />}'}</code>
                  <code className="block">{'>'}</code>
                  <code className="block pl-4">{'<Hero />'}</code>
                  <code className="block pl-4">{'<Features />'}</code>
                  <code className="block pl-4">{'<CTA />'}</code>
                  <code className="block">{'</MarketingTemplate>'}</code>
                </Stack>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Auth flow</CardTitle>
              </CardHeader>
              <CardContent>
                <Stack gap="none" className="font-mono text-xs text-primary/70">
                  <code className="block">{'<AuthTemplate'}</code>
                  <code className="block pl-4">{'logo={<Logo />}'}</code>
                  <code className="block pl-4">{'footer={<LegalLinks />}'}</code>
                  <code className="block">{'>'}</code>
                  <code className="block pl-4">{'<LoginForm />'}</code>
                  <code className="block">{'</AuthTemplate>'}</code>
                </Stack>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Link-in-bio</CardTitle>
              </CardHeader>
              <CardContent>
                <Stack gap="none" className="font-mono text-xs text-primary/70">
                  <code className="block">{'<LinkInBioTemplate'}</code>
                  <code className="block pl-4">{'avatar={<Avatar />}'}</code>
                  <code className="block pl-4">{'heading={<h2>Name</h2>}'}</code>
                  <code className="block pl-4">{'description={<p>Bio</p>}'}</code>
                  <code className="block pl-4">{'socialLinks={<>...</>}'}</code>
                  <code className="block pl-4">{'links={<>...</>}'}</code>
                  <code className="block pl-4">{'background={<>...</>}'}</code>
                  <code className="block">{'/>'}</code>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Stack>
      </Stack>
    </Container>
  )
}
