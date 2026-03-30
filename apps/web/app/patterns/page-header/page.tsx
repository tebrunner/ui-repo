import { Stack } from "@repo/ui/layouts"
import { PageHeader } from "@repo/ui/patterns"
import {
  Badge,
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
  Button,
  Card,
  CardContent,
  Separator,
  Tabs,
  TabsList,
  TabsTrigger,
} from "@repo/ui/primitives"
import { PlusIcon, DownloadIcon, SettingsIcon } from "lucide-react"

export default function PageHeaderDemo() {
  return (
    <Stack gap="xl" className="flex flex-col max-w-3xl mx-auto" >
      <Stack gap="xs" className="flex flex-col min-w-3xl" >
        <h1 className="text-2xl font-bold">PageHeader</h1>
        <p className="text-muted-foreground">
          Title, description, optional breadcrumbs, and action buttons.
        </p>
      </Stack>

      <Separator />

      {/* Minimal */}
      <Card className="w-full">
        <CardContent className="pt-6">
          <Stack gap="sm">
            <Badge variant="outline" className="self-start">Minimal</Badge>
            <PageHeader title="Projects" />
          </Stack>
        </CardContent>
      </Card>

      {/* With description */}
      <Card className="w-full">
        <CardContent className="pt-6 w-full mx-auto max-w-4xl">
          <Stack gap="sm">
            <Badge variant="outline" className="self-start">With description</Badge>
            <PageHeader
              title="Team members"
              description="Manage who has access to this workspace."
            />
          </Stack>
        </CardContent>
      </Card>

      {/* With actions */}
      <Card className="w-full">
        <CardContent >
          <Stack gap="sm">
            <Badge variant="outline" className="self-start">With actions</Badge>
            <PageHeader
              title="Documents"
              description="All documents shared with your team."
              actions={
                <>
                  <Button variant="outline" size="sm">
                    <DownloadIcon className="h-4 w-4 mr-1" />
                    Export
                  </Button>
                  <Button size="sm">
                    <PlusIcon className="h-4 w-4 mr-1" />
                    New document
                  </Button>
                </>
              }
            />
          </Stack>
        </CardContent>
      </Card>

      {/* With breadcrumbs */}
      <Card className="w-full">
        <CardContent className="pt-6  ">
          <Stack gap="sm">
            <Badge variant="outline" className="self-start">With breadcrumbs</Badge>
            <PageHeader
              title="API keys"
              description="Create and manage API keys for your integrations."
              breadcrumb={
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">Settings</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">Developer</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>API keys</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              }
              actions={
                <>
                  <Button variant="outline" size="sm">
                    <SettingsIcon className="h-4 w-4 mr-1" />
                    Settings
                  </Button>
                  <Button size="sm">
                    <PlusIcon className="h-4 w-4 mr-1" />
                    Create key
                  </Button>
                </>
              }
            />
          </Stack>
        </CardContent>
      </Card>

      {/* Full page context */}
      <Card className="w-full">
        <CardContent className="pt-6">
          <Stack gap="sm">
            <Badge variant="outline" className="self-start">In page context</Badge>
            <Stack gap="md">
              <PageHeader
                title="Analytics"
                description="Track usage and performance metrics."
                breadcrumb={
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>Analytics</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                }
                actions={
                  <Button variant="outline" size="sm">
                    <DownloadIcon className="h-4 w-4 mr-1" />
                    Export CSV
                  </Button>
                }
              />
              <Tabs defaultValue="overview">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="traffic">Traffic</TabsTrigger>
                  <TabsTrigger value="conversions">Conversions</TabsTrigger>
                </TabsList>
              </Tabs>
              <div className="rounded-lg border border-dashed border-border p-12 text-center text-sm text-muted-foreground">
                Chart content goes here
              </div>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  )
}
