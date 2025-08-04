import { SITE_CONTENT } from "@/constants/content"

export function HeroTitle() {
  return (
    <div className="absolute inset-0 flex items-end justify-center pb-24 md:pb-12 lg:pb-16 pointer-events-none">
      <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-[8rem] font-black tracking-wider text-white leading-none text-center">
        {SITE_CONTENT.hero.title}
      </h2>
    </div>
  )
}
