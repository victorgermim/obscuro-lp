import { MainLayout } from "@/components/layout/main-layout"
import { Header } from "@/components/layout/header"
import { HeroSection } from "@/components/sections/hero-section"
import { DecorativeElements } from "@/components/ui/decorative-elements"
import { NewTattooSection } from "@/components/sections/new-tattoo-section"
import { TattooStylesSection } from "@/components/sections/tattoo-styles-section"
import { GallerySection } from "@/components/sections/gallery-section"
import { Footer } from "@/components/layout/footer"

export default function HomePage() {
  return (
    <MainLayout>
      <Header />
      <main className="relative px-4 md:px-26 py-12">
        <HeroSection />
        <NewTattooSection />
        <TattooStylesSection />
        <GallerySection />
      </main>
      <Footer />
      <DecorativeElements />
    </MainLayout>
  )
}
