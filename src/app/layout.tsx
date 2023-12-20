import type { Metadata, Viewport } from "next"

import "@/styles/globals.css"

import { LayoutProps as RootLayoutProps } from "@/types/root"
import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import Footer from "@/components/footer"
import Header from "@/components/header"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: siteConfig.icons,
}

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={cn("antialiased", fontSans.variable)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
