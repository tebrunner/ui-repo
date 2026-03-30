import { Switcher, SwitcherItem, Stack, Box, Center } from "@repo/ui/layouts"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Separator,
} from "@repo/ui/primitives"

export default function SwitcherDemo() {
  return (
    <Stack gap="xl">
      <Stack gap="xs">
        <h1 className="text-2xl font-bold">Switcher</h1>
        <p className="text-muted-foreground">
          Switches between horizontal and vertical layout based on the
          container&apos;s own width — not the viewport. Resize the browser
          to see it in action.
        </p>
      </Stack>

      <Separator />

      {/* Basic switcher */}
      <Stack gap="md">
        <h2 className="text-lg font-semibold">Basic (threshold=&quot;md&quot;, 40rem)</h2>
        <Switcher threshold="md" gap="md">
          <SwitcherItem>
            <Box padding="lg" borderWidth="thin" className="rounded-lg h-full">
              <Stack gap="xs">
                <span className="font-semibold">Design</span>
                <span className="text-sm text-muted-foreground">
                  Create wireframes, prototypes, and high-fidelity mockups.
                </span>
              </Stack>
            </Box>
          </SwitcherItem>
          <SwitcherItem>
            <Box padding="lg" borderWidth="thin" className="rounded-lg h-full">
              <Stack gap="xs">
                <span className="font-semibold">Develop</span>
                <span className="text-sm text-muted-foreground">
                  Build with React, TypeScript, and Tailwind CSS.
                </span>
              </Stack>
            </Box>
          </SwitcherItem>
          <SwitcherItem>
            <Box padding="lg" borderWidth="thin" className="rounded-lg h-full">
              <Stack gap="xs">
                <span className="font-semibold">Deploy</span>
                <span className="text-sm text-muted-foreground">
                  Ship to production with zero-config CI/CD.
                </span>
              </Stack>
            </Box>
          </SwitcherItem>
        </Switcher>
      </Stack>

      {/* Small threshold */}
      <Stack gap="md">
        <h2 className="text-lg font-semibold">Small threshold (30rem)</h2>
        <Switcher threshold="sm" gap="sm">
          <SwitcherItem>
            <Box padding="md" invert className="rounded-md">
              <Center text><span className="text-sm font-medium">A</span></Center>
            </Box>
          </SwitcherItem>
          <SwitcherItem>
            <Box padding="md" borderWidth="thin" className="rounded-md">
              <Center text><span className="text-sm font-medium">B</span></Center>
            </Box>
          </SwitcherItem>
        </Switcher>
      </Stack>

      {/* Pricing cards */}
      <Stack gap="md">
        <h2 className="text-lg font-semibold">Pricing cards (threshold=&quot;lg&quot;)</h2>
        <Switcher threshold="lg" gap="md">
          {[
            { name: "Free", price: "$0", desc: "For personal projects" },
            { name: "Pro", price: "$29", desc: "For growing teams" },
            { name: "Enterprise", price: "Custom", desc: "For large organizations" },
          ].map((plan) => (
            <SwitcherItem key={plan.name}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && (
                    <span className="text-muted-foreground">/month</span>
                  )}
                </CardContent>
              </Card>
            </SwitcherItem>
          ))}
        </Switcher>
      </Stack>
    </Stack>
  )
}
