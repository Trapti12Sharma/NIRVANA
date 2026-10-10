import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import WhyChoose from '../components/WhyChoose'
import ShowroomSection from '../components/ShowroomSection'
import Img from '../components/Img'
import Reveal from '../components/Reveal'
import { img } from '../data/images'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Crafted with care. Designed for living."
        image={img('galWood', 1800, 800)}
        alt="Open-plan interior with a warm timber feature wall"
      />
      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-4">Our story</p>
            <h2 className="h-section">Furniture and interiors, thoughtfully together.</h2>
            <div className="mt-6 space-y-4 leading-relaxed text-muted sm:text-lg">
              <p>Nirvana by Raaya is a furniture manufacturer, showroom and interior design studio. We bring all three together so the pieces you choose and the rooms you live in are planned as one.</p>
              <p>Whether you pick a piece from our collection, ask us to make something to your measurements, or invite us to design a whole space, the approach is the same: listen first, design with care, and craft it well.</p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/furniture" className="btn-primary">Explore Furniture</Link>
              <Link to="/contact" className="btn-outline">Talk to Us</Link>
            </div>
          </Reveal>
          <Reveal delay={120} className="aspect-[4/5] overflow-hidden sm:aspect-[5/4]">
            <Img src={img('styledHome', 1000, 800)} alt="Calm bedroom styled with plants and warm accents" />
          </Reveal>
        </div>
      </section>
      <WhyChoose />
      <ShowroomSection />
    </>
  )
}
