import { forwardRef, type HTMLAttributes } from "react"
import { cn } from "../lib/cn"

const maxMap = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
  prose: "max-w-prose",
  full: "max-w-full",
}

export interface CenterProps extends HTMLAttributes<HTMLDivElement> {
  max?: keyof typeof maxMap
  gutter?: boolean
  text?: boolean
  /**
   * Center the element itself, not just its content. Children size to their
   * natural content width and are horizontally centered within the max-width
   * container. Without this, children stretch to fill the full width.
   */
  intrinsic?: boolean
}

export const Center = forwardRef<HTMLDivElement, CenterProps>(
  ({ max = "lg", gutter = true, text = false, intrinsic = false, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto w-full",
          maxMap[max],
          gutter && "px-4 sm:px-6",
          text && "text-center",
          intrinsic && "flex flex-col items-center",
          className
        )}
        {...props}
      />
    )
  }
)
Center.displayName = "Center"
