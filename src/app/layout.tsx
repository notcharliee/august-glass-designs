import "@fontsource/special-elite"
import "@fontsource/geist-mono"
import "./globals.css"

import type { Metadata } from "next"

import { Header } from "~/components/header"

export const metadata: Metadata = {
  title: {
    default: "August Glass Designs",
    template: "%s | August Glass Designs",
  },
  description:
    "August Glass Designs offers handmade, high quality, long-lasting glass boxes and structures for the discerning buyer.",
  keywords: ["Glass", "Home", "Decor", "Terrariums", "Handmade"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-primary text-base font-light text-foreground lg:text-lg">
        <Header />
        {children}
      </body>
    </html>
  )
}
