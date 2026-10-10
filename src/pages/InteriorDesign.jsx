import PageHero from '../components/PageHero'
import InteriorDesignSection from '../components/InteriorDesignSection'
import GalleryGrid from '../components/GalleryGrid'
import EnquiryForm from '../components/EnquiryForm'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { interiorFields } from '../data/forms'
import { img } from '../data/images'

export default function InteriorDesign() {
  return (
    <>
      <PageHero
        eyebrow="Interior design"
        title="Spaces That Tell Your Story."
        text="Beautifully considered interiors that balance aesthetics, comfort, and everyday functionality."
        image={img('livingLux', 1800, 800)}
        alt="Elegant living room with white sofas and built-in shelving"
      />
      <InteriorDesignSection showCta={false} />
      <GalleryGrid />
      <section id="consultation" className="section bg-cream/60">
        <div className="container-x max-w-4xl">
          <SectionHeading eyebrow="Consultation" title="Book an Interior Consultation" subtitle="Tell us about your project and we will continue the conversation on WhatsApp." />
          <Reveal className="mt-10 bg-white p-6 sm:p-10">
            <EnquiryForm title="interior design enquiry" fields={interiorFields} submitLabel="Request Consultation on WhatsApp" />
          </Reveal>
        </div>
      </section>
    </>
  )
}
