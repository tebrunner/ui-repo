import { type ComponentPropsWithRef, type ReactNode } from "react"
import { Cover, type CoverProps } from "../layouts/cover"
import { Stack } from "../layouts/stack"
import { Center } from "../layouts/center"
import { type CenterMax } from "../layouts/_scale"
import { cn } from "../lib/"

/** Subset of CenterMax values appropriate for auth flows */
type AuthWidth = Extract<CenterMax, "xs" | "sm" | "md" | "lg" | "xl">

export interface AuthTemplateProps extends ComponentPropsWithRef<"div"> {
  /** Logo or branding — rendered above the card */
  logo?: ReactNode
  /** Main content (forms, messages, etc.) */
  children: ReactNode
  /** Footer content (legal links, secondary CTAs) */
  footer?: ReactNode
  /** Max width of the content column. Default `"sm"` (384px). */
  maxWidth?: AuthWidth
  /** Cover height strategy. Default `"screen"` (100vh). */
  minHeight?: CoverProps["minHeight"]
}

/**
 * AuthTemplate
 *
 * A vertically-centered, width-constrained layout for
 * authentication flows (login, signup, reset password).
 *
 * Rules:
 * 1. Layout only — do not embed auth logic or specific forms.
 * 2. Content should fit within a narrow column.
 * 3. Vertical rhythm is owned by Stack.
 * 4. Use AuthCard (optional) for consistent surface styling.
 */
export function AuthTemplate({
  logo,
  children,
  footer,
  maxWidth = "sm",
  minHeight = "screen",
  className,
  ref,
  ...props
}: AuthTemplateProps) {
  return (
    <Cover
      ref={ref}
      minHeight={minHeight}
      className={cn("bg-muted/20", className)}
      {...props}
    >
      <Center max={maxWidth} gutter>
        <Stack gap="lg">
          {logo && <header className="text-center">{logo}</header>}

          <main>{children}</main>

          {footer && (
            <footer className="text-center text-sm text-muted-foreground">
              {footer}
            </footer>
          )}
        </Stack>
      </Center>
    </Cover>
  )
}

AuthTemplate.displayName = "AuthTemplate"