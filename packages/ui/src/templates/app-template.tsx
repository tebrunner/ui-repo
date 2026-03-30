import { forwardRef, type HTMLAttributes, type ReactNode } from "react"
import { SidebarInset, SidebarProvider } from "../primitives/sidebar"
import { Stack } from "../layouts/stack"
import { Container } from "../layouts/container"
import { cn } from "../lib/cn"

export interface AppTemplateProps extends Omit<HTMLAttributes<HTMLDivElement>, "content"> {
  nav: ReactNode
  header: ReactNode
  content: ReactNode
  panel?: ReactNode
}

export const AppTemplate = forwardRef<HTMLDivElement, AppTemplateProps>(
  ({ nav, header, content, panel, className, ...props }, ref) => {
    return (
      <SidebarProvider ref={ref} {...props}>
        {nav}
        <SidebarInset>
          <Stack gap="none" className={cn("flex-1 overflow-hidden", className)}>
            <header className="shrink-0 border-b bg-background/95 backdrop-blur">
              <Container width="full" px="lg" className="py-4">
                {header}
              </Container>
            </header>

            <Container as="main" width="full" px="lg" className="flex-1 overflow-y-auto py-6">
              {content}
            </Container>

            {panel && (
              <aside className="shrink-0 border-t bg-muted/20">
                <Container width="full" px="lg" className="py-6">
                  {panel}
                </Container>
              </aside>
            )}
          </Stack>
        </SidebarInset>
      </SidebarProvider>
    )
  }
)
AppTemplate.displayName = "AppTemplate"
