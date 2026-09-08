import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { SearchExperience } from "@/components/search-experience"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <SearchExperience />
      </main>
      <Footer />
    </div>
  )
}
