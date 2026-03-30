import { forwardRef, type HTMLAttributes, type ReactNode } from "react"
import { Split } from "../layouts/split"
import { Stack } from "../layouts/stack"
import { cn } from "../lib/cn"

export interface FormSectionProps extends Omit<HTMLAttributes<HTMLDivElement>, "title" | "children"> {
  title: ReactNode
  description?: ReactNode
  children: ReactNode
}

export const FormSection = forwardRef<HTMLDivElement, FormSectionProps>(
  ({ title, description, children, className, ...props }, ref) => {
    return (
      <Split
        ref={ref}
        ratio="sidebar"
        gap="xl"
        sideWidth="16rem"
        contentMin="50%"
        className={cn(className)}
        {...props}
      >
        <Stack gap="xs">
          <h3 className="text-sm font-medium">{title}</h3>
          {description && (
            <p className="text-sm text-muted-foreground">
              {description}
            </p>
          )}
        </Stack>

        <div>{children}</div>
      </Split>
    )
  }
)
FormSection.displayName = "FormSection"
