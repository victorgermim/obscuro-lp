import { ImageGallery } from "../ui/image-gallery"
import { HeroTitle } from "../ui/hero-title"
import { CallToAction } from "../ui/call-to-action"
import { SITE_CONTENT } from "@/constants/content"

export function HeroSection() {
  return (
    <div className="relative max-w-7xl mx-auto">
      {/* Title Section with Side Texts */}
      <div className="flex items-center justify-between mb-20">
        {/* Left Side Text */}
        <div className="hidden lg:block flex-1 max-w-[200px]">
          <p className="text-xs tracking-widest text-gray-400 leading-relaxed">{SITE_CONTENT.sideText.left}</p>
        </div>

        <div className="flex-1 text-center px-4 lg:px-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl tracking-[0.4em] md:tracking-[0.6em] lg:tracking-[0.8em] font-light text-white">
            {SITE_CONTENT.hero.subtitle}
          </h1>
        </div>

        <div className="hidden lg:block flex-1 max-w-[200px]">
          <p className="text-xs tracking-widest text-gray-400 leading-relaxed text-right">
            {SITE_CONTENT.sideText.right}
          </p>
        </div>
      </div>

      <div className="lg:hidden flex justify-between mb-12 px-4">
        <div className="flex-1 max-w-[140px]">
          <p className="text-[10px] tracking-wider text-gray-400 leading-relaxed">{SITE_CONTENT.sideText.left}</p>
        </div>
        <div className="flex-1 max-w-[140px]">
          <p className="text-[10px] tracking-wider text-gray-400 leading-relaxed text-right">
            {SITE_CONTENT.sideText.right}
          </p>
        </div>
      </div>

      <ImageGallery />
      <HeroTitle />

      <div className="text-center mt-20 md:mt-16">        
        <CallToAction />
      </div>
    </div>
  )
}
