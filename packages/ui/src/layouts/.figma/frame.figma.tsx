import figma from "@figma/code-connect"
import { Frame } from "../frame"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=66:19"

figma.connect(Frame, FIGMA_URL, {
  props: {
    ratio: figma.enum("ratio", {
      "1/1": "1/1",
      "4/3": "4/3",
      "3/2": "3/2",
      "16/9": "16/9",
      "21/9": "21/9",
      "3/4": "3/4",
      "2/3": "2/3",
      "9/16": "9/16",
    }),
    children: figma.children("*"),
  },
  example: ({ ratio, children }) => (
    <Frame ratio={ratio}>
      {children}
    </Frame>
  ),
})
