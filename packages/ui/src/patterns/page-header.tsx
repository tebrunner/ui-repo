import { forwardRef, type HTMLAttributes, type ReactNode } from "react"
import { Cluster } from "../layouts/cluster"
import { Stack } from "../layouts/stack"
import { cn } from "../lib/cn"

export interface PageHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title: ReactNode
  description?: ReactNode
  actions?: ReactNode
  breadcrumb?: ReactNode
}

export const PageHeader = forwardRef<HTMLDivElement, PageHeaderProps>(
  ({ title, description, actions, breadcrumb, className, ...props }, ref) => {
    return (
      <Stack ref={ref} gap="sm" className={cn(className)} {...props}>
        {breadcrumb && (
          <div className="text-sm text-muted-foreground">
            {breadcrumb}
          </div>
        )}

        <Cluster justify="between" align="start" wrap={false}>
          <Stack gap="xs">
            <h1 className="text-2xl font-semibold tracking-tight">
              {title}
            </h1>
            {description && (
              <p className="text-muted-foreground">
                {description}
              </p>
            )}
          </Stack>

          {actions && (
            <Cluster gap="sm" className="shrink-0">
              {actions}
            </Cluster>
          )}
        </Cluster>
      </Stack>
    )
  }
)
PageHeader.displayName = "PageHeader"
