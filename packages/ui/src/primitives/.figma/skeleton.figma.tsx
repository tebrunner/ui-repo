import figma from "@figma/code-connect"
import { Skeleton } from "../skeleton"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=114:41"

figma.connect(Skeleton, FIGMA_URL, {
  example: () => <Skeleton className="h-4 w-[200px]" />,
})
