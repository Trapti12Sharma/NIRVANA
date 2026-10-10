import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center', light = false, as: Tag = 'h2' }) {
  const alignCls = align === 'center' ? 'mx-auto text-center' : 'text-left'
  return (
    <Reveal className={`max-w-2xl ${alignCls}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <Tag className={`h-section ${light ? '!text-ivory' : ''}`}>{title}</Tag>
      {subtitle && <p className={`mt-5 text-base leading-relaxed sm:text-lg ${light ? 'text-cream/85' : 'text-muted'}`}>{subtitle}</p>}
    </Reveal>
  )
}
