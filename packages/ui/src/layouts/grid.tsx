import { type ComponentPropsWithRef } from "react"
import { cn } from "../lib/cn"
import { type Gap, type GridMin, gapMap } from "./_scale"

// ─────────────────────────────────────────────
// Grid
//
// CSS grid with either fixed column counts or
// auto-fill/auto-fit intrinsic sizing. Uses the
// shared gap scale from _scale.ts.
//
// For fixed columns, Tailwind's grid-cols-N classes
// are used directly. For auto-fill/auto-fit, a
// CSS custom property sets the repeat() template
// with a constrained minimum width (GridMin type).
//
// Usage:
//
//   {/* Fixed 3-column grid */}
//   <Grid columns={3} gap="md">
//     <Card /><Card /><Card />
//   </Grid>
//
//   {/* Responsive auto-fit — cards wrap based on space */}
//   <Grid columns="auto-fit" min="20rem" gap="lg">
//     <Card /><Card /><Card /><Card />
//   </Grid>
//
//   {/* Dense 2-column form layout */}
//   <Grid columns={2} gap="sm">
//     <Input /><Input /><Input /><Input />
//   </Grid>
// ─────────────────────────────────────────────

type Columns = 1 | 2 | 3 | 4 | 5 | 6 | "auto-fill" | "auto-fit"

const colsMap: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
}

export interface GridProps extends ComponentPropsWithRef<"div"> {
  /**
   * Number of columns, or `"auto-fill"` / `"auto-fit"` for
   * intrinsic sizing. Default `3`.
   */
  columns?: Columns
  /** Gap between grid cells. Default `"md"` (16px). */
  gap?: Gap
  /**
   * Minimum column width for auto-fill/auto-fit grids.
   * Ignored when `columns` is a number. Default `"15rem"` (240px).
   * Constrained to the `GridMin` type from `_scale.ts` to prevent
   * arbitrary values from leaking into grid templates.
   */
  min?: GridMin
}

export function Grid({
  columns = 3,
  gap = "md",
  min = "15rem",
  className,
  style,
  ref,
  ...props
}: GridProps) {
  const isAuto = columns === "auto-fill" || columns === "auto-fit"

  return (
    <div
      ref={ref}
      className={cn(
        "grid",
        !isAuto && colsMap[columns],
        gapMap[gap],
        className
      )}
      style={
        isAuto
          ? {
              ...style,
              gridTemplateColumns: `repeat(${columns}, minmax(${min}, 1fr))`,
            }
          : style
      }
      {...props}
    />
  )
}
Grid.displayName = "Grid"