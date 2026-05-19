import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TechStack } from "@/components/tech-stack"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Footer } from "@/components/footer"
import { MobileNav } from "@/components/mobile-nav"
import { BackgroundEffects } from "@/components/background-effects"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <TechStack />
      <Services />
      <Projects />
      <Skills />
      <Footer />
      <MobileNav />
    </main>
  )
}
