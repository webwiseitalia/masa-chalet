import chefImg from '../assets/foto/foto-33.webp'
import samanthaImg from '../assets/foto/foto-35.webp'
import salaImg from '../assets/foto/foto-40.webp'

export default function Masa() {
  return (
    <section id="masa" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-masa-gold tracking-[0.3em] uppercase text-xs mb-4">Chi siamo</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Scopri Masa Chalet
          </h2>
          <div className="gold-separator mb-8" />
          <p className="max-w-2xl mx-auto text-masa-cream/70 text-lg leading-relaxed font-light">
            Nel cuore del Passo della Presolana, dove l'arte culinaria incontra
            la bellezza delle Orobie. Un viaggio sensoriale tra tradizione e innovazione.
          </p>
        </div>

        {/* Filosofia block */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <div className="relative">
            <img
              src={salaImg}
              alt="Sala del ristorante Masa Chalet"
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-masa-gold/30" />
          </div>
          <div>
            <p className="text-masa-gold tracking-[0.3em] uppercase text-xs mb-4">La nostra filosofia</p>
            <h3 className="font-serif text-3xl md:text-4xl mb-6">
              L'evoluzione della tradizione
            </h3>
            <div className="w-12 h-[1px] bg-masa-gold mb-6" />
            <blockquote className="text-masa-cream/70 text-lg leading-relaxed font-light italic border-l-2 border-masa-gold/30 pl-6 mb-6">
              "Ci insegnano che bisogna viaggiare per scoprire nuovi gusti o trovare prodotti unici,
              tante volte basta solo guardarsi attorno."
            </blockquote>
            <p className="text-masa-cream/60 leading-relaxed mb-4">
              Un forte legame con piccoli produttori che ci forniscono il meglio, rispettando
              le stagioni e il territorio. Dalla Valle Seriana alla Val di Scalve, ogni ingrediente
              racconta una storia.
            </p>
            <p className="text-masa-cream/60 leading-relaxed">
              A pranzo, i sapori della tradizione bergamasca — paste fresche, sughi ben fatti, polenta.
              A cena, la creatività prende forma in piatti d'autore con abbinamenti inaspettati
              e tecniche contemporanee.
            </p>
          </div>
        </div>

        {/* Emanuele & Samantha */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Chef Emanuele */}
          <div className="group">
            <div className="overflow-hidden mb-6">
              <img
                src={chefImg}
                alt="Chef Emanuele Bruneo"
                className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <p className="text-masa-gold tracking-[0.3em] uppercase text-xs mb-2">Lo Chef</p>
            <h3 className="font-serif text-2xl md:text-3xl mb-4">Emanuele Bruneo</h3>
            <p className="text-masa-cream/60 leading-relaxed">
              Con origini meridionali e il cuore nelle Orobie, Emanuele ha trasformato la sua
              più grande passione in una professione. Completamente autodidatta, ha aperto
              Masa Chalet con la determinazione di chi crede nei propri sogni. Ogni piatto
              è un'opera d'arte che fonde tradizione bergamasca e ricordi del Sud.
            </p>
          </div>

          {/* Samantha */}
          <div className="group">
            <div className="overflow-hidden mb-6">
              <img
                src={samanthaImg}
                alt="Samantha - Sala e accoglienza"
                className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <p className="text-masa-gold tracking-[0.3em] uppercase text-xs mb-2">La Sala</p>
            <h3 className="font-serif text-2xl md:text-3xl mb-4">Samantha</h3>
            <p className="text-masa-cream/60 leading-relaxed">
              Anima dell'accoglienza, Samantha trasforma ogni cena in un'esperienza speciale.
              Con eleganza e simpatia racconta i piatti, consiglia gli abbinamenti e crea
              quell'atmosfera calda e familiare che fa tornare ogni ospite.
              Insieme a Emanuele, nella vita e nel lavoro.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
