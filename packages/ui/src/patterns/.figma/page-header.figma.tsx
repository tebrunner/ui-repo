import figma from "@figma/code-connect"
import { PageHeader } from "../page-header"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=8:25"

figma.connect(PageHeader, FIGMA_URL, {
  props: {
    breadcrumb: figma.boolean("breadcrumb", {
      true: figma.children("Breadcrumb"),
      false: undefined,
    }),
    description: figma.boolean("description", {
      true: figma.string("description"),
      false: undefined,
    }),
    actions: figma.boolean("actions", {
      true: figma.children("Actions"),
      false: undefined,
    }),
  },
  example: ({ breadcrumb, description, actions }) => (
    <PageHeader
      title="Page title"
      description={description}
      breadcrumb={breadcrumb}
      actions={actions}
    />
  ),
})
