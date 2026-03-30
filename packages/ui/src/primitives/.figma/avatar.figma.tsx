import figma from "@figma/code-connect"
import { Avatar, AvatarImage, AvatarFallback } from "../avatar"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=12:94"

figma.connect(Avatar, FIGMA_URL, {
  props: {
    size: figma.enum("size", {
      sm: "sm",
      default: "default",
      lg: "lg",
    }),
  },
  variant: { type: "fallback" },
  example: ({ size }) => (
    <Avatar size={size}>
      <AvatarFallback>JK</AvatarFallback>
    </Avatar>
  ),
})

figma.connect(Avatar, FIGMA_URL, {
  props: {
    size: figma.enum("size", {
      sm: "sm",
      default: "default",
      lg: "lg",
    }),
  },
  variant: { type: "image" },
  example: ({ size }) => (
    <Avatar size={size}>
      <AvatarImage src="/avatar.jpg" alt="User" />
      <AvatarFallback>JK</AvatarFallback>
    </Avatar>
  ),
})
