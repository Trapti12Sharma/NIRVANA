import { Link } from 'react-router-dom'
import SectionHeading from './SectionHeading'
import ProductCard from './ProductCard'
import { products } from '../data/products'

export default function FeaturedProducts() {
  return (
    <section className="section bg-cream/60">
      <div className="container-x">
        <SectionHeading
          eyebrow="Featured collection"
          title="Designed to Be Timeless"
          subtitle="Discover statement pieces made to bring warmth, beauty, and functionality into your home."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {products.map((p, i) => <ProductCard key={p.id} product={p} delay={(i % 4) * 80} />)}
        </div>
        <p className="mt-6 text-center text-xs text-muted">Prices shown are illustrative samples. Contact us for current pricing.</p>
        <div className="mt-8 text-center">
          <Link to="/furniture" className="btn-outline">View All Furniture</Link>
        </div>
      </div>
    </section>
  )
}
