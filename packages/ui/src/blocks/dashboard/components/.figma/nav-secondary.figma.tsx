import figma from "@figma/code-connect"
import { NavSecondary } from "../nav-secondary"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=110:35"

figma.connect(NavSecondary, FIGMA_URL, {
  example: () => (
    <NavSecondary
      items={[
        { title: "Settings", url: "#", icon: IconSettings },
        { title: "Get Help", url: "#", icon: IconHelp },
        { title: "Search", url: "#", icon: IconSearch },
      ]}
      className="mt-auto"
    />
  ),
})
