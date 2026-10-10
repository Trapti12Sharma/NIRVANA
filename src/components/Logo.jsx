import { Link } from 'react-router-dom'

export default function Logo({ light = false, className = '' }) {
  const main = light ? 'text-ivory' : 'text-walnut'
  return (
    <Link to="/" aria-label="Nirvana by Raaya — home" className={`group inline-flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-8 w-8 shrink-0 sm:h-9 sm:w-9" aria-hidden="true">
        <path d="M9 31V10l22 21V9" fill="none" stroke="#B69A70" strokeWidth="2.6" strokeLinecap="square" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`font-serif text-[1.3rem] font-semibold tracking-[0.16em] sm:text-[1.65rem] sm:tracking-[0.22em] ${main}`}>NIRVANA</span>
        <span className="mt-1.5 text-[0.62rem] font-semibold tracking-[0.4em] text-gold sm:tracking-[0.5em]">BY RAAYA</span>
      </span>
    </Link>
  )
}
