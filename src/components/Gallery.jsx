import { useState } from 'react'

import foto1 from '../assets/foto/foto-1.webp'
import foto2 from '../assets/foto/foto-2.webp'
import foto3 from '../assets/foto/foto-3.webp'
import foto5 from '../assets/foto/foto-5.webp'
import foto6 from '../assets/foto/foto-6.webp'
import foto7 from '../assets/foto/foto-7.webp'
import foto9 from '../assets/foto/foto-9.webp'
import foto10 from '../assets/foto/foto-10.webp'
import foto11 from '../assets/foto/foto-11.webp'
import foto12 from '../assets/foto/foto-12.webp'
import foto14 from '../assets/foto/foto-14.webp'
import foto16 from '../assets/foto/foto-16.webp'
import foto17 from '../assets/foto/foto-17.webp'
import foto19 from '../assets/foto/foto-19.webp'
import foto20 from '../assets/foto/foto-20.webp'
import foto21 from '../assets/foto/foto-21.webp'
import foto22 from '../assets/foto/foto-22.webp'
import foto23 from '../assets/foto/foto-23.webp'
import foto24 from '../assets/foto/foto-24.webp'
import foto26 from '../assets/foto/foto-26.webp'
import foto27 from '../assets/foto/foto-27.webp'
import foto28 from '../assets/foto/foto-28.webp'
import foto29 from '../assets/foto/foto-29.webp'
import foto30 from '../assets/foto/foto-30.webp'
import foto31 from '../assets/foto/foto-31.webp'
import foto36 from '../assets/foto/foto-36.webp'
import foto38 from '../assets/foto/foto-38.webp'
import foto39 from '../assets/foto/foto-39.webp'
import foto42 from '../assets/foto/foto-42.webp'

const images = [
  { src: foto10, alt: 'Piatto servito dallo chef', span: 'col-span-2 row-span-2' },
  { src: foto2, alt: 'Crudo di pesce con salsa verde' },
  { src: foto3, alt: 'Piatto colorato con salse' },
  { src: foto1, alt: 'Dolce artigianale' },
  { src: foto36, alt: 'Verdure grigliate con carne' },
  { src: foto5, alt: 'Spaghetti con bottarga' },
  { src: foto38, alt: 'Piatto gourmet con peperoni' },
  { src: foto6, alt: 'Tataki con crema' },
  { src: foto9, alt: 'Uovo panato con castagne' },
  { src: foto7, alt: 'Crema e salsa al cucchiaio' },
  { src: foto39, alt: 'Indivia grigliata con salsa' },
  { src: foto42, alt: 'Bottoni ai tre arrosti', span: 'col-span-2 row-span-2' },
  { src: foto11, alt: 'Pesce con crema e verdure' },
  { src: foto12, alt: 'Secondo piatto di carne' },
  { src: foto14, alt: 'Materie prime: tartufo' },
  { src: foto26, alt: 'Piatto con sfondo verde' },
  { src: foto19, alt: 'Dessert elegante' },
  { src: foto20, alt: 'Antipasto raffinato' },
  { src: foto21, alt: 'Risotto mantecato' },
  { src: foto22, alt: 'Primo piatto con verdure' },
  { src: foto23, alt: 'Piatto di pesce' },
  { src: foto24, alt: 'Contorno gourmet' },
  { src: foto16, alt: 'Pasta fresca' },
  { src: foto17, alt: 'Piatto con erbe aromatiche' },
  { src: foto27, alt: 'Dettaglio piatto' },
  { src: foto28, alt: 'Pane artigianale' },
  { src: foto29, alt: 'Presentazione piatto' },
  { src: foto30, alt: 'Dolce dello chef' },
  { src: foto31, alt: 'Piatto principale' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-masa-gold tracking-[0.3em] uppercase text-xs mb-4">Emozioni visive</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Gallery
          </h2>
          <div className="gold-separator" />
        </div>

        {/* Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {images.map((img, i) => (
            <div
              key={i}
              className="break-inside-avoid cursor-pointer overflow-hidden group"
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-masa-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-masa-cream/60 hover:text-masa-cream text-3xl transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Chiudi"
          >
            &times;
          </button>

          {/* Navigation arrows */}
          <button
            className="absolute left-4 md:left-8 text-masa-cream/40 hover:text-masa-gold text-4xl transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              setLightbox(lightbox === 0 ? images.length - 1 : lightbox - 1)
            }}
            aria-label="Precedente"
          >
            &#8249;
          </button>

          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-4 md:right-8 text-masa-cream/40 hover:text-masa-gold text-4xl transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              setLightbox(lightbox === images.length - 1 ? 0 : lightbox + 1)
            }}
            aria-label="Successiva"
          >
            &#8250;
          </button>
        </div>
      )}
    </section>
  )
}
