import figma from "@figma/code-connect"
import { Checkbox } from "../checkbox"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=114:5"

figma.connect(Checkbox, FIGMA_URL, {
  example: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label htmlFor="terms">Accept terms</label>
    </div>
  ),
})
