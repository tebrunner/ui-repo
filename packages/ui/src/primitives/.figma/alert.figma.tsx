import figma from "@figma/code-connect"
import { Alert, AlertTitle, AlertDescription } from "../alert"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=12:102"

figma.connect(Alert, FIGMA_URL, {
  props: {
    variant: figma.enum("variant", {
      default: "default",
      destructive: "destructive",
    }),
  },
  example: ({ variant }) => (
    <Alert variant={variant}>
      <AlertTitle>Title</AlertTitle>
      <AlertDescription>Description text.</AlertDescription>
    </Alert>
  ),
})
