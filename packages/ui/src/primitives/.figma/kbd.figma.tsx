import figma from "@figma/code-connect"
import { Kbd, KbdGroup } from "../kbd"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=114:43"

figma.connect(Kbd, FIGMA_URL, {
  example: () => (
    <KbdGroup>
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
  ),
})
