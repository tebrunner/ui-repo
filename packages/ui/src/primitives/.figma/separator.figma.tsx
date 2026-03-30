import figma from "@figma/code-connect"
import { Separator } from "../separator"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=12:122"

figma.connect(Separator, FIGMA_URL, {
  props: {
    orientation: figma.enum("orientation", {
      horizontal: "horizontal",
      vertical: "vertical",
    }),
  },
  example: ({ orientation }) => <Separator orientation={orientation} />,
})
