import { LinkInBioTemplate } from "@repo/ui/templates"
import { Stack, Cluster } from "@repo/ui/layouts"
import { Button, Badge, Separator } from "@repo/ui/primitives"
import { cn } from "@repo/ui/lib"
import { svgPaths } from "@repo/ui/composites"
import {
  ArrowRightIcon,
  ExternalLinkIcon,
  StarIcon,
  LayoutGridIcon,
  ComponentIcon,
  LayoutTemplateIcon,
  GlobeIcon,
  LayoutDashboardIcon,
  PenToolIcon,
} from "lucide-react"

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const socials = [
  { label: "TikTok", href: "#", path: svgPaths.p18abc380, fill: true, bg: "bg-chart-1" },
  {
    label: "Instagram",
    href: "#",
    paths: [
      { d: svgPaths.p15fdbe00 },
      { d: svgPaths.p29f765f0 },
      { d: "M29.1667 10.8333H29.1833" },
    ],
    bg: "bg-chart-2",
  },
  { label: "X", href: "#", path: svgPaths.pbcf4be0, fill: true, bg: "bg-chart-3" },
  { label: "Threads", href: "#", path: svgPaths.p2f732a0, fill: true, bg: "bg-chart-4" },
  { label: "Chat", href: "#", paths: [{ d: svgPaths.p34f19280 }], bg: "bg-chart-5" },
]

const linkGroups = [
  {
    label: "Design System",
    links: [
      { label: "Layouts", href: "/layouts", icon: LayoutGridIcon },
      { label: "Patterns", href: "/patterns", icon: ComponentIcon },
      { label: "Templates", href: "/templates", icon: LayoutTemplateIcon },
    ],
  },
  {
    label: "Demos",
    links: [
      { label: "Web Content", href: "/test", icon: GlobeIcon },
      { label: "Dashboard", href: "/dashboard", icon: LayoutDashboardIcon },
    ],
  },
  {
    label: "Resources",
    links: [
      {
        label: "Figma Design File",
        href: "https://www.figma.com/design/PZpFJQGsqtzDARMBpwWuFA/UI-Repo-%E2%80%94-Layer--2?node-id=2163-79&p=f&t=zbAMyPBGRWbvtEzR-0",
        icon: PenToolIcon,
        external: true,
      },
    ],
  },
]

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <LinkInBioTemplate
      background={
        <>
          {/* Gradient blobs */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-chart-1 opacity-20 blur-[64px] rounded-full pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-chart-2 opacity-20 blur-[64px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-chart-3 opacity-20 blur-[64px] rounded-full pointer-events-none" />

          {/* Decorative stars */}
          <StarIcon className="absolute left-[10%] top-[10%] rotate-[-15deg] w-6 h-6 text-muted-foreground/20 pointer-events-none" />
          <StarIcon className="absolute right-[15%] top-[40%] rotate-[15deg] w-4 h-4 text-muted-foreground/20 pointer-events-none" />
          <StarIcon className="absolute left-[20%] bottom-[20%] rotate-[45deg] w-5 h-5 text-muted-foreground/20 pointer-events-none" />
        </>
      }
      avatar={
        <div className="relative w-36 h-36 shrink-0">
          <div className="absolute inset-0 bg-primary border-2 border-border rounded-full" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 flex items-center justify-center text-primary-foreground">
            <svg className="w-full h-full" fill="none" viewBox="0 0 128 128">
              <path d={svgPaths.p29aedc90} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
              <path d={svgPaths.pb6001f0} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
            </svg>
          </div>
        </div>
      }
      heading={<h2>Welcome! This is the root directory of your codebase.</h2>}
      description={
        <p>
          A composable design system built on layout primitives, shadcn/ui,
          and shared spatial tokens.
        </p>
      }
      socialLinks={
        <>
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className={cn(
                "flex items-center justify-center w-20 h-20 shrink-0",
                social.bg,
                "border-2 border-border rounded-full",
                "hover:opacity-90 transition-opacity"
              )}
            >
              <svg className="w-10 h-10 text-foreground" viewBox="0 0 40 40" fill="none">
                {social.fill && social.path ? (
                  <path d={social.path} fill="currentColor" />
                ) : (
                  social.paths?.map((p, i) => (
                    <path key={i} d={p.d} stroke="currentColor" strokeWidth="2.33333" fill="none" />
                  ))
                )}
              </svg>
            </a>
          ))}
        </>
      }
      links={
        <Stack gap="lg" className="w-full">
          {linkGroups.map((group, groupIdx) => (
            <Stack key={group.label} gap="md">
              {groupIdx > 0 && <Separator className="opacity-30" />}
              <Cluster gap="sm" justify="center">
                <Badge variant="outline" className="text-[10px] uppercase tracking-widest font-medium">
                  {group.label}
                </Badge>
              </Cluster>
              <Stack gap="sm">
                {group.links.map((link) => {
                  const isExternal = "external" in link && link.external
                  return (
                    <Button
                      key={link.label}
                      asChild
                      variant={groupIdx === 0 ? "default" : "outline"}
                      className={cn(
                        "h-auto w-full justify-between px-8 py-6 text-lg font-semibold",
                        groupIdx === 0
                          ? "rounded-[var(--radius-card)]"
                          : "rounded-[var(--radius-card)] border-2"
                      )}
                    >
                      <a href={link.href} {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                        <Cluster gap="sm" align="center" wrap={false}>
                          <link.icon className="w-5 h-5 opacity-70" />
                          <span>{link.label}</span>
                        </Cluster>
                        {isExternal ? (
                          <ExternalLinkIcon className="w-5 h-5 shrink-0 opacity-60" />
                        ) : (
                          <ArrowRightIcon className="w-5 h-5 shrink-0 opacity-60" />
                        )}
                      </a>
                    </Button>
                  )
                })}
              </Stack>
            </Stack>
          ))}
        </Stack>
      }
    />
  )
}
