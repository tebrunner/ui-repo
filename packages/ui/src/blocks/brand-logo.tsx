// packages/ui/src/blocks/brand-logo.tsx
// App-specific logo with brand customization

import { Logo as BaseLogo, type LogoProps } from "../composites/logo"

// Your custom brand icon
function GMHIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* GMH brand mark - customize this */}
      <rect
        x="2"
        y="2"
        width="28"
        height="28"
        rx="8"
        className="fill-primary"
      />
      <text
        x="16"
        y="21"
        textAnchor="middle"
        className="fill-primary-foreground text-[12px] font-bold"
      >
        Mf
      </text>
    </svg>
  )
}

// Re-export with brand defaults
type BrandLogoProps = Omit<LogoProps, "icon" | "name"> & {
  /** Use custom icon instead of GMH mark */
  customIcon?: LogoProps["icon"]
}

export function Logo({ 
  customIcon,
  variant = "full",
  size = "md",
  href = "/",
  ...props 
}: BrandLogoProps) {
  return (
    <BaseLogo
      variant={variant}
      size={size}
      href={href}
      icon={customIcon ?? <GMHIcon className="h-full w-full" />}
      name="MonoFly UI"
      {...props}
    />
  )
}

// Export variants for convenience
export function LogoIcon(props: Omit<BrandLogoProps, "variant">) {
  return <Logo variant="icon" {...props} />
}

export function LogoWordmark(props: Omit<BrandLogoProps, "variant">) {
  return <Logo variant="wordmark" {...props} />
}
