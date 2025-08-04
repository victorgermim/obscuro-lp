import Image from "next/image"
import { SITE_CONTENT } from "@/constants/content"

export function ImageGallery() {
  return (
    <div className="grid grid-cols-2 gap-8 mb-8">
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src="/images/2.jpg"
          alt={SITE_CONTENT.images.portraitAlt}
          fill
          className="object-cover"
        />
      </div>

      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src="/images/1.jpg"
          alt={SITE_CONTENT.images.artworkAlt}
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}
