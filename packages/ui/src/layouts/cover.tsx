import { forwardRef, type HTMLAttributes, type ReactNode } from "react"
import { cn } from "../lib/cn"

export interface CoverProps extends HTMLAttributes<HTMLDivElement> {
  header?: ReactNode
  footer?: ReactNode
  minHeight?: "screen" | "full" | "auto"
}

/**
 * Full-height layout that vertically centers its principal content between
 * an optional header and footer. Children stretch to the full width by
 * default — compose with Center for horizontal centering.
 */
export const Cover = forwardRef<HTMLDivElement, CoverProps>(
  ({ header, footer, minHeight = "screen", className, children, ...props }, ref) => {
    const heightClass = {
      screen: "min-h-screen",
      full: "min-h-full",
      auto: "min-h-0",
    }[minHeight]

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col",
          heightClass,
          className
        )}
        {...props}
      >
        {header && <div className="shrink-0">{header}</div>}
        <div className="grow flex flex-col justify-center">
          {children}
        </div>
        {footer && <div className="shrink-0">{footer}</div>}
      </div>
    )
  }
)
Cover.displayName = "Cover"
