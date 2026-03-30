import { forwardRef, type HTMLAttributes } from "react"
import { cn } from "../lib/cn"

type Position = "fixed" | "absolute"

type Placement =
  | "center"
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right"

const placementMap: Record<Placement, string> = {
  "center": "inset-0 m-auto h-fit w-fit",
  "top-left": "top-0 left-0",
  "top-center": "top-0 left-1/2 -translate-x-1/2",
  "top-right": "top-0 right-0",
  "bottom-left": "bottom-0 left-0",
  "bottom-center": "bottom-0 left-1/2 -translate-x-1/2",
  "bottom-right": "bottom-0 right-0",
}

export interface ImposterProps extends HTMLAttributes<HTMLDivElement> {
  /** Positioning strategy */
  position?: Position
  /** Where to place the element */
  placement?: Placement
  /** Inset margin from the edges */
  margin?: "none" | "sm" | "md" | "lg"
}

/**
 * A positioned overlay element that breaks out of the normal document flow.
 * Place it inside a `position: relative` parent for `absolute`, or use
 * `fixed` to position relative to the viewport.
 *
 * Unlike Radix overlays (Dialog, Popover), the Imposter is a pure CSS
 * layout primitive with no JS behavior — use it for floating action buttons,
 * notification badges, corner anchored UI, etc.
 */
export const Imposter = forwardRef<HTMLDivElement, ImposterProps>(
  (
    {
      position = "absolute",
      placement = "center",
      margin = "none",
      className,
      ...props
    },
    ref
  ) => {
    const marginClass = {
      none: "",
      sm: "m-2",
      md: "m-4",
      lg: "m-8",
    }[margin]

    return (
      <div
        ref={ref}
        className={cn(
          position === "fixed" ? "fixed" : "absolute",
          placementMap[placement],
          marginClass,
          "z-10",
          className
        )}
        {...props}
      />
    )
  }
)
Imposter.displayName = "Imposter"
