import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import giftImg from '../assets/foto/foto-32.webp'

gsap.registerPlugin(ScrollTrigger)

export default function GiftCard() {
  const ref = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.gift-img', { x: 80, opacity: 0, rotate: 3 }, {
        x: 0, opacity: 1, rotate: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 70%' }
      })

      gsap.fromTo('.gift-text > *', { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: '.gift-text', start: 'top 75%' }
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="giftcard" style={{ paddingTop: 'var(--space-xl)', paddingBottom: 'var(--space-xl)', background: 'var(--c-dark-warm)' }}>
      <div style={{ padding: '0 clamp(1.5rem, 4vw, 3rem)', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'clamp(1.5rem, 3vw, 3rem)', alignItems: 'center' }}>
        <div className="gift-text" style={{ gridColumn: '1 / 7' }}>
          <p style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--c-sage)', marginBottom: 'var(--space-sm)' }}>
            Un regalo speciale
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', fontWeight: 500, lineHeight: 0.95, marginBottom: 'var(--space-sm)' }}>
            Regala<br />
            <span style={{ fontStyle: 'italic', paddingLeft: 'clamp(1rem, 3vw, 3rem)', color: 'var(--c-sage)' }}>Masa Chalet</span>
          </h2>
          <span className="rule-accent" style={{ margin: 'var(--space-md) 0' }} />

          <p style={{ fontSize: 'var(--text-base)', color: 'var(--c-cream-muted)', lineHeight: 1.8, marginBottom: 'var(--space-sm)', maxWidth: '440px' }}>
            Un'esperienza speciale, fatta di cose buone, di cibo cucinato con passione:
            regala un buono degustazione.
          </p>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 1.8, marginBottom: 'var(--space-lg)', maxWidth: '440px' }}>
            Decidi tu che tipo di esperienza donare. La nostra Gift Card è il pensiero
            perfetto per chi ama la buona cucina e le emozioni autentiche.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <a href="tel:+390346320081" style={{ padding: '0.85rem 2rem', background: 'var(--c-sage)', color: 'var(--c-black)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: 'var(--text-xs)', transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
              Chiamaci
            </a>
            <a href="mailto:info@masachalet.it" style={{ padding: '0.85rem 2rem', border: '1px solid rgba(240,233,220,0.3)', color: 'var(--c-cream)', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: 'var(--text-xs)', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
              Scrivici
            </a>
          </div>
        </div>

        <div className="gift-img" style={{ gridColumn: '7 / 13' }}>
          <img src={giftImg} alt="Gift Card Masa Chalet" className="w-full object-cover" style={{ aspectRatio: '4/3' }} />
        </div>
      </div>
    </section>
  )
}
