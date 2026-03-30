import figma from "@figma/code-connect"
import { Container } from "../container"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=71:9"

figma.connect(Container, FIGMA_URL, {
  props: {
    name: figma.enum("named", {
      yes: "sidebar",
      no: undefined,
    }),
    children: figma.children("*"),
  },
  example: ({ name, children }) => (
    <Container name={name}>
      {children}
    </Container>
  ),
})
