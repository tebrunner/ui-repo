import { LinkInBioTemplate } from "@repo/ui/templates"
import { Stack, Cluster } from "@repo/ui/layouts"
import { Button, Badge, Separator } from "@repo/ui/primitives"
import { SectionHeader } from "@repo/ui/patterns"
import {
  ArrowRightIcon,
  ExternalLinkIcon,
  MusicIcon,
  HeadphonesIcon,
  TicketIcon,
  ShirtIcon,
  PlayIcon,
  AtSignIcon,
  CameraIcon,
  SparklesIcon,
} from "lucide-react"

/* ------------------------------------------------------------------ */
/*  Demo data — musician / creative persona (contrast with homepage)   */
/* ------------------------------------------------------------------ */

const socials = [
  { label: "Videos", icon: PlayIcon, href: "#" },
  { label: "Social", icon: AtSignIcon, href: "#" },
  { label: "Photos", icon: CameraIcon, href: "#" },
]

const links = [
  { label: "New Album — Midnight Signal", href: "#", icon: MusicIcon },
  { label: "Listen on Spotify", href: "#", icon: HeadphonesIcon, external: true },
  { label: "Summer Tour Dates", href: "#", icon: TicketIcon },
  { label: "Merch Store", href: "#", icon: ShirtIcon, external: true },
]

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Page() {
  return (
    <Stack gap="none">
      {/* ━━━ Live demo ━━━ */}
      <LinkInBioTemplate
        background={
          <>
            {/* Radial gradient — different feel from homepage blobs */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--color-chart-4)_0%,transparent_50%)] opacity-20 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,var(--color-chart-5)_0%,transparent_50%)] opacity-15 pointer-events-none" />

            {/* Sparkle accents */}
            <SparklesIcon className="absolute left-[12%] top-[15%] w-5 h-5 text-muted-foreground/15 pointer-events-none" />
            <SparklesIcon className="absolute right-[18%] top-[35%] w-4 h-4 text-muted-foreground/15 rotate-12 pointer-events-none" />
            <SparklesIcon className="absolute left-[25%] bottom-[18%] w-6 h-6 text-muted-foreground/15 -rotate-12 pointer-events-none" />
          </>
        }
        avatar={
          <div className="flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-br from-chart-4 to-chart-5 text-foreground border-2 border-border shadow-lg">
            <MusicIcon className="w-12 h-12" />
          </div>
        }
        heading={<h2>Kai Nakamura</h2>}
        description={
          <p>Producer &amp; multi-instrumentalist. New album out now.</p>
        }
        socialLinks={
          <>
            {socials.map((social) => (
              <Button
                key={social.label}
                asChild
                variant="ghost"
                size="icon-lg"
                className="w-12 h-12 rounded-full border border-border/50"
              >
                <a href={social.href} aria-label={social.label}>
                  <social.icon className="w-5 h-5" />
                </a>
              </Button>
            ))}
          </>
        }
        links={
          <Stack gap="sm" className="w-full">
            {links.map((link) => (
              <Button
                key={link.label}
                asChild
                variant="outline"
                className="h-auto w-full justify-between px-6 py-5 rounded-xl border border-border/60 bg-card/50 backdrop-blur-sm"
              >
                <a
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <Cluster gap="sm" align="center" wrap={false}>
                    <link.icon className="w-5 h-5 opacity-70" />
                    <span className="font-medium">{link.label}</span>
                  </Cluster>
                  {link.external ? (
                    <ExternalLinkIcon className="w-4 h-4 shrink-0 opacity-50" />
                  ) : (
                    <ArrowRightIcon className="w-4 h-4 shrink-0 opacity-50" />
                  )}
                </a>
              </Button>
            ))}
          </Stack>
        }
      />

      {/* ━━━ Template API reference ━━━ */}
      <div className="border-t bg-background">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <Stack gap="xl">
            <SectionHeader
              title="LinkInBioTemplate"
              description="Full-screen single-page template with vertical centering via Cover + Center. All visual content is passed through named slots."
            />

            <Stack gap="md">
              <h3 className="text-sm font-semibold">Props / Slots</h3>
              <Stack gap="xs">
                {[
                  { prop: "avatar", desc: "Profile image or icon — rendered above heading" },
                  { prop: "heading", desc: "Name or title — wrapped in ProfileHeader (text-4xl)" },
                  { prop: "description", desc: "Short bio — muted, max-w-md, text-lg font-light" },
                  { prop: "socialLinks", desc: "Icon row — wrapped in Cluster gap=\"md\" justify=\"center\"" },
                  { prop: "links", desc: "Primary CTAs — wrapped in Stack gap=\"md\" w-full" },
                  { prop: "background", desc: "Decorative layer — absolutely positioned behind content (z-0)" },
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

            <Stack gap="md">
              <h3 className="text-sm font-semibold">Internal composition</h3>
              <Stack gap="none" className="font-mono text-xs text-primary/70">
                <code className="block">{'<Cover minHeight="screen">'}</code>
                <code className="block pl-4">{'  {background}'}</code>
                <code className="block pl-4">{'  <Center max="xl" gutter>'}</code>
                <code className="block pl-8">{'    <Container width="full" px="none" section="sm">'}</code>
                <code className="block pl-12">{'      <Stack gap="xl" align="center">'}</code>
                <code className="block pl-16">{'        <ProfileHeader avatar heading description />'}</code>
                <code className="block pl-16">{'        <Cluster gap="md" justify="center">{socialLinks}</Cluster>'}</code>
                <code className="block pl-16">{'        <Stack gap="md" className="w-full">{links}</Stack>'}</code>
                <code className="block pl-12">{'      </Stack>'}</code>
                <code className="block pl-8">{'    </Container>'}</code>
                <code className="block pl-4">{'  </Center>'}</code>
                <code className="block">{'</Cover>'}</code>
              </Stack>
            </Stack>

            <Separator />

            <Stack gap="md">
              <h3 className="text-sm font-semibold">Layout primitives used</h3>
              <Cluster gap="sm">
                <Badge variant="secondary" className="text-[10px]">Cover</Badge>
                <Badge variant="secondary" className="text-[10px]">Center</Badge>
                <Badge variant="secondary" className="text-[10px]">Container</Badge>
                <Badge variant="secondary" className="text-[10px]">Stack</Badge>
                <Badge variant="secondary" className="text-[10px]">Cluster</Badge>
              </Cluster>
              <Cluster gap="sm">
                <Badge variant="outline" className="text-[10px]">ProfileHeader (pattern)</Badge>
              </Cluster>
            </Stack>
          </Stack>
        </div>
      </div>
    </Stack>
  )
}
