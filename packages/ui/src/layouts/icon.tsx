import { forwardRef, type HTMLAttributes } from "react"
import { cn } from "../lib/cn"

type Space = "none" | "xs" | "sm" | "md"

const spaceMap: Record<Space, string> = {
  none: "gap-0",
  xs: "gap-0.5",
  sm: "gap-1",
  md: "gap-1.5",
}

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  /** Gap between the icon and the label text */
  space?: Space
  /** Accessible label (sets aria-label; omit if the text child provides context) */
  label?: string
}

/**
 * Aligns an icon inline with text so they share the same vertical rhythm.
 * The first child is treated as the icon and sized to match the current
 * line-height (`1em` square). Remaining children are the label.
 *
 * ```tsx
 * <Icon><MailIcon /> Send email</Icon>
 * ```
 *
 * The icon scales automatically when the parent font-size changes —
 * no fixed pixel sizes needed.
 */
export const Icon = forwardRef<HTMLSpanElement, IconProps>(
  ({ space = "sm", label, className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        role={label ? "img" : undefined}
        aria-label={label}
        className={cn(
          "inline-flex items-center",
          spaceMap[space],
          "[&>svg]:h-[1em] [&>svg]:w-[1em] [&>svg]:shrink-0",
          className
        )}
        {...props}
      />
    )
  }
)
Icon.displayName = "Icon"
