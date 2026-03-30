import "./globals.css"
import type { Metadata } from "next"
import { ReactNode } from "react"
import { Inter } from "next/font/google"
import { cn } from "@repo/ui/lib"
import { ThemeProvider } from "@repo/ui/composites"
import { TooltipProvider } from "@repo/ui/primitives"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Your App",
  description: "Your app description",
}
export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider delayDuration={200}>
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
