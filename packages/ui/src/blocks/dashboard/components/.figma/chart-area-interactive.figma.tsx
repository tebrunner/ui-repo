import figma from "@figma/code-connect"
import { ChartAreaInteractive } from "../chart-area-interactive"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=15:115"

figma.connect(ChartAreaInteractive, FIGMA_URL, {
  example: () => <ChartAreaInteractive />,
})
