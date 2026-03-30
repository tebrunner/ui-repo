import figma from "@figma/code-connect"
import { SectionHeader } from "../section-header"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=94:18"

figma.connect(SectionHeader, FIGMA_URL, {
  props: {
    description: figma.boolean("description", {
      true: figma.string("description"),
      false: undefined,
    }),
    action: figma.boolean("action", {
      true: figma.children("Action"),
      false: undefined,
    }),
  },
  example: ({ description, action }) => (
    <SectionHeader
      title="Section title"
      description={description}
      action={action}
    />
  ),
})
