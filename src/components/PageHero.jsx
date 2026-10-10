import Img from './Img'

export default function PageHero({ eyebrow, title, text, image, alt }) {
  return (
    <section className="relative isolate flex min-h-[340px] items-end overflow-hidden bg-espresso sm:min-h-[420px]">
      {image && (
        <div className="absolute inset-0 -z-10">
          <Img src={image} alt={alt} eager />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/50 to-espresso/30" />
        </div>
      )}
      <div className="container-x pb-12 pt-24 sm:pb-16">
        <p className="eyebrow hero-in">{eyebrow}</p>
        <h1 className="hero-in mt-4 max-w-3xl font-serif font-medium leading-[1.08] !text-ivory" style={{ fontSize: 'clamp(2.3rem,6vw,4.2rem)', animationDelay: '.15s' }}>{title}</h1>
        {text && <p className="hero-in mt-5 max-w-2xl text-base text-cream sm:text-lg" style={{ animationDelay: '.3s' }}>{text}</p>}
      </div>
    </section>
  )
}
