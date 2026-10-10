import { MapPin, Clock, Phone, MessageCircle, Navigation } from 'lucide-react'
import Img from './Img'
import Reveal from './Reveal'
import { img } from '../data/images'
import { siteConfig } from '../data/siteConfig'
import { whatsappLink } from '../lib/whatsapp'

export default function ShowroomSection() {
  const { address, hours } = siteConfig
  return (
    <section className="section bg-cream/60" aria-labelledby="showroom-title">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="aspect-[4/3] overflow-hidden bg-cream">
          <Img src={img('showroom', 1200, 900)} alt="Showroom-style living space with a leather sofa, pendant lighting and styled shelves" />
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow mb-4">Visit us</p>
          <h2 id="showroom-title" className="h-section">Experience the Craft in Person.</h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Visit our showroom to explore furniture designs, materials, finishes, and ideas for your space.
          </p>
          <ul className="mt-8 space-y-5 text-[0.98rem]">
            <li className="flex gap-4"><MapPin size={20} className="mt-0.5 shrink-0 text-gold" /><span>{address.line1}<br />{address.line2}<br /><span className="text-xs text-muted">Placeholder address — to be updated</span></span></li>
            <li className="flex gap-4"><Clock size={20} className="mt-0.5 shrink-0 text-gold" /><span>{hours.map((h) => <span key={h.days} className="block">{h.days}: {h.time}</span>)}<span className="text-xs text-muted">Placeholder hours — to be updated</span></span></li>
            <li className="flex gap-4"><Phone size={20} className="mt-0.5 shrink-0 text-gold" /><a href={siteConfig.phoneHref} className="hover:text-gold">{siteConfig.phoneDisplay}</a></li>
          </ul>
          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            <a href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-primary !px-4"><Navigation size={17} /> Get Directions</a>
            <a href={siteConfig.phoneHref} className="btn-outline !px-4"><Phone size={17} /> Call Us</a>
            <a href={whatsappLink('Hello Nirvana by Raaya, I would like to visit your showroom.')} target="_blank" rel="noopener noreferrer" className="btn-outline !px-4"><MessageCircle size={17} /> WhatsApp</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
