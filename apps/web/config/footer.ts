// apps/web/config/footer.ts
// All footer data centralized here

import type { FooterColumn, FooterLink, SocialLink } from "@repo/ui/blocks"

export const footerColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Changelog", href: "/changelog" },
      { label: "Roadmap", href: "/roadmap" },
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "API Reference", href: "/api" },
      { label: "Guides", href: "/guides" },
      { label: "Blog", href: "/blog" },
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press Kit", href: "/press" },
      { label: "Contact", href: "/contact" },
    ]
  },
  {
    title: "Connect",
    links: [
      { label: "Discord", href: "https://discord.gg/yourserver", external: true },
      { label: "Twitter", href: "https://twitter.com/yourhandle", external: true },
      { label: "GitHub", href: "https://github.com/yourorg", external: true },
      { label: "YouTube", href: "https://youtube.com/@yourchannel", external: true },
    ]
  }
]

export const footerLegal: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
]

// Social icons - you'd use lucide-react or your icon system
// This is just the data structure, icons come from the app layer
export const socialPlatforms = [
  { id: "twitter", label: "Twitter", href: "https://twitter.com/yourhandle" },
  { id: "github", label: "GitHub", href: "https://github.com/yourorg" },
  { id: "discord", label: "Discord", href: "https://discord.gg/yourserver" },
  { id: "youtube", label: "YouTube", href: "https://youtube.com/@yourchannel" },
] as const

export const footerMeta = {
  companyName: "MonoFly Studio",
  tagline: "Building tools for designers who code and coders who design.",
}