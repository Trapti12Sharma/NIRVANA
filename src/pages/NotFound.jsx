import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-x text-center">
        <p className="eyebrow">404</p>
        <h1 className="h-section mt-3">This page could not be found.</h1>
        <Link to="/" className="btn-primary mt-8">Back to Home</Link>
      </div>
    </section>
  )
}
