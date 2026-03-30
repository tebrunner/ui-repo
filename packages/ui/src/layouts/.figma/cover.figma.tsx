import figma from "@figma/code-connect"
import { Cover } from "../cover"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=3:322"

figma.connect(Cover, FIGMA_URL, {
  props: {
    minHeight: figma.enum("minHeight", {
      screen: "screen",
      full: "full",
      auto: "auto",
    }),
    header: figma.boolean("header", {
      true: figma.children("Header"),
      false: undefined,
    }),
    footer: figma.boolean("footer", {
      true: figma.children("Footer"),
      false: undefined,
    }),
    children: figma.children("Content*"),
  },
  example: ({ minHeight, header, footer, children }) => (
    <Cover minHeight={minHeight} header={header} footer={footer}>
      {children}
    </Cover>
  ),
})
