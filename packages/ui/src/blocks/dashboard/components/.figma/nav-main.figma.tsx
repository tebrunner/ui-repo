import figma from "@figma/code-connect"
import { NavMain } from "../nav-main"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=110:3"

figma.connect(NavMain, FIGMA_URL, {
  props: {
    items: figma.children("*"),
  },
  example: () => (
    <NavMain
      items={[
        { title: "Dashboard", url: "#", icon: IconDashboard },
        { title: "Lifecycle", url: "#", icon: IconListDetails },
        { title: "Analytics", url: "#", icon: IconChartBar },
        { title: "Projects", url: "#", icon: IconFolder },
        { title: "Team", url: "#", icon: IconUsers },
      ]}
    />
  ),
})
