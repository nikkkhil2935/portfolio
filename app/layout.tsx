import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import AnimatedBackground from "./components/AnimatedBackground"
import MouseFollower from "./components/MouseFollower"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nikhil Patil - Full Stack Developer Portfolio",
  description:
    "Dynamic web developer specializing in responsive design and full-stack applications. Experienced with React.js, Node.js, and modern web technologies.",
  keywords: "web developer, full-stack developer, React.js, Node.js, portfolio, Nikhil Patil, CodSoft",
  authors: [{ name: "Nikhil Patil" }],
  openGraph: {
    title: "Nikhil Patil - Full Stack Developer Portfolio",
    description: "Dynamic web developer specializing in responsive design and full-stack applications.",
    type: "website",
    images: ["/images/nikhil-profile.jpg"],
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <AnimatedBackground />
          <MouseFollower />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}