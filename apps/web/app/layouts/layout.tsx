import { PortalNavWrapper as PortalNav } from "../../components/portal-nav-wrapper"

const layoutLinks = [
  { href: "/layouts/container", label: "Container" },
  { href: "/layouts/stack", label: "Stack" },
  { href: "/layouts/cluster", label: "Cluster" },
  { href: "/layouts/grid", label: "Grid" },
  { href: "/layouts/center", label: "Center" },
  { href: "/layouts/split", label: "Split" },
  { href: "/layouts/cover", label: "Cover" },
  { href: "/layouts/box", label: "Box" },
  { href: "/layouts/switcher", label: "Switcher" },
  { href: "/layouts/frame", label: "Frame" },
  { href: "/layouts/reel", label: "Reel" },
  { href: "/layouts/imposter", label: "Imposter" },
  { href: "/layouts/icon", label: "Icon" },
]

export default function LayoutsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <PortalNav title="Layouts" titleHref="/layouts" links={layoutLinks} />
      <div className="flex-1 p-6">{children}</div>
    </div>
  )
}
