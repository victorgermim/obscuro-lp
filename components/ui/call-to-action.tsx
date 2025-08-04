import { Button } from "@/components/ui/button"
import { SITE_CONTENT } from "@/constants/content"

export function CallToAction() {
  return (
    <Button
      className="bg-transparent border-[#940203] cursor-pointer text-white px-8 py-3 text-sm tracking-widest hover:border-none hover:bg-[#940203] hover:text-white transition-all duration-300"
      variant="outline"
    >
      {SITE_CONTENT.hero.cta}
    </Button>
  )
}
