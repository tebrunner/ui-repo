import { type ReactNode } from "react"
import { Cluster } from "../../layouts/cluster"
import { cn } from "../../lib/cn"

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
  links = [],
  groups = [],
  actions,
  mobileMenu,
  pathname,
  className,
}: MarketingNavProps) {
  return (
    <nav
      className={cn(
        "flex w-full items-center justify-between",
        className,
      )}
    >
      {/* Left: Logo */}
      <div className="flex-shrink-0 flex">{logo}</div>

      {/* Center: Navigation links */}
      {(links.length > 0 || groups.length > 0) && (
        <Cluster gap="lg" className="hidden md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground",
                pathname === link.href
                  ? "text-foreground"
                  : "text-muted-foreground",
              )}
              {...(link.external && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              {link.label}
            </a>
          ))}
          {groups.map((group) => (
            <NavDropdown key={group.label} group={group} />
          ))}
        </Cluster>
      )}

      {/* Right: Actions + mobile menu */}
      <Cluster gap="sm" className="flex-shrink-0">
        {actions && <div className="hidden sm:flex items-center gap-2">{actions}</div>}
        {mobileMenu && <div className="md:hidden">{mobileMenu}</div>}
      </Cluster>
    </nav>
  )
}

function NavDropdown({ group }: { group: NavGroup }) {
  return (
    <div className="relative group">
      <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
        {group.label}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className="transition-transform group-hover:rotate-180"
          aria-hidden="true"
        >
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
        <div className="rounded-lg border border-border bg-popover p-1 shadow-md min-w-[180px]">
          {group.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              {...(link.external && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
