import { forwardRef, type HTMLAttributes } from "react"
import { Center } from "../../layouts/center"
import { Stack } from "../../layouts/stack"
import { Grid } from "../../layouts/grid"
import { FeatureCard, type FeatureCardProps } from "../../patterns/feature-card"
import { cn } from "../../lib/cn"

export interface MarketingFeaturesProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  features: FeatureCardProps[]
  columns?: 1 | 2 | 3 | 4 | 5 | 6
}

export const MarketingFeatures = forwardRef<HTMLDivElement, MarketingFeaturesProps>(
  ({ title, description, features, columns = 3, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("border-t border-border bg-muted/20 py-20", className)}
        {...props}
      >
        <Center max="4xl">
          <Stack gap="2xl">
            <Stack gap="sm" align="center" className="text-center">
              <h2 className="text-3xl font-bold">{title}</h2>
              {description && (
                <p className="text-muted-foreground max-w-lg mx-auto">
                  {description}
                </p>
              )}
            </Stack>
            <Grid columns={columns} gap="md">
              {features.map((f) => (
                <FeatureCard key={f.title} {...f} />
              ))}
            </Grid>
          </Stack>
        </Center>
      </div>
    )
  }
)
MarketingFeatures.displayName = "MarketingFeatures"
