import Img from './Img'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { craftSteps } from '../data/interior'

export default function CraftsmanshipSection() {
  return (
    <section id="craft" className="section bg-cream/60" aria-label="Our craftsmanship">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our craft"
          title="Good Design Begins with Good Craftsmanship."
          subtitle="We bring manufacturing and design together, so you can explore furniture choices and request custom pieces — all in one place."
        />
        <ol className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:px-0 lg:grid-cols-5">
          {craftSteps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 80} className="w-[68%] shrink-0 snap-start sm:w-auto">
              <div className="group">
                <div className="zoom-img aspect-[4/5] overflow-hidden bg-cream"><Img src={s.image} alt={s.alt} /></div>
                <p className="mt-4 font-serif text-3xl text-gold">0{i + 1}</p>
                <h3 className="mt-1 font-serif text-xl font-medium sm:text-2xl">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
