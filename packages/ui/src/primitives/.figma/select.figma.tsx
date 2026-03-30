import figma from "@figma/code-connect"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=114:26"

figma.connect(Select, FIGMA_URL, {
  props: {
    size: figma.enum("size", {
      default: "default",
      sm: "sm",
    }),
  },
  example: ({ size }) => (
    <Select>
      <SelectTrigger size={size}>
        <SelectValue placeholder="Select a fruit..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="cherry">Cherry</SelectItem>
      </SelectContent>
    </Select>
  ),
})
