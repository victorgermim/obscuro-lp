import { Button } from "@/components/ui/button"
import { SITE_CONTENT } from "@/constants/content"
import { Instagram, Facebook, Linkedin, PhoneIcon as Whatsapp, DribbbleIcon as Behance } from "lucide-react"

const SocialIcon = ({ name, href }: { name: string; href: string }) => {
  let IconComponent
  switch (name) {
    case "Instagram":
      IconComponent = Instagram
      break
    case "WhatsApp":
      IconComponent = Whatsapp
      break
    case "Facebook":
      IconComponent = Facebook
      break
    case "Behance":
      IconComponent = Behance
      break
    case "LinkedIn":
      IconComponent = Linkedin
      break
    default:
      return null
  }
  return (
    <a
      href={href}
      aria-label={name}
      className="p-2 border border-white rounded-full hover:bg-white hover:text-black transition-colors"
    >
      <IconComponent className="w-5 h-5" />
    </a>
  )
}

export function Footer() {
  return (
    <footer className="relative py-16 md:py-24 px-4 md:px-8 overflow-hidden">
      {/* Large Background Text */}
      {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[15rem] md:text-[20rem] lg:text-[25rem] xl:text-[30rem] font-black text-white opacity-5 tracking-widest leading-none select-none">
          {SITE_CONTENT.footer.backgroundText}
        </span>
      </div> */}

      {/* CTA Banner */}
      <div className="relative z-10 max-w-4xl mx-auto bg-[#940203] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between text-white text-center md:text-left space-y-4 md:space-y-0 rounded-lg">
        <p className="text-lg md:text-xl font-bold tracking-wide leading-tight">{SITE_CONTENT.footer.ctaBanner.text}</p>
        <Button className="bg-white cursor-pointer text-black px-8 py-3 text-sm tracking-widest hover:bg-gray-200 transition-all duration-300 font-medium">
          {SITE_CONTENT.footer.ctaBanner.button}
        </Button>
      </div>

      {/* Main Title "A TOUCH OF INK" */}
      <div className="relative z-10 text-center mt-16 mb-16">
        <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-[8rem] font-black tracking-wider text-white leading-none">
          {SITE_CONTENT.footer.mainTitle}
        </h2>
      </div>

      {/* Bottom Bar - Copyright, Socials, Designer */}
      <div className="relative z-10 mt-24 flex flex-col md:flex-row items-center justify-between text-gray-400 text-xs tracking-wider space-y-4 md:space-y-0">
        <p className="text-center md:text-left">{SITE_CONTENT.footer.copyright}</p>
        <div className="flex-1 flex space-x-4 justify-center">
          {SITE_CONTENT.footer.socials.map((social) => (
            <SocialIcon key={social.name} name={social.name} href={social.href} />
          ))}
        </div>
        <p className="text-center md:text-right">{SITE_CONTENT.footer.designer}</p>
      </div>
    </footer>
  )
}
