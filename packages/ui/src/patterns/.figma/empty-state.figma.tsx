import figma from "@figma/code-connect"
import { EmptyState } from "../empty-state"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=8:55"

figma.connect(EmptyState, FIGMA_URL, {
  props: {
    icon: figma.boolean("icon", {
      true: figma.children("Icon"),
      false: undefined,
    }),
    action: figma.enum("action", {
      yes: figma.children("Button"),
      outline: figma.children("Button"),
    }),
    secondaryAction: figma.boolean("secondaryAction", {
      true: figma.children("Learn more"),
      false: undefined,
    }),
  },
  example: ({ icon, action, secondaryAction }) => (
    <EmptyState
      icon={icon}
      title="No items found"
      description="Get started by creating your first item."
      action={action}
      secondaryAction={secondaryAction}
    />
  ),
})
