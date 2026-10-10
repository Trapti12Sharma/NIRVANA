import Hero from '../components/Hero'
import CategoryGrid from '../components/CategoryGrid'
import FeaturedProducts from '../components/FeaturedProducts'
import ManufacturingSection from '../components/ManufacturingSection'
import InteriorDesignSection from '../components/InteriorDesignSection'
import CraftsmanshipSection from '../components/CraftsmanshipSection'
import GalleryGrid from '../components/GalleryGrid'
import WhyChoose from '../components/WhyChoose'
import ShowroomSection from '../components/ShowroomSection'
import Testimonials from '../components/Testimonials'
import ContactSection from '../components/ContactSection'

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <ManufacturingSection />
      <InteriorDesignSection />
      <CraftsmanshipSection />
      <GalleryGrid />
      <WhyChoose />
      <ShowroomSection />
      <Testimonials />
      <div className="bg-cream/60"><ContactSection /></div>
    </>
  )
}
