import { forwardRef, type HTMLAttributes, type CSSProperties } from "react"
import { cn } from "../lib/cn"
import { type Gap, gapMap } from "./_scale"

type Ratio = "sidebar" | "aside" | "half" | "golden"

/**
 * Default dimensions for each ratio preset.
 * sidebar/aside use the Every Layout Sidebar pattern (flex-basis + min-width wrapping).
 * half/golden use the Switcher trick (flex-basis calc) for correct proportions + wrapping.
 */
const presets: Record<Ratio, { sideWidth: string; contentMin: string }> = {
  sidebar: { sideWidth: "15rem", contentMin: "50%" },
  aside: { sideWidth: "20rem", contentMin: "50%" },
  half: { sideWidth: "0", contentMin: "0" },
  golden: { sideWidth: "0", contentMin: "0" },
}

export interface SplitProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Layout preset:
   * - `sidebar` — left side has a preferred width, content fills the rest, wraps when content can't get 50%
   * - `aside` — same as sidebar but the narrow panel is on the right
   * - `half` — equal columns that stack below ~40rem container width
   * - `golden` — 1 : 1.618 ratio that stacks below ~40rem
   */
  ratio?: Ratio
  gap?: Gap
  /** Preferred width of the narrow side — overrides the ratio preset (any CSS length) */
  sideWidth?: string
  /** Minimum width the content side needs before both columns wrap (CSS length or %) */
  contentMin?: string
}

/**
 * A two-column layout that wraps to a single column when the container is too
 * narrow. Implements the Every Layout "Sidebar" pattern for sidebar/aside and
 * the "Switcher" trick for half/golden.
 *
 * Unlike a rigid CSS Grid split, this component responds to its container
 * width, not the viewport. When space runs out, the columns stack gracefully.
 */
export const Split = forwardRef<HTMLDivElement, SplitProps>(
  (
    {
      ratio = "sidebar",
      gap = "none",
      sideWidth,
      contentMin,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const preset = presets[ratio]
    const isSidebar = ratio === "sidebar" || ratio === "aside"

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-wrap",
          gapMap[gap],
          // Sidebar pattern: one side has a preferred width, the other fills
          ratio === "sidebar" && [
            "[&>:first-child]:flex-[1_1_var(--split-side)]",
            "[&>:last-child]:flex-[999_1_0%]",
            "[&>:last-child]:min-w-[var(--split-min)]",
          ],
          ratio === "aside" && [
            "[&>:first-child]:flex-[999_1_0%]",
            "[&>:first-child]:min-w-[var(--split-min)]",
            "[&>:last-child]:flex-[1_1_var(--split-side)]",
          ],
          // Switcher trick: correct proportions that stack below threshold
          ratio === "half" && [
            "[&>*]:flex-[1_1_var(--split-basis)]",
          ],
          ratio === "golden" && [
            "[&>:first-child]:flex-[1_1_var(--split-basis)]",
            "[&>:last-child]:flex-[1.618_1_var(--split-basis)]",
          ],
          className
        )}
        style={{
          ...style,
          ...(isSidebar
            ? {
                "--split-side": sideWidth ?? preset.sideWidth,
                "--split-min": contentMin ?? preset.contentMin,
              }
            : {
                "--split-basis": "calc((40rem - 100%) * 999)",
              }),
        } as CSSProperties}
        {...props}
      />
    )
  }
)
Split.displayName = "Split"
