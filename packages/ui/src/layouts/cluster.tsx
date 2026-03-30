import { type ComponentPropsWithRef } from "react"
import { cn } from "../lib/cn"
import { type Gap, gapMap } from "./_scale"

// ─────────────────────────────────────────────
// Cluster
//
// Horizontal flow that wraps naturally. Use for
// any row of items that should break to the next
// line when space runs out: tags, buttons, nav
// links, icon groups, metadata lines.
//
// Usage:
//
//   {/* Button group */}
//   <Cluster gap="sm">
//     <Button>Save</Button>
//     <Button>Cancel</Button>
//   </Cluster>
//
//   {/* Tag list */}
//   <Cluster gap="xs" wrap>
//     <Tag>React</Tag>
//     <Tag>TypeScript</Tag>
//     <Tag>Tailwind</Tag>
//   </Cluster>
//
//   {/* Header with spaced-apart groups */}
//   <Cluster justify="between">
//     <Logo />
//     <Cluster gap="sm">
//       <NavLink />
//       <NavLink />
//     </Cluster>
//   </Cluster>
// ─────────────────────────────────────────────

export interface ClusterProps extends ComponentPropsWithRef<"div"> {
  /** Gap between items. Default `"md"` (16px). */
  gap?: Gap
  /** Cross-axis alignment. Default `"center"`. */
  align?: "start" | "center" | "end" | "baseline"
  /** Main-axis distribution. Default `"start"`. */
  justify?: "start" | "center" | "end" | "between" | "around"
  /** Allow items to wrap to next line. Default `true`. */
  wrap?: boolean
}

export function Cluster({
  gap = "md",
  align = "center",
  justify = "start",
  wrap = true,
  className,
  ref,
  ...props
}: ClusterProps) {
  return (
    <div
      ref={ref}
      className={cn(
        "flex",
        gapMap[gap],
        wrap && "flex-wrap",
        align === "start" && "items-start",
        align === "center" && "items-center",
        align === "end" && "items-end",
        align === "baseline" && "items-baseline",
        justify === "start" && "justify-start",
        justify === "center" && "justify-center",
        justify === "end" && "justify-end",
        justify === "between" && "justify-between",
        justify === "around" && "justify-around",
        className
      )}
      {...props}
    />
  )
}
Cluster.displayName = "Cluster"