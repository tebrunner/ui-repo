import figma from "@figma/code-connect"
import { Imposter } from "../imposter"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=68:17"

figma.connect(Imposter, FIGMA_URL, {
  props: {
    placement: figma.enum("placement", {
      center: "center",
      "top-left": "top-left",
      "top-center": "top-center",
      "top-right": "top-right",
      "bottom-left": "bottom-left",
      "bottom-center": "bottom-center",
      "bottom-right": "bottom-right",
    }),
    margin: figma.enum("margin", {
      none: "none",
      sm: "sm",
      md: "md",
      lg: "lg",
    }),
    children: figma.children("*"),
  },
  example: ({ placement, margin, children }) => (
    <Imposter placement={placement} margin={margin}>
      {children}
    </Imposter>
  ),
})
