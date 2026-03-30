import { MarketingTemplate } from "@repo/ui/templates"
import {
  MarketingFooter,
  MarketingHero,
} from "@repo/ui/blocks"
import { Stack, Cluster } from "@repo/ui/layouts"
import { MarketingNavWrapper } from "../../../components/marketing-nav-wrapper"
import { Logo } from "@repo/ui/blocks"
import { Button } from "@repo/ui/primitives"

import { marketingLinks } from "../../../config/navigation"
import { footerColumns, footerLegal, footerMeta } from "../../../config/footer"

export default function MarketingTemplatePage() {
  return (
    <MarketingTemplate
      nav={
        <MarketingNavWrapper
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
          logo={<Logo variant="full" size="sm" />}
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
            Build better products, {/* <br /> */} ship them faster
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
<Stack gap="xl" align="center" className="mb-16">

      <Cluster align="center" gap="xl" className="flex flex-wrap h-88 justify-center w-full">

        <Stack gap="md" recursive align="start" className="border-2 bg-muted w-64  h-full justify-center border-border w-64 py-4 px-4" >
          <h2 className="border-1 border-border py-2 px-4">Normal Stack</h2>
          <Stack gap="none" className="border-2 border-border bg-accent" >
            <p className="border-2 border-border py-2 px-4">First paragraph.</p>
            <p className="border-2 border-border py-2 px-4">Nested wrapper:</p>
          </Stack>
          <p className="border-2 border-border py-2 px-4">These two have to gap between them.</p>
          <p className="border-2 border-border py-2 px-4">Third paragraph.</p>
        </Stack>

        <Stack gap="md" className="overflow-display bg-muted text-base h-full w-64 justify-center border-2 border-border py-4 px-4" recursive>
          <h2 className="border-2 border-border py-2 px-4">Recursive Stack</h2>
        <Stack gap="none">
          <p className="border-2 border-border py-2 px-4">First paragraph.</p>
          <p className="border-2 border-border py-2 px-4">Nested wrapper:</p>
        </Stack>
          <p className="border-2 border-border py-2 px-4">These two also get spacing.</p>
          <p className="border-2 border-border py-2 px-4">Third paragraph.</p>
        </Stack>

        <Stack align="center" className="border-2 border-border bg-muted w-64 h-88 justify-center py-4 px-4">
          <h6 className="border-2 text-xs border-border py-2 px-4">Here's the title</h6>
          <img className="border-2 border-border py-4 px-4 h-48" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRio3mVnfTUuSURM1SP_lmU6UDIOS3Xjo3FCQ&s" />
          <p className="border-2 text-xs border-border py-2 px-4">This is a paragraph that follows after the fact.</p>
        </Stack>

      </Cluster>

      <Cluster align="center" gap="xl" className=" justify-center w-full">

        <Stack align="center" className="border-2 border-border bg-muted w-64 py-4 px-4">
          <img className="border-2 border-border py-4 px-4 h-48" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZ4pUotDPKqaC4gMVgJ0cmuXDDbx8Oeia7g&s" />
        </Stack>

        <Stack gap="sm" className="overflow-display text-base w-64 bg-muted justify-center border-2 w-64 border-border py-4 px-4" >
          <h2 className="border-2 border-border py-2 px-4">Recursive Stack</h2>
        <Stack gap="none">
          <p className="border-2 border-border py-2 px-4">First paragraph.</p>
          <p className="border-2 border-border py-2 px-4">Nested wrapper:</p>
        </Stack>
          <p className="border-2 border-border py-2 px-4">Third paragraph.</p>
        </Stack>

        <Stack recursive align="start" gap="xs" className="border-2 bg-muted w-64 justify-center border-border w-64 py-4 px-4" >
          <h2 className="border-1 border-border py-2 px-4">Normal Stack</h2>
          <Stack gap="none" className="border-2 border-border bg-accent" >
            <p className="border-2 border-border py-2 px-4">First paragraph.</p>
            <p className="border-2 border-border py-2 px-4">Nested wrapper:</p>
          </Stack>
          <p className="border-2 border-border py-2 px-4">Third paragraph.</p>
        </Stack>

      </Cluster>

      <Cluster align="center" gap="xl" className="flex-wrap  justify-center w-full">

        <Stack recursive align="start" gap="lg" className="border-2 bg-muted w-64 justify-center border-border py-4 px-4" >
          <h2 className="border-1 border-border py-2 px-4">Normal Stack</h2>
          <Stack gap="none" className="border-2 border-border bg-accent" >
            <p className="border-2 text-xs border-border py-2 px-4">First paragraph.</p>
            <p className="border-2 text-xs border-border py-2 px-4">Nested wrapper:</p>
          </Stack>
          <p className="border-2 border-border py-2 px-4">These two have to gap between them.</p>
          <p className="border-2 border-border py-2 px-4">Third paragraph.</p>
        </Stack>

        <Stack align="center" className="border-2 border-border w-64 bg-muted justify-center py-4 px-4">
          <h2 className="border-2 border-border py-2 px-4">Here's the title</h2>
          <img className="border-2 border-border py-4 px-4 h-48" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSzqSLH7efQ6ho1AV_cw3W-gM1TLtgATcxAA&s" />
          <p className="border-2 text-xs border-border py-2 px-4">This is a paragraph that follows after the fact.</p>
        </Stack>

        <Stack gap="md" className="overflow-display text-base w-64 justify-center bg-muted border-2 w-64 border-border py-4 px-4" >
          <img className="h-46" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCgy1ZM83RPrrzuYk5plHtnFhernsrNTIPsQ&s" />
          <p className="border-2 border-border py-2 px-4">These two also get spacing.</p>
          <p className="border-2 border-border py-2 px-4">Third paragraph.</p>
        </Stack>


      </Cluster>

</Stack>

    </MarketingTemplate>
  )
}
