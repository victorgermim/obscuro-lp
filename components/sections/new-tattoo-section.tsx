import { Button } from "@/components/ui/button"
import Image from "next/image"
import { SITE_CONTENT } from "@/constants/content"

export function NewTattooSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-12 items-start">
          {/* Left Side - 30% */}
         <div className="order-2 lg:order-1 lg:col-span-3 flex flex-col space-y-8 h-full">
            {/* Small Image */}
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/1.1.jpg"
                alt={SITE_CONTENT.images.smallTattooAlt}
                fill
                className="object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-6 lg:mt-auto">
              <p className="text-gray-300 text-sm leading-relaxed tracking-wide">
                {SITE_CONTENT.newSection.description}
              </p>

              {/* CTA Button */}
              <Button className="bg-[#940203] cursor-pointer text-white px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-[#940203] transition-all duration-300 font-medium">
                {SITE_CONTENT.newSection.cta}
              </Button>
            </div>
          </div>

          {/* Right Side - 70% */}
          <div className="order-1 lg:order-2 lg:col-span-7 space-y-8">
            {/* Title Section */}
            <div className="space-y-4">
              <p className="text-gray-400 text-sm tracking-[0.3em] font-light text-center">
                {SITE_CONTENT.newSection.subtitle}
              </p>
              <h2 className="text-4xl md:text-6xl lg:text-6xl xl:text-7xl font-black tracking-wider text-white leading-tight text-center">                {SITE_CONTENT.newSection.title}
              </h2>
            </div>

            {/* Large Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/11.1.jpg"
                alt={SITE_CONTENT.images.largeTattooAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
