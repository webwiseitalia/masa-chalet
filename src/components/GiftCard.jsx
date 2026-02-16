import giftImg from '../assets/foto/foto-32.webp'

export default function GiftCard() {
  return (
    <section id="giftcard" className="py-24 md:py-32 bg-masa-dark/50">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <p className="text-masa-gold tracking-[0.3em] uppercase text-xs mb-4">Un regalo speciale</p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6">
              Regala Masa Chalet
            </h2>
            <div className="w-12 h-[1px] bg-masa-gold mb-8" />
            <p className="text-masa-cream/70 text-lg leading-relaxed mb-6">
              Un'esperienza speciale, fatta di cose buone, di cibo cucinato con passione:
              regala un buono degustazione.
            </p>
            <p className="text-masa-cream/60 leading-relaxed mb-10">
              Decidi tu che tipo di esperienza donare. La nostra Gift Card è il pensiero
              perfetto per chi ama la buona cucina e le emozioni autentiche.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+390346320081"
                className="px-8 py-3 bg-masa-gold text-masa-black font-semibold tracking-[0.15em] uppercase text-sm hover:bg-masa-gold-light transition-all duration-300 text-center"
              >
                Chiamaci
              </a>
              <a
                href="mailto:info@masachalet.it"
                className="px-8 py-3 border border-masa-cream/30 text-masa-cream tracking-[0.15em] uppercase text-sm hover:border-masa-gold hover:text-masa-gold transition-all duration-300 text-center"
              >
                Scrivici
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={giftImg}
              alt="Gift Card Masa Chalet - Buono degustazione"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
