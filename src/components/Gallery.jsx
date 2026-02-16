import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AnimatePresence, motion } from 'framer-motion'

import foto1 from '../assets/foto/foto-1.webp'
import foto3 from '../assets/foto/foto-3.webp'
import foto5 from '../assets/foto/foto-5.webp'
import foto6 from '../assets/foto/foto-6.webp'
import foto9 from '../assets/foto/foto-9.webp'
import foto14 from '../assets/foto/foto-14.webp'
import foto19 from '../assets/foto/foto-19.webp'
import foto21 from '../assets/foto/foto-21.webp'
import foto23 from '../assets/foto/foto-23.webp'
import foto26 from '../assets/foto/foto-26.webp'
import foto28 from '../assets/foto/foto-28.webp'
import foto36 from '../assets/foto/foto-36.webp'

gsap.registerPlugin(ScrollTrigger)

const images = [
  { src: foto3, alt: 'Piatto colorato con salse' },
  { src: foto14, alt: 'Materie prime: tartufo' },
  { src: foto5, alt: 'Spaghetti con bottarga' },
  { src: foto1, alt: 'Dolce artigianale' },
  { src: foto26, alt: 'Piatto con sfondo verde' },
  { src: foto9, alt: 'Uovo panato con castagne' },
  { src: foto21, alt: 'Risotto mantecato' },
  { src: foto6, alt: 'Tataki con crema' },
  { src: foto36, alt: 'Verdure grigliate con carne' },
  { src: foto23, alt: 'Piatto di pesce' },
  { src: foto19, alt: 'Dessert elegante' },
  { src: foto28, alt: 'Pane artigianale' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)
  const ref = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.gal-title', { y: 80, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.gal-title', start: 'top 85%' }
      })

      gsap.fromTo('.gal-item', { y: 60, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, stagger: { each: 0.06, from: 'random' }, ease: 'power3.out',
        scrollTrigger: { trigger: '.gal-grid', start: 'top 80%' }
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const handleKey = (e) => {
      if (lightbox === null) return
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') setLightbox(prev => (prev + 1) % images.length)
      if (e.key === 'ArrowLeft') setLightbox(prev => prev === 0 ? images.length - 1 : prev - 1)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightbox])

  return (
    <section ref={ref} id="gallery" style={{ paddingTop: 'var(--space-xl)', paddingBottom: 'var(--space-xl)' }}>
      <div style={{ padding: '0 clamp(1.5rem, 4vw, 3rem)' }}>
        <div style={{ marginBottom: 'var(--space-lg)', maxWidth: '500px' }}>
          <p className="gal-title" style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--c-sage)', marginBottom: 'var(--space-sm)' }}>
            Emozioni visive
          </p>
          <h2 className="gal-title" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', fontWeight: 500, lineHeight: 0.95 }}>
            Gallery
          </h2>
        </div>

        <div className="gal-grid" style={{ columns: '3', columnGap: 'clamp(0.5rem, 1vw, 0.75rem)' }}>
          {images.map((img, i) => (
            <div
              key={i}
              className="gal-item"
              style={{ breakInside: 'avoid', marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)', cursor: 'pointer', overflow: 'hidden' }}
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover"
                style={{ transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
                loading="lazy"
                onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'}
              />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ background: 'rgba(14,14,14,0.96)', padding: '1rem', cursor: 'pointer' }}
            onClick={() => setLightbox(null)}
          >
            <button
              style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: 'var(--c-cream-muted)', fontSize: '2rem', background: 'none', border: 'none', cursor: 'pointer' }}
              onClick={() => setLightbox(null)}
              aria-label="Chiudi"
            >
              &times;
            </button>

            <button
              style={{ position: 'absolute', left: 'clamp(0.5rem, 2vw, 2rem)', color: 'var(--c-cream-muted)', fontSize: '2.5rem', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.3s' }}
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox === 0 ? images.length - 1 : lightbox - 1) }}
              aria-label="Precedente"
            >
              &#8249;
            </button>

            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              style={{ maxWidth: '100%', maxHeight: '85vh', objectFit: 'contain', cursor: 'default' }}
              onClick={(e) => e.stopPropagation()}
            />

            <button
              style={{ position: 'absolute', right: 'clamp(0.5rem, 2vw, 2rem)', color: 'var(--c-cream-muted)', fontSize: '2.5rem', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.3s' }}
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % images.length) }}
              aria-label="Successiva"
            >
              &#8250;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
