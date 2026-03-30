import figma from "@figma/code-connect"
import { MarketingFooter } from "../marketing/marketing-footer"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=102:5"

figma.connect(MarketingFooter, FIGMA_URL, {
  props: {
    logo: figma.children("Logo"),
  },
  example: ({ logo }) => (
    <MarketingFooter
      logo={logo}
      tagline="Build better products, ship them faster."
      columns={[
        {
          title: "Product",
          links: [
            { label: "Features", href: "/features" },
            { label: "Pricing", href: "/pricing" },
            { label: "Changelog", href: "/changelog" },
            { label: "Documentation", href: "/docs" },
          ],
        },
        {
          title: "Company",
          links: [
            { label: "About", href: "/about" },
            { label: "Blog", href: "/blog" },
            { label: "Careers", href: "/careers" },
            { label: "Contact", href: "/contact" },
          ],
        },
        {
          title: "Legal",
          links: [
            { label: "Privacy", href: "/privacy" },
            { label: "Terms", href: "/terms" },
            { label: "Security", href: "/security" },
          ],
        },
      ]}
      legal={[
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ]}
    />
  ),
})
