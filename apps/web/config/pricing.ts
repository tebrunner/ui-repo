// apps/web/config/pricing.ts
// Pricing plan data for marketing pages

import type { PricingPlan } from "@repo/ui/blocks"

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "Free",
    description: "For individuals and small projects.",
    features: ["Up to 5 users", "1 GB storage", "Community support"],
    cta: "Get Started",
    variant: "outline",
  },
  {
    name: "Pro",
    price: "$29/mo",
    description: "For growing teams that need more.",
    features: [
      "Unlimited users",
      "100 GB storage",
      "Priority support",
      "Custom domains",
    ],
    cta: "Start Free Trial",
    variant: "default",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations with advanced needs.",
    features: [
      "Everything in Pro",
      "SSO & SCIM",
      "SLA guarantee",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    variant: "outline",
  },
]
