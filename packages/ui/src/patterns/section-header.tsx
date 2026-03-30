import { forwardRef, type HTMLAttributes, type ReactNode } from "react"
import { Cluster } from "../layouts/cluster"
import { Stack } from "../layouts/stack"
import { cn } from "../lib/cn"

export interface SectionHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title: ReactNode
  description?: ReactNode
  action?: ReactNode
}

export const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ title, description, action, className, ...props }, ref) => {
    return (
      <Cluster ref={ref} justify="between" align="end" className={cn(className)} {...props}>
        <Stack gap="xs">
          <h2 className="text-sm font-medium">{title}</h2>
          {description && (
            <p className="text-sm text-muted-foreground">
              {description}
            </p>
          )}
        </Stack>

        {action && (
          <div className="shrink-0">{action}</div>
        )}
      </Cluster>
    )
  }
)
SectionHeader.displayName = "SectionHeader"
