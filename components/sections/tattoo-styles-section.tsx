"use client"

import { useState } from "react"
import Image from "next/image"
import { SITE_CONTENT } from "@/constants/content"
import { cn } from "@/lib/utils"

type TattooStyle = (typeof SITE_CONTENT.stylesSection.styles)[number]

export function TattooStylesSection() {
  const [activeStyle, setActiveStyle] = useState<TattooStyle>(SITE_CONTENT.stylesSection.styles[2],)

  return (
    <section className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <p className="text-gray-400 text-sm tracking-[0.3em] font-light mb-4">{SITE_CONTENT.stylesSection.subtitle}</p>
        <h2 className="text-5xl md:text-5xl lg:text-5xl xl:text-[8rem] font-black tracking-wider text-white leading-tight">
          {SITE_CONTENT.stylesSection.title}
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <div className="relative aspect-[3/4] w-full lg:max-w-md overflow-hidden lg:justify-self-end">
          <Image
            key={activeStyle.image} 
            src={activeStyle.image}
            alt={activeStyle.name}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* Right Side - Style List */}
        <div className="flex flex-col items-center lg:items-start space-y-4">
          {SITE_CONTENT.stylesSection.styles.map((style) => (
            <button
              key={style.name}
              onClick={() => setActiveStyle(style)}
              className={cn(
                "relative w-full max-w-xs md:max-w-sm lg:max-w-md py-4 px-6 border border-white text-white text-lg md:text-xl font-bold tracking-widest uppercase transform -rotate-3 hover:rotate-0 transition-all duration-300",
                activeStyle.name === style.name && "bg-red-500 border-red-500 rotate-0",
              )}
              style={{ transform: activeStyle.name === style.name ? "rotate(0deg)" : "rotate(-3deg)" }}
            >
              {style.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
