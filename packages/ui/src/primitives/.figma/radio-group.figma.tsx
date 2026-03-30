import figma from "@figma/code-connect"
import { RadioGroup, RadioGroupItem } from "../radio-group"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=114:13"

figma.connect(RadioGroup, FIGMA_URL, {
  example: () => (
    <RadioGroup defaultValue="a">
      <RadioGroupItem value="a" id="a" />
      <RadioGroupItem value="b" id="b" />
      <RadioGroupItem value="c" id="c" />
    </RadioGroup>
  ),
})
