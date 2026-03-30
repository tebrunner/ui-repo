import figma from "@figma/code-connect"
import { SectionCards } from "../section-cards"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=15:73"

figma.connect(SectionCards, FIGMA_URL, {
  example: () => <SectionCards />,
})
