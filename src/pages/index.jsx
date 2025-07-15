import HeroSection from '../components/landing_sections/Hero'
import AboutSection from '../components/landing_sections/About'
import Features from '../components/landing_sections/Features'
import Testimonials from '../components/landing_sections/Testimonials'
import CTA from '../components/landing_sections/CTA'
import NavBar from '@/components/NavBar/NavBar'
import MainLayout from '@/components/common_components/MainLayout'
import Footer from '../components/landing_sections/FooterSection'
export default function landing() {
  return (
    <main>
      <section className="mx-auto px-4 sm:max-w-xl sm:px-0 md:max-w-2xl lg:max-w-full lg:px-0">
        <HeroSection />
      </section>

      {/* <MainLayout> */}
      <section className="mx-auto px-4 sm:max-w-xl sm:px-0 md:max-w-2xl lg:max-w-7xl lg:px-14">
        <AboutSection />
        <Features />
        <Testimonials />
        <CTA />
      </section>
      <Footer />

      {/* </MainLayout> */}
    </main>
  )
}
