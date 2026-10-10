import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import { ProductModalProvider } from './components/ProductModalContext'
import Home from './pages/Home'
import Furniture from './pages/Furniture'
import CustomFurniture from './pages/CustomFurniture'
import InteriorDesign from './pages/InteriorDesign'
import About from './pages/About'
import Contact from './pages/Contact'
import Legal from './pages/Legal'
import NotFound from './pages/NotFound'

// Scrolls to #anchors (after render) or to the top on page changes.
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return undefined
    }
    const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' }), 80)
    return () => clearTimeout(t)
  }, [pathname, hash])
  return null
}

const titles = {
  '/': 'Nirvana by Raaya | Premium Furniture & Interior Design',
  '/furniture': 'Furniture | Nirvana by Raaya',
  '/custom-furniture': 'Custom Furniture | Nirvana by Raaya',
  '/interior-design': 'Interior Design | Nirvana by Raaya',
  '/about': 'About Us | Nirvana by Raaya',
  '/contact': 'Contact | Nirvana by Raaya',
  '/privacy': 'Privacy Policy | Nirvana by Raaya',
  '/terms': 'Terms | Nirvana by Raaya',
}

function TitleManager() {
  const { pathname } = useLocation()
  useEffect(() => { document.title = titles[pathname] || titles['/'] }, [pathname])
  return null
}

export default function App() {
  return (
    <ProductModalProvider>
      <ScrollManager />
      <TitleManager />
      <a href="#main" className="sr-only z-[100] bg-walnut px-4 py-3 text-ivory focus:not-sr-only focus:fixed focus:left-2 focus:top-2">Skip to content</a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/furniture" element={<Furniture />} />
          <Route path="/custom-furniture" element={<CustomFurniture />} />
          <Route path="/interior-design" element={<InteriorDesign />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Legal kind="privacy" />} />
          <Route path="/terms" element={<Legal kind="terms" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </ProductModalProvider>
  )
}
