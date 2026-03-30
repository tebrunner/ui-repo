import { forwardRef, type HTMLAttributes, type ReactNode } from "react"
import { Stack } from "../layouts/stack"
import { Center } from "../layouts/center"
import { cn } from "../lib/cn"

export interface EmptyStateProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  icon?: ReactNode
  title: ReactNode
  description?: ReactNode
  action?: ReactNode
  secondaryAction?: ReactNode
}

export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ icon, title, description, action, secondaryAction, className, ...props }, ref) => {
    return (
      <Center ref={ref} text className={cn("py-12", className)} {...props}>
        <Stack gap="md" align="center" className="max-w-sm">
          {icon && (
            <div className="text-muted-foreground/50">
              {icon}
            </div>
          )}

          <Stack gap="xs" align="center">
            <h3 className="text-lg font-medium">{title}</h3>
            {description && (
              <p className="text-sm text-muted-foreground">
                {description}
              </p>
            )}
          </Stack>

          {(action || secondaryAction) && (
            <Stack gap="sm" align="center">
              {action}
              {secondaryAction}
            </Stack>
          )}
        </Stack>
      </Center>
    )
  }
)
EmptyState.displayName = "EmptyState"
