import figma from "@figma/code-connect"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../tabs"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=12:118"

figma.connect(Tabs, FIGMA_URL, {
  props: {
    variant: figma.enum("variant", {
      default: "default",
      line: "line",
    }),
  },
  example: ({ variant }) => (
    <Tabs defaultValue="tab1">
      <TabsList variant={variant}>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content 1</TabsContent>
    </Tabs>
  ),
})
