import { type ReactNode } from "react"
import { PortalNavWrapper as PortalNav } from "../../components/portal-nav-wrapper"
import { portalLinks } from "../../config/portal"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <PortalNav title="Portal" titleHref="/" links={portalLinks} />
      {children}
    </>
  )
}
