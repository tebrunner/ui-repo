import figma from "@figma/code-connect"
import { Cluster } from "../cluster"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=3:171"

figma.connect(Cluster, FIGMA_URL, {
  props: {
    gap: figma.enum("gap", {
      none: "none",
      xs: "xs",
      sm: "sm",
      md: "md",
      lg: "lg",
      xl: "xl",
    }),
    align: figma.enum("align", {
      start: "start",
      center: "center",
      end: "end",
      baseline: "baseline",
    }),
    justify: figma.enum("justify", {
      start: "start",
      center: "center",
      end: "end",
      between: "between",
      around: "around",
    }),
    children: figma.children("*"),
  },
  example: ({ gap, align, justify, children }) => (
    <Cluster gap={gap} align={align} justify={justify}>
      {children}
    </Cluster>
  ),
})
