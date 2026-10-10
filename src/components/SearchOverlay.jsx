import { useEffect, useMemo, useRef, useState } from 'react'
import { Search, X } from 'lucide-react'
import Img from './Img'
import { products, formatPrice } from '../data/products'
import { useProductModal } from './ProductModalContext'

export default function SearchOverlay({ onClose }) {
  const [q, setQ] = useState('')
  const inputRef = useRef(null)
  const { open } = useProductModal()

  useEffect(() => {
    inputRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  const results = useMemo(() => {
    const t = q.trim().toLowerCase()
    if (!t) return products.slice(0, 4)
    return products.filter((p) => `${p.name} ${p.categoryLabel} ${p.material}`.toLowerCase().includes(t))
  }, [q])

  return (
    <div className="fixed inset-0 z-[80] bg-ivory" role="dialog" aria-modal="true" aria-label="Search furniture" style={{ animation: 'fadeIn .25s ease' }}>
      <div className="container-x max-w-3xl pt-6 sm:pt-12">
        <div className="flex items-center gap-3 border-b-2 border-walnut pb-3">
          <Search size={22} className="shrink-0 text-walnut" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search sofas, beds, tables…"
            aria-label="Search furniture"
            className="min-w-0 flex-1 bg-transparent font-serif text-2xl text-espresso placeholder:text-muted/60 focus:outline-none sm:text-3xl"
          />
          <button onClick={onClose} aria-label="Close search" className="flex h-12 w-12 shrink-0 items-center justify-center text-espresso hover:text-gold">
            <X size={24} />
          </button>
        </div>
        <p className="mt-6 text-xs font-semibold uppercase tracking-luxe text-muted">{q.trim() ? `${results.length} result${results.length === 1 ? '' : 's'}` : 'Popular pieces'}</p>
        <ul className="mt-3 max-h-[70vh] divide-y divide-walnut/10 overflow-y-auto">
          {results.map((p) => (
            <li key={p.id}>
              <button
                onClick={() => { onClose(); open(p) }}
                className="flex w-full items-center gap-4 py-3 text-left hover:bg-cream/60"
              >
                <span className="h-16 w-16 shrink-0 overflow-hidden bg-cream"><Img src={p.image} alt="" /></span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-serif text-xl text-espresso">{p.name}</span>
                  <span className="block text-sm text-muted">{p.categoryLabel}</span>
                </span>
                <span className="text-sm font-semibold text-walnut">{formatPrice(p.price)}</span>
              </button>
            </li>
          ))}
          {results.length === 0 && <li className="py-8 text-muted">No pieces match “{q}”. Try “sofa”, “bed” or “table” — or ask us for a custom piece.</li>}
        </ul>
      </div>
    </div>
  )
}
