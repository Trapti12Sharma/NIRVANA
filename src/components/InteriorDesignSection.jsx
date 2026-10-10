import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import Img from './Img'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { interiorSpaces, interiorServices } from '../data/interior'

export default function InteriorDesignSection({ showCta = true }) {
  return (
    <section className="section" id="spaces" aria-label="Interior design">
      <div className="container-x">
        <SectionHeading
          eyebrow="Interior design"
          title="Spaces That Tell Your Story."
          subtitle="Beautifully considered interiors that balance aesthetics, comfort, and everyday functionality."
        />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {interiorSpaces.map((s, i) => (
            <Reveal key={s.name} delay={(i % 3) * 80} className="group relative aspect-[4/3] overflow-hidden bg-cream">
              <span className="zoom-img block h-full"><Img src={s.image} alt={s.alt} /></span>
              <span className="absolute inset-0 bg-gradient-to-t from-espresso/75 via-transparent to-transparent" />
              <h3 className="absolute inset-x-0 bottom-0 p-3.5 font-serif text-lg font-medium text-ivory sm:p-5 sm:text-2xl">{s.name}</h3>
            </Reveal>
          ))}
        </div>

        <div id="services" className="mt-16 grid gap-10 border-t border-walnut/15 pt-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <h3 className="font-serif text-3xl font-medium sm:text-4xl">Interior services</h3>
            <p className="mt-4 text-muted">A single team for planning, selecting and building — so furniture and interiors work as one.</p>
            {showCta && (
              <Link to="/interior-design#consultation" className="btn-primary mt-8 w-full sm:w-auto">Book an Interior Consultation</Link>
            )}
          </Reveal>
          <Reveal delay={100}>
            <ul className="grid gap-x-10 sm:grid-cols-2">
              {interiorServices.map((s) => (
                <li key={s} className="flex gap-3 border-b border-walnut/10 py-4 text-[0.98rem]">
                  <Check size={18} className="mt-0.5 shrink-0 text-gold" /> {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
