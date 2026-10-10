import { MessageCircle } from 'lucide-react'
import Img from './Img'
import Reveal from './Reveal'
import { useProductModal } from './ProductModalContext'
import { formatPrice } from '../data/products'
import { productEnquiryLink } from '../lib/whatsapp'

export default function ProductCard({ product, delay = 0 }) {
  const { open } = useProductModal()
  return (
    <Reveal delay={delay} as="article" className="group flex flex-col bg-white">
      <button
        type="button"
        onClick={() => open(product)}
        aria-label={`View details of ${product.name}`}
        className="zoom-img block aspect-[4/5] w-full overflow-hidden bg-cream"
      >
        <Img src={product.image} alt={product.alt} />
      </button>
      <div className="flex flex-1 flex-col p-5">
        <p className="eyebrow !text-[0.65rem]">{product.categoryLabel}</p>
        <h3 className="mt-2 font-serif text-2xl font-medium leading-tight">{product.name}</h3>
        <p className="mt-1 text-sm text-muted">{product.material}</p>
        <p className="mt-3 text-lg font-semibold text-walnut">{formatPrice(product.price)}</p>
        <div className="mt-auto grid grid-cols-2 gap-2 pt-5">
          <button type="button" onClick={() => open(product)} className="btn-outline !px-3">
            View Details
          </button>
          <a
            href={productEnquiryLink(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !px-3"
            aria-label={`Enquire about ${product.name} on WhatsApp`}
          >
            <MessageCircle size={16} className="shrink-0" /> <span>Enquire</span>
          </a>
        </div>
      </div>
    </Reveal>
  )
}
