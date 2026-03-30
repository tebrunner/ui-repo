import { forwardRef, type HTMLAttributes, type ReactNode } from "react"
import { Stack } from "../layouts/stack"
import { cn } from "../lib/cn"

export interface ProfileHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /** Profile avatar or image */
  avatar?: ReactNode
  /** Name or heading */
  heading: ReactNode
  /** Short bio or description */
  description?: ReactNode
  /** Horizontal alignment */
  align?: "start" | "center" | "end"
}

export const ProfileHeader = forwardRef<HTMLDivElement, ProfileHeaderProps>(
  ({ avatar, heading, description, align = "center", className, ...props }, ref) => {
    return (
      <Stack
        ref={ref}
        gap="lg"
        align={align}
        className={cn(align === "center" && "text-center", className)}
        {...props}
      >
        {avatar}
        <Stack gap="md" align={align}>
          <div className="text-4xl font-semibold">{heading}</div>
          {description && (
            <div className="text-muted-foreground max-w-md text-lg font-light">
              {description}
            </div>
          )}
        </Stack>
      </Stack>
    )
  }
)
ProfileHeader.displayName = "ProfileHeader"
