import { useCallback, useEffect, useRef, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import Img from './Img'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { gallery } from '../data/interior'

function Lightbox({ index, setIndex, onClose }) {
  const item = gallery[index]
  const closeRef = useRef(null)
  const go = useCallback((d) => setIndex((i) => (i + d + gallery.length) % gallery.length), [setIndex])

  useEffect(() => {
    const prevFocus = document.activeElement
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'ArrowRight') go(1)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      prevFocus?.focus?.()
    }
  }, [go, onClose])

  const btn = 'absolute z-10 flex h-12 w-12 items-center justify-center bg-espresso/60 text-ivory hover:bg-espresso'
  return (
    <div className="fixed inset-0 z-[90] flex flex-col bg-espresso/95" role="dialog" aria-modal="true" aria-label={item.title} style={{ animation: 'fadeIn .25s ease' }} onClick={onClose}>
      <button ref={closeRef} onClick={onClose} aria-label="Close image" className={`${btn} right-3 top-3`}><X size={22} /></button>
      <button onClick={(e) => { e.stopPropagation(); go(-1) }} aria-label="Previous image" className={`${btn} left-2 top-1/2 -translate-y-1/2 sm:left-5`}><ChevronLeft size={24} /></button>
      <button onClick={(e) => { e.stopPropagation(); go(1) }} aria-label="Next image" className={`${btn} right-2 top-1/2 -translate-y-1/2 sm:right-5`}><ChevronRight size={24} /></button>
      <figure className="m-auto flex max-h-full w-full max-w-5xl flex-col items-center px-4 py-16" onClick={(e) => e.stopPropagation()}>
        <img src={item.image.replace(/w=\d+/, 'w=1800').replace(/&h=\d+/, '')} alt={item.alt} className="max-h-[75vh] w-auto max-w-full object-contain" />
        <figcaption className="mt-4 font-serif text-2xl text-ivory">{item.title}</figcaption>
      </figure>
    </div>
  )
}

export default function GalleryGrid() {
  const [active, setActive] = useState(null)
  return (
    <section className="section" aria-label="Interior inspiration">
      <div className="container-x">
        <SectionHeading eyebrow="Inspiration" title="Get Inspired by Beautiful Living." subtitle="Tap any image to view it larger." />
        <div className="mt-12 grid auto-rows-[190px] grid-cols-2 gap-3 sm:auto-rows-[230px] sm:grid-cols-4 sm:gap-5">
          {gallery.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 80} className={`${['col-span-2 row-span-2', '', '', 'col-span-2', 'col-span-2 sm:col-span-4'][i]}`}>
              <button type="button" onClick={() => setActive(i)} aria-label={`View larger: ${g.title}`} className="group relative block h-full w-full overflow-hidden bg-cream text-left">
                <span className="zoom-img block h-full"><Img src={g.image} alt={g.alt} /></span>
                <span className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
                <span className="absolute bottom-0 left-0 p-3.5 font-serif text-lg text-ivory sm:p-5 sm:text-2xl">{g.title}</span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      {active !== null && <Lightbox index={active} setIndex={setActive} onClose={() => setActive(null)} />}
    </section>
  )
}
