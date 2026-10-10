import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { X, MessageCircle } from 'lucide-react'
import Img from './Img'
import { formatPrice } from '../data/products'
import { productEnquiryLink } from '../lib/whatsapp'

// Right-hand drawer (full-screen on small phones) with Escape / backdrop close and focus handling.
export default function ProductDetails({ product, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    const prevFocus = document.activeElement
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
      prevFocus?.focus?.()
    }
  }, [onClose])

  const rows = [
    ['Category', product.categoryLabel],
    ['Material', product.material],
    ['Finish', product.finish],
    ['Dimensions', product.dimensions],
    ['Availability', product.availability],
  ].filter(([, v]) => v)

  return (
    <div className="fixed inset-0 z-[70]" role="dialog" aria-modal="true" aria-label={product.name}>
      <div className="absolute inset-0 bg-espresso/60" style={{ animation: 'fadeIn .3s ease' }} onClick={onClose} />
      <aside
        className="absolute right-0 top-0 flex h-full w-full max-w-xl flex-col overflow-y-auto bg-ivory"
        style={{ animation: 'slideIn .4s cubic-bezier(.2,.8,.2,1)' }}
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close product details"
          className="absolute right-3 top-3 z-10 flex h-12 w-12 items-center justify-center bg-ivory/90 text-espresso hover:bg-cream"
        >
          <X size={22} />
        </button>
        <div className="aspect-[4/5] max-h-[55vh] w-full shrink-0 bg-cream sm:max-h-[60vh]">
          <Img src={product.image} alt={product.alt} eager />
        </div>
        <div className="flex-1 p-6 sm:p-8">
          <p className="eyebrow">{product.categoryLabel}</p>
          <h2 className="mt-2 font-serif text-3xl font-medium sm:text-4xl">{product.name}</h2>
          <p className="mt-3 text-2xl text-walnut">{formatPrice(product.price)}</p>
          <p className="mt-1 text-xs text-muted">Sample price for illustration. Confirm final pricing with our team.</p>
          <p className="mt-5 leading-relaxed text-muted">{product.description}</p>
          <dl className="mt-6 divide-y divide-walnut/15 border-y border-walnut/15 text-sm">
            {rows.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[110px_1fr] gap-3 py-3">
                <dt className="font-semibold text-espresso">{k}</dt>
                <dd className="text-muted">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={productEnquiryLink(product)} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1">
              <MessageCircle size={18} /> Enquire on WhatsApp
            </a>
            <Link to="/custom-furniture" onClick={onClose} className="btn-outline flex-1">
              Request a Custom Version
            </Link>
          </div>
        </div>
      </aside>
    </div>
  )
}
