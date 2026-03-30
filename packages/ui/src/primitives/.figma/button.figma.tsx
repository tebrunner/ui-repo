import figma from "@figma/code-connect"
import { Button } from "../button"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=12:52"

figma.connect(Button, FIGMA_URL, {
  props: {
    variant: figma.enum("variant", {
      default: "default",
      secondary: "secondary",
      outline: "outline",
      ghost: "ghost",
      destructive: "destructive",
      link: "link",
    }),
    size: figma.enum("size", {
      default: "default",
      sm: "sm",
      lg: "lg",
      icon: "icon",
    }),
    children: figma.children("*"),
  },
  example: ({ variant, size, children }) => (
    <Button variant={variant} size={size}>
      {children}
    </Button>
  ),
})
