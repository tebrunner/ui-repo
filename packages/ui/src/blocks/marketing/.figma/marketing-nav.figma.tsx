import figma from "@figma/code-connect"
import { MarketingNav } from "../marketing/marketing-nav"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=102:2"

figma.connect(MarketingNav, FIGMA_URL, {
  props: {
    logo: figma.children("Logo"),
    actions: figma.children("Actions"),
  },
  example: ({ logo, actions }) => (
    <MarketingNav
      logo={logo}
      links={[
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/pricing" },
        { label: "Docs", href: "/docs" },
        { label: "Blog", href: "/blog" },
      ]}
      actions={actions}
    />
  ),
})
