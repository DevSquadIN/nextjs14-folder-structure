import type { Metadata, Viewport } from "next"

import "@/styles/globals.css"

import Footer from "@components/footer"
import Header from "@components/header"
import { siteConfig } from "@src/config/site"

import { LayoutProps as RootLayoutProps } from "@/types/root"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"

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
