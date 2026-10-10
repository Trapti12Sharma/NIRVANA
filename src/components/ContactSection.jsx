import { useSearchParams } from 'react-router-dom'
import { Phone, Mail, MessageCircle } from 'lucide-react'
import Reveal from './Reveal'
import EnquiryForm from './EnquiryForm'
import { contactFields } from '../data/forms'
import { siteConfig } from '../data/siteConfig'
import { whatsappLink } from '../lib/whatsapp'

const interests = { furniture: 'Furniture', custom: 'Custom Manufacturing', interior: 'Interior Design' }

export default function ContactSection({ heading = true }) {
  const [params] = useSearchParams()
  const initial = { interest: interests[params.get('interest')] || '' }
  const row = 'flex items-center gap-4 border-b border-walnut/10 py-4 hover:text-gold'
  return (
    <section id="contact" className="section" aria-label="Contact and enquiry">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow mb-4">Get in touch</p>
          {heading ? <h2 className="h-section">Let’s Talk About Your Space.</h2> : <p className="h-section">Let’s Talk About Your Space.</p>}
          <p className="mt-5 text-muted sm:text-lg">Tell us what you are looking for — furniture, a custom piece or a full interior — and we will take it from there.</p>
          <div className="mt-8">
            <a href={siteConfig.phoneHref} className={row}><Phone size={20} className="text-gold" />{siteConfig.phoneDisplay}</a>
            <a href={`mailto:${siteConfig.email}`} className={`${row} break-all`}><Mail size={20} className="shrink-0 text-gold" />{siteConfig.email}</a>
            <a href={whatsappLink('Hello Nirvana by Raaya, I would like to get in touch.')} target="_blank" rel="noopener noreferrer" className={row}><MessageCircle size={20} className="text-gold" />Chat on WhatsApp</a>
          </div>
          <p className="mt-4 text-xs text-muted">Contact details above are placeholders until configured.</p>
        </Reveal>
        <Reveal delay={100} className="bg-white p-6 sm:p-10">
          <EnquiryForm key={initial.interest} title="General enquiry" fields={contactFields} initial={initial} />
        </Reveal>
      </div>
    </section>
  )
}
