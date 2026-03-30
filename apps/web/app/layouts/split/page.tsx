import { Stack, Split, Cluster, Box } from "@repo/ui/layouts"
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
  CardFooter,
  Input,
  Label,
  Separator,
  Switch,
  Textarea,
} from "@repo/ui/primitives"
import { MailIcon, BellIcon, ShieldIcon } from "lucide-react"

export default function SplitDemo() {
  return (
    <Stack gap="xl">
      <Stack gap="xs">
        <h1 className="text-2xl font-bold">Split</h1>
        <p className="text-muted-foreground">
          Two-column layouts that wrap to a single column when the container is
          too narrow. Based on the Every Layout &ldquo;Sidebar&rdquo; pattern —
          responds to the container, not the viewport.
        </p>
      </Stack>

      <Separator />

      {/* Settings page: sidebar nav + content */}
      <Card>
        <CardHeader>
          <CardTitle>Sidebar ratio</CardTitle>
          <CardDescription>
            Left side has a preferred width (15rem). When the content can&apos;t
            get 50% of the space, both columns stack.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Split ratio="sidebar" gap="lg">
            <Stack gap="xs">
              {[
                { icon: MailIcon, label: "General", active: true },
                { icon: BellIcon, label: "Notifications", active: false },
                { icon: ShieldIcon, label: "Security", active: false },
              ].map((item) => (
                <Button
                  key={item.label}
                  variant={item.active ? "secondary" : "ghost"}
                  className="justify-start"
                >
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.label}
                </Button>
              ))}
            </Stack>
            <Stack gap="md">
              <Stack gap="xs">
                <Label htmlFor="display-name">Display name</Label>
                <Input id="display-name" defaultValue="Jefferson Kidd" />
              </Stack>
              <Stack gap="xs">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="jeffersonkidd" />
              </Stack>
              <Stack gap="xs">
                <Label htmlFor="about">About</Label>
                <Textarea id="about" placeholder="Write a short bio..." />
              </Stack>
              <Button className="self-start">Update profile</Button>
            </Stack>
          </Split>
        </CardContent>
      </Card>

      {/* Half split: two equal cards */}
      <Card>
        <CardHeader>
          <CardTitle>Half ratio</CardTitle>
          <CardDescription>
            Equal columns that stack below ~40rem container width.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Split ratio="half" gap="md">
            <Card>
              <CardHeader>
                <CardTitle>Free</CardTitle>
                <CardDescription>For individuals getting started.</CardDescription>
              </CardHeader>
              <CardContent>
                <Stack gap="sm">
                  <span className="text-3xl font-bold">$0</span>
                  <span className="text-sm text-muted-foreground">per month</span>
                  <Separator />
                  {["5 projects", "1 GB storage", "Community support"].map((f) => (
                    <span key={f} className="text-sm">{f}</span>
                  ))}
                </Stack>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Get started</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <CardDescription>For teams that need more.</CardDescription>
              </CardHeader>
              <CardContent>
                <Stack gap="sm">
                  <span className="text-3xl font-bold">$29</span>
                  <span className="text-sm text-muted-foreground">per month</span>
                  <Separator />
                  {["Unlimited projects", "100 GB storage", "Priority support"].map((f) => (
                    <span key={f} className="text-sm">{f}</span>
                  ))}
                </Stack>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Upgrade</Button>
              </CardFooter>
            </Card>
          </Split>
        </CardContent>
      </Card>

      {/* Aside split: content + sidebar detail */}
      <Card>
        <CardHeader>
          <CardTitle>Aside ratio</CardTitle>
          <CardDescription>
            Content fills the left, detail panel on the right wraps below when squeezed.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Split ratio="aside" gap="lg">
            <Stack gap="md">
              <h3 className="font-semibold">Activity log</h3>
              {[
                { time: "2 min ago", text: "Deployed v2.4.1 to production" },
                { time: "1 hour ago", text: "Merged PR #342 into main" },
                { time: "3 hours ago", text: "Opened issue #87: Fix auth timeout" },
              ].map((entry) => (
                <div key={entry.time} className="flex items-center gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-foreground shrink-0" />
                  <Stack gap="none">
                    <span className="text-sm">{entry.text}</span>
                    <span className="text-xs text-muted-foreground">{entry.time}</span>
                  </Stack>
                </div>
              ))}
            </Stack>
            <Card>
              <CardContent className="pt-6">
                <Stack gap="md" align="center">
                  <Avatar className="h-16 w-16">
                    <AvatarFallback className="text-lg">JK</AvatarFallback>
                  </Avatar>
                  <Stack gap="xs" align="center">
                    <span className="font-semibold">Jefferson Kidd</span>
                    <span className="text-sm text-muted-foreground">Engineer</span>
                  </Stack>
                  <Cluster gap="sm">
                    <Badge>Admin</Badge>
                    <Badge variant="outline">Active</Badge>
                  </Cluster>
                  <div className="flex items-center gap-2">
                    <Switch id="status" defaultChecked />
                    <Label htmlFor="status" className="text-sm">Available</Label>
                  </div>
                </Stack>
              </CardContent>
            </Card>
          </Split>
        </CardContent>
      </Card>

      {/* Golden ratio */}
      <Card>
        <CardHeader>
          <CardTitle>Golden ratio</CardTitle>
          <CardDescription>
            1 : 1.618 proportions. The right column gets ~62% of the space.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Split ratio="golden" gap="md">
            <Box padding="lg" borderWidth="thin" className="rounded-lg">
              <Stack gap="sm">
                <span className="font-semibold">Narrow side</span>
                <span className="text-sm text-muted-foreground">
                  ~38% of available space
                </span>
              </Stack>
            </Box>
            <Box padding="lg" borderWidth="thin" className="rounded-lg">
              <Stack gap="sm">
                <span className="font-semibold">Wide side</span>
                <span className="text-sm text-muted-foreground">
                  ~62% of available space (golden ratio)
                </span>
              </Stack>
            </Box>
          </Split>
        </CardContent>
      </Card>

      {/* Custom sideWidth override */}
      <Card>
        <CardHeader>
          <CardTitle>Custom sideWidth</CardTitle>
          <CardDescription>
            Override the preset with <code className="bg-muted px-1 py-0.5 rounded text-xs">sideWidth=&quot;8rem&quot;</code> for
            a narrow icon rail.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Split ratio="sidebar" sideWidth="4rem" gap="md">
            <Stack gap="sm" align="center" className="pt-1">
              {[MailIcon, BellIcon, ShieldIcon].map((Icon, i) => (
                <Button key={i} variant="ghost" size="icon">
                  <Icon className="h-4 w-4" />
                </Button>
              ))}
            </Stack>
            <Box padding="md" borderWidth="thin" className="rounded-lg">
              <span className="text-sm text-muted-foreground">
                Content area with a minimal icon sidebar
              </span>
            </Box>
          </Split>
        </CardContent>
      </Card>
    </Stack>
  )
}
