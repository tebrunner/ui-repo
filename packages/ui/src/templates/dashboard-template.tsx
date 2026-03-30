import { forwardRef, type HTMLAttributes, type ReactNode } from "react"
import {
  SidebarInset,
  SidebarProvider,
} from "../primitives/sidebar"
import { Stack } from "../layouts/stack"
import { Container } from "../layouts/container"
import { cn } from "../lib/cn"

export interface DashboardTemplateProps extends Omit<HTMLAttributes<HTMLDivElement>, "content"> {
  nav: ReactNode
  header: ReactNode
  cards?: ReactNode
  chart?: ReactNode
  content?: ReactNode
}

export const DashboardTemplate = forwardRef<HTMLDivElement, DashboardTemplateProps>(
  ({ nav, header, cards, chart, content, className, ...props }, ref) => {
    return (
      <SidebarProvider
        ref={ref}
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 72)",
            "--header-height": "calc(var(--spacing) * 12)",
          } as React.CSSProperties
        }
        {...props}
      >
        {nav}
        <SidebarInset>
          {header}
          <Stack gap="none" className={cn("flex-1", className)}>
            <Container width="full" px="sm" query="main" className="flex-1">
              <Stack gap="md" className="py-4 md:gap-6 md:py-6">
                {cards}
                {chart && (
                  <Container width="full" px="sm" className="lg:px-6">
                    {chart}
                  </Container>
                )}
                {content}
              </Stack>
            </Container>
          </Stack>
        </SidebarInset>
      </SidebarProvider>
    )
  }
)
DashboardTemplate.displayName = "DashboardTemplate"
