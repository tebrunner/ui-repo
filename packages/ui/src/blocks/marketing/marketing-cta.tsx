import { forwardRef, type HTMLAttributes, type ReactNode } from "react"
import { Center } from "../../layouts/center"
import { Stack } from "../../layouts/stack"
import { cn } from "../../lib/cn"

export interface MarketingCTAProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  action: ReactNode
}

export const MarketingCTA = forwardRef<HTMLDivElement, MarketingCTAProps>(
  ({ title, description, action, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("border-t border-border bg-muted/20 py-20", className)}
        {...props}
      >
        <Center max="md" text>
          <Stack gap="md" align="center">
            <h2 className="text-3xl font-bold">{title}</h2>
            {description && (
              <p className="text-muted-foreground">{description}</p>
            )}
            {action}
          </Stack>
        </Center>
      </div>
    )
  }
)
MarketingCTA.displayName = "MarketingCTA"
