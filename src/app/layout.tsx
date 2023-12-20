import type { Metadata, Viewport } from "next"

import "@styles/globals.css"

import Footer from "@/common/components/footer"
import Header from "@/common/components/header"
import { siteConfig } from "@/common/config/site"
import { fontSans } from "@/common/lib/fonts"
import { cn } from "@/common/lib/utils"
import { LayoutProps as RootLayoutProps } from "@/common/types/root"

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
      <body className={cn("container antialiased", fontSans.variable)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
