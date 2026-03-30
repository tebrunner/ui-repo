import figma from "@figma/code-connect"
import { Center } from "../center"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=3:308"

figma.connect(Center, FIGMA_URL, {
  props: {
    max: figma.enum("max", {
      sm: "sm",
      md: "md",
      lg: "lg",
      xl: "xl",
      "2xl": "2xl",
      prose: "prose",
    }),
    gutter: figma.boolean("gutter"),
    text: figma.boolean("text"),
    intrinsic: figma.boolean("intrinsic"),
    children: figma.children("*"),
  },
  example: ({ max, gutter, text, intrinsic, children }) => (
    <Center max={max} gutter={gutter} text={text} intrinsic={intrinsic}>
      {children}
    </Center>
  ),
})
