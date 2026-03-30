import figma from "@figma/code-connect"
import { PortalNav } from "../portal-nav"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=130:2"

figma.connect(PortalNav, FIGMA_URL, {
  props: {
    title: figma.string("Title"),
  },
  example: ({ title }) => (
    <PortalNav
      title={title}
      titleHref="/section"
      links={[
        { label: "Link 1", href: "/section/link-1" },
        { label: "Link 2", href: "/section/link-2" },
        { label: "Link 3", href: "/section/link-3" },
      ]}
    />
  ),
})
