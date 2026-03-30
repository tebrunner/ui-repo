import figma from "@figma/code-connect"
import { Textarea } from "../textarea"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=114:30"

figma.connect(Textarea, FIGMA_URL, {
  example: () => <Textarea placeholder="Tell us about yourself..." />,
})
