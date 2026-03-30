import { AuthTemplate } from "@repo/ui/templates";
import { Card, CardContent } from "@repo/ui/primitives";
import { Button } from "@repo/ui/primitives";
import { Stack } from "@repo/ui/layouts";
import { PageHeader } from "@repo/ui/patterns";
import { Logo } from "@repo/ui/blocks";
import { NewsletterForm } from "@repo/ui/blocks";
import { MarketingNavWrapper } from "../../../components/marketing-nav-wrapper";

export default function AuthTemplatePage() {
  return (
    <AuthTemplate
      maxWidth="md"
      minHeight="screen"
      logo={<Logo />}
      footer={<span>Don't have an account? <a href="/signup">Sign up</a></span>}
    >
    <MarketingNavWrapper
          logo={<Logo size="md" href="/" />}
          links={[]}
          actions={
            <>
              <Button variant="ghost" size="sm">
                Sign in
              </Button>
              <Button size="sm">Get Started</Button>
            </>
          }
        />
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
  );
}