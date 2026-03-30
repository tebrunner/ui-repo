import { Stack } from "@repo/ui/layouts"
import { FormSection } from "@repo/ui/patterns"
import {
  Badge,
  Button,
  Card,
  CardContent,
  Input,
  Label,
  Separator,
  Switch,
  Textarea,
} from "@repo/ui/primitives"

export default function FormSectionDemo() {
  return (
    <Stack gap="xl" className="flex flex-col max-w-3xl mx-auto">
      <Stack gap="xs">
        <h1 className="text-2xl font-bold">FormSection</h1>
        <p className="text-muted-foreground">
          Two-column settings layout — label group on the left, form fields on the right. Stacks vertically on narrow containers.
        </p>
      </Stack>

      <Separator />

      {/* Basic */}
      <Card>
        <CardContent className="pt-6">
          <Stack gap="sm">
            <Badge variant="outline" className="self-start">Basic</Badge>
            <FormSection
              title="Display name"
              description="This is how your name appears to other users."
            >
              <Input defaultValue="Jefferson Kidd" />
            </FormSection>
          </Stack>
        </CardContent>
      </Card>

      {/* Multiple fields */}
      <Card>
        <CardContent className="pt-6">
          <Stack gap="sm">
            <Badge variant="outline" className="self-start">Multiple fields</Badge>
            <FormSection
              title="Profile"
              description="Public information about your account."
            >
              <Stack gap="md">
                <Stack gap="xs">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="Jefferson Kidd" />
                </Stack>
                <Stack gap="xs">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="jeff@example.com" />
                </Stack>
                <Stack gap="xs">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea id="bio" rows={3} placeholder="Tell us about yourself..." />
                </Stack>
              </Stack>
            </FormSection>
          </Stack>
        </CardContent>
      </Card>

      {/* Settings page composition */}
      <Card>
        <CardContent className="pt-6">
          <Stack gap="sm">
            <Badge variant="outline" className="self-start">Settings page</Badge>
            <Stack gap="lg">
              <FormSection
                title="Notifications"
                description="Choose when you want to be notified."
              >
                <Stack gap="md">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-notifs">Email notifications</Label>
                    <Switch id="email-notifs" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="push-notifs">Push notifications</Label>
                    <Switch id="push-notifs" />
                  </div>
                </Stack>
              </FormSection>

              <Separator />

              <FormSection
                title="Danger zone"
                description="Irreversible actions for your account."
              >
                <Button variant="destructive" size="sm">Delete account</Button>
              </FormSection>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  )
}
