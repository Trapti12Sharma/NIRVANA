import PageHero from '../components/PageHero'
import ContactSection from '../components/ContactSection'
import ShowroomSection from '../components/ShowroomSection'
import { img } from '../data/images'

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We’d Love to Hear from You."
        image={img('contact', 1800, 800)}
        alt="Bright living room with a red armchair and large windows"
      />
      <ContactSection heading={false} />
      <ShowroomSection />
    </>
  )
}
