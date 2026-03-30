import figma from "@figma/code-connect"
import { AppTemplate } from "../app-template"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=10:58"

figma.connect(AppTemplate, FIGMA_URL, {
  props: {
    panel: figma.boolean("panel", {
      true: figma.children("panel"),
      false: undefined,
    }),
    nav: figma.children("nav"),
    header: figma.children("header"),
    content: figma.children("content"),
  },
  example: ({ nav, header, content, panel }) => (
    <AppTemplate
      nav={nav}
      header={header}
      content={content}
      panel={panel}
    />
  ),
})
