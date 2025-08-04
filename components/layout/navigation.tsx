import type { NavigationProps } from "@/types/navigation"

export function Navigation({ items }: NavigationProps) {
  return (
    <nav className="flex items-center space-x-8 text-sm font-light tracking-wider">
      {items.map((item) => (
        <a key={item.label} href={item.href} className="hover:text-[#940203] transition-colors">
          {item.label}
        </a>
      ))}
    </nav>
  )
}
