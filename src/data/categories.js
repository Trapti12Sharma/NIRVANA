import { img } from './images'

// `id` matches the `category` field on products and the ?category= filter on /furniture
export const categories = [
  { id: 'sofas', name: 'Sofas & Lounge Chairs', image: img('sofaGreen', 700, 875), alt: 'Deep green velvet sofa against a pale wall' },
  { id: 'beds', name: 'Beds & Bedroom Furniture', image: img('bedDark', 700, 875), alt: 'Modern bedroom with a low upholstered bed and warm lighting' },
  { id: 'dining', name: 'Dining Tables & Chairs', image: img('diningRoom', 700, 875), alt: 'Wooden dining table with chairs in a bright room' },
  { id: 'storage', name: 'Wardrobes & Storage', image: img('sideboard', 700, 875), alt: 'Cane-front sideboard beneath a round mirror' },
  { id: 'tables', name: 'Coffee Tables & Side Tables', image: img('coffeeRound', 700, 875), alt: 'Round wooden coffee and side tables in a calm living room' },
  { id: 'tv', name: 'TV Units & Entertainment', image: img('tvUnit', 700, 875), alt: 'White wall-mounted TV unit in a bright living room' },
  { id: 'study', name: 'Study & Office Furniture', image: img('study', 700, 875), alt: 'Wooden floating desk with a timber chair' },
  { id: 'custom', name: 'Custom Furniture', image: img('plans', 700, 875), alt: 'Furniture plans and drawings on a worktable', to: '/custom-furniture' },
]

export const categoryLink = (c) => c.to || `/furniture?category=${c.id}`
