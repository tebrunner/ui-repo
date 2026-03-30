import figma from "@figma/code-connect"
import { Sidebar } from "../sidebar"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=122:91"

figma.connect(Sidebar, FIGMA_URL, {
  props: {
    variant: figma.enum("variant", {
      sidebar: "sidebar",
      floating: "floating",
      inset: "inset",
    }),
    children: figma.children("*"),
  },
  example: ({ variant, children }) => (
    <Sidebar variant={variant}>
      {children}
    </Sidebar>
  ),
})
