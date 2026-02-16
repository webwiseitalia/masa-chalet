import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import piatto1 from '../assets/foto/foto-4.webp'
import piatto2 from '../assets/foto/foto-38.webp'
import piatto3 from '../assets/foto/foto-2.webp'
import logo from '../assets/logomasachalet-Photoroom.webp'

gsap.registerPlugin(ScrollTrigger)

const antipasti = [
  { nome: 'Uovo panato, castagne, Strachitunt', prezzo: '16' },
  { nome: 'Crudo di cervo, cremoso di cavolfiore caramellato, uova di trota e anice stellato', prezzo: '20', tags: ['senza glutine', 'senza lattosio'] },
  { nome: "Trota Oro Alpina, beurre blanc al bergamotto, cardoncelli, alga nori sott'aceto e olio al pino mugo" },
  { nome: 'Radicchio tardivo, cremoso di ceci, arancia candita e rosmarino' },
  { nome: 'Culatta di Langhirano, giardiniera fatta in casa', prezzo: '20' },
]

const primi = [
  { nome: 'Risotto mantecato con scorza nera, mela anurca, aceto di sambuco e alloro' },
  { nome: 'Bottoni ai tre arrosti, salsa di pane, lievito e verza', prezzo: '22' },
  { nome: 'Tagliatella al ragù vegetale, carota concentrata e peperone crusco' },
  { nome: 'Pasta mista, cotta in brodo di pollo, patate di Rovetta, tè nero e pesci di lago affumicati' },
]

const secondi = [
  { nome: "Costolette d'agnello arrostite, cime di rapa e cipollotto" },
  { nome: 'Salmerino arrostito sulla pelle, bisque di lago, il suo collagene e crema di porcini' },
  { nome: "Petto d'anatra al rosa, fondo al vermut e cavolo nero" },
  { nome: 'Guancetta di manzo cotta lentamente, topinambur' },
]

function MenuSection({ title, items, index }) {
  return (
    <div className="menu-category" style={{ marginBottom: 'var(--space-lg)' }}>
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-xl)',
        color: 'var(--c-sage)',
        marginBottom: 'var(--space-md)',
        fontStyle: index % 2 === 0 ? 'normal' : 'italic',
      }}>
        {title}
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1rem, 2vw, 1.5rem)' }}>
        {items.map((item, i) => (
          <div key={i} className="menu-item" style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', paddingBottom: 'clamp(0.75rem, 1.5vw, 1rem)', borderBottom: '1px solid rgba(240,233,220,0.06)' }}>
            <span style={{ flex: 1, fontSize: 'var(--text-base)', color: 'var(--c-cream)', lineHeight: 1.5 }}>
              {item.nome}
              {item.tags && (
                <span style={{ display: 'inline-flex', gap: '0.5rem', marginLeft: '0.75rem' }}>
                  {item.tags.map(t => (
                    <span key={t} style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--c-green)', border: '1px solid var(--c-green-muted)', padding: '0.15rem 0.5rem' }}>{t}</span>
                  ))}
                </span>
              )}
            </span>
            {item.prezzo && (
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', color: 'var(--c-sage)', flexShrink: 0 }}>
                &euro;{item.prezzo}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Menu() {
  const ref = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.menu-heading', { y: 100, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.menu-heading', start: 'top 85%' }
      })

      gsap.fromTo('.menu-img', { clipPath: 'inset(0 0 100% 0)' }, {
        clipPath: 'inset(0 0 0% 0)', duration: 0.8, ease: 'power4.inOut', stagger: 0.12,
        scrollTrigger: { trigger: '.menu-images', start: 'top 75%' }
      })

      gsap.fromTo('.menu-category', { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.5, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.menu-body', start: 'top 75%' }
      })

      gsap.fromTo('.menu-bg-logo', { opacity: 0, scale: 0.9 }, {
        opacity: 0.04, scale: 1, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: '.menu-bg-logo', start: 'top 90%' }
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="menu" style={{ paddingTop: 'var(--space-xl)', paddingBottom: 'var(--space-xl)', background: 'var(--c-dark)', position: 'relative', overflow: 'hidden' }}>
      <img
        src={logo}
        alt=""
        aria-hidden="true"
        className="menu-bg-logo hidden md:block"
        style={{
          position: 'absolute',
          right: '-5%',
          bottom: 'clamp(2rem, 8vw, 8rem)',
          width: 'clamp(400px, 50vw, 700px)',
          opacity: 0,
          pointerEvents: 'none',
          filter: 'grayscale(0.4)',
        }}
      />
      <div style={{ padding: '0 clamp(1.5rem, 4vw, 3rem)', marginBottom: 'var(--space-lg)' }}>
        <p className="menu-heading" style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--c-sage)', marginBottom: 'var(--space-sm)' }}>
          Sapori d&rsquo;alta quota
        </p>
        <h2 className="menu-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-massive)', fontWeight: 500, lineHeight: 0.85, letterSpacing: '-0.03em', opacity: 0.12 }}>
          Menù
        </h2>
        <h2 className="menu-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', fontWeight: 500, lineHeight: 1, marginTop: '-0.5em', position: 'relative', zIndex: 2 }}>
          Il nostro Menù
        </h2>
      </div>

      <div className="menu-images" style={{ display: 'grid', gridTemplateColumns: '2fr 1.2fr 1.5fr', gap: 'clamp(0.5rem, 1vw, 0.75rem)', padding: '0 clamp(1.5rem, 4vw, 3rem)', marginBottom: 'var(--space-xl)' }}>
        <div className="menu-img overflow-hidden"><img src={piatto1} alt="Tortelli con brodo" className="w-full object-cover" style={{ aspectRatio: '4/3' }} /></div>
        <div className="menu-img overflow-hidden" style={{ marginTop: 'clamp(2rem, 5vw, 5rem)' }}><img src={piatto2} alt="Piatto gourmet colorato" className="w-full object-cover" style={{ aspectRatio: '3/4' }} /></div>
        <div className="menu-img overflow-hidden"><img src={piatto3} alt="Crudo con salsa verde" className="w-full object-cover" style={{ aspectRatio: '4/5' }} /></div>
      </div>

      <div className="menu-body" style={{ padding: '0 clamp(1.5rem, 4vw, 3rem)' }}>
        <div className="menu-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(2rem, 5vw, 5rem)' }}>
          <MenuSection title="Antipasti" items={antipasti} index={0} />
          <MenuSection title="Primi Piatti" items={primi} index={1} />
          <MenuSection title="Secondi Piatti" items={secondi} index={2} />
        </div>

        <p style={{ fontSize: 'var(--text-xs)', color: 'var(--c-cream-muted)', fontStyle: 'italic', marginTop: 'var(--space-md)', lineHeight: 1.8, textAlign: 'center' }}>
          Il menù è stagionale e soggetto a variazioni in base alla disponibilità dei prodotti.
          Per allergie e intolleranze, comunicatelo al nostro staff.
        </p>
      </div>
    </section>
  )
}
