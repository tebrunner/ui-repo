import figma from "@figma/code-connect"
import { LinkInBioTemplate } from "../link-in-bio-template"

const FIGMA_URL = "https://www.figma.com/design/ZIDu0vPHrPmPywhIAzXegB?node-id=86:56"

figma.connect(LinkInBioTemplate, FIGMA_URL, {
  props: {
    avatar: figma.boolean("avatar", {
      true: figma.children("avatar"),
      false: undefined,
    }),
    heading: figma.children("heading"),
    description: figma.boolean("description", {
      true: figma.children("description"),
      false: undefined,
    }),
    socialLinks: figma.boolean("socialLinks", {
      true: figma.children("socialLinks"),
      false: undefined,
    }),
    links: figma.boolean("links", {
      true: figma.children("links"),
      false: undefined,
    }),
    background: figma.boolean("background", {
      true: figma.children("background"),
      false: undefined,
    }),
  },
  example: ({ avatar, heading, description, socialLinks, links, background }) => (
    <LinkInBioTemplate
      avatar={avatar}
      heading={heading}
      description={description}
      socialLinks={socialLinks}
      links={links}
      background={background}
    />
  ),
})
