import { img } from './images'

export const interiorSpaces = [
  { name: 'Luxury Living Rooms', image: img('livingLux', 900, 700), alt: 'Elegant living room with white sofas and built-in shelving' },
  { name: 'Modern Bedrooms', image: img('bedroomMod', 900, 700), alt: 'Bedroom with a tufted headboard, bench and layered drapes' },
  { name: 'Modular Kitchens', image: img('kitchen', 900, 700), alt: 'Bright kitchen with a marble island and pendant lights' },
  { name: 'Dining Spaces', image: img('diningRoom', 900, 700), alt: 'Dining area with a wooden table and warm pendant lighting' },
  { name: 'Complete Home Interiors', image: img('fullHome', 900, 700), alt: 'Living room with sage walls, plants and soft furnishings' },
  { name: 'Office & Commercial', image: img('office', 900, 700), alt: 'Open office space with glass partitions and low shelving' },
]

export const interiorServices = [
  'Residential interior design',
  'Living room and bedroom design',
  'Modular kitchen and wardrobe planning',
  'Space planning and furniture selection',
  'Material, lighting and colour consultation',
  'Custom furniture integration',
  'Commercial interior design',
]

export const customServices = [
  'Made-to-measure furniture',
  'Custom dimensions and designs',
  'Material and finish selection',
  'Furniture for homes, offices and commercial spaces',
  'Custom beds, wardrobes, sofas, dining tables and storage units',
]

export const craftSteps = [
  { title: 'Material selection', text: 'Every piece starts with choosing the right material and finish.', image: img('wood', 700, 875), alt: 'Rustic timber shelf with natural grain' },
  { title: 'Woodwork & joinery', text: 'Careful cutting, fitting and assembly give furniture its strength.', image: img('joinery', 700, 875), alt: 'Power drill resting on raw timber' },
  { title: 'Finishing', text: 'Surfaces are refined so grain and colour feel right to the touch.', image: img('coffee', 700, 875), alt: 'Smoothly finished wooden tables' },
  { title: 'Upholstery & detailing', text: 'Cushioning, stitching and trim are shaped around comfort.', image: img('upholstery', 700, 875), alt: 'Close-up of a rust-coloured upholstered sofa with a cushion' },
  { title: 'Styled at home', text: 'The finished piece takes its place in a room made to live in.', image: img('styledHome', 700, 875), alt: 'Bedroom styled with plants and warm accents' },
]

export const gallery = [
  { title: 'Contemporary living room', image: img('galLiving', 1200, 1000), alt: 'Contemporary living room with a corner sofa and round tables', span: 'sm:col-span-2 sm:row-span-2' },
  { title: 'Minimalist bedroom', image: img('galBedroom', 800, 640), alt: 'Minimalist bedroom with a dark headboard and line art' },
  { title: 'Elegant dining room', image: img('galDining', 800, 640), alt: 'Dining space with a round mirror and tropical plants' },
  { title: 'Warm wooden interiors', image: img('galWood', 1400, 640), alt: 'Open-plan interior with a timber feature wall', span: 'sm:col-span-2' },
  { title: 'Modern luxury apartment', image: img('galApartment', 1800, 640), alt: 'Bright double-height living space with a staircase' },
]
