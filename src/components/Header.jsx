import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Search, MessageCircle, ChevronDown } from 'lucide-react'
import Logo from './Logo'
import SearchOverlay from './SearchOverlay'
import { categories, categoryLink } from '../data/categories'
import { whatsappLink } from '../lib/whatsapp'

const interiorLinks = [
  { name: 'Interior Design Overview', to: '/interior-design' },
  { name: 'Residential Interiors', to: '/interior-design#spaces' },
  { name: 'Our Services', to: '/interior-design#services' },
  { name: 'Book a Consultation', to: '/interior-design#consultation' },
]

const furnitureLinks = [{ name: 'All Furniture', to: '/furniture' }, ...categories.map((c) => ({ name: c.name, to: categoryLink(c) }))]

const nav = [
  { label: 'Home', to: '/', end: true },
  { label: 'Furniture', to: '/furniture', children: furnitureLinks },
  { label: 'Custom Furniture', to: '/custom-furniture' },
  { label: 'Interior Design', to: '/interior-design', children: interiorLinks },
  { label: 'Our Craft', to: '/#craft' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const linkCls = ({ isActive }) =>
  `relative whitespace-nowrap py-2 text-[0.78rem] font-semibold uppercase tracking-[0.1em] transition-colors hover:text-gold ${isActive ? 'text-gold' : 'text-espresso'}`

export default function Header() {
  const [open, setOpen] = useState(false)
  const [searching, setSearching] = useState(false)
  const [expanded, setExpanded] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const { pathname, search, hash } = useLocation()

  useEffect(() => {
    setOpen(false)
    setExpanded(null)
  }, [pathname, search, hash])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
    <header className={`sticky top-0 z-50 border-b border-walnut/10 bg-ivory/95 backdrop-blur transition-shadow ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="container-x !max-w-[1500px] flex h-[72px] items-center justify-between gap-4 sm:h-20">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-5 nav:flex 2xl:gap-7">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <NavLink to={item.to} className={(s) => `${linkCls(s)} inline-flex items-center gap-1`}>
                  {item.label}
                  <ChevronDown size={14} className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
                </NavLink>
                <div className="invisible absolute left-1/2 top-full z-10 w-64 -translate-x-1/2 translate-y-2 border border-walnut/10 bg-ivory py-3 opacity-0 shadow-md transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {item.children.map((c) => (
                    <Link key={c.name} to={c.to} className="block px-5 py-2.5 text-sm text-ink transition-colors hover:bg-cream hover:text-walnut">
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : item.to.includes('#') ? (
              <Link key={item.label} to={item.to} className={linkCls({ isActive: false })}>{item.label}</Link>
            ) : (
              <NavLink key={item.label} to={item.to} end={item.end} className={linkCls}>{item.label}</NavLink>
            ),
          )}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <button onClick={() => setSearching(true)} aria-label="Search furniture" className="flex h-11 w-11 items-center justify-center text-espresso hover:text-gold sm:h-12 sm:w-12">
            <Search size={21} />
          </button>
          <a
            href={whatsappLink('Hello Nirvana by Raaya, I would like to get in touch.')}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="hidden h-12 w-12 items-center justify-center text-espresso hover:text-gold sm:flex"
          >
            <MessageCircle size={21} />
          </a>
          <Link to="/contact" className="btn-primary ml-1 hidden !px-5 md:inline-flex">Book a Consultation</Link>
          <button onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" className="flex h-11 w-11 items-center justify-center text-espresso sm:h-12 sm:w-12 nav:hidden">
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
    </header>

      {/* Mobile menu (outside <header>: backdrop-blur would otherwise trap fixed positioning) */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-[72px] bottom-0 z-40 overflow-y-auto bg-ivory transition-all duration-300 sm:top-20 nav:hidden ${open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-3 opacity-0'}`}
      >
        <nav aria-label="Mobile" className="container-x py-4">
          {nav.map((item) => (
            <div key={item.label} className="border-b border-walnut/10">
              {item.children ? (
                <>
                  <div className="flex items-stretch">
                    <Link to={item.to} className="flex min-h-[54px] flex-1 items-center font-serif text-2xl text-espresso">{item.label}</Link>
                    <button
                      onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                      aria-label={`Toggle ${item.label} submenu`}
                      aria-expanded={expanded === item.label}
                      className="flex w-14 items-center justify-center text-walnut"
                    >
                      <ChevronDown size={20} className={`transition-transform ${expanded === item.label ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  <div className={`grid transition-all duration-300 ${expanded === item.label ? 'grid-rows-[1fr] pb-3' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      {item.children.map((c) => (
                        <Link key={c.name} to={c.to} className="flex min-h-[44px] items-center pl-3 text-[0.95rem] text-muted hover:text-walnut">{c.name}</Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link to={item.to} className="flex min-h-[54px] items-center font-serif text-2xl text-espresso">{item.label}</Link>
              )}
            </div>
          ))}
          <div className="grid gap-3 py-6 sm:grid-cols-2">
            <Link to="/contact" className="btn-primary">Book a Consultation</Link>
            <a href={whatsappLink('Hello Nirvana by Raaya, I would like to get in touch.')} target="_blank" rel="noopener noreferrer" className="btn-outline">
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </div>
        </nav>
      </div>

      {searching && <SearchOverlay onClose={() => setSearching(false)} />}
    </>
  )
}
