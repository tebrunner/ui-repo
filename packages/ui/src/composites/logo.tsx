// packages/ui/src/composites/logo.tsx
 
import { type ReactNode } from "react"
import { cn } from "../lib/cn"
 
export type LogoVariant = "icon" | "wordmark" | "full"
export type LogoSize = "xs" | "sm" | "md" | "lg" | "xl"
 
export interface LogoProps {
  /** Display variant */
  variant?: LogoVariant
  /** Size preset */
  size?: LogoSize
  /** Optional link wrapper */
  href?: string
  /** Custom icon override */
  icon?: ReactNode
  /** Custom wordmark override */
  wordmark?: ReactNode
  /** Brand name (used if no wordmark provided) */
  name?: string
  className?: string
}
 
const sizeMap: Record<LogoSize, { icon: string; text: string; gap: string }> = {
  xs: { icon: "h-5 w-5", text: "text-sm", gap: "gap-.5" },
  sm: { icon: "h-6 w-6", text: "text-base", gap: "gap-1" },
  md: { icon: "h-8 w-8", text: "text-lg", gap: "gap-1.5" },
  lg: { icon: "h-10 w-10", text: "text-xl", gap: "gap-2" },
  xl: { icon: "h-12 w-12", text: "text-2xl", gap: "gap-2.5" },
}
 
export function Logo({
  variant = "full",
  size = "sm",
  href,
  icon,
  wordmark,
  name = "Brand",
  className,
}: LogoProps) {
  const sizes = sizeMap[size]
 
  const logoIcon = (
    <span className={cn("shrink-0", sizes.icon)}>
      {icon ?? <DefaultLogoIcon className="h-full w-full" />}
    </span>
  )
  
  const logoWordmark = wordmark ?? (
    <span className={cn("font-semibold tracking-tight", sizes.text)}>
      {name}
    </span>
  )
 
  const content = (
    <>
      {(variant === "icon" || variant === "full") && logoIcon}
      {(variant === "wordmark" || variant === "full") && logoWordmark}
    </>
  )
 
  const wrapperClass = cn(
    "inline-flex items-center",
    sizes.gap,
    href && "hover:opacity-80 transition-opacity",
    className
  )
 
  if (href) {
    return (
      <a href={href} className={wrapperClass}>
        {content}
      </a>
    )
  }
 
  return <div className={wrapperClass}>{content}</div>
}
 
// Default icon - replace with your brand mark
function DefaultLogoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Abstract geometric mark - customize this */}
      <rect
        x="2"
        y="2"
        width="28"
        height="28"
        rx="6"
        className="fill-foreground"
      />
      <path
        d="M10 16L14 20L22 12"
        className="stroke-background"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
 
// Export the default icon for customization reference
export { DefaultLogoIcon }
 