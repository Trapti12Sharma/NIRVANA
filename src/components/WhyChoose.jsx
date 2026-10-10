import { PencilRuler, Hammer, Armchair, MessagesSquare } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const items = [
  { Icon: PencilRuler, title: 'Thoughtful Design', text: 'Furniture designed around comfort and aesthetics.' },
  { Icon: Hammer, title: 'Custom Craftsmanship', text: 'Options to discuss dimensions, finishes, and personalised requirements.' },
  { Icon: Armchair, title: 'Furniture & Interiors Together', text: 'A unified approach to furniture selection and interior planning.' },
  { Icon: MessagesSquare, title: 'Personal Consultation', text: 'Support to help you explore the right options.' },
]

export default function WhyChoose() {
  return (
    <section className="section" aria-label="Why choose Nirvana by Raaya">
      <div className="container-x">
        <SectionHeading eyebrow="Why Nirvana by Raaya" title="Why Choose Nirvana by Raaya?" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 80} className="border border-walnut/10 bg-cream/50 p-7 transition-colors hover:bg-cream">
              <Icon size={30} strokeWidth={1.4} className="text-gold" />
              <h3 className="mt-6 font-serif text-2xl font-medium">{title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
