import { type ComponentPropsWithRef } from "react"
import { cn } from "../lib/cn"
import { type CenterMax, centerMaxMap, GUTTER } from "./_scale"

// ─────────────────────────────────────────────
// Center
//
// Horizontal centering + max-width constraint.
// The classic "centered column" pattern.
//
// For page-level containers with section spacing,
// container queries, or semantic HTML, use Container.
// Center is the lighter primitive for any context
// where you just need centered, width-constrained content.
//
// Usage:
//
//   {/* Centered page column with gutter */}
//   <Center max="4xl" gutter>
//     <Stack gap="lg">...</Stack>
//   </Center>
//
//   {/* Narrow centered text block */}
//   <Center max="prose" text>
//     <p>Readable paragraph...</p>
//   </Center>
//
//   {/* Intrinsic: children size to content, centered */}
//   <Center max="lg" intrinsic>
//     <Badge>Centered badge</Badge>
//   </Center>
// ─────────────────────────────────────────────

export interface CenterProps extends ComponentPropsWithRef<"div"> {
  /** Max-width constraint. Maps to `centerMaxMap` in `_scale.ts`. Default `"lg"` (512px). */
  max?: CenterMax
  /** Add responsive horizontal padding to prevent content touching viewport edges. */
  gutter?: boolean
  /** Center text alignment. */
  text?: boolean
  /**
   * Center the element itself, not just its content. Children size to their
   * natural content width and are horizontally centered within the max-width
   * container. Without this, children stretch to fill the full width.
   */
  intrinsic?: boolean
}

export function Center({
  max = "lg",
  gutter = true,
  text = false,
  intrinsic = false,
  className,
  ref,
  ...props
}: CenterProps) {
  return (
    <div
      ref={ref}
      className={cn(
        "mx-auto w-full",
        centerMaxMap[max],
        gutter && GUTTER,
        text && "text-center",
        intrinsic && "flex flex-col items-center",
        className
      )}
      {...props}
    />
  )
}
Center.displayName = "Center"
