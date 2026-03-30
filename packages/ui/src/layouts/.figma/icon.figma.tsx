import figma from "@figma/code-connect"
import { Icon } from "../icon"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=70:15"

figma.connect(Icon, FIGMA_URL, {
  props: {
    space: figma.enum("space", {
      none: "none",
      xs: "xs",
      sm: "sm",
      md: "md",
    }),
    children: figma.children("*"),
  },
  example: ({ space, children }) => (
    <Icon space={space}>
      {children}
    </Icon>
  ),
})
