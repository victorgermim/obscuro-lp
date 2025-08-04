"use client"

import { useState } from "react"
import { Menu, X as XIcon } from "lucide-react"
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
        <XIcon className="w-5 h-5 text-[#940203]" />

        <div className="flex-1 h-px bg-white mx-4 relative">
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Logo />
          </div>
        </div>

        <XIcon className="w-5 h-5 text-[#940203]" />
      </div>

      <MobileNavigation isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </header>
  )
}
