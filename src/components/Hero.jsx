import { Link } from 'react-router-dom'
import Img from './Img'
import { img } from '../data/images'

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[580px] items-end overflow-hidden bg-espresso sm:min-h-[640px] lg:h-[min(calc(100vh-80px),780px)] lg:items-center">
      <div className="absolute inset-0 -z-10">
        <Img
          src={img('hero', 1920, 1100)}
          srcSet={`${img('hero', 800, 1000)} 800w, ${img('hero', 1400, 900)} 1400w, ${img('hero', 2000, 1100)} 2000w`}
          sizes="100vw"
          alt="Sunlit luxury living room with a tan leather sofa, timber coffee table and warm neutral styling"
          eager
          className="object-[62%_50%] sm:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/65 to-espresso/40 lg:bg-gradient-to-r lg:from-espresso/80 lg:via-espresso/40 lg:to-transparent" />
      </div>

      <div className="container-x w-full pb-14 pt-24 lg:py-0">
        <div className="max-w-2xl">
          <p className="eyebrow hero-in !text-gold" style={{ animationDelay: '.1s' }}>Nirvana by Raaya</p>
          <h1 className="h-display hero-in mt-5 !text-ivory" style={{ animationDelay: '.25s' }}>
            Furniture That Feels Like Home.
          </h1>
          <p className="hero-in mt-6 max-w-xl text-base leading-relaxed text-cream sm:text-xl" style={{ animationDelay: '.4s' }}>
            Thoughtfully crafted furniture and inspired interiors, designed around the way you live.
          </p>
          <div className="hero-in mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: '.55s' }}>
            <Link to="/furniture" className="btn-light">Explore Furniture</Link>
            <Link to="/interior-design" className="btn-outline-light">Discover Interior Design</Link>
          </div>
          <p className="hero-in mt-10 flex items-center gap-4 text-xs font-semibold uppercase tracking-luxe text-cream" style={{ animationDelay: '.7s' }}>
            <span className="h-px w-10 bg-gold" /> Crafted with care. Designed for living.
          </p>
        </div>
      </div>
    </section>
  )
}
