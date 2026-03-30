import { PortalNavWrapper as PortalNav } from "../../components/portal-nav-wrapper"

const patternLinks = [
  { href: "/patterns/empty-state", label: "Empty State" },
  { href: "/patterns/form-section", label: "Form Section" },
  { href: "/patterns/page-header", label: "Page Header" },
  { href: "/patterns/section-header", label: "Section Header" },
]

export default function PatternsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <PortalNav title="Patterns" titleHref="/patterns" links={patternLinks} />
      <div className="flex-1">{children}</div>
    </div>
  )
}
