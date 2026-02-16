import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logomasachalet-Photoroom.webp'

const links = [
  { label: 'Masa', href: '#masa' },
  { label: 'Menù', href: '#menu' },
  { label: 'Degustazione', href: '#degustazione' },
  { label: 'Gift Card', href: '#giftcard' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contatti', href: '#contatti' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
        style={{
          background: scrolled ? 'rgba(10,15,10,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          padding: scrolled ? '0.75rem 0' : '1.5rem 0',
        }}
      >
        <div className="flex items-center justify-between" style={{ padding: '0 clamp(1.5rem, 4vw, 3rem)' }}>
          <a href="#" className="flex items-center gap-3 relative z-50">
            <img src={logo} alt="Masa Chalet" className="w-9 h-9 md:w-11 md:h-11" />
            <span
              className="hidden sm:block tracking-[0.15em] uppercase"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-sm)', color: 'var(--c-cream)' }}
            >
              Masa Chalet
            </span>
          </a>

          <div className="hidden lg:flex items-center" style={{ gap: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  fontSize: 'var(--text-xs)',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--c-cream-muted)',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--c-sage)'}
                onMouseLeave={e => e.target.style.color = 'var(--c-cream-muted)'}
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+390346320081"
              style={{
                marginLeft: '1rem',
                padding: '0.5rem 1.5rem',
                border: '1px solid var(--c-sage)',
                color: 'var(--c-sage)',
                fontSize: 'var(--text-xs)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={e => { e.target.style.background = 'var(--c-sage)'; e.target.style.color = 'var(--c-black)' }}
              onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--c-sage)' }}
            >
              Prenota
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-end justify-center gap-[5px]"
            aria-label="Menu"
          >
            <span className="block h-[1px] transition-all duration-500" style={{ width: '24px', background: 'var(--c-cream)', transform: open ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
            <span className="block h-[1px] transition-all duration-500" style={{ width: open ? '0px' : '16px', background: 'var(--c-cream)', opacity: open ? 0 : 1 }} />
            <span className="block h-[1px] transition-all duration-500" style={{ width: open ? '24px' : '20px', background: 'var(--c-cream)', transform: open ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 2.5rem) 2.5rem)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-end"
            style={{ background: 'var(--c-dark)', padding: 'clamp(6rem, 15vh, 10rem) clamp(2rem, 6vw, 4rem) clamp(3rem, 8vh, 5rem)' }}
          >
            <div className="flex flex-col gap-4">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--c-cream)', lineHeight: 1.1, transition: 'color 0.3s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--c-sage)'}
                  onMouseLeave={e => e.target.style.color = 'var(--c-cream)'}
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-12"
              style={{ color: 'var(--c-cream-muted)', fontSize: 'var(--text-sm)' }}
            >
              <p>+39 0346 32081</p>
              <p>info@masachalet.it</p>
              <p className="mt-2" style={{ color: 'var(--c-sage)', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: 'var(--text-xs)' }}>
                Passo della Presolana
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
