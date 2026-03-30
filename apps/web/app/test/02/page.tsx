import { AuthTemplate } from "@repo/ui/templates";
import { Card, CardContent } from "@repo/ui/primitives";
import { Stack } from "@repo/ui/layouts";
import { PageHeader } from "@repo/ui/patterns";
import { Logo } from "@repo/ui/blocks";
import { NewsletterForm } from "@repo/ui/blocks";

export default function AuthTemplatePage() {
  return (
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
  );
}