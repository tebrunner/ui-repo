import { type ComponentPropsWithRef, type ReactNode } from "react"
import { Cover, type CoverProps } from "../layouts/cover"
import { Stack } from "../layouts/stack"
import { Center } from "../layouts/center"
import { centerMaxMap, type CenterMax } from "../layouts/_scale"
import { cn } from "../lib/cn"

/** Subset of CenterMax values appropriate for an auth card. */
type AuthCardWidth = Extract<CenterMax, "xs" | "sm" | "md" | "lg" | "xl">

export interface AuthTemplateProps extends ComponentPropsWithRef<"div"> {
  /** Logo or branding — rendered above the card */
  logo?: ReactNode
  /** Auth card content — vertically and horizontally centered */
  children: ReactNode
  /** Footer content (legal links, sign-up CTA) — below the card */
  footer?: ReactNode
  /** Max-width of the centered card area. Default "sm" (384px). */
  maxWidth?: AuthCardWidth
  /** Cover height strategy. Default "screen" (100vh). */
  minHeight?: CoverProps["minHeight"]
}

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
      <Center max="full" gutter className={centerMaxMap[maxWidth]}>
        <Stack gap="lg">
          {logo && (
            <div className="text-center">{logo}</div>
          )}
          {children}
          {footer && (
            <div className="text-center text-sm text-muted-foreground">
              {footer}
            </div>
          )}
        </Stack>
      </Center>
    </Cover>
  )
}
AuthTemplate.displayName = "AuthTemplate"
