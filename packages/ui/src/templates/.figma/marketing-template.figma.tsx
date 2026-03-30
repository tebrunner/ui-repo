import figma from "@figma/code-connect"
import { MarketingTemplate } from "../marketing-template"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=10:119"

figma.connect(MarketingTemplate, FIGMA_URL, {
  props: {
    max: figma.enum("max", {
      "3xl": "3xl",
      "4xl": "4xl",
      "5xl": "5xl",
      full: "full",
    }),
    footer: figma.boolean("footer", {
      true: figma.children("footer"),
      false: undefined,
    }),
    nav: figma.children("nav"),
    children: figma.children("children"),
  },
  example: ({ max, nav, children, footer }) => (
    <MarketingTemplate max={max} nav={nav} footer={footer}>
      {children}
    </MarketingTemplate>
  ),
})
