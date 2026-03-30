import { forwardRef, type HTMLAttributes } from "react"
import { cn } from "../lib/cn"
import { type Gap, gapMap } from "./_scale"

const thresholdMap = {
  sm: "30rem",
  md: "40rem",
  lg: "50rem",
  xl: "60rem",
} as const

export interface SwitcherProps extends HTMLAttributes<HTMLDivElement> {
  /** Container width at which children switch from vertical to horizontal */
  threshold?: keyof typeof thresholdMap
  /** Gap between children */
  gap?: Gap
  /** Maximum items per row before wrapping (0 = no limit) */
  limit?: number
}

/**
 * Switches between horizontal and vertical layout based on the container's
 * own width — not the viewport. When the container is wider than `threshold`,
 * children sit side by side with equal widths. When narrower, they stack.
 *
 * This uses the Flexbox quantity + basis trick from Every Layout:
 * `flex-basis: calc((threshold - 100%) * 999)` produces a large negative
 * value (ignored by flex) when the container is wide, and a large positive
 * value (forcing wrap) when narrow.
 */
export const Switcher = forwardRef<HTMLDivElement, SwitcherProps>(
  ({ threshold = "md", gap = "md", limit = 0, className, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-wrap", gapMap[gap], className)}
        style={{
          ...style,
          "--switcher-threshold": thresholdMap[threshold],
          "--switcher-limit": limit > 0 ? limit : undefined,
        } as React.CSSProperties}
        data-layout="switcher"
        {...props}
      />
    )
  }
)
Switcher.displayName = "Switcher"

/**
 * Direct child of Switcher. Applies the flex-basis calc trick.
 * Wrap each child in SwitcherItem for the layout to work.
 */
export interface SwitcherItemProps extends HTMLAttributes<HTMLDivElement> {}

export const SwitcherItem = forwardRef<HTMLDivElement, SwitcherItemProps>(
  ({ className, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("grow", className)}
        style={{
          ...style,
          flexBasis: "calc((var(--switcher-threshold) - 100%) * 999)",
        } as React.CSSProperties}
        {...props}
      />
    )
  }
)
SwitcherItem.displayName = "SwitcherItem"
