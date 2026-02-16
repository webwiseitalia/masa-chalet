import { useState, useEffect } from 'react'
import logo from '../assets/logomasachalet.webp'

const navLinks = [
  { label: 'Masa', href: '#masa' },
  { label: 'Menù', href: '#menu' },
  { label: 'Degustazione', href: '#degustazione' },
  { label: 'Gift Card', href: '#giftcard' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contatti', href: '#contatti' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-masa-black/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto section-padding flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Masa Chalet"
            className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-105"
          />
          <div className="hidden sm:block">
            <span className="font-serif text-xl md:text-2xl font-semibold tracking-wide text-masa-cream">
              Masa Chalet
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-[0.15em] uppercase text-masa-cream/80 hover:text-masa-gold transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+390346320081"
            className="ml-4 px-5 py-2 border border-masa-gold text-masa-gold text-sm tracking-[0.15em] uppercase hover:bg-masa-gold hover:text-masa-black transition-all duration-300"
          >
            Prenota
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-[6px] p-2 group"
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-[1.5px] bg-masa-cream transition-all duration-300 ${
              mobileOpen ? 'rotate-45 translate-y-[7.5px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-masa-cream transition-all duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-masa-cream transition-all duration-300 ${
              mobileOpen ? '-rotate-45 -translate-y-[7.5px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-masa-black/98 backdrop-blur-lg z-40 transition-all duration-500 flex flex-col items-center justify-center gap-8 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <img src={logo} alt="Masa Chalet" className="w-16 h-16 mb-4" />
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="text-lg tracking-[0.2em] uppercase text-masa-cream/80 hover:text-masa-gold transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
        <a
          href="tel:+390346320081"
          onClick={() => setMobileOpen(false)}
          className="mt-4 px-8 py-3 border border-masa-gold text-masa-gold tracking-[0.15em] uppercase hover:bg-masa-gold hover:text-masa-black transition-all duration-300"
        >
          Prenota
        </a>
      </div>
    </nav>
  )
}
