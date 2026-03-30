import { DataTemplate } from "@repo/ui/templates"
import { PageHeader, EmptyState } from "@repo/ui/patterns"
import { Cluster } from "@repo/ui/layouts"

const tabs = [
  { label: "All Users", active: true, count: 24 },
  { label: "Active", active: false, count: 18 },
  { label: "Inactive", active: false, count: 6 },
  { label: "Invited", active: false, count: 3 },
]

const users = [
  {
    name: "Alice Johnson",
    email: "alice@monofly-ui.com",
    role: "Admin",
    status: "Active",
    lastSeen: "2 min ago",
  },
  {
    name: "Bob Martinez",
    email: "bob@monofly-ui.com",
    role: "Editor",
    status: "Active",
    lastSeen: "1 hour ago",
  },
  {
    name: "Carol Williams",
    email: "carol@monofly-ui.com",
    role: "Viewer",
    status: "Active",
    lastSeen: "3 hours ago",
  },
  {
    name: "Dave Chen",
    email: "dave@monofly-ui.com",
    role: "Editor",
    status: "Inactive",
    lastSeen: "2 days ago",
  },
  {
    name: "Eve Rodriguez",
    email: "eve@monofly-ui.com",
    role: "Admin",
    status: "Active",
    lastSeen: "Just now",
  },
  {
    name: "Frank Lee",
    email: "frank@monofly-ui.com",
    role: "Viewer",
    status: "Invited",
    lastSeen: "—",
  },
]

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Active: "bg-green-100 text-green-800",
    Inactive: "bg-gray-100 text-gray-600",
    Invited: "bg-blue-100 text-blue-800",
  }
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${styles[status] ?? ""}`}
    >
      {status}
    </span>
  )
}

export default function DataTemplatePage() {
  return (
    <div className="h-[calc(100vh-49px)]">
      <DataTemplate
        stickyHeader
        header={
          <PageHeader
            title="Users"
            description="Manage team members and their permissions."
            actions={
              <Cluster gap="sm">
                <button className="px-3 py-1.5 rounded-md border border-border text-sm">
                  Export CSV
                </button>
                <button className="px-3 py-1.5 rounded-md bg-foreground text-background text-sm font-medium">
                  Invite User
                </button>
              </Cluster>
            }
          />
        }
        nav={
          <Cluster gap="xs">
            {tabs.map((tab) => (
              <button
                key={tab.label}
                className={
                  tab.active
                    ? "px-3 py-1.5 rounded-md bg-muted text-sm font-medium"
                    : "px-3 py-1.5 rounded-md text-sm text-muted-foreground hover:text-foreground"
                }
              >
                {tab.label}
                <span className="ml-1.5 text-xs text-muted-foreground">
                  {tab.count}
                </span>
              </button>
            ))}
          </Cluster>
        }
        filters={
          <>
            <input
              placeholder="Search users..."
              className="rounded-md border border-border px-3 py-1.5 text-sm bg-background w-64"
              readOnly
            />
            <select className="rounded-md border border-border px-3 py-1.5 text-sm bg-background">
              <option>All Roles</option>
              <option>Admin</option>
              <option>Editor</option>
              <option>Viewer</option>
            </select>
            <select className="rounded-md border border-border px-3 py-1.5 text-sm bg-background">
              <option>All Statuses</option>
              <option>Active</option>
              <option>Inactive</option>
              <option>Invited</option>
            </select>
          </>
        }
        content={
          <div className="rounded-lg border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 text-left">
                  <th className="px-4 py-3 font-medium text-muted-foreground">
                    Name
                  </th>
                  <th className="px-4 py-3 font-medium text-muted-foreground">
                    Email
                  </th>
                  <th className="px-4 py-3 font-medium text-muted-foreground">
                    Role
                  </th>
                  <th className="px-4 py-3 font-medium text-muted-foreground">
                    Status
                  </th>
                  <th className="px-4 py-3 font-medium text-muted-foreground">
                    Last Seen
                  </th>
                  <th className="px-4 py-3 font-medium text-muted-foreground" />
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.email} className="border-t border-border">
                    <td className="px-4 py-3 font-medium">{user.name}</td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {user.email}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {user.role}
                    </td>
                    <td className="px-4 py-3">
                      <StatusBadge status={user.status} />
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {user.lastSeen}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button className="text-muted-foreground hover:text-foreground text-xs">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="border-t border-border px-4 py-3 bg-muted/30 flex items-center justify-between text-sm text-muted-foreground">
              <span>Showing 1-6 of 24 users</span>
              <Cluster gap="xs">
                <button className="px-2.5 py-1 rounded border border-border text-xs">
                  Previous
                </button>
                <button className="px-2.5 py-1 rounded border border-border bg-foreground text-background text-xs">
                  1
                </button>
                <button className="px-2.5 py-1 rounded border border-border text-xs">
                  2
                </button>
                <button className="px-2.5 py-1 rounded border border-border text-xs">
                  3
                </button>
                <button className="px-2.5 py-1 rounded border border-border text-xs">
                  Next
                </button>
              </Cluster>
            </div>
          </div>
        }
      />
    </div>
  )
}
