import { Icon, Stack, Cluster } from "@repo/ui/layouts"
import { Button, Badge, Separator } from "@repo/ui/primitives"
import {
  MailIcon,
  StarIcon,
  CheckCircleIcon,
  AlertTriangleIcon,
  ArrowRightIcon,
  SettingsIcon,
  SearchIcon,
  HeartIcon,
} from "lucide-react"

export default function IconDemo() {
  return (
    <Stack gap="xl">
      <Stack gap="xs">
        <h1 className="text-2xl font-bold">Icon</h1>
        <p className="text-muted-foreground">
          Aligns an icon inline with text at the current font size. The icon
          scales automatically — no fixed pixel sizes needed.
        </p>
      </Stack>

      <Separator />

      {/* Basic usage */}
      <Stack gap="md">
        <h2 className="text-lg font-semibold">Basic alignment</h2>
        <Stack gap="sm">
          <p className="text-sm">
            <Icon><MailIcon /> Send an email to the team</Icon>
          </p>
          <p className="text-base">
            <Icon><StarIcon /> Featured project of the week</Icon>
          </p>
          <p className="text-lg">
            <Icon><CheckCircleIcon /> All tests passing</Icon>
          </p>
          <p className="text-xl">
            <Icon><AlertTriangleIcon /> Critical warning</Icon>
          </p>
        </Stack>
      </Stack>

      {/* Spacing options */}
      <Stack gap="md">
        <h2 className="text-lg font-semibold">Space prop</h2>
        <Stack gap="sm">
          {(["none", "xs", "sm", "md"] as const).map((space) => (
            <p key={space} className="text-sm">
              <Icon space={space}>
                <ArrowRightIcon /> space=&quot;{space}&quot;
              </Icon>
            </p>
          ))}
        </Stack>
      </Stack>

      {/* In context */}
      <Stack gap="md">
        <h2 className="text-lg font-semibold">In context</h2>
        <Cluster gap="sm">
          <Button variant="outline" size="sm">
            <Icon space="xs"><SettingsIcon /> Settings</Icon>
          </Button>
          <Button variant="outline" size="sm">
            <Icon space="xs"><SearchIcon /> Search</Icon>
          </Button>
          <Badge>
            <Icon space="xs"><HeartIcon /> Liked</Icon>
          </Badge>
        </Cluster>
      </Stack>

      {/* Scaling proof */}
      <Stack gap="md">
        <h2 className="text-lg font-semibold">Scales with font size</h2>
        <p className="text-muted-foreground text-sm">
          The same <code className="bg-muted px-1 py-0.5 rounded text-xs">&lt;Icon&gt;</code> component
          at different font sizes — the icon tracks automatically:
        </p>
        <Stack gap="xs">
          <span className="text-xs"><Icon><StarIcon /> text-xs</Icon></span>
          <span className="text-sm"><Icon><StarIcon /> text-sm</Icon></span>
          <span className="text-base"><Icon><StarIcon /> text-base</Icon></span>
          <span className="text-lg"><Icon><StarIcon /> text-lg</Icon></span>
          <span className="text-xl"><Icon><StarIcon /> text-xl</Icon></span>
          <span className="text-2xl"><Icon><StarIcon /> text-2xl</Icon></span>
          <span className="text-3xl"><Icon><StarIcon /> text-3xl</Icon></span>
        </Stack>
      </Stack>
    </Stack>
  )
}
