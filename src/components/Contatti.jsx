import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contatti() {
  const ref = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contatti-el', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 70%' }
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="contatti" style={{ paddingTop: 'var(--space-xl)', paddingBottom: 'var(--space-xl)', background: 'var(--c-dark)' }}>
      <div className="contatti-layout" style={{ padding: '0 clamp(1.5rem, 4vw, 3rem)', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'clamp(2rem, 4vw, 4rem)' }}>
        {/* Title spanning full — left aligned */}
        <div style={{ gridColumn: '1 / 13', marginBottom: 'var(--space-md)' }}>
          <p className="contatti-el" style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--c-sage)', marginBottom: 'var(--space-sm)' }}>
            Dove trovarci
          </p>
          <h2 className="contatti-el" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', fontWeight: 500, lineHeight: 0.95 }}>
            Contatti
          </h2>
        </div>

        {/* Info column */}
        <div style={{ gridColumn: '1 / 6' }}>
          <div className="contatti-el" style={{ marginBottom: 'var(--space-lg)' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', marginBottom: 'var(--space-md)' }}>Masa Chalet</h3>
            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 2 }}>
              <p>Via Cantoniera, 9</p>
              <p>Passo della Presolana</p>
              <p>24020 Castione della Presolana (BG)</p>
              <p style={{ marginTop: '1rem' }}>
                <a href="tel:+390346320081" style={{ color: 'var(--c-cream-muted)', transition: 'color 0.3s', textDecoration: 'none' }}>
                  +39 0346 32081
                </a>
              </p>
              <p>
                <a href="mailto:info@masachalet.it" style={{ color: 'var(--c-cream-muted)', transition: 'color 0.3s', textDecoration: 'none' }}>
                  info@masachalet.it
                </a>
              </p>
            </div>
          </div>

          <div className="contatti-el" style={{ marginBottom: 'var(--space-lg)' }}>
            <p style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--c-sage)', marginBottom: 'var(--space-sm)' }}>Servizi</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: 'var(--text-xs)', color: 'var(--c-cream-muted)' }}>
              {['Prenotazione consigliata', 'Pet-friendly', 'Parcheggio', 'Carte di credito', 'Menu degustazione', 'Gift Card'].map(s => (
                <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-sage)', opacity: 0.5, flexShrink: 0 }} />
                  {s}
                </div>
              ))}
            </div>
          </div>

          <div className="contatti-el">
            <p style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--c-sage)', marginBottom: 'var(--space-sm)' }}>Valutazioni</p>
            <div style={{ display: 'flex', gap: 'clamp(1.5rem, 3vw, 3rem)' }}>
              {[{ score: '9.8', label: 'TheFork' }, { score: '4.6', label: 'TripAdvisor' }, { score: '5.0', label: 'Google' }].map(r => (
                <div key={r.label}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--c-cream)' }}>{r.score}</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--c-cream-muted)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{r.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map column */}
        <div className="contatti-el" style={{ gridColumn: '6 / 13' }}>
          <div style={{ width: '100%', aspectRatio: '4/3', overflow: 'hidden', marginBottom: 'var(--space-md)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2773.5!2d10.0736!3d45.9375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47819a6b1e4f8a4f%3A0x2a0c2c3d4e5f6789!2sMasa%20Chalet!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(80%) invert(92%) contrast(83%)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa Masa Chalet"
            />
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <a href="tel:+390346320081" style={{ padding: '0.85rem 2rem', background: 'var(--c-sage)', color: 'var(--c-black)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: 'var(--text-xs)', textDecoration: 'none' }}>
              Chiama ora
            </a>
            <a href="mailto:info@masachalet.it" style={{ padding: '0.85rem 2rem', border: '1px solid rgba(240,233,220,0.3)', color: 'var(--c-cream)', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: 'var(--text-xs)', textDecoration: 'none' }}>
              Scrivici
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
