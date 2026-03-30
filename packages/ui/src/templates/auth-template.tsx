import { forwardRef, type HTMLAttributes, type ReactNode } from "react"
import { Cover, type CoverProps } from "../layouts/cover"
import { Stack } from "../layouts/stack"
import { Center } from "../layouts/center"
import { cn } from "../lib/cn"

const maxWidthMap = {
  xs: "max-w-xs",   // 320px
  sm: "max-w-sm",   // 384px
  md: "max-w-md",   // 448px
  lg: "max-w-lg",   // 512px
}

export interface AuthTemplateProps extends HTMLAttributes<HTMLDivElement> {
  /** Logo or branding — rendered above the card */
  logo?: ReactNode
  /** Auth card content — vertically and horizontally centered */
  children: ReactNode
  /** Footer content (legal links, sign-up CTA) — below the card */
  footer?: ReactNode
  /** Max-width of the centered card area. Default "sm" (384px). */
  maxWidth?: keyof typeof maxWidthMap
  /** Cover height strategy. Default "screen" (100vh). */
  minHeight?: CoverProps["minHeight"]
}

export const AuthTemplate = forwardRef<HTMLDivElement, AuthTemplateProps>(
  ({ logo, children, footer, maxWidth = "sm", minHeight = "screen", className, ...props }, ref) => {
    return (
      <Cover
        ref={ref}
        minHeight={minHeight}
        className={cn("bg-muted/20", className)}
        {...props}
      >
        <Center max="full" gutter className={maxWidthMap[maxWidth]}>
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
)
AuthTemplate.displayName = "AuthTemplate"
