"use client"

import { usePathname } from "next/navigation"
import { PortalNav, type PortalNavProps } from "@repo/ui/blocks"

type Props = Omit<PortalNavProps, "pathname">

export function PortalNavWrapper(props: Props) {
  const pathname = usePathname()

  return <PortalNav {...props} pathname={pathname} />
}
