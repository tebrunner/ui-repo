import { MarketingTemplate } from "@repo/ui/templates"
import {
  MarketingFooter,
  MarketingHero,
  MarketingFeatures,
  MarketingPricing,
  MarketingCTA,
} from "@repo/ui/blocks"
import { MarketingNavWrapper as MarketingNav } from "../../../components/marketing-nav-wrapper"
import { Logo } from "@repo/ui/blocks"
import { Button } from "@repo/ui/primitives"

import { marketingLinks } from "../../../config/navigation"
import { footerColumns, footerLegal, footerMeta } from "../../../config/footer"
import { features } from "../../../config/features"
import { pricingPlans } from "../../../config/pricing"

export default function MarketingTemplatePage() {
  return (
    <MarketingTemplate
      nav={
        <MarketingNav
          logo={<Logo size="md" href="/" />}
          links={marketingLinks}
          actions={
            <>
              <Button variant="ghost" size="sm">
                Sign in
              </Button>
              <Button size="sm">Get Started</Button>
            </>
          }
        />
      }
      footer={
        <MarketingFooter
          logo={<Logo size="sm" />}
          tagline={footerMeta.tagline}
          columns={footerColumns}
          legal={footerLegal}
          companyName={footerMeta.companyName}
        />
      }
    >
      <MarketingHero
        badge="Now in public beta"
        headline={
          <>
            Build better products,
            <br />
            ship them faster
          </>
        }
        description="MonoFly gives your team the tools to design, build, and deploy modern applications. No more stitching together a dozen services."
        actions={
          <>
            <Button size="lg">Start for Free</Button>
            <Button variant="outline" size="lg">
              View Demo
            </Button>
          </>
        }
        footnote="Free for up to 5 users. No credit card required."
      />
      <MarketingFeatures
        id="features"
        title="Everything you need"
        description="A complete platform for building, deploying, and scaling your applications."
        features={features}
      />
      <MarketingPricing
        id="pricing"
        title="Simple pricing"
        description="Start free, scale as you grow."
        plans={pricingPlans}
      />
      <MarketingCTA
        title="Ready to get started?"
        description="Join thousands of teams already building with MonoFly."
        action={<Button size="lg">Start Building for Free</Button>}
      />
    </MarketingTemplate>
  )
}
