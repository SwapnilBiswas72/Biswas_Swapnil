"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { MobileNav } from "./mobile-nav"

const navItems = [
  { href: "#about", label: "About Me" },
  { href: "#publications", label: "Publications" },
  { href: "#research", label: "Research" },
  { href: "#education", label: "Educations" },
  { href: "#honors", label: "Awards" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
]

export function TopNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b fixed z-50 top-0 w-full bg-white">
      <div className="w-full flex h-14 pr-4 items-center justify-between">
        <p className="font-semibold md:hidden">Md Shakil Ahmed</p>
        <MobileNav items={navItems} open={open} onOpenChange={setOpen} />
        <nav className="hidden md:flex items-center gap-2 overflow-x-auto">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              className="text-sm font-medium transition-colors hover:text-primary"
              asChild
            >
              <Link href={item.href}>
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  )
}