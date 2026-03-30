import { Stack, Grid } from "@repo/ui/layouts"
import { EmptyState } from "@repo/ui/patterns"
import {
  Badge,
  Button,
  Card,
  CardContent,
  Separator,
} from "@repo/ui/primitives"
import {
  InboxIcon,
  SearchIcon,
  FileIcon,
  UsersIcon,
  WifiOffIcon,
  ShieldAlertIcon,
} from "lucide-react"

export default function EmptyStateDemo() {
  return (
    <Stack gap="xl" className="flex flex-col max-w-3xl mx-auto" >
      <Stack gap="xs">
        <h1 className="text-2xl font-bold">EmptyState</h1>
        <p className="text-muted-foreground">
          Placeholder for empty lists, searches, and error states.
        </p>
      </Stack>

      <Separator />

      <Grid columns={2} gap="md">
        {/* No items */}
        <Card>
          <CardContent className="pt-6">
            <Stack gap="sm">
              <Badge variant="outline" className="self-start">No items</Badge>
              <EmptyState
                icon={<InboxIcon className="h-10 w-10" />}
                title="No messages yet"
                description="When you receive messages, they'll show up here."
                action={<Button size="sm">Compose message</Button>}
              />
            </Stack>
          </CardContent>
        </Card>

        {/* No search results */}
        <Card>
          <CardContent className="pt-6">
            <Stack gap="sm">
              <Badge variant="outline" className="self-start">Search</Badge>
              <EmptyState
                icon={<SearchIcon className="h-10 w-10" />}
                title="No results found"
                description="Try adjusting your search or filter criteria."
                action={<Button variant="outline" size="sm">Clear filters</Button>}
              />
            </Stack>
          </CardContent>
        </Card>

        {/* No files */}
        <Card>
          <CardContent className="pt-6">
            <Stack gap="sm">
              <Badge variant="outline" className="self-start">First-time use</Badge>
              <EmptyState
                icon={<FileIcon className="h-10 w-10" />}
                title="No documents"
                description="Get started by creating your first document."
                action={<Button size="sm">Create document</Button>}
                secondaryAction={
                  <Button variant="link" size="sm">Learn more</Button>
                }
              />
            </Stack>
          </CardContent>
        </Card>

        {/* No team members */}
        <Card>
          <CardContent className="pt-6">
            <Stack gap="sm">
              <Badge variant="outline" className="self-start">Invite CTA</Badge>
              <EmptyState
                icon={<UsersIcon className="h-10 w-10" />}
                title="No team members"
                description="Invite colleagues to start collaborating."
                action={<Button size="sm">Invite people</Button>}
              />
            </Stack>
          </CardContent>
        </Card>

        {/* Offline */}
        <Card>
          <CardContent className="pt-6">
            <Stack gap="sm">
              <Badge variant="outline" className="self-start">Error</Badge>
              <EmptyState
                icon={<WifiOffIcon className="h-10 w-10" />}
                title="You're offline"
                description="Check your internet connection and try again."
                action={<Button variant="outline" size="sm">Retry</Button>}
              />
            </Stack>
          </CardContent>
        </Card>

        {/* Access denied */}
        <Card>
          <CardContent className="pt-6">
            <Stack gap="sm">
              <Badge variant="outline" className="self-start">Permission</Badge>
              <EmptyState
                icon={<ShieldAlertIcon className="h-10 w-10" />}
                title="Access denied"
                description="You don't have permission to view this resource. Contact your admin."
                action={<Button variant="outline" size="sm">Request access</Button>}
              />
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Stack>
  )
}
