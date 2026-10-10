import { Quote } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// Add verified customer testimonials here. Leave the array empty to show the placeholder panel.
// Example: { quote: '…', name: 'Customer name', place: 'City' }
const testimonials = []

export default function Testimonials() {
  return (
    <section className="section" aria-label="Customer reviews">
      <div className="container-x">
        <SectionHeading eyebrow="Reviews" title="Words from Our Customers" />
        {testimonials.length ? (
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <Reveal key={t.name} as="figure" className="border border-walnut/10 bg-white p-8">
                <Quote size={26} className="text-gold" />
                <blockquote className="mt-4 font-serif text-xl leading-snug">{t.quote}</blockquote>
                <figcaption className="mt-5 text-sm text-muted">{t.name}{t.place ? `, ${t.place}` : ''}</figcaption>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="mx-auto mt-12 max-w-3xl border border-dashed border-gold/70 bg-cream/40 p-8 text-center sm:p-12">
            <Quote size={30} className="mx-auto text-gold" />
            <p className="mt-5 font-serif text-2xl leading-snug sm:text-3xl">Customer reviews will appear here.</p>
            <p className="mt-3 text-sm text-muted">Placeholder — this section is ready for verified customer testimonials once they are collected.</p>
          </Reveal>
        )}
      </div>
    </section>
  )
}
