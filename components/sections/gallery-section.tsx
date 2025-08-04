import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SITE_CONTENT } from "@/constants/content"

export function GallerySection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Image Slider (simulated) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {SITE_CONTENT.gallerySection.images.map((img, index) => (
            <div key={index} className="relative aspect-[3/4] overflow-hidden">
              <Image src={img.src || "/placeholder.svg"} alt={img.alt} fill className="object-cover" />
            </div>
          ))}
        </div>

        {/* Content Below Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Title */}
          <div className="text-center lg:text-left">
            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-[8rem] font-black tracking-wider text-white leading-tight">
              {SITE_CONTENT.gallerySection.title}
            </h2>
          </div>

          {/* Right Side - Description and CTA */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 lg:ml-auto lg:pl-16">
            <p className="text-gray-300 text-sm leading-relaxed tracking-wide max-w-md">
              {SITE_CONTENT.gallerySection.description}
            </p>
            <Button className="bg-red-500 text-white px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-red-500 transition-all duration-300 font-medium">
              {SITE_CONTENT.gallerySection.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
