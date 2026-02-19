import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import chefPlating from '../assets/foto/foto-10.webp'
import piatto from '../assets/foto/foto-34.webp'
import logo from '../assets/logomasachalet-Photoroom.webp'

gsap.registerPlugin(ScrollTrigger)

const options = [
  { label: '5 Portate', price: '65', note: 'a persona, escluso coperto e bevande' },
  { label: '4 Portate', price: '55', note: 'a persona, escluso coperto e bevande' },
  { label: 'Abbinamento Vini', price: '25', note: '3 calici selezionati, a persona', accent: true },
]

export default function Degustazione() {
  const ref = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.deg-img-main', { clipPath: 'inset(100% 0 0 0)' }, {
        clipPath: 'inset(0% 0 0 0)', duration: 0.8, ease: 'power4.inOut',
        scrollTrigger: { trigger: '.deg-img-main', start: 'top 75%' }
      })

      gsap.fromTo('.deg-img-side', { clipPath: 'inset(0 0 0 100%)' }, {
        clipPath: 'inset(0 0 0 0%)', duration: 0.7, ease: 'power4.inOut',
        scrollTrigger: { trigger: '.deg-img-side', start: 'top 80%' }
      })

      gsap.fromTo('.deg-content > *', { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: '.deg-content', start: 'top 70%' }
      })

      gsap.fromTo('.deg-bg-logo', { opacity: 0, scale: 0.9 }, {
        opacity: 0.04, scale: 1, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: '.deg-bg-logo', start: 'top 90%' }
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="degustazione" style={{ paddingTop: 'var(--space-xl)', paddingBottom: 'var(--space-xl)', position: 'relative', overflow: 'hidden' }}>
      <img
        src={logo}
        alt=""
        aria-hidden="true"
        className="deg-bg-logo hidden md:block"
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(500px, 55vw, 800px)',
          opacity: 0,
          pointerEvents: 'none',
          filter: 'grayscale(0.4)',
        }}
      />
      <div className="deg-layout" style={{ padding: '0 clamp(1.5rem, 4vw, 3rem)', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'clamp(1rem, 2vw, 2rem)', alignItems: 'start', position: 'relative', zIndex: 1 }}>
        {/* Images column — stacked, offset */}
        <div style={{ gridColumn: '1 / 6', position: 'relative' }}>
          <div className="deg-img-main overflow-hidden">
            <img src={chefPlating} alt="Piatto servito dallo Chef" title="Lo Chef prepara un piatto del menu degustazione" loading="lazy" width={600} height={800} className="w-full object-cover" style={{ aspectRatio: '3/4' }} />
          </div>
          <div className="deg-img-side hidden md:block" style={{ position: 'absolute', right: '-20%', bottom: '-8%', width: '55%', zIndex: 2 }}>
            <img src={piatto} alt="Dessert artistico" title="Dessert artistico del menu degustazione" loading="lazy" width={480} height={600} className="w-full object-cover" style={{ aspectRatio: '4/5', border: '3px solid var(--c-black)' }} />
          </div>
        </div>

        {/* Content column — offset right and down */}
        <div className="deg-content" style={{ gridColumn: '7 / 13', paddingTop: 'clamp(3rem, 8vw, 10rem)' }}>
          <p style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--c-sage)', marginBottom: 'var(--space-sm)' }}>
            Un percorso unico
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', fontWeight: 500, lineHeight: 0.95, marginBottom: 'var(--space-sm)' }}>
            Menu<br />
            <span style={{ fontStyle: 'italic', paddingLeft: 'clamp(1rem, 4vw, 3rem)' }}>Degustazione</span>
          </h2>
          <span className="rule-accent" style={{ margin: 'var(--space-md) 0' }} />

          <blockquote style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'var(--text-lg)', color: 'var(--c-cream-muted)', marginBottom: 'var(--space-md)' }}>
            &ldquo;Il cibo trova sempre chi ama cucinare.&rdquo;
          </blockquote>

          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 1.8, marginBottom: 'var(--space-lg)', maxWidth: '480px' }}>
            Il nostro menù degustazione è un percorso tra le ispirazioni dello chef,
            i produttori locali e la ricerca del prodotto. Lasciatevi ispirare e
            affidatevi completamente all&rsquo;idea dello Chef.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.75rem, 1.5vw, 1rem)', marginBottom: 'var(--space-md)' }}>
            {options.map((opt) => (
              <div key={opt.label} style={{ padding: 'clamp(1rem, 2vw, 1.5rem)', border: opt.accent ? '1px solid var(--c-sage)' : '1px solid rgba(240,233,220,0.08)', background: opt.accent ? 'var(--c-gold-dim)' : 'transparent', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', color: opt.accent ? 'var(--c-sage)' : 'var(--c-cream)' }}>{opt.label}</span>
                  <span style={{ display: 'block', fontSize: 'var(--text-xs)', color: 'var(--c-cream-muted)', marginTop: '0.25rem' }}>{opt.note}</span>
                </div>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--c-sage)' }}>&euro;{opt.price}</span>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 'var(--text-xs)', color: 'var(--c-cream-muted)', fontStyle: 'italic', marginBottom: 'var(--space-md)' }}>
            Il menù degustazione è inteso per l&rsquo;intero tavolo.
          </p>

          <a
            href="tel:+390346320081"
            style={{
              display: 'inline-block',
              padding: '0.85rem 2rem',
              background: 'var(--c-sage)',
              color: 'var(--c-black)',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontSize: 'var(--text-xs)',
              transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            Prenota la degustazione
          </a>
        </div>
      </div>
    </section>
  )
}
