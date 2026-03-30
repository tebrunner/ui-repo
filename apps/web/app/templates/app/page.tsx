import { AppTemplate } from "@repo/ui/templates"
import { PageHeader, EmptyState } from "@repo/ui/patterns"
import {
  Skeleton,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@repo/ui/primitives"
import { Stack, Cluster, Grid } from "@repo/ui/layouts"

const navItems = [
  { label: "Dashboard", active: true },
  { label: "Projects", active: false },
  { label: "Team", active: false },
  { label: "Reports", active: false },
  { label: "Settings", active: false },
]

function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-4 border-b border-border">
        <span className="text-sm font-bold">MonoFly App</span>
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
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-foreground/10" />
          <span className="text-xs text-muted-foreground">user@monofly-ui.com</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

function StatsCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border p-4">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="text-2xl font-semibold mt-1">{value}</p>
    </div>
  )
}

export default function AppTemplatePage() {
  return (
    <div className="h-[calc(100vh-49px)]">
      <AppTemplate
        nav={<AppSidebar />}
        header={
          <PageHeader
            title="Dashboard"
            description="Overview of your workspace activity."
            actions={
              <Cluster gap="sm">
                <button className="px-3 py-1.5 rounded-md border border-border text-sm">
                  Export
                </button>
                <button className="px-3 py-1.5 rounded-md bg-foreground text-background text-sm font-medium">
                  New Project
                </button>
              </Cluster>
            }
          />
        }
        content={
          <Stack gap="lg">
            <Grid columns={4} gap="md">
              <StatsCard label="Total Projects" value="24" />
              <StatsCard label="Active Tasks" value="142" />
              <StatsCard label="Team Members" value="8" />
              <StatsCard label="Completion Rate" value="87%" />
            </Grid>

            <Stack gap="sm">
              <h3 className="text-sm font-medium">Recent Projects</h3>
              <Grid columns="auto-fit" gap="md">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="rounded-lg border p-4 space-y-3">
                    <Skeleton className="h-5 w-1/3" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-4/5" />
                    <Skeleton className="h-8 w-24" />
                  </div>
                ))}
              </Grid>
            </Stack>

            <EmptyState
              title="No recent activity"
              description="When your team starts working, activity will appear here."
              action={
                <button className="px-4 py-2 bg-foreground text-background rounded-md text-sm font-medium">
                  Invite Team
                </button>
              }
            />
          </Stack>
        }
        panel={
          <Cluster justify="between" className="text-xs text-muted-foreground">
            <span>Last synced: 2 minutes ago</span>
            <span>v1.4.2</span>
          </Cluster>
        }
      />
    </div>
  )
}
