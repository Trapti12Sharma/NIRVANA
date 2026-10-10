import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Img from './Img'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { categories, categoryLink } from '../data/categories'

export default function CategoryGrid() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Shop by category"
          title="Find Your Perfect Piece"
          subtitle="Thoughtfully designed furniture for every corner of your home."
        />
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {categories.map((c, i) => (
            <Reveal as="li" key={c.id} delay={(i % 4) * 80}>
              <Link to={categoryLink(c)} className="group relative block aspect-[4/5] overflow-hidden bg-cream">
                <span className="zoom-img block h-full"><Img src={c.image} alt={c.alt} /></span>
                <span className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/10 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3.5 sm:p-5">
                  <span className="font-serif text-lg font-medium leading-tight text-ivory sm:text-2xl">{c.name}</span>
                  <ArrowUpRight size={20} className="mb-1 shrink-0 text-gold transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
