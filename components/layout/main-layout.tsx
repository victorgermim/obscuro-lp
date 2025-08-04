import type { ReactNode } from "react"

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return <div className="min-h-screen bg-black text-white overflow-hidden">{children}</div>
}
