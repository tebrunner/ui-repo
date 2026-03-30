import figma from "@figma/code-connect"
import { Badge } from "../badge"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=12:62"

figma.connect(Badge, FIGMA_URL, {
  props: {
    variant: figma.enum("variant", {
      default: "default",
      secondary: "secondary",
      outline: "outline",
      destructive: "destructive",
    }),
    children: figma.string("*"),
  },
  example: ({ variant, children }) => (
    <Badge variant={variant}>{children}</Badge>
  ),
})
