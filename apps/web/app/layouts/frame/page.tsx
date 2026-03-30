import { Frame, Stack, Grid, Cluster } from "@repo/ui/layouts"
import { Badge, Separator } from "@repo/ui/primitives"

export default function FrameDemo() {
  return (
    <Stack gap="xl">
      <Stack gap="xs">
        <h1 className="text-2xl font-bold">Frame</h1>
        <p className="text-muted-foreground">
          An aspect-ratio container that crops its content to fit.
          Place images, videos, or any element inside.
        </p>
      </Stack>

      <Separator />

      {/* Ratio gallery */}
      <Stack gap="md">
        <h2 className="text-lg font-semibold">Ratios</h2>
        <Grid columns={4} gap="md">
          {(["1/1", "4/3", "16/9", "21/9"] as const).map((ratio) => (
            <Stack key={ratio} gap="xs">
              <Frame ratio={ratio} className="rounded-lg bg-muted">
                <div className="flex items-center justify-center text-sm font-mono text-muted-foreground">
                  {ratio}
                </div>
              </Frame>
              <Badge variant="outline" className="w-fit">{ratio}</Badge>
            </Stack>
          ))}
        </Grid>
      </Stack>

      {/* Portrait ratios */}
      <Stack gap="md">
        <h2 className="text-lg font-semibold">Portrait ratios</h2>
        <Cluster gap="md" align="start">
          {(["3/4", "2/3", "9/16"] as const).map((ratio) => (
            <Stack key={ratio} gap="xs" className="w-40">
              <Frame ratio={ratio} className="rounded-lg bg-muted">
                <div className="flex items-center justify-center text-sm font-mono text-muted-foreground">
                  {ratio}
                </div>
              </Frame>
              <Badge variant="outline" className="w-fit">{ratio}</Badge>
            </Stack>
          ))}
        </Cluster>
      </Stack>

      {/* Placeholder images */}
      <Stack gap="md">
        <h2 className="text-lg font-semibold">With placeholder content</h2>
        <Grid columns={3} gap="md">
          <Frame ratio="16/9" className="rounded-lg bg-gradient-to-br from-primary/20 to-primary/5">
            <div className="flex items-center justify-center">
              <span className="text-sm font-medium text-primary">Hero image</span>
            </div>
          </Frame>
          <Frame ratio="1/1" className="rounded-lg bg-gradient-to-br from-accent to-accent/50">
            <div className="flex items-center justify-center">
              <span className="text-sm font-medium text-accent-foreground">Avatar</span>
            </div>
          </Frame>
          <Frame ratio="4/3" className="rounded-lg bg-gradient-to-br from-muted to-muted/50">
            <div className="flex items-center justify-center">
              <span className="text-sm font-medium text-muted-foreground">Thumbnail</span>
            </div>
          </Frame>
        </Grid>
      </Stack>
    </Stack>
  )
}
