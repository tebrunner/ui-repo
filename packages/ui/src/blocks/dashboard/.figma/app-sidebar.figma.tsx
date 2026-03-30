import figma from "@figma/code-connect"
import { AppSidebar } from "../app-sidebar"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=15:4"

figma.connect(AppSidebar, FIGMA_URL, {
  example: () => <AppSidebar variant="inset" />,
})
