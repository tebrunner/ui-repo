import { Stack, Cover, Center, Cluster } from "@repo/ui/layouts"
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Input,
  Label,
  Separator,
} from "@repo/ui/primitives"
import { ArrowRightIcon, SparklesIcon, WrenchIcon } from "lucide-react"

export default function CoverDemo() {
  return (
    <Stack gap="xl">
      <Stack gap="xs">
        <h1 className="text-2xl font-bold">Cover</h1>
        <p className="text-muted-foreground">
          Full-height layout that vertically centers its principal content with
          optional header and footer.
        </p>
      </Stack>

      <Separator />

      {/* Hero cover */}
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>Hero section</CardTitle>
          <CardDescription>Cover centers the CTA with a badge header and footer links.</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Cover
            minHeight="auto"
            header={
              <Center max="lg">
                <div className="px-6 pt-6">
                  <Badge variant="secondary">
                    <SparklesIcon className="h-3 w-3 mr-1" />
                    New release
                  </Badge>
                </div>
              </Center>
            }
            footer={
              <Center max="lg">
                <div className="px-6 pb-6">
                  <span className="text-xs text-muted-foreground">
                    Trusted by 10,000+ developers worldwide
                  </span>
                </div>
              </Center>
            }
          >
            <Center max="md" text>
              <div className="py-16">
                <Stack gap="lg" align="center">
                  <h2 className="text-3xl font-bold">Build faster, ship sooner</h2>
                  <p className="text-muted-foreground">
                    A complete component library that helps you build beautiful
                    interfaces without starting from scratch.
                  </p>
                  <Cluster gap="sm">
                    <Button>
                      Get started
                      <ArrowRightIcon className="h-4 w-4 ml-1" />
                    </Button>
                    <Button variant="outline">Live demo</Button>
                  </Cluster>
                </Stack>
              </div>
            </Center>
          </Cover>
        </CardContent>
      </Card>

      {/* Login cover */}
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>Login page</CardTitle>
          <CardDescription>Cover vertically centers the form between a logo header and footer.</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Cover
            minHeight="auto"
            header={
              <div className="px-6 pt-6 flex items-center gap-2">
                <div className="h-7 w-7 rounded-md bg-foreground" />
                <span className="font-semibold">MonoFly</span>
              </div>
            }
            footer={
              <div className="px-6 pb-6 text-center">
                <span className="text-xs text-muted-foreground">
                  By signing in you agree to our Terms of Service
                </span>
              </div>
            }
          >
            <Center max="sm">
              <div className="py-12">
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>Sign in</CardTitle>
                    <CardDescription>Enter your credentials to continue.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Stack gap="md">
                      <Stack gap="xs">
                        <Label htmlFor="cover-email">Email</Label>
                        <Input id="cover-email" type="email" placeholder="you@example.com" />
                      </Stack>
                      <Stack gap="xs">
                        <Label htmlFor="cover-pass">Password</Label>
                        <Input id="cover-pass" type="password" placeholder="********" />
                      </Stack>
                      <Button className="w-full">Sign in</Button>
                    </Stack>
                  </CardContent>
                </Card>
              </div>
            </Center>
          </Cover>
        </CardContent>
      </Card>

      {/* Maintenance cover */}
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>Maintenance page</CardTitle>
          <CardDescription>Minimal cover with only centered content.</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Cover minHeight="auto">
            <Center max="sm" text>
              <div className="py-16">
                <Stack gap="md" align="center">
                  <WrenchIcon className="h-10 w-10 text-muted-foreground" />
                  <h2 className="text-xl font-semibold">Under maintenance</h2>
                  <p className="text-sm text-muted-foreground">
                    We&apos;re performing scheduled maintenance. We&apos;ll be back shortly.
                  </p>
                  <Badge variant="outline">Estimated: 30 minutes</Badge>
                </Stack>
              </div>
            </Center>
          </Cover>
        </CardContent>
      </Card>
    </Stack>
  )
}
