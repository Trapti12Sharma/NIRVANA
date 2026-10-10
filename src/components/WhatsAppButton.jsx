import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '../lib/whatsapp'

// Floating WhatsApp button, shown on every page.
export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(`Hello Nirvana by Raaya, I'd like to know more about your furniture and interiors.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-walnut text-ivory shadow-lg ring-1 ring-gold/60 transition hover:bg-espresso"
    >
      <MessageCircle size={26} />
    </a>
  )
}
