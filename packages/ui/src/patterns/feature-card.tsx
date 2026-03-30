import { forwardRef, type HTMLAttributes, type ReactNode } from "react"
import { cn } from "../lib/cn"

export interface FeatureCardProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  icon?: ReactNode
  title: string
  description: string
}

export const FeatureCard = forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ icon, title, description, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg border border-border bg-card p-6 transition-colors hover:bg-accent/50",
          className
        )}
        {...props}
      >
        {icon ?? <div className="h-10 w-10 rounded-md bg-primary/10 mb-4" />}
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    )
  }
)
FeatureCard.displayName = "FeatureCard"
