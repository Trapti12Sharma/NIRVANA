import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'
import Logo from './Logo'
import { siteConfig } from '../data/siteConfig'
import { categories, categoryLink } from '../data/categories'

const Svg = ({ children, size = 20, ...p }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>{children}</svg>
)
const Instagram = (p) => <Svg {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" /></Svg>
const Facebook = (p) => <Svg {...p}><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" /></Svg>
const PinterestIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M10.5 21l2.2-8.5M9 9.5c.6-2.2 4.8-2.6 5.4.2.5 2.4-1.6 4.5-3.2 3.8" />
  </svg>
)

const h = 'mb-5 text-xs font-semibold uppercase tracking-luxe text-gold'
const a = 'block py-1.5 text-[0.95rem] text-cream/80 transition-colors hover:text-gold'

export default function Footer() {
  const { address, social } = siteConfig
  const socials = [
    { label: 'Instagram', href: social.instagram, Icon: Instagram },
    { label: 'Facebook', href: social.facebook, Icon: Facebook },
    { label: 'Pinterest', href: social.pinterest, Icon: PinterestIcon },
  ]
  return (
    <footer className="bg-espresso text-cream">
      <div className="container-x grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:py-20">
        <div>
          <Logo light />
          <p className="mt-6 max-w-xs text-[0.95rem] leading-relaxed text-cream/75">
            Furniture manufacturing, a furniture showroom and interior design — thoughtfully crafted, designed for living.
          </p>
          <div className="mt-6 flex gap-2">
            {socials.map(({ label, href, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="flex h-11 w-11 items-center justify-center border border-gold/40 text-cream transition-colors hover:border-gold hover:text-gold">
                <Icon size={19} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className={h}>Furniture</h3>
          {categories.map((c) => (
            <Link key={c.id} to={categoryLink(c)} className={a}>{c.name}</Link>
          ))}
        </div>

        <div>
          <h3 className={h}>Services</h3>
          <Link to="/custom-furniture" className={a}>Custom Manufacturing</Link>
          <Link to="/interior-design" className={a}>Interior Design</Link>
          <Link to="/interior-design#consultation" className={a}>Book an Interior Consultation</Link>
          <Link to="/#craft" className={a}>Our Craft</Link>
          <h3 className={`${h} mt-8`}>Company</h3>
          <Link to="/about" className={a}>About Us</Link>
          <Link to="/contact" className={a}>Contact</Link>
        </div>

        <div>
          <h3 className={h}>Visit &amp; Contact</h3>
          <address className="space-y-4 text-[0.95rem] not-italic text-cream/80">
            <p className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-gold" /><span>{address.line1}<br />{address.line2}</span></p>
            <a href={siteConfig.phoneHref} className="flex items-center gap-3 hover:text-gold"><Phone size={18} className="shrink-0 text-gold" />{siteConfig.phoneDisplay}</a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 break-all hover:text-gold"><Mail size={18} className="shrink-0 text-gold" />{siteConfig.email}</a>
          </address>
        </div>
      </div>

      <div className="border-t border-gold/20">
        <div className="container-x flex flex-col gap-3 py-6 text-sm text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nirvana by Raaya. All rights reserved.</p>
          <p className="flex gap-5">
            <Link to="/privacy" className="hover:text-gold">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
