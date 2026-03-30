import Link from "next/link"
import { Grid } from "@repo/ui/layouts"
import { Card, CardHeader, CardTitle, CardDescription } from "@repo/ui/primitives"

const patterns = [
  { href: "/patterns/page-header", title: "PageHeader", description: "Title, description, breadcrumbs, and action buttons" },
  { href: "/patterns/empty-state", title: "EmptyState", description: "Placeholder for empty lists, searches, and errors" },
  { href: "/patterns/section-header", title: "SectionHeader", description: "In-page section heading with optional description and action" },
  { href: "/patterns/form-section", title: "FormSection", description: "Two-column settings layout — labels left, fields right" },
  { href: "/patterns/skeleton", title: "Skeleton", description: "Loading placeholders for text, cards, and avatars" },
]

export default function PatternsIndex() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <Grid columns={3} gap="md">
        {patterns.map((p) => (
          <Link key={p.href} href={p.href} className="no-underline">
            <Card className="h-full hover:border-foreground/30 transition-colors">
              <CardHeader>
                <CardTitle>{p.title}</CardTitle>
                <CardDescription>{p.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </Grid>
    </div>
  )
}
