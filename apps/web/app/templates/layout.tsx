import { PortalNavWrapper as PortalNav } from "../../components/portal-nav-wrapper"

const templateLinks = [
  { href: "/templates/auth", label: "Auth" },
  { href: "/templates/app", label: "App" },
  { href: "/templates/data", label: "Data" },
  { href: "/templates/marketing", label: "Marketing" },
  { href: "/templates/link-in-bio", label: "Link-In-Bio" },
  { href: "/templates/dashboard", label: "Dashboard" },
]

export default function TemplatesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <PortalNav title="Templates" titleHref="/templates" links={templateLinks} />
      <div className="flex-1">{children}</div>
    </div>
  )
}
