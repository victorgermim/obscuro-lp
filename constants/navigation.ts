import type { NavigationItem } from "@/types/navigation"

export const LEFT_NAVIGATION: NavigationItem[] = [
  { label: "HOME", href: "#" },
  { label: "SOBRE NÓS", href: "#" },
  { label: "ARTISTAS", href: "#" },

]

export const RIGHT_NAVIGATION: NavigationItem[] = [
  { label: "PORTFÓLIO", href: "#" },
  { label: "CONTATO", href: "#" },
]

export const ALL_NAVIGATION_ITEMS: NavigationItem[] = [...LEFT_NAVIGATION, ...RIGHT_NAVIGATION]
