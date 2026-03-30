import figma from "@figma/code-connect"
import { Switch } from "../switch"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=114:10"

figma.connect(Switch, FIGMA_URL, {
  props: {
    size: figma.enum("size", {
      default: "default",
      sm: "sm",
    }),
  },
  example: ({ size }) => <Switch size={size} />,
})
