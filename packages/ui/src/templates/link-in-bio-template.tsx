import { forwardRef, type HTMLAttributes, type ReactNode } from "react"
import { Cover } from "../layouts/cover"
import { Center } from "../layouts/center"
import { Stack } from "../layouts/stack"
import { Cluster } from "../layouts/cluster"
import { Container } from "../layouts/container"
import { ProfileHeader } from "../patterns/profile-header"
import { cn } from "../lib/cn"

export interface LinkInBioTemplateProps extends HTMLAttributes<HTMLDivElement> {
  /** Profile avatar or image */
  avatar?: ReactNode
  /** Name / heading */
  heading: ReactNode
  /** Short bio or description */
  description?: ReactNode
  /** Social media icon links */
  socialLinks?: ReactNode
  /** Primary call-to-action links */
  links?: ReactNode
  /** Optional decorative background layer */
  background?: ReactNode
}

export const LinkInBioTemplate = forwardRef<HTMLDivElement, LinkInBioTemplateProps>(
  ({ avatar, heading, description, socialLinks, links, background, className, ...props }, ref) => {
    return (
      <Cover
        ref={ref}
        minHeight="screen"
        className={cn("bg-background text-foreground relative overflow-hidden", className)}
        {...props}
      >
        {background}

        <Center max="xl" gutter className="relative z-10">
        <Container width="full" px="none" section="sm">
          <Stack gap="xl" align="center">
            <ProfileHeader
              avatar={avatar}
              heading={heading}
              description={description}
            />

            {/* Social icons */}
            {socialLinks && (
              <Cluster gap="md" justify="center">
                {socialLinks}
              </Cluster>
            )}

            {/* Main links */}
            {links && (
              <Stack gap="md" className="w-full">
                {links}
              </Stack>
            )}
          </Stack>
        </Container>
        </Center>
      </Cover>
    )
  }
)
LinkInBioTemplate.displayName = "LinkInBioTemplate"
