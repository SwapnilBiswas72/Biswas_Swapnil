import { ProfileHeader } from "@/components/profile-header"
import { SideNav } from "@/components/side-nav"
import { TopNav } from "@/components/top-nav"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Academic Portfolio",
  description: "Personal academic portfolio website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="min-h-screen px-4 md:px-4 max-w-7xl mx-auto flex flex-col">
          <TopNav />
          <div className="flex-1 container flex gap-6 pt-16">
            <div className="w-72 shrink-0 hidden lg:block">
              <div className="sticky top-20">
                <SideNav />
              </div>
            </div>
            <main className="flex-1 min-w-0 py-6">
              <div className="lg:hidden">
                <ProfileHeader />
              </div>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}

