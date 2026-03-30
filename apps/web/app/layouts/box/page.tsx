import { Box } from "@repo/ui/layouts"
import { Stack, Cluster } from "@repo/ui/layouts"
import { Badge, Button, Separator } from "@repo/ui/primitives"

export default function BoxDemo() {
  return (
    <Stack gap="xl">
      <Stack gap="xs">
        <h1 className="text-2xl font-bold">Box</h1>
        <p className="text-muted-foreground">
          The most fundamental layout primitive. Applies consistent padding
          and an optional border. Everything goes in a Box.
        </p>
      </Stack>

      <Separator />

      {/* Padding scale */}
      <Stack gap="md">
        <h2 className="text-lg font-semibold">Padding scale</h2>
        <Cluster gap="md" align="start">
          {(["xs", "sm", "md", "lg", "xl"] as const).map((p) => (
            <Box key={p} padding={p} borderWidth="thin" className="rounded-md">
              <span className="text-sm font-mono text-muted-foreground">
                padding=&quot;{p}&quot;
              </span>
            </Box>
          ))}
        </Cluster>
      </Stack>

      {/* Border widths */}
      <Stack gap="md">
        <h2 className="text-lg font-semibold">Border widths</h2>
        <Cluster gap="md">
          <Box borderWidth="none" padding="md" className="rounded-md bg-muted">
            <span className="text-sm">none</span>
          </Box>
          <Box borderWidth="thin" padding="md" className="rounded-md">
            <span className="text-sm">thin</span>
          </Box>
          <Box borderWidth="thick" padding="md" className="rounded-md">
            <span className="text-sm">thick</span>
          </Box>
        </Cluster>
      </Stack>

      {/* Inverted */}
      <Stack gap="md">
        <h2 className="text-lg font-semibold">Inverted</h2>
        <Cluster gap="md">
          <Box padding="md" invert className="rounded-md">
            <span className="text-sm font-medium">Dark on light</span>
          </Box>
          <Box padding="lg" invert className="rounded-lg">
            <Stack gap="xs">
              <span className="text-sm font-semibold">Pro Plan</span>
              <span className="text-xs opacity-80">$29/month</span>
            </Stack>
          </Box>
        </Cluster>
      </Stack>

      {/* Composed: notification card */}
      <Stack gap="md">
        <h2 className="text-lg font-semibold">Composition</h2>
        <Box borderWidth="thin" padding="lg" className="rounded-lg max-w-sm">
          <Stack gap="sm">
            <Cluster justify="between">
              <span className="font-semibold">New deployment</span>
              <Badge variant="secondary">Production</Badge>
            </Cluster>
            <p className="text-sm text-muted-foreground">
              Your latest push to <code className="text-xs bg-muted px-1 py-0.5 rounded">main</code> was
              deployed successfully.
            </p>
            <Cluster gap="sm">
              <Button size="sm">View logs</Button>
              <Button variant="ghost" size="sm">Dismiss</Button>
            </Cluster>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  )
}
