import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import logo from '../assets/logomasachalet-Photoroom.webp'
import heroImg from '../assets/foto/foto-42.webp'
import sideImg from '../assets/foto/foto-10.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const sectionRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

      tl.fromTo('.hero-img', { scale: 1.3, clipPath: 'inset(100% 0 0 0)' }, { scale: 1, clipPath: 'inset(0% 0 0 0)', duration: 1.6 })
        .fromTo('.hero-side-img', { clipPath: 'inset(0 100% 0 0)', opacity: 0 }, { clipPath: 'inset(0 0% 0 0)', opacity: 1, duration: 1.2 }, '-=0.8')
        .fromTo('.hero-logo', { opacity: 0, scale: 0.7, rotate: -10 }, { opacity: 1, scale: 1, rotate: 0, duration: 1 }, '-=1')
        .fromTo('.hero-title span', { y: 120, opacity: 0, skewY: 8 }, { y: 0, opacity: 1, skewY: 0, duration: 1, stagger: 0.12 }, '-=0.7')
        .fromTo('.hero-claim', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.3')
        .fromTo('.hero-location', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.3')
        .fromTo('.hero-cta', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 }, '-=0.2')

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
          className="hero-img w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,15,10,0.88) 0%, rgba(10,15,10,0.35) 40%, rgba(10,15,10,0.7) 100%)' }} />
      </div>

      <div
        className="hero-side-img hidden lg:block absolute"
        style={{ right: '5%', bottom: '8%', width: 'clamp(180px, 18vw, 300px)', zIndex: 5 }}
      >
        <img
          src={sideImg}
          alt="Chef al lavoro"
          className="w-full object-cover"
          style={{ aspectRatio: '3/4', border: '1px solid rgba(168,185,160,0.25)' }}
        />
      </div>

      <div className="relative z-10 flex flex-col justify-end" style={{ minHeight: '100vh', padding: 'clamp(2rem, 5vw, 5rem) clamp(1.5rem, 5vw, 6rem) clamp(4rem, 10vh, 8rem)' }}>
        <img
          src={logo}
          alt="Masa Chalet Logo"
          className="hero-logo"
          style={{ width: 'clamp(60px, 8vw, 100px)', marginBottom: 'var(--space-md)' }}
        />

        <h1
          className="hero-title overflow-hidden"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-hero)', fontWeight: 600, lineHeight: 0.9, letterSpacing: '-0.02em', maxWidth: '900px' }}
        >
          <span className="block">Masa</span>
          <span className="block" style={{ paddingLeft: 'clamp(1rem, 5vw, 5rem)' }}>Chalet</span>
        </h1>

        <div style={{ marginTop: 'var(--space-md)', marginLeft: 'clamp(0rem, 3vw, 3rem)' }}>
          <p
            className="hero-claim"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontStyle: 'italic', color: 'var(--c-sage)', letterSpacing: '0.02em' }}
          >
            L&rsquo;evoluzione della tradizione
          </p>

          <p
            className="hero-location"
            style={{ marginTop: 'var(--space-sm)', fontSize: 'var(--text-xs)', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--c-cream-muted)' }}
          >
            Passo della Presolana &middot; 1.297 m s.l.m. &middot; Orobie
          </p>
        </div>

        <div className="flex flex-wrap gap-4" style={{ marginTop: 'var(--space-lg)', marginLeft: 'clamp(0rem, 2vw, 2rem)' }}>
          <a
            href="tel:+390346320081"
            className="hero-cta"
            style={{
              padding: '0.85rem 2rem',
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
              padding: '0.85rem 2rem',
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

      <div className="absolute hidden md:block" style={{ left: 'clamp(1.5rem, 5vw, 6rem)', bottom: 0, width: '1px', height: '120px', background: 'var(--c-sage)', opacity: 0.4 }} />
    </section>
  )
}
