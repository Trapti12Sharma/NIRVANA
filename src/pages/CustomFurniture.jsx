import PageHero from '../components/PageHero'
import ManufacturingSection from '../components/ManufacturingSection'
import CraftsmanshipSection from '../components/CraftsmanshipSection'
import EnquiryForm from '../components/EnquiryForm'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { customFields } from '../data/forms'
import { img } from '../data/images'

const steps = [
  ['Share your idea', 'Tell us the piece, the room and the look you have in mind.'],
  ['Discuss the details', 'We talk through dimensions, materials and finishes with you.'],
  ['Design & craft', 'Your piece is designed and made with careful attention to detail.'],
  ['Delivered to you', 'The finished furniture is ready for your home or workspace.'],
]

export default function CustomFurniture() {
  return (
    <>
      <PageHero
        eyebrow="Custom furniture"
        title="Furniture Made Around Your Space."
        text="Made-to-measure beds, wardrobes, sofas, dining tables and storage — for homes, offices and commercial spaces."
        image={img('plans', 1800, 800)}
        alt="Furniture plans and drawings on a worktable"
      />
      <ManufacturingSection />
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="How it works" title="From Idea to Finished Piece" />
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([t, d], i) => (
              <Reveal as="li" key={t} delay={i * 80} className="border-t-2 border-gold pt-5">
                <p className="font-serif text-4xl text-gold">0{i + 1}</p>
                <h3 className="mt-2 font-serif text-2xl font-medium">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
      <CraftsmanshipSection />
      <section id="enquiry" className="section">
        <div className="container-x max-w-4xl">
          <SectionHeading eyebrow="Custom enquiry" title="Create Your Custom Furniture" subtitle="Share a few details and we will continue the conversation on WhatsApp." />
          <Reveal className="mt-10 bg-white p-6 sm:p-10">
            <EnquiryForm title="custom furniture enquiry" fields={customFields} submitLabel="Send Custom Enquiry on WhatsApp" />
          </Reveal>
        </div>
      </section>
    </>
  )
}
