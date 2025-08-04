"use client"

import { X } from "lucide-react"
import { ALL_NAVIGATION_ITEMS } from "@/constants/navigation"
import type { NavigationItem } from "@/types/navigation"

interface MobileNavigationProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } md:hidden`}
    >
      <div className="flex justify-end p-6">
        <button onClick={onClose} aria-label="Close menu">
          <X className="h-8 w-8 text-white" />
        </button>
      </div>
      <nav className="flex flex-col items-center justify-center h-full space-y-8 text-2xl font-light tracking-wider">
        {ALL_NAVIGATION_ITEMS.map((item: NavigationItem) => (
          <a key={item.label} href={item.href} className="hover:text-red-500 transition-colors" onClick={onClose}>
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  )
}
