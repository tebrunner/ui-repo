import figma from "@figma/code-connect"
import { DataTemplate } from "../data-template"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=10:105"

figma.connect(DataTemplate, FIGMA_URL, {
  props: {
    nav: figma.boolean("nav", {
      true: figma.children("nav"),
      false: undefined,
    }),
    filters: figma.boolean("filters", {
      true: figma.children("filters"),
      false: undefined,
    }),
    header: figma.children("header"),
    content: figma.children("content"),
  },
  example: ({ header, nav, filters, content }) => (
    <DataTemplate
      header={header}
      nav={nav}
      filters={filters}
      content={content}
    />
  ),
})
