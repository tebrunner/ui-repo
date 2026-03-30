import { Stack, Grid } from "@repo/ui/layouts"
import { SectionHeader } from "@repo/ui/patterns"
import {
  Badge,
  Button,
  Card,
  CardContent,
  Separator,
  Skeleton,
} from "@repo/ui/primitives"
import { PlusIcon, ArrowRightIcon } from "lucide-react"

export default function SectionHeaderDemo() {
  return (
    <Stack gap="xl" className="flex flex-col max-w-3xl mx-auto">
      <Stack gap="xs">
        <h1 className="text-2xl font-bold">SectionHeader</h1>
        <p className="text-muted-foreground">
          In-page section heading with optional description and trailing action.
        </p>
      </Stack>

      <Separator />

      {/* Minimal */}
      <Card>
        <CardContent className="pt-6">
          <Stack gap="sm">
            <Badge variant="outline" className="self-start">Minimal</Badge>
            <SectionHeader title="Recent projects" />
            <Grid columns={3} gap="md">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="rounded-lg border p-4">
                  <Stack gap="sm">
                    <Skeleton className="h-5 w-1/3" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-4/5" />
                  </Stack>
                </div>
              ))}
            </Grid>
          </Stack>
        </CardContent>
      </Card>

      {/* With description */}
      <Card>
        <CardContent className="pt-6">
          <Stack gap="sm">
            <Badge variant="outline" className="self-start">With description</Badge>
            <SectionHeader
              title="Team members"
              description="People with access to this project."
            />
            <Stack gap="sm">
              {["Alice Chen", "Bob Martinez", "Carol Smith"].map((name) => (
                <div key={name} className="flex items-center gap-3 rounded-lg border p-3">
                  <div className="h-8 w-8 rounded-full bg-muted" />
                  <span className="text-sm">{name}</span>
                </div>
              ))}
            </Stack>
          </Stack>
        </CardContent>
      </Card>

      {/* With action */}
      <Card>
        <CardContent className="pt-6">
          <Stack gap="sm">
            <Badge variant="outline" className="self-start">With action</Badge>
            <SectionHeader
              title="Notifications"
              action={
                <Button variant="ghost" size="sm">
                  View all
                  <ArrowRightIcon className="h-4 w-4 ml-1" />
                </Button>
              }
            />
            <Stack gap="sm">
              {["New comment on PR #42", "Build succeeded", "Review requested"].map((msg) => (
                <div key={msg} className="rounded-lg border p-3 text-sm">
                  {msg}
                </div>
              ))}
            </Stack>
          </Stack>
        </CardContent>
      </Card>

      {/* With description and action */}
      <Card>
        <CardContent className="pt-6">
          <Stack gap="sm">
            <Badge variant="outline" className="self-start">Full</Badge>
            <SectionHeader
              title="API keys"
              description="Keys for accessing the REST API."
              action={
                <Button size="sm">
                  <PlusIcon className="h-4 w-4 mr-1" />
                  Create key
                </Button>
              }
            />
            <div className="rounded-lg border border-dashed p-8 text-center text-sm text-muted-foreground">
              Table content goes here
            </div>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  )
}
