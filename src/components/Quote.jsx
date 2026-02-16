import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import bgImg from '../assets/foto/foto-31.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Quote() {
  const ref = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.quote-text', { y: 60, opacity: 0, skewY: 3 }, {
        y: 0, opacity: 1, skewY: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 60%' }
      })

      gsap.fromTo('.quote-attr', { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.5, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 50%' }
      })

      gsap.to('.quote-bg', {
        yPercent: 25,
        ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: 1.5 }
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ padding: 'var(--space-2xl) 0' }}>
      <div className="absolute inset-0">
        <img src={bgImg} alt="" title="Sfondo citazione Masa Chalet" loading="lazy" width={1920} height={1080} className="quote-bg w-full h-[130%] object-cover" style={{ objectPosition: 'center 30%' }} aria-hidden="true" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, var(--c-black) 0%, rgba(10,15,10,0.75) 30%, rgba(10,15,10,0.75) 70%, var(--c-black) 100%)' }} />
      </div>

      <div className="relative z-10" style={{ padding: '0 clamp(1.5rem, 4vw, 3rem)', maxWidth: '900px', marginLeft: 'clamp(1rem, 10vw, 12rem)' }}>
        <span className="rule-accent" style={{ marginBottom: 'var(--space-md)', display: 'block' }} />
        <blockquote className="quote-text" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'var(--text-2xl)', lineHeight: 1.3, letterSpacing: '-0.01em' }}>
          Siamo più di semplici cuochi: siamo creatori di emozioni gastronomiche, appassionati nel trasformare ogni piatto in un&rsquo;opera d&rsquo;arte per il palato.
        </blockquote>
        <div className="quote-attr" style={{ marginTop: 'var(--space-md)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span className="rule-accent" />
          <span style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--c-sage)' }}>
            Emanuele &amp; Samantha
          </span>
        </div>
      </div>
    </section>
  )
}
