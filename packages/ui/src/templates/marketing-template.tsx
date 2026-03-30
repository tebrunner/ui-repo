import { type ComponentPropsWithRef, type ReactNode } from "react"
import { Stack } from "../layouts/stack"
import { Center, type CenterProps } from "../layouts/center"
import { Cluster } from "../layouts/cluster"
import { sectionSpacingMap } from "../layouts/_scale"
import { cn } from "../lib/cn"

/** Subset of CenterMax values appropriate for a marketing page shell. */
type MarketingMax = Extract<
  CenterProps["max"],
  "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "full"
>

export interface MarketingTemplateProps extends ComponentPropsWithRef<"div"> {
  /** Navigation bar content (typically MarketingNav) */
  nav: ReactNode
  /** Page body — hero, features, pricing, CTA sections */
  children: ReactNode
  /** Footer content (typically MarketingFooter) */
  footer?: ReactNode
  /** Max-width constraint for nav and footer */
  max?: MarketingMax
}

/** Header height — 56px / 3.5rem. Shared between header and scroll-offset. */
const HEADER_HEIGHT = "h-14"

export function MarketingTemplate({
  nav,
  children,
  footer,
  max = "7xl",
  className,
  ref,
  ...props
}: MarketingTemplateProps) {
  return (
    <Stack ref={ref} gap="none" className={cn("min-h-screen", className)} {...props}>
      {/* Sticky header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Center max={max} gutter>
          <Cluster gap="none" align="center" className={HEADER_HEIGHT}>
            {nav}
          </Cluster>
        </Center>
      </header>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      {footer && (
        <footer className="border-t border-border bg-muted/30">
          <Center max={max} gutter className={sectionSpacingMap["md"]}>
            {footer}
          </Center>
        </footer>
      )}
    </Stack>
  )
}
MarketingTemplate.displayName = "MarketingTemplate"
