import figma from "@figma/code-connect"
import { FormSection } from "../form-section"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=95:28"

figma.connect(FormSection, FIGMA_URL, {
  props: {
    description: figma.boolean("description", {
      true: figma.string("description"),
      false: undefined,
    }),
    children: figma.children("Fields"),
  },
  example: ({ description, children }) => (
    <FormSection
      title="Section title"
      description={description}
    >
      {children}
    </FormSection>
  ),
})
