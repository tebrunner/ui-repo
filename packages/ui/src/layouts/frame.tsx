import { forwardRef, type HTMLAttributes } from "react"
import { cn } from "../lib/cn"

const ratioMap = {
  "1/1": "aspect-square",
  "4/3": "aspect-[4/3]",
  "3/2": "aspect-[3/2]",
  "16/9": "aspect-video",
  "21/9": "aspect-[21/9]",
  "3/4": "aspect-[3/4]",
  "2/3": "aspect-[2/3]",
  "9/16": "aspect-[9/16]",
} as const

export interface FrameProps extends HTMLAttributes<HTMLDivElement> {
  /** Aspect ratio of the frame */
  ratio?: keyof typeof ratioMap
}

/**
 * An aspect-ratio container that crops its content to fit. Place an
 * `<img>`, `<video>`, `<iframe>`, or any element inside and it will
 * be sized and clipped to the given ratio.
 *
 * Children are stretched to fill via `object-cover` behavior — the Frame
 * itself uses overflow-hidden to crop, and direct children are absolutely
 * positioned to fill.
 */
export const Frame = forwardRef<HTMLDivElement, FrameProps>(
  ({ ratio = "16/9", className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden",
          ratioMap[ratio],
          "[&>*]:absolute [&>*]:inset-0 [&>*]:h-full [&>*]:w-full [&>*]:object-cover",
          className
        )}
        {...props}
      />
    )
  }
)
Frame.displayName = "Frame"
