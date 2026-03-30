import figma from "@figma/code-connect"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../card"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=12:75"

figma.connect(Card, FIGMA_URL, {
  props: {
    children: figma.children("*"),
  },
  example: ({ children }) => (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>Footer</CardFooter>
    </Card>
  ),
})
