import figma from "@figma/code-connect"
import { Switcher, SwitcherItem } from "../switcher"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=65:39"

figma.connect(Switcher, FIGMA_URL, {
  props: {
    threshold: figma.enum("threshold", {
      sm: "sm",
      md: "md",
      lg: "lg",
      xl: "xl",
    }),
    gap: figma.enum("gap", {
      none: "none",
      xs: "xs",
      sm: "sm",
      md: "md",
      lg: "lg",
      xl: "xl",
    }),
    children: figma.children("*"),
  },
  example: ({ threshold, gap, children }) => (
    <Switcher threshold={threshold} gap={gap}>
      <SwitcherItem>{children}</SwitcherItem>
    </Switcher>
  ),
})
