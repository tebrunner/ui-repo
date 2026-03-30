import { forwardRef, type HTMLAttributes } from "react"
import { cn } from "../lib/cn"
import { type Gap, gapMap } from "./_scale"

export interface ReelProps extends HTMLAttributes<HTMLDivElement> {
  /** Gap between items */
  gap?: Gap
  /** Snap items to the start of the scroll container */
  snap?: boolean
  /** Hide the scrollbar (content is still scrollable) */
  hideScrollbar?: boolean
}

/**
 * A horizontal scrolling strip. Items overflow and scroll horizontally
 * while maintaining consistent gap and optional scroll-snap alignment.
 *
 * Each direct child becomes a flex-none item that does not shrink.
 * Use `className` on children to set widths (e.g., `w-72`, `w-[300px]`).
 */
export const Reel = forwardRef<HTMLDivElement, ReelProps>(
  ({ gap = "md", snap = false, hideScrollbar = false, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex overflow-x-auto",
          gapMap[gap],
          snap && "snap-x snap-mandatory",
          hideScrollbar && "scrollbar-none",
          "[&>*]:flex-none",
          snap && "[&>*]:snap-start",
          className
        )}
        {...props}
      />
    )
  }
)
Reel.displayName = "Reel"
