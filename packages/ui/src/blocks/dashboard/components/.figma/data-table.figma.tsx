import figma from "@figma/code-connect"
import { DataTable } from "../data-table"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=15:131"

figma.connect(DataTable, FIGMA_URL, {
  example: () => <DataTable data={[]} />,
})
