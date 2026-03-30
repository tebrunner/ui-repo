import { DashboardTemplate } from "@repo/ui/templates"
import {
  AppSidebar,
  ChartAreaInteractive,
  DataTable,
  SectionCards,
  SiteHeader,
} from "@repo/ui/blocks"

import data from "./data.json"

export default function Page() {
  return (
    <DashboardTemplate
      nav={<AppSidebar variant="inset" />}
      header={<SiteHeader />}
      cards={<SectionCards />}
      chart={<ChartAreaInteractive />}
      content={<DataTable data={data} />}
    />
  )
}
