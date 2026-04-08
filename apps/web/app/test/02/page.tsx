import { AuthTemplate } from "@repo/ui/templates";
import { Card, CardContent } from "@repo/ui/primitives";
import { Button } from "@repo/ui/primitives";
import { Stack } from "@repo/ui/layouts";
import { PageHeader } from "@repo/ui/patterns";
import { Logo } from "@repo/ui/blocks";
import { NewsletterForm } from "@repo/ui/blocks";

import { MarketingTemplate } from "@repo/ui/templates";
import { marketingLinks } from "../../../config/navigation"
import { MarketingNavWrapper as MarketingNav} from "../../../components/marketing-nav-wrapper";

export default function AuthTemplatePage() {
  return (
    <>
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
    >
    <AuthTemplate
      maxWidth="md"
      minHeight="screen"
      logo={<Logo />}
      footer={<span>Don't have an account? <a href="/signup">Sign up</a></span>}
    >

      <Stack gap="lg">
        <PageHeader
          title="Sign in to your account"
          description="Enter your email below to receive a magic link to your inbox."
        />
        <Card>
          <CardContent>
            <NewsletterForm />
          </CardContent>
        </Card>
      </Stack>
    </AuthTemplate>
  </MarketingTemplate>  
      </>
  );
}