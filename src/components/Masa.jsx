import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import chefImg from '../assets/foto/foto-33.webp'
import samanthaImg from '../assets/foto/foto-35.webp'
import salaImg from '../assets/foto/foto-40.webp'
import detailImg from '../assets/foto/foto-8.webp'
import heroPlate from '../assets/foto/foto-37.webp'
import logo from '../assets/logomasachalet-Photoroom.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Masa() {
  const sectionRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.masa-title', { y: 80, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.masa-title', start: 'top 85%' }
      })

      gsap.fromTo('.masa-sala', { clipPath: 'inset(0 100% 0 0)' }, {
        clipPath: 'inset(0 0% 0 0)', duration: 0.8, ease: 'power4.inOut',
        scrollTrigger: { trigger: '.masa-sala', start: 'top 75%' }
      })

      gsap.fromTo('.masa-detail', { clipPath: 'inset(100% 0 0 0)', opacity: 0 }, {
        clipPath: 'inset(0% 0 0 0)', opacity: 1, duration: 0.7, ease: 'power4.inOut',
        scrollTrigger: { trigger: '.masa-detail', start: 'top 80%' }
      })

      gsap.fromTo('.masa-text-block', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.masa-filosofia', start: 'top 70%' }
      })

      gsap.fromTo('.persona-card', { y: 80, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.persona-grid', start: 'top 75%' }
      })

      gsap.to('.masa-sala img', {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: { trigger: '.masa-sala', start: 'top bottom', end: 'bottom top', scrub: 1.5 }
      })

      gsap.fromTo('.masa-hero-plate', { clipPath: 'inset(100% 0 0 0)' }, {
        clipPath: 'inset(0% 0 0 0)', duration: 0.8, ease: 'power4.inOut',
        scrollTrigger: { trigger: '.masa-hero-plate', start: 'top 80%' }
      })

      gsap.fromTo('.masa-bg-logo', { opacity: 0, scale: 0.9 }, {
        opacity: 0.05, scale: 1, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: '.masa-bg-logo', start: 'top 90%' }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="masa" style={{ paddingTop: 'var(--space-xl)', paddingBottom: 'var(--space-2xl)', position: 'relative', overflow: 'hidden' }}>
      <img
        src={logo}
        alt=""
        aria-hidden="true"
        className="masa-bg-logo hidden md:block"
        style={{
          position: 'absolute',
          left: '50%',
          top: 'clamp(4rem, 10vw, 10rem)',
          transform: 'translateX(-50%)',
          width: 'clamp(500px, 60vw, 900px)',
          opacity: 0,
          pointerEvents: 'none',
          filter: 'grayscale(0.4)',
        }}
      />
      <div style={{ padding: '0 clamp(1.5rem, 4vw, 3rem)', position: 'relative', zIndex: 1 }}>
        <div className="masa-hero-plate hidden lg:block" style={{ position: 'absolute', left: 'clamp(1.5rem, 4vw, 3rem)', top: 0, width: 'clamp(280px, 35vw, 520px)', overflow: 'hidden' }}>
          <img
            src={heroPlate}
            alt="Piatto gourmet dello chef"
            title="Piatto gourmet dello chef Emanuele Bruneo"
            loading="lazy"
            width={520}
            height={693}
            className="w-full object-cover"
            style={{ aspectRatio: '3/4' }}
          />
        </div>
        <div className="masa-title-block" style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'clamp(1rem, 8vw, 10rem)', position: 'relative', zIndex: 2 }}>
          <p className="masa-title" style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--c-sage)', marginBottom: 'var(--space-sm)' }}>
            Chi siamo
          </p>
          <h2 className="masa-title" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', fontWeight: 500, lineHeight: 0.95, marginBottom: 'var(--space-sm)' }}>
            Scopri<br />
            <span style={{ paddingLeft: 'clamp(2rem, 6vw, 6rem)', fontStyle: 'italic', color: 'var(--c-sage)' }}>Masa</span> Chalet
          </h2>
          <span className="rule-accent" style={{ marginLeft: 'clamp(2rem, 6vw, 6rem)' }} />
        </div>
      </div>

      <div className="masa-filosofia" style={{ marginTop: 'var(--space-lg)', position: 'relative' }}>
        {/* Mobile: flex column, Desktop: overlapping grid */}
        <div className="flex flex-col lg:grid" style={{ gridTemplateColumns: 'repeat(12, 1fr)' }}>
          <div className="masa-sala overflow-hidden" style={{ gridColumn: '1 / 8' }}>
            <img
              src={salaImg}
              alt="Sala del ristorante Masa Chalet"
              title="Sala del ristorante Masa Chalet al Passo della Presolana"
              loading="lazy"
              width={960}
              height={660}
              className="w-full object-cover"
              style={{ aspectRatio: '16/11' }}
            />
          </div>

          <div className="masa-filosofia-text" style={{ padding: 'clamp(2rem, 5vw, 5rem)', background: 'var(--c-dark-warm)', position: 'relative', zIndex: 2, gridColumn: '6 / 13', gridRow: '1', alignSelf: 'center', marginTop: 'clamp(3rem, 8vw, 8rem)', marginBottom: 'clamp(1rem, 3vw, 3rem)' }}>
            <p className="masa-text-block" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xs)', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--c-sage)', marginBottom: 'var(--space-sm)' }}>
              La nostra filosofia
            </p>
            <h3 className="masa-text-block" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', lineHeight: 1.15, marginBottom: 'var(--space-md)' }}>
              L&rsquo;evoluzione<br />della tradizione
            </h3>
            <blockquote className="masa-text-block" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'var(--text-base)', color: 'var(--c-cream-muted)', lineHeight: 1.7, borderLeft: '2px solid var(--c-gold-dim)', paddingLeft: 'var(--space-sm)', marginBottom: 'var(--space-md)' }}>
              &ldquo;Ci insegnano che bisogna viaggiare per scoprire nuovi gusti o trovare prodotti unici, tante volte basta solo guardarsi attorno.&rdquo;
            </blockquote>
            <p className="masa-text-block" style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 1.8, marginBottom: 'var(--space-sm)' }}>
              Un forte legame con piccoli produttori che ci forniscono il meglio, rispettando
              le stagioni e il territorio. Dalla Valle Seriana alla Val di Scalve, ogni ingrediente racconta una storia.
            </p>
            <p className="masa-text-block" style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 1.8 }}>
              A pranzo, i sapori della tradizione bergamasca. A cena, la creatività prende forma in piatti d&rsquo;autore
              con abbinamenti inaspettati e tecniche contemporanee.
            </p>
          </div>
        </div>

        <div className="masa-detail hidden lg:block" style={{ position: 'absolute', left: 'clamp(3rem, 8vw, 8rem)', bottom: '-3rem', width: 'clamp(140px, 14vw, 220px)', zIndex: 3 }}>
          <img src={detailImg} alt="Dettaglio cucina" title="Dettaglio della cucina Masa Chalet" loading="lazy" width={220} height={220} className="w-full object-cover" style={{ aspectRatio: '1/1', border: '1px solid rgba(168,185,160,0.2)' }} />
        </div>
      </div>

      <div className="persona-grid" style={{ marginTop: 'var(--space-2xl)', padding: '0 clamp(1.5rem, 4vw, 3rem)', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'clamp(1.5rem, 3vw, 2rem)' }}>
        <div className="persona-card" style={{ gridColumn: '1 / 7' }}>
          <div className="overflow-hidden" style={{ marginBottom: 'var(--space-sm)' }}>
            <img
              src={chefImg}
              alt="Chef Emanuele Bruneo"
              title="Chef Emanuele Bruneo - Masa Chalet"
              loading="lazy"
              width={600}
              height={800}
              className="w-full object-cover transition-transform duration-1000 hover:scale-105"
              style={{ aspectRatio: '3/4' }}
            />
          </div>
          <p style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--c-sage)', marginBottom: '0.5rem' }}>Lo Chef</p>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', marginBottom: 'var(--space-sm)' }}>Emanuele Bruneo</h3>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 1.8, maxWidth: '420px' }}>
            Con origini meridionali e il cuore nelle Orobie, Emanuele ha trasformato la sua
            più grande passione in una professione. Completamente autodidatta, ha aperto
            Masa Chalet con la determinazione di chi crede nei propri sogni.
          </p>
        </div>

        <div className="persona-card" style={{ gridColumn: '8 / 13', marginTop: 'clamp(4rem, 10vw, 12rem)' }}>
          <div className="overflow-hidden" style={{ marginBottom: 'var(--space-sm)' }}>
            <img
              src={samanthaImg}
              alt="Samantha - Sala e accoglienza"
              title="Samantha - Sala e accoglienza Masa Chalet"
              loading="lazy"
              width={600}
              height={800}
              className="w-full object-cover transition-transform duration-1000 hover:scale-105"
              style={{ aspectRatio: '3/4' }}
            />
          </div>
          <p style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--c-sage)', marginBottom: '0.5rem' }}>La Sala</p>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', marginBottom: 'var(--space-sm)' }}>Samantha</h3>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 1.8, maxWidth: '420px' }}>
            Anima dell&rsquo;accoglienza, Samantha trasforma ogni cena in un&rsquo;esperienza speciale.
            Con eleganza e simpatia racconta i piatti, consiglia gli abbinamenti e crea
            quell&rsquo;atmosfera calda che fa tornare ogni ospite.
          </p>
        </div>
      </div>
    </section>
  )
}
