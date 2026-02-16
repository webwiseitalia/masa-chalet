export default function Contatti() {
  return (
    <section id="contatti" className="py-24 md:py-32 bg-masa-dark/50">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-masa-gold tracking-[0.3em] uppercase text-xs mb-4">Dove trovarci</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Contatti
          </h2>
          <div className="gold-separator" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Info */}
          <div>
            <div className="mb-10">
              <h3 className="font-serif text-2xl mb-6 text-masa-cream">Masa Chalet</h3>
              <div className="space-y-4 text-masa-cream/60">
                <div className="flex items-start gap-4">
                  <svg className="w-5 h-5 text-masa-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p>Via Cantoniera, 9</p>
                    <p>Passo della Presolana</p>
                    <p>24020 Castione della Presolana (BG)</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <svg className="w-5 h-5 text-masa-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+390346320081" className="hover:text-masa-gold transition-colors">
                    +39 0346 32081
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <svg className="w-5 h-5 text-masa-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@masachalet.it" className="hover:text-masa-gold transition-colors">
                    info@masachalet.it
                  </a>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="mb-10">
              <h4 className="font-serif text-lg text-masa-gold mb-4">Servizi</h4>
              <div className="grid grid-cols-2 gap-3 text-masa-cream/50 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-masa-gold/50 rounded-full" />
                  Prenotazione consigliata
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-masa-gold/50 rounded-full" />
                  Pet-friendly
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-masa-gold/50 rounded-full" />
                  Parcheggio
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-masa-gold/50 rounded-full" />
                  Carte di credito
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-masa-gold/50 rounded-full" />
                  Menu degustazione
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-masa-gold/50 rounded-full" />
                  Gift Card
                </div>
              </div>
            </div>

            {/* Ratings */}
            <div>
              <h4 className="font-serif text-lg text-masa-gold mb-4">Valutazioni</h4>
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-serif text-masa-cream mb-1">9.8</div>
                  <div className="text-masa-cream/40 text-xs tracking-wider uppercase">TheFork</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-serif text-masa-cream mb-1">4.6</div>
                  <div className="text-masa-cream/40 text-xs tracking-wider uppercase">TripAdvisor</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-serif text-masa-cream mb-1">5.0</div>
                  <div className="text-masa-cream/40 text-xs tracking-wider uppercase">Google</div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div>
            <div className="w-full aspect-[4/3] bg-masa-dark mb-6 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2773.5!2d10.0736!3d45.9375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47819a6b1e4f8a4f%3A0x2a0c2c3d4e5f6789!2sMasa%20Chalet!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(80%) invert(92%) contrast(83%)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa Masa Chalet"
              />
            </div>

            {/* CTA */}
            <div className="text-center">
              <p className="text-masa-cream/60 mb-6">
                Per prenotare il vostro tavolo, contattateci telefonicamente
                o tramite email.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="tel:+390346320081"
                  className="px-8 py-3 bg-masa-gold text-masa-black font-semibold tracking-[0.15em] uppercase text-sm hover:bg-masa-gold-light transition-all duration-300 text-center"
                >
                  Chiama ora
                </a>
                <a
                  href="mailto:info@masachalet.it"
                  className="px-8 py-3 border border-masa-cream/30 text-masa-cream tracking-[0.15em] uppercase text-sm hover:border-masa-gold hover:text-masa-gold transition-all duration-300 text-center"
                >
                  Scrivici
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
