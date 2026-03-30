import { ReactNode } from "react"
import { cn } from "@repo/ui/lib"
import { Logo } from "@repo/ui/blocks"
import { MarketingNavWrapper as MarketingNav} from "@/components/marketing-nav-wrapper"
import { Button } from "../../../../packages/ui/src/primitives/button"
import { marketingLinks } from "@/config/navigation"

export const metadata = {
  title: "Test Layout",
  description: "A test layout for the app",
}

export default function TestLayout({children}: {children: ReactNode}) {
  return (
    <>
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
        className={cn("border-b", "bg-background/50", "backdrop-blur-sm")}
      />
{children}
    </>
  );
}