import figma from "@figma/code-connect"
import { Label } from "../label"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=114:42"

figma.connect(Label, FIGMA_URL, {
  example: () => <Label htmlFor="email">Email address</Label>,
})
