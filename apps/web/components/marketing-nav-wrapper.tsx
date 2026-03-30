// apps/web/components/marketing-nav-wrapper.tsx
"use client"

import { usePathname } from "next/navigation"
import { MarketingNav, type MarketingNavProps } from "@repo/ui/blocks"

type Props = Omit<MarketingNavProps, "pathname">

export function MarketingNavWrapper(props: Props) {
  const pathname = usePathname()
  
  return <MarketingNav {...props} pathname={pathname} />
}