"use client"

import { type ReactNode } from "react"
import { Hamburger } from "@repo/ui/composites"
import { useState } from "react"
import { Cluster, Stack } from "@repo/ui/layouts"
import { cn } from "../../lib/cn"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "../../primitives/navigation-menu"

export type NavLink = {
  label: string
  href: string
  external?: boolean
}

export type NavGroup = {
  label: string
  links: NavLink[]
}

export interface MarketingNavProps {
  /** Logo or brand element */
  logo: ReactNode
  /** Primary navigation links */
  links?: NavLink[]
  /** Optional dropdown groups (Resources, Company, etc.) */
  groups?: NavGroup[]
  /** Right-side actions (Login, Get Started buttons) */
  actions?: ReactNode
  /** Mobile menu toggle slot */
  mobileMenu?: ReactNode
  /** Current pathname for active state */
  pathname?: string
  className?: string
}

export function MarketingNav({
  logo,
  links = [ { label: "Home", href: "/" } ],
  groups = [],
  actions,
  mobileMenu,
  pathname,
  className,
}: MarketingNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const defaultMobileMenu = (
    <Hamburger
      open={mobileMenuOpen}
      onOpenChange={setMobileMenuOpen}
    />
  )

  return (
    <div className={cn("relative w-full", className)}>
      <Cluster
        as="nav"
        justify="between"
        align="center"
        gap="lg"
        className="w-full"
      >
        {/* Left: Logo */}
        <div className="flex-shrink-0">{logo}</div>

        {/* Center: Navigation links */}
        {(links.length > 0 || groups.length > 0) && (
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {links.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors px-4 py-2 rounded-md",
                      pathname === link.href
                        ? "text-foreground bg-accent/50"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/30"
                    )}
                    {...(link.external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  >
                    {link.label}
                  </a>
                </NavigationMenuItem>
              ))}
              {groups.map((group) => (
                <NavigationMenuItem key={group.label}>
                  <NavigationMenuTrigger>{group.label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[180px] gap-1 p-1">
                      {group.links.map((link) => (
                        <li key={link.href}>
                          <NavigationMenuLink asChild>
                            <a
                              href={link.href}
                              {...(link.external && {
                                target: "_blank",
                                rel: "noopener noreferrer",
                              })}
                            >
                              {link.label}
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        )}

        {/* Right: Actions + mobile menu */}
        <Cluster gap="sm" className="flex-shrink-0">
          {actions && <div className="hidden sm:flex">{actions}</div>}
          {(mobileMenu || defaultMobileMenu) && (
            <div className="md:hidden">{mobileMenu || defaultMobileMenu}</div>
          )}
        </Cluster>
      </Cluster>

      {/* Mobile menu dropdown */}
   {/* Mobile menu dropdown */}
  {mobileMenuOpen && (
    <div className={cn(
      "md:hidden absolute top-full left-0 right-0 z-50",
      "bg-background border-b border-border",
      "shadow-lg", // Add shadow
      "animate-in fade-in slide-in-from-top-2 duration-200", // Smooth animation
    )}>
      <Stack gap="xs" className="p-4">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={cn(
              "px-3 py-2 rounded-md transition-colors",
              "text-sm font-medium",
              "text-muted-foreground hover:text-foreground",
              "hover:bg-accent/50", // Better hover state
            )}
            {...(link.external && {
              target: "_blank",
              rel: "noopener noreferrer",
            })}
          >
            {link.label}
          </a>
        ))}
        {/* groups... */}
      </Stack>
    </div>
  )}
    </div>
  )
}