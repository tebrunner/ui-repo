// apps/web/config/navigation.ts
// All link data centralized here

import type { NavLink, NavGroup } from "@repo/ui/blocks"

export const marketingLinks: NavLink[] = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
]

export const marketingGroups: NavGroup[] = [
  {
    label: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "API Reference", href: "/api" },
      { label: "Changelog", href: "/changelog" },
    ]
  },
  {
    label: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ]
  }
]

// Optional: typed helper for route matching
export const isActiveRoute = (pathname: string, href: string) => {
  if (href === "/") return pathname === "/"
  return pathname.startsWith(href)
}