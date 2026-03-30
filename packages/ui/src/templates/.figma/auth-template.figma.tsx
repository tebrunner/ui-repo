import figma from "@figma/code-connect"
import { AuthTemplate } from "../auth-template"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=10:75"

figma.connect(AuthTemplate, FIGMA_URL, {
  props: {
    maxWidth: figma.enum("maxWidth", {
      xs: "xs",
      sm: "sm",
      md: "md",
      lg: "lg",
    }),
    logo: figma.children("logo"),
    children: figma.children("children"),
    footer: figma.children("footer"),
  },
  example: ({ maxWidth, logo, children, footer }) => (
    <AuthTemplate maxWidth={maxWidth} logo={logo} footer={footer}>
      {children}
    </AuthTemplate>
  ),
})
