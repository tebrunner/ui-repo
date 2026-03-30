import figma from "@figma/code-connect"
import { Grid } from "../grid"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=3:286"

figma.connect(Grid, FIGMA_URL, {
  props: {
    columns: figma.enum("columns", {
      "2": 2,
      "3": 3,
      "4": 4,
      "auto-fill": "auto-fill",
      "auto-fit": "auto-fit",
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
  example: ({ columns, gap, children }) => (
    <Grid columns={columns} gap={gap}>
      {children}
    </Grid>
  ),
})
