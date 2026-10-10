const name = { name: 'name', label: 'Full name', errorLabel: 'your name', required: true, autoComplete: 'name' }
const phone = { name: 'phone', label: 'Phone number', errorLabel: 'your phone number', type: 'tel', required: true, autoComplete: 'tel', placeholder: '98765 43210' }

export const customFields = [
  name,
  phone,
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email', full: true },
  {
    name: 'type', label: 'Furniture type', errorLabel: 'the furniture type', type: 'select', required: true,
    options: ['Bed', 'Wardrobe', 'Sofa', 'Dining table & chairs', 'Storage unit', 'TV unit', 'Study / office furniture', 'Other'],
  },
  { name: 'dimensions', label: 'Approximate dimensions', placeholder: 'e.g. 8 ft × 2 ft × 7 ft' },
  { name: 'material', label: 'Preferred material or finish', errorLabel: 'a preferred material or finish', required: true, placeholder: 'e.g. timber, laminate, fabric, polish' },
  {
    name: 'budget', label: 'Budget range', type: 'select',
    options: ['Under ₹50,000', '₹50,000 – ₹1,50,000', '₹1,50,000 – ₹5,00,000', 'Above ₹5,00,000', 'Not sure yet'],
  },
  { name: 'notes', label: 'Requirements and notes', errorLabel: 'your requirements', type: 'textarea', required: true, full: true, placeholder: 'Tell us about the room, the look you like, storage needs…' },
]

export const interiorFields = [
  name,
  phone,
  {
    name: 'property', label: 'Property type', errorLabel: 'the property type', type: 'select', required: true,
    options: ['Apartment / flat', 'Independent house / villa', 'Office', 'Retail / showroom', 'Restaurant / café', 'Other commercial'],
  },
  { name: 'location', label: 'Project location', errorLabel: 'the project location', required: true, placeholder: 'City / area' },
  { name: 'area', label: 'Approximate area (sq ft)', inputMode: 'numeric', placeholder: 'e.g. 1200' },
  {
    name: 'style', label: 'Preferred design style', errorLabel: 'a design style', type: 'select', required: true,
    options: ['Contemporary', 'Minimalist', 'Warm & natural', 'Classic / traditional', 'Indian modern', 'Not sure — guide me'],
  },
  {
    name: 'budget', label: 'Estimated budget', errorLabel: 'an estimated budget', type: 'select', required: true,
    options: ['Under ₹5 lakh', '₹5 – 10 lakh', '₹10 – 25 lakh', '₹25 – 50 lakh', 'Above ₹50 lakh', 'Not sure yet'],
  },
  { name: 'description', label: 'Project description', errorLabel: 'a short project description', type: 'textarea', required: true, full: true, placeholder: 'Rooms involved, timeline, what you want to change…' },
]

export const contactFields = [
  name,
  phone,
  { name: 'email', label: 'Email', errorLabel: 'your email', type: 'email', required: true, autoComplete: 'email', full: true },
  {
    name: 'interest', label: 'Interested in', errorLabel: 'what you are interested in', type: 'select', required: true, full: true,
    options: ['Furniture', 'Custom Manufacturing', 'Interior Design'],
  },
  { name: 'message', label: 'Message', errorLabel: 'a message', type: 'textarea', required: true, full: true, placeholder: 'How can we help?' },
]
