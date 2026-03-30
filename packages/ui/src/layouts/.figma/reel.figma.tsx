import figma from "@figma/code-connect"
import { Reel } from "../reel"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=67:39"

figma.connect(Reel, FIGMA_URL, {
  props: {
    gap: figma.enum("gap", {
      none: "none",
      xs: "xs",
      sm: "sm",
      md: "md",
      lg: "lg",
      xl: "xl",
    }),
    snap: figma.enum("snap", {
      yes: true,
      no: false,
    }),
    children: figma.children("*"),
  },
  example: ({ gap, snap, children }) => (
    <Reel gap={gap} snap={snap}>
      {children}
    </Reel>
  ),
})
