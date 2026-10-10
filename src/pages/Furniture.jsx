import { useSearchParams, Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import ProductCard from '../components/ProductCard'
import { categories } from '../data/categories'
import { products } from '../data/products'
import { img } from '../data/images'

export default function Furniture() {
  const [params, setParams] = useSearchParams()
  const active = params.get('category') || 'all'
  const list = active === 'all' ? products : products.filter((p) => p.category === active)
  const activeCat = categories.find((c) => c.id === active)
  const tabs = [{ id: 'all', name: 'All' }, ...categories.filter((c) => c.id !== 'custom')]

  return (
    <>
      <PageHero
        eyebrow="Furniture"
        title={activeCat ? activeCat.name : 'Furniture for Every Room'}
        text="Browse our sample collection. Every piece can be discussed, adapted or made to measure."
        image={img('galLiving', 1800, 800)}
        alt="Contemporary living room with a corner sofa"
      />
      <section className="section !pt-10">
        <div className="container-x">
          <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-3 sm:mx-0 sm:flex-wrap sm:px-0" role="tablist" aria-label="Furniture categories">
            {tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={active === t.id}
                onClick={() => setParams(t.id === 'all' ? {} : { category: t.id })}
                className={`min-h-[44px] shrink-0 border px-5 text-sm font-semibold transition-colors ${active === t.id ? 'border-walnut bg-walnut text-ivory' : 'border-walnut/25 text-walnut hover:border-walnut'}`}
              >
                {t.name}
              </button>
            ))}
          </div>

          {list.length ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {list.map((p, i) => <ProductCard key={p.id} product={p} delay={(i % 4) * 60} />)}
            </div>
          ) : (
            <p className="mt-12 text-muted">No pieces in this category yet.</p>
          )}

          <div className="mt-16 flex flex-col items-start justify-between gap-6 bg-walnut p-8 text-cream sm:flex-row sm:items-center sm:p-12">
            <div>
              <h2 className="font-serif text-3xl !text-ivory">Can’t find the exact piece?</h2>
              <p className="mt-2 text-cream/80">We can make it to your size, material and finish.</p>
            </div>
            <Link to="/custom-furniture#enquiry" className="btn-light shrink-0">Create Your Custom Furniture</Link>
          </div>
          <p className="mt-6 text-xs text-muted">Prices are illustrative samples. Materials and finishes are subject to confirmation.</p>
        </div>
      </section>
    </>
  )
}
