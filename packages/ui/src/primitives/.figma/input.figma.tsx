import figma from "@figma/code-connect"
import { Input } from "../input"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=12:83"

figma.connect(Input, FIGMA_URL, {
  example: () => <Input placeholder="Placeholder..." />,
})
