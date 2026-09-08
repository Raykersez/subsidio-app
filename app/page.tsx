import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Problema } from "@/components/problema"
import { ComoFunciona } from "@/components/como-funciona"
import { Beneficios } from "@/components/beneficios"
import { Testimonio } from "@/components/testimonio"
import { SearchExperience } from "@/components/search-experience"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Problema />
        <ComoFunciona />
        <Beneficios />
        <Testimonio />
        <SearchExperience />
      </main>
      <Footer />
    </div>
  )
}
