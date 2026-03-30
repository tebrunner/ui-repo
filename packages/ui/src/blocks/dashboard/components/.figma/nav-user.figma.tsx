import figma from "@figma/code-connect"
import { NavUser } from "../nav-user"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=110:46"

figma.connect(NavUser, FIGMA_URL, {
  example: () => (
    <NavUser
      user={{
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
      }}
    />
  ),
})
