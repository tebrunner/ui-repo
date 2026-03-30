import { type ComponentPropsWithRef } from "react"
import { cn } from "../lib/cn"
import { type Gap, gapMap } from "./_scale"

// ─────────────────────────────────────────────
// Stack
//
// Vertical flow with consistent gap.
// This is the most-used layout component in the system.
//
// The parent Stack owns the gap between its children.
// Children should never set margin-top/margin-bottom
// to space themselves — that breaks composition.
//
// Usage:
//
//   {/* Basic vertical rhythm */}
//   <Stack gap="lg">
//     <Heading />
//     <Paragraph />
//     <Paragraph />
//   </Stack>
//
//   {/* Centered content column */}
//   <Stack gap="md" align="center">
//     <Logo />
//     <NavLinks />
//   </Stack>
//
//   {/* Prose content with uniform nested rhythm */}
//   <Stack gap="md" recursive>
//     <article dangerouslySetInnerHTML={{ __html: content }} />
//   </Stack>
// ─────────────────────────────────────────────

/**
 * Recursive spacing via the "lobotomized owl" selector (* + *).
 * Applies margin-top to ALL sibling elements at every nesting level.
 *
 * USE ONLY FOR PROSE / ARTICLE CONTENT.
 *
 * The descendant selector will reach into nested layout components
 * (Cluster, Grid, etc.) and fight their own gap values. This is
 * intentional for prose where you want uniform rhythm regardless
 * of HTML structure, but harmful for composed UI where each layout
 * primitive should control its own spacing.
 */
const recursiveGapMap: Record<Gap, string> = {
  none: "[&_*+*]:mt-0",
  xs:   "[&_*+*]:mt-1",
  sm:   "[&_*+*]:mt-2",
  md:   "[&_*+*]:mt-4",
  lg:   "[&_*+*]:mt-6",
  xl:   "[&_*+*]:mt-8",
  "2xl":"[&_*+*]:mt-12",
  "3xl":"[&_*+*]:mt-16",
}

export interface StackProps extends ComponentPropsWithRef<"div"> {
  /** Vertical gap between children. Default `"md"` (16px). */
  gap?: Gap
  /** Cross-axis alignment. Default `"stretch"`. */
  align?: "start" | "center" | "end" | "stretch"
  /**
   * Apply spacing to ALL descendants, not just direct children.
   * For prose/article content only — see recursiveGapMap comment above.
   */
  recursive?: boolean
}

export function Stack({
  gap = "md",
  align = "stretch",
  recursive = false,
  className,
  ref,
  ...props
}: StackProps) {
  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col",
        recursive ? recursiveGapMap[gap] : gapMap[gap],
        align === "start" && "items-start",
        align === "center" && "items-center",
        align === "end" && "items-end",
        align === "stretch" && "items-stretch",
        className
      )}
      {...props}
    />
  )
}
Stack.displayName = "Stack"