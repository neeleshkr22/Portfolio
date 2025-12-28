import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Neelesh Kumar | Portfolio",
  description: "Personal portfolio of Neelesh - Coder, Web Developer",
  generator: 'neelesh',
  icons: {
    icon: '/Profilepic.jpg',
    shortcut: '/Profilepic.jpg',
    apple: '/Profilepic.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-black font-mono">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
