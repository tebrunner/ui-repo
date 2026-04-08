import { MarketingTemplate } from "@repo/ui/templates";
import { marketingLinks } from "../../../config/navigation"
import { MarketingNavWrapper as MarketingNav} from "../../../components/marketing-nav-wrapper";
import { Logo } from "../../../../../packages/ui/src/blocks/brand-logo";
import { Button } from "@repo/ui/primitives";
import { Container, Grid } from "@repo/ui/layouts";
import { MarketingFooter } from "@repo/ui/blocks";
import { footerColumns, footerLegal, footerMeta } from "../../../config/footer"
import { Children } from "react";

// ─────────────────────────────────────────────
// MAX-WIDTHS — constrain content width for
// optimal readability at larger breakpoints
// ─────────────────────────────────────────────

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
          logo={<Logo variant="full" size="sm" />}
          tagline={footerMeta.tagline}
          columns={footerColumns}
          legal={footerLegal}
          companyName={footerMeta.companyName}
        />
      }
    >
        <Container width="full" section="xl" className="bg-muted">
            <Container width="lg" className="bg-primary">
                <Grid columns="auto-fit" min="20rem">
                    ...
                </Grid>
            </Container>
        </Container>
    </MarketingTemplate>    
);
}