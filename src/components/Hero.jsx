import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import logo from '../assets/logomasachalet-Photoroom.webp'
import heroImg from '../assets/foto/foto-42.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const sectionRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

      tl.fromTo('.hero-img', { scale: 1.3 }, { scale: 1, duration: 1.2 })
        .fromTo('.hero-overlay', { opacity: 0 }, { opacity: 1, duration: 0.6 }, '-=0.8')
        .fromTo('.hero-logo', { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 0.7 }, '-=0.3')
        .fromTo('.hero-title span', { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 }, '-=0.4')
        .fromTo('.hero-line-bottom', { scaleX: 0 }, { scaleX: 1, duration: 0.5 }, '-=0.2')
        .fromTo('.hero-claim', { opacity: 0, letterSpacing: '0.5em' }, { opacity: 1, letterSpacing: '0.3em', duration: 0.6 }, '-=0.2')
        .fromTo('.hero-location', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }, '-=0.1')
        .fromTo('.hero-cta', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.1 }, '-=0.1')
        .fromTo('.hero-scroll', { opacity: 0 }, { opacity: 0.5, duration: 0.4 }, '-=0.1')

      gsap.to('.hero-img', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: true },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="hero" className="relative overflow-hidden" style={{ minHeight: '100vh' }}>
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Piatto gourmet Masa Chalet"
          title="Piatto gourmet del ristorante Masa Chalet"
          loading="eager"
          width={1920}
          height={1080}
          className="hero-img w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(10,15,10,0.65) 0%, rgba(10,15,10,0.85) 70%, rgba(10,15,10,0.95) 100%)' }} />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center" style={{ minHeight: '100vh', padding: 'clamp(2rem, 5vw, 5rem) clamp(1.5rem, 5vw, 4rem)' }}>
        <img
          src={logo}
          alt="Masa Chalet Logo"
          title="Logo Masa Chalet"
          loading="eager"
          width={120}
          height={120}
          className="hero-logo"
          style={{ width: 'clamp(70px, 10vw, 120px)', marginBottom: 'var(--space-xs)' }}
        />

        <h1
          className="hero-title overflow-hidden"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-hero)', fontWeight: 500, lineHeight: 0.85, letterSpacing: '-0.02em' }}
        >
          <span className="block">Masa</span>
          <span className="block" style={{ fontStyle: 'italic', color: 'var(--c-sage-light)' }}>Chalet</span>
        </h1>

        <div className="hero-line-bottom" style={{ width: 'clamp(40px, 8vw, 80px)', height: '1px', background: 'var(--c-sage)', margin: 'var(--space-md) 0', opacity: 0.5 }} />

        <p
          className="hero-claim"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontStyle: 'italic', color: 'var(--c-sage)', letterSpacing: '0.3em', textTransform: 'uppercase' }}
        >
          L&rsquo;evoluzione della tradizione
        </p>

        <p
          className="hero-location"
          style={{ marginTop: 'var(--space-sm)', fontSize: 'var(--text-xs)', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--c-cream-muted)' }}
        >
          Passo della Presolana &middot; 1.297 m s.l.m. &middot; Orobie
        </p>

        <div className="flex flex-wrap justify-center gap-4" style={{ marginTop: 'var(--space-lg)' }}>
          <a
            href="tel:+390346320081"
            className="hero-cta"
            style={{
              padding: '0.85rem 2.5rem',
              background: 'var(--c-sage)',
              color: 'var(--c-black)',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontSize: 'var(--text-xs)',
              transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s',
            }}
            onMouseEnter={e => e.target.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.target.style.transform = 'translateY(0)'}
          >
            Prenota un tavolo
          </a>
          <a
            href="#menu"
            className="hero-cta"
            style={{
              padding: '0.85rem 2.5rem',
              border: '1px solid rgba(240,233,220,0.3)',
              color: 'var(--c-cream)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontSize: 'var(--text-xs)',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={e => { e.target.style.borderColor = 'var(--c-sage)'; e.target.style.color = 'var(--c-sage)' }}
            onMouseLeave={e => { e.target.style.borderColor = 'rgba(240,233,220,0.3)'; e.target.style.color = 'var(--c-cream)' }}
          >
            Scopri il menù
          </a>
        </div>
      </div>

      <div className="hero-scroll absolute left-1/2 bottom-0" style={{ transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', paddingBottom: 'clamp(1.5rem, 3vh, 2.5rem)' }}>
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--c-cream-muted)' }}>Scroll</span>
        <div style={{ width: '1px', height: '30px', background: 'var(--c-sage)', opacity: 0.5 }} />
      </div>
    </section>
  )
}
