import { Toggle } from "@repo/ui/primitives"
import { cn } from "@repo/ui/lib"

export interface HamburgerProps {
  /** Whether the menu is open or closed */
  open: boolean
  /** Callback when toggle state changes */
  onOpenChange?: (open: boolean) => void
  className?: string
}

export function Hamburger({ open = false, onOpenChange, className }: HamburgerProps) {
  return (
    <Toggle
      pressed={open}
      onPressedChange={onOpenChange}
      className={cn(
        "flex flex-col justify-center items-center gap-1 w-8 h-8",
        className
      )}
    >
      <span
        className={cn(
          "block h-0.5 w-full bg-current rounded transition-transform duration-300",
          open ? "rotate-45 translate-y-1.5" : ""
        )}
      />
      <span
        className={cn(
            "block h-0.5 w-full bg-current rounded transition-opacity duration-300",
            open ? "opacity-0" : ""
          )}
      />
      <span
        className={cn(
          "block h-0.5 w-full bg-current rounded transition-transform duration-300",
          open ? "-rotate-45 -translate-y-1.5" : ""
        )}
      />
    </Toggle>
  )
}