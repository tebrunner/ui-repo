import figma from "@figma/code-connect"
import { NavDocuments } from "../nav-documents"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=110:23"

figma.connect(NavDocuments, FIGMA_URL, {
  example: () => (
    <NavDocuments
      items={[
        { name: "Data Library", url: "#", icon: IconDatabase },
        { name: "Reports", url: "#", icon: IconReport },
        { name: "Word Assistant", url: "#", icon: IconFileWord },
      ]}
    />
  ),
})
