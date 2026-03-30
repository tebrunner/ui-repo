import figma from "@figma/code-connect"
import { Toggle } from "../toggle"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=114:22"

figma.connect(Toggle, FIGMA_URL, {
  props: {
    variant: figma.enum("variant", {
      default: "default",
      outline: "outline",
    }),
    size: figma.enum("size", {
      default: "default",
      sm: "sm",
      lg: "lg",
    }),
    pressed: figma.boolean("pressed"),
  },
  example: ({ variant, size, pressed }) => (
    <Toggle variant={variant} size={size} pressed={pressed}>
      B
    </Toggle>
  ),
})
