import { forwardRef, type HTMLAttributes, type ReactNode } from "react"
import { Center } from "../../layouts/center"
import { Stack } from "../../layouts/stack"
import { Cluster } from "../../layouts/cluster"
import { Badge } from "../../primitives"
import { cn } from "../../lib/cn"

export interface MarketingHeroProps extends HTMLAttributes<HTMLDivElement> {
  badge?: ReactNode
  headline: ReactNode
  description?: string
  actions?: ReactNode
  footnote?: string
}

export const MarketingHero = forwardRef<HTMLDivElement, MarketingHeroProps>(
  ({ badge, headline, description, actions, footnote, className, ...props }, ref) => {
    return (
      <Center ref={ref} max="4xl" text className={cn("py-14 px-4 md:py-20 lg:py-24", className)} {...props}>
        <Stack gap="xl" align="center">
          {badge && ( <a href="/"> <Badge variant="secondary" > {badge} </Badge></a> )}
          <Stack gap="md" align="center">
            <h1 className="text-5xl font-bold leading-14 tracking-tight md:text-6xl md:leading-16 lg:text-7xl xl:leading-18">{headline}</h1>
            {description && ( 
              <p className="text-lg text-muted-foreground max-w-xl"> {description} </p> 
            )}
          </Stack>
          {actions && <Cluster gap="sm">{actions}</Cluster>}
          {footnote && ( <p className="text-xs text-muted-foreground">{footnote}</p> )}
        </Stack>
      </Center>
    )
  }
)

MarketingHero.displayName = "MarketingHero"
