import piatto1 from '../assets/foto/foto-4.webp'
import piatto2 from '../assets/foto/foto-41.webp'

const antipasti = [
  { nome: 'Uovo panato, castagne, Strachitunt', prezzo: '16' },
  { nome: 'Crudo di cervo, cremoso di cavolfiore caramellato, uova di trota e anice stellato', prezzo: '20', tags: ['senza glutine', 'senza lattosio'] },
  { nome: 'Trota Oro Alpina, beurre blanc al bergamotto, cardoncelli, alga nori sott\'aceto e olio al pino mugo', prezzo: null },
  { nome: 'Radicchio tardivo, cremoso di ceci, arancia candita e rosmarino', prezzo: null },
  { nome: 'Culatta di Langhirano, giardiniera fatta in casa', prezzo: '20' },
]

const primi = [
  { nome: 'Risotto mantecato con scorza nera, mela anurca, aceto di sambuco e alloro', prezzo: null },
  { nome: 'Bottoni ai tre arrosti, salsa di pane, lievito e verza', prezzo: '22' },
  { nome: 'Tagliatella al ragù vegetale, carota concentrata e peperone crusco', prezzo: null },
  { nome: 'Pasta mista, cotta in brodo di pollo, patate di Rovetta, tè nero e pesci di lago affumicati', prezzo: null },
]

const secondi = [
  { nome: 'Costolette d\'agnello arrostite, cime di rapa e cipollotto', prezzo: null },
  { nome: 'Salmerino arrostito sulla pelle, bisque di lago, il suo collagene e crema di porcini', prezzo: null },
  { nome: 'Petto d\'anatra al rosa, fondo al vermut e cavolo nero', prezzo: null },
  { nome: 'Guancetta di manzo cotta lentamente, topinambur', prezzo: null },
]

function MenuCategory({ title, items }) {
  return (
    <div className="mb-14">
      <h3 className="font-serif text-2xl md:text-3xl text-masa-gold mb-8 text-center">
        {title}
      </h3>
      <div className="space-y-6">
        {items.map((item, i) => (
          <div key={i} className="group">
            <div className="flex items-baseline gap-3">
              <span className="text-masa-cream/90 text-base md:text-lg flex-1">
                {item.nome}
              </span>
              <span className="flex-shrink-0 border-b border-dotted border-masa-cream/20 flex-1 min-w-[40px] max-w-[120px] hidden sm:block" />
              {item.prezzo && (
                <span className="text-masa-gold font-serif text-lg flex-shrink-0">
                  €{item.prezzo}
                </span>
              )}
            </div>
            {item.tags && (
              <div className="flex gap-2 mt-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-[10px] tracking-[0.15em] uppercase text-masa-green-light/80 border border-masa-green-light/30 px-2 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Menu() {
  return (
    <section id="menu" className="py-24 md:py-32 bg-masa-dark/50">
      <div className="max-w-4xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-masa-gold tracking-[0.3em] uppercase text-xs mb-4">Sapori d'alta quota</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Il nostro Menù
          </h2>
          <div className="gold-separator mb-8" />
          <p className="max-w-xl mx-auto text-masa-cream/60 leading-relaxed font-light">
            Un forte legame con piccoli produttori che ci forniscono il meglio,
            rispettando le stagioni e il territorio.
          </p>
        </div>

        {/* Immagini decorative */}
        <div className="grid grid-cols-2 gap-4 mb-16">
          <img
            src={piatto1}
            alt="Piatto dello chef con salsa"
            className="w-full aspect-[4/3] object-cover"
          />
          <img
            src={piatto2}
            alt="Tartare con tartufo"
            className="w-full aspect-[4/3] object-cover"
          />
        </div>

        {/* Menu categories */}
        <MenuCategory title="Antipasti" items={antipasti} />
        <div className="gold-separator mb-14" />
        <MenuCategory title="Primi Piatti" items={primi} />
        <div className="gold-separator mb-14" />
        <MenuCategory title="Secondi Piatti" items={secondi} />

        {/* Note */}
        <div className="mt-16 text-center">
          <p className="text-masa-cream/40 text-sm italic">
            Il menù è stagionale e soggetto a variazioni in base alla disponibilità dei prodotti.
          </p>
          <p className="text-masa-cream/40 text-sm italic mt-1">
            Per allergie e intolleranze, comunicatelo al nostro staff.
          </p>
        </div>
      </div>
    </section>
  )
}
