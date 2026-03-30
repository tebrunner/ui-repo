import figma from "@figma/code-connect"
import { NewsletterForm } from "../newsletter-form"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=102:4"

figma.connect(NewsletterForm, FIGMA_URL, {
  props: {
    placeholder: figma.string("EmailInput"),
    buttonText: figma.string("SubscribeButton"),
  },
  example: ({ placeholder, buttonText }) => (
    <NewsletterForm placeholder={placeholder} buttonText={buttonText} />
  ),
})
