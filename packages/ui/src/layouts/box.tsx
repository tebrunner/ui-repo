import { forwardRef, type HTMLAttributes } from "react"
import { cn } from "../lib/cn"

type Padding = "none" | "xs" | "sm" | "md" | "lg" | "xl"

const paddingMap: Record<Padding, string> = {
  none: "p-0",
  xs: "p-1",
  sm: "p-2",
  md: "p-4",
  lg: "p-6",
  xl: "p-8",
}

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  /** Internal padding */
  padding?: Padding
  /** Show a border */
  borderWidth?: "none" | "thin" | "thick"
  /** Invert foreground/background colors */
  invert?: boolean
}

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      padding = "md",
      borderWidth = "none",
      invert = false,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          paddingMap[padding],
          borderWidth === "thin" && "border border-border",
          borderWidth === "thick" && "border-2 border-border",
          invert && "bg-foreground text-background",
          className
        )}
        {...props}
      />
    )
  }
)
Box.displayName = "Box"
