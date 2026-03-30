import figma from "@figma/code-connect"
import { Split } from "../split"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=3:221"

figma.connect(Split, FIGMA_URL, {
  props: {
    ratio: figma.enum("ratio", {
      sidebar: "sidebar",
      aside: "aside",
      half: "half",
      golden: "golden",
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
  example: ({ ratio, gap, children }) => (
    <Split ratio={ratio} gap={gap}>
      {children}
    </Split>
  ),
})
