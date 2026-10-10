import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import Img from './Img'
import Reveal from './Reveal'
import { img } from '../data/images'
import { customServices } from '../data/interior'

export default function ManufacturingSection() {
  return (
    <section className="section bg-walnut text-cream" aria-labelledby="custom-title">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="aspect-[5/4] overflow-hidden lg:aspect-[4/5]">
            <Img src={img("sketch", 1000, 1250)} alt="Hands sketching a furniture design on paper at a wooden table" className="object-[50%_88%]" />
          </div>
          <div className="absolute -bottom-4 -right-0 hidden border border-gold/60 bg-espresso px-6 py-4 sm:block lg:-right-6">
            <p className="eyebrow">Made to measure</p>
            <p className="mt-1 font-serif text-xl text-ivory">From sketch to final finish</p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow mb-4">Custom manufacturing</p>
          <h2 id="custom-title" className="h-section !text-ivory">Made for You. Crafted by Us.</h2>
          <p className="mt-5 text-base leading-relaxed text-cream/85 sm:text-lg">
            From the first sketch to the final finish, we help bring your furniture ideas to life with thoughtful design and careful craftsmanship.
          </p>
          <ul className="mt-8 space-y-3.5">
            {customServices.map((s) => (
              <li key={s} className="flex gap-3.5 text-[0.98rem] text-cream">
                <Check size={19} className="mt-0.5 shrink-0 text-gold" /> {s}
              </li>
            ))}
          </ul>
          <Link to="/custom-furniture#enquiry" className="btn-light mt-10 w-full sm:w-auto">Create Your Custom Furniture</Link>
        </Reveal>
      </div>
    </section>
  )
}
