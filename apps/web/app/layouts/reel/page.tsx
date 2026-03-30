import { Reel, Stack, Box, Frame } from "@repo/ui/layouts"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  Badge,
  Separator,
} from "@repo/ui/primitives"

export default function ReelDemo() {
  return (
    <Stack gap="xl">
      <Stack gap="xs">
        <h1 className="text-2xl font-bold">Reel</h1>
        <p className="text-muted-foreground">
          A horizontal scrolling strip. Items overflow and scroll while
          maintaining consistent gap and optional scroll-snap.
        </p>
      </Stack>

      <Separator />

      {/* Basic reel */}
      <Stack gap="md">
        <h2 className="text-lg font-semibold">Basic</h2>
        <Reel gap="md">
          {Array.from({ length: 8 }, (_, i) => (
            <Box
              key={i}
              padding="lg"
              borderWidth="thin"
              className="rounded-lg w-60"
            >
              <Stack gap="xs">
                <span className="font-semibold">Card {i + 1}</span>
                <span className="text-sm text-muted-foreground">
                  Scroll horizontally to see more cards.
                </span>
              </Stack>
            </Box>
          ))}
        </Reel>
      </Stack>

      {/* With snap */}
      <Stack gap="md">
        <h2 className="text-lg font-semibold">With snap</h2>
        <Reel gap="md" snap>
          {["Design Systems", "Component Libraries", "Layout Primitives", "Token Architecture", "Figma Integration", "Dark Mode"].map(
            (title) => (
              <Card key={title} className="w-72">
                <CardHeader>
                  <CardTitle className="text-base">{title}</CardTitle>
                  <CardDescription>
                    A deep dive into {title.toLowerCase()} and how they fit
                    into modern frontend architecture.
                  </CardDescription>
                </CardHeader>
              </Card>
            )
          )}
        </Reel>
      </Stack>

      {/* Image reel */}
      <Stack gap="md">
        <h2 className="text-lg font-semibold">Image gallery</h2>
        <Reel gap="sm" snap hideScrollbar>
          {Array.from({ length: 6 }, (_, i) => (
            <Frame key={i} ratio="4/3" className="w-64 rounded-lg bg-muted">
              <div className="flex items-center justify-center">
                <span className="text-sm text-muted-foreground font-mono">
                  photo-{i + 1}.jpg
                </span>
              </div>
            </Frame>
          ))}
        </Reel>
      </Stack>

      {/* Tag reel */}
      <Stack gap="md">
        <h2 className="text-lg font-semibold">Tag strip (hidden scrollbar)</h2>
        <Reel gap="sm" hideScrollbar>
          {[
            "React", "TypeScript", "Tailwind", "Next.js", "Figma",
            "shadcn/ui", "Radix", "Every Layout", "CSS", "Tokens",
            "Components", "Patterns", "Templates",
          ].map((tag) => (
            <Badge key={tag} variant="secondary" className="whitespace-nowrap">
              {tag}
            </Badge>
          ))}
        </Reel>
      </Stack>
    </Stack>
  )
}
