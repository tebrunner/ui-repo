import { forwardRef, type HTMLAttributes, type ReactNode } from "react"
import { Stack } from "../layouts/stack"
import { Cluster } from "../layouts/cluster"
import { Container } from "../layouts/container"
import { cn } from "../lib/cn"

export interface DataTemplateProps extends Omit<HTMLAttributes<HTMLDivElement>, "content"> {
  header: ReactNode
  nav?: ReactNode
  filters?: ReactNode
  content: ReactNode
  stickyHeader?: boolean
}

export const DataTemplate = forwardRef<HTMLDivElement, DataTemplateProps>(
  ({ header, nav, filters, content, stickyHeader = false, className, ...props }, ref) => {
    return (
      <Stack ref={ref} gap="none" className={cn("h-full", className)} {...props}>
        <div
          className={cn(
            "border-b bg-background",
            stickyHeader && "sticky top-0 z-10"
          )}
        >
          <Container width="full" px="lg" className="py-4">
            {header}
          </Container>
          {nav && (
            <Container width="full" px="lg" className="pb-2">
              {nav}
            </Container>
          )}
        </div>

        {filters && (
          <Container width="full" px="lg" className="border-b py-3 bg-muted/20">
            <Cluster gap="sm">
              {filters}
            </Cluster>
          </Container>
        )}

        <Container width="full" px="lg" className="flex-1 overflow-auto py-6">
          {content}
        </Container>
      </Stack>
    )
  }
)
DataTemplate.displayName = "DataTemplate"
