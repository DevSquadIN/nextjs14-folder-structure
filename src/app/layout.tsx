import type { Metadata, Viewport } from "next"

import "@/styles/globals.css"

import { Footer } from "@components/footer"
import { Header } from "@components/header"
import { SITE_CONFIG } from "@src/config/site"

import { LayoutProps as RootLayoutProps } from "@/types/root"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s - ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  icons: SITE_CONFIG.icons,
}

export const viewport: Viewport = {
  themeColor: SITE_CONFIG.themeColor,
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
