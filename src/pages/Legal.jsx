import { Link } from 'react-router-dom'

const copy = {
  privacy: { title: 'Privacy Policy', body: 'This is a placeholder. Replace with your Privacy Policy before launch. This website currently has no backend: enquiry forms open WhatsApp with your message prefilled and do not store or email any data.' },
  terms: { title: 'Terms & Conditions', body: 'This is a placeholder. Replace with your Terms & Conditions before launch. Prices and product details on this site are illustrative samples and are not a binding offer.' },
}

export default function Legal({ kind }) {
  const { title, body } = copy[kind]
  return (
    <section className="section">
      <div className="container-x max-w-3xl">
        <h1 className="h-section">{title}</h1>
        <p className="mt-6 leading-relaxed text-muted sm:text-lg">{body}</p>
        <Link to="/" className="btn-outline mt-8">Back to Home</Link>
      </div>
    </section>
  )
}
