import { type ReactNode } from "react"
import { Grid } from "../../layouts/grid"
import { Stack } from "../../layouts/stack"
import { Cluster } from "../../layouts/cluster"
import { cn } from "../../lib/cn"

export type FooterLink = {
  label: string
  href: string
  external?: boolean
}

export type FooterColumn = {
  title: string
  links: FooterLink[]
}

export type SocialLink = {
  label: string
  href: string
  icon: ReactNode
}

export interface MarketingFooterProps {
  /** Logo or brand element */
  logo?: ReactNode
  /** Tagline or short description */
  tagline?: string
  /** Link columns (Product, Company, Resources, etc.) */
  columns?: FooterColumn[]
  /** Social media links */
  social?: SocialLink[]
  /** Newsletter signup or other CTA slot */
  cta?: ReactNode
  /** Copyright text (overrides default) */
  copyright?: string
  /** Legal links (Privacy, Terms, etc.) */
  legal?: FooterLink[]
  /** Company name for copyright */
  companyName?: string
  className?: string
}

export function MarketingFooter({
  logo,
  tagline,
  columns = [],
  social,
  cta,
  copyright,
  legal,
  companyName = "Monofly Inc.",
  className,
}: MarketingFooterProps) {
  const currentYear = new Date().getFullYear()
  const copyrightText =
    copyright ?? `\u00a9 ${currentYear} ${companyName}. All rights reserved.`

  return (
    <div className={cn("w-full", className)}>
      <Stack gap="xl">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_2.5fr]">
          {/* Brand column */}
          <Stack gap="md">
            {logo && <div>{logo}</div>}

            {tagline && (
              <p className="text-sm leading-relaxed text-muted-foreground max-w-xs">
                {tagline}
              </p>
            )}

            {social && social.length > 0 && (
              <Cluster gap="md">
                {social.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.icon}
                  </a>
                ))}
              </Cluster>
            )}

            {cta && <div className="max-w-sm">{cta}</div>}
          </Stack>

          {/* Link columns */}
          {columns.length > 0 && (
            <Grid
              columns={4}
              gap="sm"
              className="[--min-col-width:140px] grid-cols-[repeat(auto-fit,minmax(var(--min-col-width),1fr))]"
            >
              {columns.map((column) => (
                <Stack key={column.title} gap="md">
                  <h3 className="text-sm font-semibold text-foreground">
                    {column.title}
                  </h3>
                  <Stack gap="sm">
                    {column.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        {...(link.external && {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        })}
                      >
                        {link.label}
                      </a>
                    ))}
                  </Stack>
                </Stack>
              ))}
            </Grid>
          )}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">{copyrightText}</p>

            {legal && legal.length > 0 && (
              <Cluster gap="md">
                {legal.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    {...(link.external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  >
                    {link.label}
                  </a>
                ))}
              </Cluster>
            )}
          </div>
        </div>
      </Stack>
    </div>
  )
}
