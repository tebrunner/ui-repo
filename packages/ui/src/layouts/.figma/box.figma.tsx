import figma from "@figma/code-connect"
import { Box } from "../box"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=64:19"

figma.connect(Box, FIGMA_URL, {
  props: {
    padding: figma.enum("padding", {
      none: "none",
      sm: "sm",
      md: "md",
      lg: "lg",
      xl: "xl",
    }),
    borderWidth: figma.enum("borderWidth", {
      none: "none",
      thin: "thin",
      thick: "thick",
    }),
    children: figma.children("*"),
  },
  example: ({ padding, borderWidth, children }) => (
    <Box padding={padding} borderWidth={borderWidth}>
      {children}
    </Box>
  ),
})
