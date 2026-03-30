"use client"

import { useState } from "react"
import { AuthTemplate } from "@repo/ui/templates"
import { Stack, Cluster, Container } from "@repo/ui/layouts"
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
import { SectionHeader } from "@repo/ui/patterns"

// ── Max-width options (mirrors AuthTemplate's maxWidthMap) ──

const maxWidthOptions = [
  { token: "xs", tw: "max-w-xs", px: "320px" },
  { token: "sm", tw: "max-w-sm", px: "384px" },
  { token: "md", tw: "max-w-md", px: "448px" },
  { token: "lg", tw: "max-w-lg", px: "512px" },
] as const

type MaxWidth = typeof maxWidthOptions[number]["token"]

// ── Page ──

export default function AuthTemplatePage() {
  const [activeMax, setActiveMax] = useState<MaxWidth>("sm")

  return (
    <div>
      {/* ━━━ Live demo ━━━ */}
      <AuthTemplate
        maxWidth={activeMax}
        logo={
          <Cluster gap="sm" justify="center" align="center">
            <div className="h-8 w-8 rounded-lg bg-foreground" />
            <span className="font-bold text-lg">Acme</span>
          </Cluster>
        }
        footer={
          <span>
            Don&apos;t have an account?{" "}
            <span className="text-foreground font-medium cursor-pointer hover:underline">
              Sign up
            </span>
          </span>
        }
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Welcome back</CardTitle>
            <CardDescription className="text-center">
              Sign in to your account to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Stack gap="md">
              <Button variant="outline" className="w-full">
                <svg className="h-4 w-4" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Continue with Google
              </Button>

              <div className="relative">
                <Separator />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-card px-2 text-xs text-muted-foreground">or</span>
                </div>
              </div>

              <Stack gap="xs">
                <Label htmlFor="auth-email">Email</Label>
                <Input id="auth-email" type="email" placeholder="you@example.com" readOnly />
              </Stack>

              <Stack gap="xs">
                <Cluster justify="between">
                  <Label htmlFor="auth-password">Password</Label>
                  <span className="text-xs text-muted-foreground cursor-pointer hover:underline">
                    Forgot password?
                  </span>
                </Cluster>
                <Input id="auth-password" type="password" placeholder="••••••••" readOnly />
              </Stack>

              <Button className="w-full">Sign in</Button>
            </Stack>
          </CardContent>
        </Card>
      </AuthTemplate>

      {/* ━━━ Template API reference ━━━ */}
      <div className="border-t bg-background">
        <Container width="lg" className="py-12">
          <Stack gap="xl">
            <SectionHeader
              title="AuthTemplate"
              description="Full-screen centered card via Cover + Center. For login, signup, password reset, and verification flows."
            />

            {/* ━━━ maxWidth ━━━ */}
            <Stack gap="lg">
              <SectionHeader
                title="maxWidth"
                description="Card container width constraint via a local maxWidthMap. Default &quot;sm&quot; (384px)."
              />

              <Card>
                <CardHeader>
                  <Cluster gap="sm">
                    {maxWidthOptions.map((m) => (
                      <Badge
                        key={m.token}
                        variant={activeMax === m.token ? "default" : "outline"}
                        className="cursor-pointer text-[10px] font-mono"
                        onClick={() => setActiveMax(m.token)}
                      >
                        {m.token}
                      </Badge>
                    ))}
                  </Cluster>
                  <CardDescription>Click a token, then scroll up to see the live demo change</CardDescription>
                </CardHeader>
                <CardContent>
                  <Stack gap="xs">
                    {maxWidthOptions.map((m) => (
                      <Cluster key={m.token} justify="between" gap="sm">
                        <Cluster gap="xs" wrap={false}>
                          <Badge
                            variant={activeMax === m.token ? "default" : "outline"}
                            className="font-mono text-[10px] w-8 justify-center"
                          >
                            {m.token}
                          </Badge>
                          <code className="text-[10px] text-primary/50">{m.tw}</code>
                        </Cluster>
                        <span className="font-mono text-[10px] text-primary/40">{m.px}</span>
                      </Cluster>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Stack>

            <Separator />

            {/* ━━━ Slots ━━━ */}
            <Stack gap="md">
              <h3 className="text-sm font-semibold">Props / Slots</h3>
              <Stack gap="xs">
                {[
                  { prop: "logo?", desc: "Above card — text-center, inside the centered group" },
                  { prop: "children", desc: "Auth card — centered via Cover + Center with maxWidth constraint" },
                  { prop: "footer?", desc: "Below card — text-center, text-sm, muted, inside the centered group" },
                  { prop: "maxWidth?", desc: "Card width — xs (320px), sm (384px), md (448px), lg (512px)" },
                ].map((item) => (
                  <Cluster key={item.prop} justify="between" gap="md">
                    <Badge variant="outline" className="font-mono text-[10px] shrink-0">
                      {item.prop}
                    </Badge>
                    <span className="text-xs text-muted-foreground text-right">{item.desc}</span>
                  </Cluster>
                ))}
              </Stack>
            </Stack>

            <Separator />

            {/* ━━━ Internal composition ━━━ */}
            <Stack gap="md">
              <h3 className="text-sm font-semibold">Internal composition</h3>
              <Stack gap="none" className="font-mono text-xs text-primary/70">
                <code className="block">{'<Cover minHeight="screen" className="bg-muted/20">'}</code>
                <code className="block pl-4">{'<Center max="full" gutter className={maxWidthMap[maxWidth]}>'}</code>
                <code className="block pl-8">{'<Stack gap="lg">'}</code>
                <code className="block pl-12">{'{logo}'}</code>
                <code className="block pl-12">{'{children}'}</code>
                <code className="block pl-12">{'{footer}'}</code>
                <code className="block pl-8">{'</Stack>'}</code>
                <code className="block pl-4">{'</Center>'}</code>
                <code className="block">{'</Cover>'}</code>
              </Stack>
            </Stack>

            <Separator />

            {/* ━━━ Layouts used ━━━ */}
            <Stack gap="md">
              <h3 className="text-sm font-semibold">Layout primitives used</h3>
              <Cluster gap="sm">
                <Badge variant="secondary" className="text-[10px]">Cover</Badge>
                <Badge variant="secondary" className="text-[10px]">Center</Badge>
                <Badge variant="secondary" className="text-[10px]">Stack</Badge>
              </Cluster>
            </Stack>
          </Stack>
        </Container>
      </div>
    </div>
  )
}
