import bgImg from '../assets/foto/foto-8.webp'

export default function Quote() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={bgImg}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-masa-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center section-padding">
        <svg className="w-10 h-10 text-masa-gold/40 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z"/>
        </svg>
        <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl italic text-masa-cream/90 leading-relaxed mb-8">
          Siamo più di semplici cuochi: siamo creatori di emozioni gastronomiche,
          appassionati nel trasformare ogni piatto in un'opera d'arte per il palato.
        </blockquote>
        <div className="gold-separator mb-6" />
        <p className="text-masa-gold tracking-[0.3em] uppercase text-xs">
          Emanuele &amp; Samantha
        </p>
      </div>
    </section>
  )
}
