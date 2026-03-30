import { Imposter, Stack, Box, Center } from "@repo/ui/layouts"
import { Badge, Button, Separator } from "@repo/ui/primitives"

export default function ImposterDemo() {
  return (
    <Stack gap="xl">
      <Stack gap="xs">
        <h1 className="text-2xl font-bold">Imposter</h1>
        <p className="text-muted-foreground">
          A positioned overlay that breaks out of normal flow. Use for
          floating actions, notification badges, corner-anchored UI.
        </p>
      </Stack>

      <Separator />

      {/* Placement grid */}
      <Stack gap="md">
        <h2 className="text-lg font-semibold">Placements</h2>
        <div className="grid grid-cols-3 gap-6">
          {(
            [
              "top-left",
              "top-center",
              "top-right",
              "center",
              "center",
              "center",
              "bottom-left",
              "bottom-center",
              "bottom-right",
            ] as const
          )
            .filter((_, i) => [0, 1, 2, 6, 7, 8].includes(i))
            .map((placement) => (
              <div
                key={placement}
                className="relative h-32 rounded-lg border border-border bg-muted/30"
              >
                <Imposter placement={placement} margin="sm">
                  <Badge variant="secondary" className="text-xs">
                    {placement}
                  </Badge>
                </Imposter>
              </div>
            ))}
        </div>
      </Stack>

      {/* Center placement */}
      <Stack gap="md">
        <h2 className="text-lg font-semibold">Center overlay</h2>
        <div className="relative h-48 rounded-lg border border-border bg-muted/20">
          <Center className="h-full">
            <span className="text-sm text-muted-foreground">Background content</span>
          </Center>
          <Imposter placement="center">
            <Box padding="lg" borderWidth="thin" className="rounded-lg bg-background shadow-lg">
              <Stack gap="sm" align="center">
                <span className="font-semibold">Confirm action?</span>
                <span className="text-sm text-muted-foreground">
                  This cannot be undone.
                </span>
                <Button size="sm">Confirm</Button>
              </Stack>
            </Box>
          </Imposter>
        </div>
      </Stack>

      {/* FAB example */}
      <Stack gap="md">
        <h2 className="text-lg font-semibold">Floating action button</h2>
        <div className="relative h-64 rounded-lg border border-border bg-muted/10 overflow-hidden">
          <Stack gap="sm" className="p-4">
            {Array.from({ length: 5 }, (_, i) => (
              <div key={i} className="h-8 rounded bg-muted/50" />
            ))}
          </Stack>
          <Imposter placement="bottom-right" margin="md">
            <Button className="rounded-full size-12 shadow-lg">
              <span className="text-lg">+</span>
            </Button>
          </Imposter>
        </div>
      </Stack>

      {/* Notification badge */}
      <Stack gap="md">
        <h2 className="text-lg font-semibold">Notification badge</h2>
        <div className="relative inline-flex">
          <Button variant="outline">Inbox</Button>
          <Imposter placement="top-right" className="-translate-y-1/2 translate-x-1/2">
            <span className="flex size-5 items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-white">
              3
            </span>
          </Imposter>
        </div>
      </Stack>
    </Stack>
  )
}
