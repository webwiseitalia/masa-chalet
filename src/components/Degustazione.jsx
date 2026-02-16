import chefPlating from '../assets/foto/foto-10.webp'
import piatto from '../assets/foto/foto-34.webp'

export default function Degustazione() {
  return (
    <section id="degustazione" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <img
              src={chefPlating}
              alt="Piatto servito dallo Chef"
              className="w-full aspect-[3/4] object-cover"
            />
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-masa-gold/30" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-masa-gold tracking-[0.3em] uppercase text-xs mb-4">Un percorso unico</p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6">
              Menu Degustazione
            </h2>
            <div className="w-12 h-[1px] bg-masa-gold mb-8" />

            <blockquote className="text-masa-cream/70 text-xl leading-relaxed font-serif italic mb-8">
              "Il cibo trova sempre chi ama cucinare."
            </blockquote>

            <p className="text-masa-cream/60 leading-relaxed mb-10">
              Il nostro menù degustazione è un percorso tra le ispirazioni dello chef,
              i produttori locali e la ricerca del prodotto. Lasciatevi ispirare e
              affidatevi completamente all'idea dello Chef.
            </p>

            {/* Pricing cards */}
            <div className="space-y-4 mb-10">
              <div className="border border-masa-cream/10 p-6 hover:border-masa-gold/30 transition-colors duration-300">
                <div className="flex items-baseline justify-between mb-2">
                  <h4 className="font-serif text-xl text-masa-cream">5 Portate</h4>
                  <span className="text-masa-gold font-serif text-2xl">€65</span>
                </div>
                <p className="text-masa-cream/40 text-sm">a persona, escluso coperto e bevande</p>
              </div>

              <div className="border border-masa-cream/10 p-6 hover:border-masa-gold/30 transition-colors duration-300">
                <div className="flex items-baseline justify-between mb-2">
                  <h4 className="font-serif text-xl text-masa-cream">4 Portate</h4>
                  <span className="text-masa-gold font-serif text-2xl">€55</span>
                </div>
                <p className="text-masa-cream/40 text-sm">a persona, escluso coperto e bevande</p>
              </div>

              <div className="border border-masa-gold/30 p-6 bg-masa-gold/5">
                <div className="flex items-baseline justify-between mb-2">
                  <h4 className="font-serif text-xl text-masa-gold">Abbinamento Vini</h4>
                  <span className="text-masa-gold font-serif text-2xl">€25</span>
                </div>
                <p className="text-masa-cream/40 text-sm">3 calici selezionati, a persona</p>
              </div>
            </div>

            <p className="text-masa-cream/40 text-xs italic mb-8">
              Il menù degustazione è inteso per l'intero tavolo.
            </p>

            <a
              href="tel:+390346320081"
              className="inline-block px-8 py-3 bg-masa-gold text-masa-black font-semibold tracking-[0.15em] uppercase text-sm hover:bg-masa-gold-light transition-all duration-300"
            >
              Prenota la degustazione
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
