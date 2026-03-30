import figma from "@figma/code-connect"
import { SiteHeader } from "../site-header"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=15:65"

figma.connect(SiteHeader, FIGMA_URL, {
  example: () => <SiteHeader />,
})
