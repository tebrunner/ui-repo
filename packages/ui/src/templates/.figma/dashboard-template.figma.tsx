import figma from "@figma/code-connect"
import { DashboardTemplate } from "../dashboard-template"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=10:144"

figma.connect(DashboardTemplate, FIGMA_URL, {
  props: {
    chart: figma.boolean("chart", {
      true: figma.children("chart"),
      false: undefined,
    }),
    nav: figma.children("nav"),
    header: figma.children("header"),
    cards: figma.children("cards"),
    content: figma.children("content"),
  },
  example: ({ nav, header, cards, chart, content }) => (
    <DashboardTemplate
      nav={nav}
      header={header}
      cards={cards}
      chart={chart}
      content={content}
    />
  ),
})
