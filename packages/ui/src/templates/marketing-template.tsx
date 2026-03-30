import { forwardRef, type HTMLAttributes, type ReactNode } from "react"
import { Stack } from "../layouts/stack"
import { Center } from "../layouts/center"
import { Cluster } from "../layouts/cluster"
import { Container } from "../layouts/container"
import { cn } from "../lib/cn"

export interface MarketingTemplateProps extends HTMLAttributes<HTMLDivElement> {
  /** Navigation bar content (typically MarketingNav) */
  nav: ReactNode
  /** Page body — hero, features, pricing, CTA sections */
  children: ReactNode
  /** Footer content (typically MarketingFooter) */
  footer?: ReactNode
  /** Max-width constraint for nav and footer */
  max?: "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "full"
}

export const MarketingTemplate = forwardRef<HTMLDivElement, MarketingTemplateProps>(
  ({ nav, children, footer, max = "7xl", className, ...props }, ref) => {
    return (
      <Stack ref={ref} gap="none" className={cn("min-h-screen", className)} {...props}>
        {/* Sticky header */}
        <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <Center max={max} gutter>
            <Cluster gap="none" align="center" className="h-14">
              {nav}
            </Cluster>
          </Center>
        </header>

        {/* Main content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        {footer && (
          <footer className="border-t border-border bg-muted/30">
            <Center max={max} gutter>
              <Container width="full" px="none" section="md">
                {footer}
              </Container>
            </Center>
          </footer>
        )}
      </Stack>
    )
  }
)
MarketingTemplate.displayName = "MarketingTemplate"
