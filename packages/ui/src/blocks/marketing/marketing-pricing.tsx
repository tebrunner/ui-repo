import { forwardRef, type HTMLAttributes } from "react"
import { Center } from "../../layouts/center"
import { Stack } from "../../layouts/stack"
import { Grid } from "../../layouts/grid"
import { Button } from "../../primitives/button"
import { cn } from "../../lib/cn"

export interface PricingPlan {
  name: string
  price: string
  description: string
  features: string[]
  cta: string
  variant?: "default" | "outline"
}

export interface MarketingPricingProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  plans: PricingPlan[]
  columns?: 1 | 2 | 3 | 4 | 5 | 6
}

export const MarketingPricing = forwardRef<HTMLDivElement, MarketingPricingProps>(
  ({ title, description, plans, columns = 3, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("py-20", className)} {...props}>
        <Center max="4xl">
          <Stack gap="xl">
            <Stack gap="md" align="center" className="text-center">
              <h2 className="text-3xl font-bold">{title}</h2>
              {description && (
                <p className="text-muted-foreground">{description}</p>
              )}
            </Stack>
            <Grid columns={columns} gap="md">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className="flex flex-col rounded-lg border border-border bg-card p-6"
                >
                  <Stack gap="xs">
                    <h3 className="font-semibold">{plan.name}</h3>
                    <p className="text-3xl font-bold">{plan.price}</p>
                    <p className="text-sm text-muted-foreground">
                      {plan.description}
                    </p>
                  </Stack>
                  <ul className="mt-6 space-y-2 text-sm text-muted-foreground flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="text-foreground shrink-0"
                          aria-hidden="true"
                        >
                          <path
                            d="M4 8L7 11L12 5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.variant ?? "outline"}
                    className="mt-6 w-full"
                  >
                    {plan.cta}
                  </Button>
                </div>
              ))}
            </Grid>
          </Stack>
        </Center>
      </div>
    )
  }
)
MarketingPricing.displayName = "MarketingPricing"
