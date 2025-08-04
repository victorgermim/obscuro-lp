import { SITE_CONTENT } from "@/constants/content"
import Image from "next/image"

export function Logo() {
  return (
    <div className="bg-black px-4">
      <div className="w-20 h-20 flex items-center justify-center mx-auto">
        <Image
          src="/images/OBSCURO LOGO.svg"        
          alt={SITE_CONTENT.logo.alt ?? "Logo Obscuro"}
          width={60}
          height={60}
          priority                          
          className="object-contain"        
        />      </div>
    </div>
  )
}
