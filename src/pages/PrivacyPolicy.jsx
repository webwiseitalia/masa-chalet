import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import siteData from '../constants/siteData'

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ background: 'var(--c-black)', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ background: 'var(--c-dark-warm)', padding: 'clamp(2rem, 5vw, 3.5rem) clamp(1.5rem, 4vw, 3rem)', paddingTop: 'clamp(3rem, 6vw, 5rem)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Link
            to="/"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--c-sage)', fontSize: 'var(--text-xs)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem', transition: 'color 0.3s' }}
          >
            &larr; Torna alla Home
          </Link>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', fontWeight: 500, lineHeight: 1, color: 'var(--c-cream)' }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', marginTop: '0.5rem' }}>
            Informativa sul trattamento dei dati personali
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: 'clamp(2rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3rem)' }}>
        <div style={{ background: 'var(--c-dark)', border: '1px solid rgba(240,233,220,0.06)', padding: 'clamp(1.5rem, 4vw, 3rem)' }}>
          <p style={{ fontSize: 'var(--text-xs)', color: 'var(--c-cream-muted)', marginBottom: 'var(--space-md)' }}>
            Ultimo aggiornamento: {siteData.lastUpdated}
          </p>

          {/* 1. Titolare del Trattamento */}
          <section style={{ marginBottom: 'var(--space-lg)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--c-cream)', marginBottom: 'var(--space-sm)' }}>
              1. Titolare del Trattamento
            </h2>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Il Titolare del trattamento dei dati personali è:
            </p>
            <div style={{ background: 'var(--c-dark-warm)', border: '1px solid rgba(240,233,220,0.08)', padding: 'clamp(1rem, 2vw, 1.5rem)' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', color: 'var(--c-cream)', fontWeight: 500, marginBottom: '0.75rem' }}>{siteData.name}</p>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 2 }}>
                {siteData.address.full}<br />
                Tel: <a href={siteData.contact.phoneLink} style={{ color: 'var(--c-sage)' }}>{siteData.contact.phone}</a><br />
                Email: <a href={siteData.contact.emailLink} style={{ color: 'var(--c-sage)' }}>{siteData.contact.email}</a><br />
                P.IVA: {siteData.piva}
              </p>
            </div>
          </section>

          {/* 2. Dati Raccolti e Finalità */}
          <section style={{ marginBottom: 'var(--space-lg)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--c-cream)', marginBottom: 'var(--space-sm)' }}>
              2. Dati Raccolti e Finalità del Trattamento
            </h2>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', color: 'var(--c-cream)', marginBottom: '0.75rem' }}>
              2.1 Dati forniti volontariamente dall&rsquo;utente
            </h3>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Tramite il modulo di contatto presente sul sito, raccogliamo i seguenti dati personali:
            </p>
            <ul style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 2, paddingLeft: '1.5rem', listStyleType: 'disc', marginBottom: '1rem' }}>
              <li><strong style={{ color: 'var(--c-cream)' }}>Nome e Cognome</strong> - per identificare l&rsquo;interessato</li>
              <li><strong style={{ color: 'var(--c-cream)' }}>Indirizzo Email</strong> - per rispondere alle richieste</li>
              <li><strong style={{ color: 'var(--c-cream)' }}>Numero di Telefono</strong> (facoltativo) - per contatti telefonici</li>
              <li><strong style={{ color: 'var(--c-cream)' }}>Messaggio/Descrizione del Progetto</strong> - per comprendere le esigenze</li>
            </ul>
            <div style={{ background: 'rgba(74, 103, 65, 0.1)', border: '1px solid var(--c-green-muted)', padding: '1rem', marginBottom: '1.5rem' }}>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--c-sage)', fontWeight: 600, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Finalità</p>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 1.8 }}>
                I dati vengono raccolti esclusivamente per:
              </p>
              <ul style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 2, paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                <li>Rispondere alle richieste di prenotazione</li>
                <li>Fornire informazioni sui nostri servizi</li>
                <li>Organizzare sopralluoghi e consultazioni</li>
                <li>Gestire la relazione commerciale</li>
              </ul>
            </div>

            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', color: 'var(--c-cream)', marginBottom: '0.75rem' }}>
              2.2 Base giuridica del trattamento
            </h3>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 1.8 }}>
              Il trattamento è basato sul <strong style={{ color: 'var(--c-cream)' }}>consenso esplicito</strong> dell&rsquo;interessato (Art. 6, par. 1, lett. a del GDPR), fornito attraverso l&rsquo;invio del modulo di contatto, e sulla <strong style={{ color: 'var(--c-cream)' }}>esecuzione di misure precontrattuali</strong> (Art. 6, par. 1, lett. b del GDPR).
            </p>
          </section>

          {/* 3. Modalità di Trattamento */}
          <section style={{ marginBottom: 'var(--space-lg)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--c-cream)', marginBottom: 'var(--space-sm)' }}>
              3. Modalità di Trattamento
            </h2>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
              I dati personali sono trattati con strumenti informatici e/o telematici, con logiche strettamente correlate alle finalità indicate e, comunque, in modo da garantire la sicurezza e la riservatezza dei dati stessi.
            </p>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 1.8 }}>
              Adottiamo misure di sicurezza tecniche e organizzative adeguate per proteggere i dati personali da accessi non autorizzati, perdita, distruzione o divulgazione.
            </p>
          </section>

          {/* 4. Conservazione dei Dati */}
          <section style={{ marginBottom: 'var(--space-lg)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--c-cream)', marginBottom: 'var(--space-sm)' }}>
              4. Conservazione dei Dati
            </h2>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
              I dati personali vengono conservati per il tempo strettamente necessario a gestire le richieste ricevute e le relazioni commerciali conseguenti.
            </p>
            <ul style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 2, paddingLeft: '1.5rem', listStyleType: 'disc' }}>
              <li><strong style={{ color: 'var(--c-cream)' }}>Richieste di preventivo:</strong> i dati vengono conservati per 24 mesi dalla richiesta, salvo instaurazione di rapporto contrattuale</li>
              <li><strong style={{ color: 'var(--c-cream)' }}>Rapporti contrattuali:</strong> i dati vengono conservati per 10 anni in conformità agli obblighi fiscali e contabili</li>
              <li><strong style={{ color: 'var(--c-cream)' }}>Richieste di informazioni:</strong> i dati vengono conservati per 12 mesi dalla risposta</li>
            </ul>
          </section>

          {/* 5. Comunicazione e Diffusione dei Dati */}
          <section style={{ marginBottom: 'var(--space-lg)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--c-cream)', marginBottom: 'var(--space-sm)' }}>
              5. Comunicazione e Diffusione dei Dati
            </h2>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
              I dati personali non vengono diffusi e possono essere comunicati esclusivamente a:
            </p>
            <ul style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 2, paddingLeft: '1.5rem', listStyleType: 'disc', marginBottom: '1.5rem' }}>
              <li>Personale interno autorizzato al trattamento (titolare e collaboratori)</li>
              <li>Professionisti esterni (commercialisti, consulenti legali) vincolati da obblighi di riservatezza</li>
              <li>Autorità competenti in caso di richieste legittime previste per legge</li>
            </ul>
            <div style={{ background: 'rgba(200, 60, 60, 0.08)', border: '1px solid rgba(200, 60, 60, 0.2)', padding: '1rem' }}>
              <p style={{ fontSize: 'var(--text-xs)', color: '#e88', fontWeight: 600, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>I tuoi dati NON verranno MAI:</p>
              <ul style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 2, paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                <li>Venduti a terze parti</li>
                <li>Condivisi con scopi di marketing</li>
                <li>Utilizzati per invio di newsletter non richieste</li>
                <li>Trasferiti fuori dell&rsquo;Unione Europea</li>
              </ul>
            </div>
          </section>

          {/* 6. Diritti dell'Interessato */}
          <section style={{ marginBottom: 'var(--space-lg)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--c-cream)', marginBottom: 'var(--space-sm)' }}>
              6. Diritti dell&rsquo;Interessato
            </h2>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
              In qualità di interessato, hai il diritto di:
            </p>
            <ul style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 2, paddingLeft: '1.5rem', listStyleType: 'disc', marginBottom: '1.5rem' }}>
              <li><strong style={{ color: 'var(--c-cream)' }}>Accesso (Art. 15 GDPR):</strong> Ottenere conferma dell&rsquo;esistenza dei tuoi dati e riceverne copia</li>
              <li><strong style={{ color: 'var(--c-cream)' }}>Rettifica (Art. 16 GDPR):</strong> Richiedere la correzione di dati inesatti o incompleti</li>
              <li><strong style={{ color: 'var(--c-cream)' }}>Cancellazione (Art. 17 GDPR):</strong> Richiedere la cancellazione dei dati (&ldquo;diritto all&rsquo;oblio&rdquo;)</li>
              <li><strong style={{ color: 'var(--c-cream)' }}>Limitazione (Art. 18 GDPR):</strong> Richiedere la limitazione del trattamento</li>
              <li><strong style={{ color: 'var(--c-cream)' }}>Portabilità (Art. 20 GDPR):</strong> Ricevere i dati in formato strutturato e trasferirli ad altro titolare</li>
              <li><strong style={{ color: 'var(--c-cream)' }}>Opposizione (Art. 21 GDPR):</strong> Opporsi al trattamento dei dati personali</li>
              <li><strong style={{ color: 'var(--c-cream)' }}>Revoca del consenso:</strong> Revocare il consenso in qualsiasi momento</li>
            </ul>
            <div style={{ background: 'rgba(74, 103, 65, 0.1)', border: '1px solid var(--c-green-muted)', padding: '1rem' }}>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--c-sage)', fontWeight: 600, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Come esercitare i tuoi diritti:</p>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 1.8 }}>
                Puoi esercitare i tuoi diritti inviando una richiesta via email a <a href={siteData.contact.emailLink} style={{ color: 'var(--c-sage)' }}>{siteData.contact.email}</a> o tramite raccomandata A/R all&rsquo;indirizzo: {siteData.address.full}.<br />
                Risponderemo entro <strong style={{ color: 'var(--c-cream)' }}>30 giorni</strong> dalla ricezione della richiesta.
              </p>
            </div>
          </section>

          {/* 7. Diritto di Reclamo */}
          <section style={{ marginBottom: 'var(--space-lg)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--c-cream)', marginBottom: 'var(--space-sm)' }}>
              7. Diritto di Reclamo
            </h2>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Hai il diritto di proporre reclamo all&rsquo;Autorità Garante per la protezione dei dati personali se ritieni che il trattamento dei tuoi dati violi il GDPR.
            </p>
            <div style={{ background: 'var(--c-dark-warm)', border: '1px solid rgba(240,233,220,0.08)', padding: '1rem' }}>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--c-sage)', fontWeight: 600, marginBottom: '0.5rem' }}>Garante per la protezione dei dati personali:</p>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 1.8 }}>
                Sito web: <a href="https://www.garanteprivacy.it" style={{ color: 'var(--c-sage)' }} target="_blank" rel="noopener noreferrer">www.garanteprivacy.it</a><br />
                Email: garante@gpdp.it<br />
                PEC: protocollo@pec.gpdp.it
              </p>
            </div>
          </section>

          {/* 8. Cookie e Tecnologie di Tracciamento */}
          <section style={{ marginBottom: 'var(--space-lg)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--c-cream)', marginBottom: 'var(--space-sm)' }}>
              8. Cookie e Tecnologie di Tracciamento
            </h2>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 1.8 }}>
              Il nostro sito utilizza esclusivamente cookie tecnici necessari al funzionamento. Per maggiori informazioni, consulta la nostra <Link to="/cookie-policy" style={{ color: 'var(--c-sage)' }}>Cookie Policy</Link>.
            </p>
          </section>

          {/* 9. Modifiche alla Privacy Policy */}
          <section style={{ marginBottom: 'var(--space-lg)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--c-cream)', marginBottom: 'var(--space-sm)' }}>
              9. Modifiche alla Privacy Policy
            </h2>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 1.8 }}>
              Ci riserviamo il diritto di modificare o aggiornare questa Privacy Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento. Ti invitiamo a consultare periodicamente questa pagina per essere sempre informato sulle nostre politiche di privacy.
            </p>
          </section>

          {/* 10. Contatti */}
          <section style={{ marginBottom: 'var(--space-md)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--c-cream)', marginBottom: 'var(--space-sm)' }}>
              10. Contatti
            </h2>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Per qualsiasi domanda o richiesta relativa al trattamento dei tuoi dati personali, puoi contattarci:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href={siteData.contact.emailLink} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--c-sage)', fontSize: 'var(--text-sm)' }}>
                {siteData.contact.email}
              </a>
              <a href={siteData.contact.phoneLink} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--c-sage)', fontSize: 'var(--text-sm)' }}>
                {siteData.contact.phone}
              </a>
            </div>
          </section>

          <div style={{ borderTop: '1px solid rgba(240,233,220,0.06)', paddingTop: 'var(--space-md)', marginTop: 'var(--space-md)', textAlign: 'center' }}>
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--c-cream-muted)', lineHeight: 1.8 }}>
              Questa Privacy Policy è conforme al Regolamento (UE) 2016/679 (GDPR) e al D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018.
            </p>
          </div>
        </div>

        {/* Navigation buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: 'var(--space-lg)' }}>
          <Link
            to="/"
            style={{ padding: '0.85rem 2rem', border: '1px solid rgba(240,233,220,0.3)', color: 'var(--c-cream)', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: 'var(--text-xs)', transition: 'all 0.4s' }}
          >
            Torna alla Home
          </Link>
          <Link
            to="/cookie-policy"
            style={{ padding: '0.85rem 2rem', border: '1px solid rgba(240,233,220,0.3)', color: 'var(--c-cream)', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: 'var(--text-xs)', transition: 'all 0.4s' }}
          >
            Leggi la Cookie Policy
          </Link>
        </div>
      </div>
    </div>
  )
}
