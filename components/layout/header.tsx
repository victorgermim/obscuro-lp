"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Navigation } from "./navigation"
import { MobileNavigation } from "./mobile-navigation"
import { Logo } from "../ui/logo"
import { LEFT_NAVIGATION, RIGHT_NAVIGATION } from "@/constants/navigation"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="px-4 md:px-[200px] py-6 relative z-10">
      <div className="hidden md:flex items-center justify-between mb-8">
        <Navigation items={LEFT_NAVIGATION} />
        <Navigation items={RIGHT_NAVIGATION} />
      </div>

      <div className="md:hidden flex justify-between items-center mb-8">
        <button onClick={toggleMobileMenu} aria-label="Open menu">
          <Menu className="h-8 w-8 text-white" />
        </button>
        <div className="w-8 h-8" />
      </div>

      <div className="relative flex items-center">
        {/* Left Plus */}
        <div className="text-red-500 text-xl">X</div>

        <div className="flex-1 h-px bg-white mx-4 relative">
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Logo />
          </div>
        </div>

        <div className="text-red-500 text-xl">X</div>
      </div>

      <MobileNavigation isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </header>
  )
}
