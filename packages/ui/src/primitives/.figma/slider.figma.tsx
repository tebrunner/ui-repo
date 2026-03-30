import figma from "@figma/code-connect"
import { Slider } from "../slider"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=114:38"

figma.connect(Slider, FIGMA_URL, {
  example: () => <Slider defaultValue={[50]} max={100} step={1} />,
})
