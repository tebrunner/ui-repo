import { type ReactNode } from "react"
import { cn } from "../lib/cn"

export type PortalNavLink = {
  label: string
  href: string
}

export interface PortalNavProps {
  /** Section title displayed after the home link */
  title: string
  /** URL the title links to */
  titleHref: string
  /** Navigation links displayed on the right */
  links?: PortalNavLink[]
  /** Current pathname for active state */
  pathname?: string
  /** Optional content after the children area */
  children?: ReactNode
  className?: string
}

export function PortalNav({
  title,
  titleHref,
  links = [],
  pathname,
  children,
  className,
}: PortalNavProps) {
  return (
    <nav
      className={cn(
        "shrink-0 border-b border-border bg-background px-6 py-3 flex items-center gap-6",
        className,
      )}
    >
      <a
        href="/"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        &larr; Home
      </a>
      <span className="text-sm font-semibold">
        <a
          href={titleHref}
          className={cn(
            "text-sm hover:text-foreground",
            pathname === titleHref ? "text-foreground" : "text-muted-foreground",
          )}
        >
          {title}
        </a>
      </span>
      <div className="flex gap-4 ml-auto">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={cn(
              "text-sm hover:text-foreground",
              pathname === link.href || pathname?.startsWith(link.href + "/")
                ? "text-foreground font-medium"
                : "text-muted-foreground",
            )}
          >
            {link.label}
          </a>
        ))}
        {children}
      </div>
    </nav>
  )
}
