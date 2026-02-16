import logo from '../assets/logomasachalet.webp'
import heroImg from '../assets/foto/foto-42.webp'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Piatto gourmet Masa Chalet"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-masa-black/70 via-masa-black/50 to-masa-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <img
          src={logo}
          alt="Masa Chalet Logo"
          className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-8 animate-[fadeIn_1s_ease-out]"
        />

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold tracking-wide mb-4 animate-[fadeIn_1.2s_ease-out]">
          Masa Chalet
        </h1>

        <div className="gold-separator my-6 animate-[fadeIn_1.4s_ease-out]" />

        <p className="font-serif text-xl md:text-2xl lg:text-3xl italic text-masa-gold tracking-wide mb-3 animate-[fadeIn_1.6s_ease-out]">
          L'evoluzione della tradizione
        </p>

        <p className="text-sm md:text-base text-masa-cream/70 tracking-[0.2em] uppercase mb-12 animate-[fadeIn_1.8s_ease-out]">
          Passo della Presolana &middot; 1.297 m s.l.m.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[fadeIn_2s_ease-out]">
          <a
            href="tel:+390346320081"
            className="px-8 py-3 bg-masa-gold text-masa-black font-semibold tracking-[0.15em] uppercase text-sm hover:bg-masa-gold-light transition-all duration-300"
          >
            Prenota un tavolo
          </a>
          <a
            href="#menu"
            className="px-8 py-3 border border-masa-cream/40 text-masa-cream tracking-[0.15em] uppercase text-sm hover:border-masa-gold hover:text-masa-gold transition-all duration-300"
          >
            Scopri il menù
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-masa-gold/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
