import figma from "@figma/code-connect"
import { Progress } from "../progress"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=114:34"

figma.connect(Progress, FIGMA_URL, {
  example: () => <Progress value={60} />,
})
