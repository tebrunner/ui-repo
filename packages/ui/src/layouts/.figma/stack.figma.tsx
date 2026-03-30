import figma from "@figma/code-connect"
import { Stack } from "../stack"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=3:115"

figma.connect(Stack, FIGMA_URL, {
  props: {
    gap: figma.enum("gap", {
      none: "none",
      xs: "xs",
      sm: "sm",
      md: "md",
      lg: "lg",
      xl: "xl",
      "2xl": "2xl",
    }),
    align: figma.enum("align", {
      stretch: "stretch",
      start: "start",
      center: "center",
      end: "end",
    }),
    recursive: figma.boolean("recursive"),
    children: figma.children("*"),
  },
  example: ({ gap, align, recursive, children }) => (
    <Stack gap={gap} align={align} recursive={recursive}>
      {children}
    </Stack>
  ),
})
