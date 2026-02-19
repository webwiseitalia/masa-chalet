import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import siteData from '../constants/siteData'

export default function CookiePolicy() {
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
            Cookie Policy
          </h1>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', marginTop: '0.5rem' }}>
            Informativa sull&rsquo;utilizzo dei cookie
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: 'clamp(2rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3rem)' }}>
        <div style={{ background: 'var(--c-dark)', border: '1px solid rgba(240,233,220,0.06)', padding: 'clamp(1.5rem, 4vw, 3rem)' }}>
          <p style={{ fontSize: 'var(--text-xs)', color: 'var(--c-cream-muted)', marginBottom: 'var(--space-md)' }}>
            Ultimo aggiornamento: {siteData.lastUpdated}
          </p>

          {/* Privacy-Friendly Badge */}
          <div style={{ background: 'rgba(74, 103, 65, 0.1)', border: '1px solid var(--c-green-muted)', padding: 'clamp(1rem, 2vw, 1.5rem)', marginBottom: 'var(--space-lg)', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(74, 103, 65, 0.2)', border: '2px solid var(--c-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '0.25rem' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--c-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', color: 'var(--c-cream)', marginBottom: '0.5rem' }}>Sito Privacy-Friendly</p>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 1.8 }}>
                Questo sito web utilizza <strong style={{ color: 'var(--c-cream)' }}>solo cookie tecnici</strong> necessari al funzionamento. <strong style={{ color: 'var(--c-cream)' }}>Non utilizziamo cookie di profilazione, tracciamento o analisi</strong>. La tua privacy è protetta e non serve il tuo consenso per la navigazione.
              </p>
            </div>
          </div>

          {/* 1. Cosa sono i Cookie */}
          <section style={{ marginBottom: 'var(--space-lg)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--c-cream)', marginBottom: 'var(--space-sm)' }}>
              1. Cosa sono i Cookie
            </h2>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 1.8 }}>
              I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo (computer, tablet o smartphone) quando visiti un sito web. I cookie permettono al sito di riconoscere il tuo dispositivo e memorizzare alcune informazioni sulle tue preferenze o azioni passate.
            </p>
          </section>

          {/* 2. Tipologie di Cookie */}
          <section style={{ marginBottom: 'var(--space-lg)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--c-cream)', marginBottom: 'var(--space-sm)' }}>
              2. Tipologie di Cookie
            </h2>

            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', color: 'var(--c-cream)', marginBottom: '0.75rem' }}>
              2.1 Cookie Tecnici
            </h3>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Sono cookie necessari al funzionamento del sito e permettono di navigare e utilizzare le funzionalità base. Senza questi cookie, il sito potrebbe non funzionare correttamente.
            </p>
            <div style={{ background: 'rgba(74, 103, 65, 0.1)', border: '1px solid var(--c-green-muted)', padding: '1rem', marginBottom: '1.5rem' }}>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--c-sage)', fontWeight: 600, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Cookie tecnici utilizzati su questo sito:</p>
              <ul style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 2, paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                <li>Cookie di navigazione e di sessione</li>
                <li>Cookie per memorizzare le preferenze dell&rsquo;interfaccia</li>
              </ul>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--c-cream-muted)', marginTop: '0.75rem', fontStyle: 'italic' }}>
                Secondo la normativa vigente, i cookie tecnici non richiedono il consenso dell&rsquo;utente.
              </p>
            </div>

            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', color: 'var(--c-cream)', marginBottom: '0.75rem' }}>
              2.2 Cookie Analitici
            </h3>
            <div style={{ background: 'rgba(200, 60, 60, 0.06)', border: '1px solid rgba(200, 60, 60, 0.15)', padding: '1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ color: '#e88', fontSize: '1.2rem', flexShrink: 0 }}>&#10007;</span>
              <div>
                <p style={{ fontSize: 'var(--text-sm)', color: '#e88', fontWeight: 600 }}>NON UTILIZZATI</p>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--c-cream-muted)' }}>Questo sito NON utilizza cookie analitici come Google Analytics o simili per tracciare il comportamento degli utenti.</p>
              </div>
            </div>

            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', color: 'var(--c-cream)', marginBottom: '0.75rem' }}>
              2.3 Cookie di Profilazione
            </h3>
            <div style={{ background: 'rgba(200, 60, 60, 0.06)', border: '1px solid rgba(200, 60, 60, 0.15)', padding: '1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ color: '#e88', fontSize: '1.2rem', flexShrink: 0 }}>&#10007;</span>
              <div>
                <p style={{ fontSize: 'var(--text-sm)', color: '#e88', fontWeight: 600 }}>NON UTILIZZATI</p>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--c-cream-muted)' }}>Questo sito NON utilizza cookie di profilazione per creare profili utente o inviare pubblicità mirata.</p>
              </div>
            </div>

            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', color: 'var(--c-cream)', marginBottom: '0.75rem' }}>
              2.4 Cookie di Terze Parti
            </h3>
            <div style={{ background: 'rgba(200, 60, 60, 0.06)', border: '1px solid rgba(200, 60, 60, 0.15)', padding: '1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ color: '#e88', fontSize: '1.2rem', flexShrink: 0 }}>&#10007;</span>
              <div>
                <p style={{ fontSize: 'var(--text-sm)', color: '#e88', fontWeight: 600 }}>NON UTILIZZATI</p>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--c-cream-muted)' }}>Questo sito NON utilizza servizi di terze parti che installano cookie (Facebook Pixel, Google Ads, ecc.).</p>
              </div>
            </div>
          </section>

          {/* 3. Cookie Utilizzati */}
          <section style={{ marginBottom: 'var(--space-lg)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--c-cream)', marginBottom: 'var(--space-sm)' }}>
              3. Cookie Utilizzati su Questo Sito
            </h2>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Il nostro sito utilizza esclusivamente i seguenti cookie tecnici:
            </p>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'var(--text-sm)' }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '0.75rem', borderBottom: '1px solid rgba(240,233,220,0.15)', color: 'var(--c-cream)', fontWeight: 600, fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Nome Cookie</th>
                    <th style={{ textAlign: 'left', padding: '0.75rem', borderBottom: '1px solid rgba(240,233,220,0.15)', color: 'var(--c-cream)', fontWeight: 600, fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Tipologia</th>
                    <th style={{ textAlign: 'left', padding: '0.75rem', borderBottom: '1px solid rgba(240,233,220,0.15)', color: 'var(--c-cream)', fontWeight: 600, fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Finalità</th>
                    <th style={{ textAlign: 'left', padding: '0.75rem', borderBottom: '1px solid rgba(240,233,220,0.15)', color: 'var(--c-cream)', fontWeight: 600, fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Durata</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '0.75rem', borderBottom: '1px solid rgba(240,233,220,0.06)', color: 'var(--c-cream-muted)' }}>{siteData.cookieConsentKey}</td>
                    <td style={{ padding: '0.75rem', borderBottom: '1px solid rgba(240,233,220,0.06)' }}>
                      <span style={{ fontSize: 'var(--text-xs)', background: 'rgba(74, 103, 65, 0.2)', color: 'var(--c-sage)', padding: '0.2rem 0.5rem', letterSpacing: '0.05em' }}>Tecnico</span>
                    </td>
                    <td style={{ padding: '0.75rem', borderBottom: '1px solid rgba(240,233,220,0.06)', color: 'var(--c-cream-muted)' }}>Memorizza lo stato di espansione/chiusura della barra laterale per migliorare l&rsquo;esperienza di navigazione</td>
                    <td style={{ padding: '0.75rem', borderBottom: '1px solid rgba(240,233,220,0.06)', color: 'var(--c-cream-muted)' }}>7 giorni</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div style={{ background: 'rgba(201, 169, 110, 0.08)', border: '1px solid rgba(201, 169, 110, 0.2)', padding: '1rem', marginTop: '1.5rem' }}>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 1.8 }}>
                <strong style={{ color: 'var(--c-accent)' }}>Nota importante:</strong> I cookie tecnici come &ldquo;{siteData.cookieConsentKey}&rdquo; sono essenziali per il funzionamento del sito e non richiedono il consenso dell&rsquo;utente ai sensi del Provvedimento del Garante Privacy n. 229/2014 e del GDPR.
              </p>
            </div>
          </section>

          {/* 4. Come Gestire i Cookie */}
          <section style={{ marginBottom: 'var(--space-lg)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--c-cream)', marginBottom: 'var(--space-sm)' }}>
              4. Come Gestire i Cookie
            </h2>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Anche se i cookie tecnici come &ldquo;{siteData.cookieConsentKey}&rdquo; non richiedono consenso, puoi comunque gestirli o eliminarli attraverso le impostazioni del tuo browser:
            </p>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream)', fontWeight: 600, marginBottom: '0.75rem' }}>Disabilitare i cookie tramite il browser:</p>
            <ul style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 2, paddingLeft: '1.5rem', listStyleType: 'disc', marginBottom: '1.5rem' }}>
              <li><strong style={{ color: 'var(--c-cream)' }}>Google Chrome:</strong> Impostazioni &rarr; Privacy e sicurezza &rarr; Cookie e altri dati dei siti</li>
              <li><strong style={{ color: 'var(--c-cream)' }}>Mozilla Firefox:</strong> Preferenze &rarr; Privacy e sicurezza &rarr; Cookie e dati dei siti web</li>
              <li><strong style={{ color: 'var(--c-cream)' }}>Safari:</strong> Preferenze &rarr; Privacy &rarr; Cookie e dati dei siti web</li>
              <li><strong style={{ color: 'var(--c-cream)' }}>Microsoft Edge:</strong> Impostazioni &rarr; Cookie e autorizzazioni del sito &rarr; Gestisci e elimina cookie</li>
            </ul>
            <div style={{ background: 'rgba(201, 169, 110, 0.08)', border: '1px solid rgba(201, 169, 110, 0.2)', padding: '1rem' }}>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 1.8 }}>
                <strong style={{ color: 'var(--c-accent)' }}>Attenzione:</strong> La disabilitazione completa dei cookie tecnici potrebbe compromettere alcune funzionalità del sito e ridurre la qualità dell&rsquo;esperienza di navigazione.
              </p>
            </div>
          </section>

          {/* 5. Link a Siti Esterni */}
          <section style={{ marginBottom: 'var(--space-lg)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--c-cream)', marginBottom: 'var(--space-sm)' }}>
              5. Link a Siti Esterni
            </h2>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 1.8 }}>
              Il nostro sito potrebbe contenere link a siti web di terze parti. Non siamo responsabili per le pratiche di privacy o il contenuto di tali siti esterni. Ti invitiamo a leggere le informative sulla privacy dei siti che visiti.
            </p>
          </section>

          {/* 6. Aggiornamenti */}
          <section style={{ marginBottom: 'var(--space-lg)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--c-cream)', marginBottom: 'var(--space-sm)' }}>
              6. Aggiornamenti della Cookie Policy
            </h2>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Questa Cookie Policy può essere modificata nel tempo. Eventuali modifiche sostanziali saranno comunicate attraverso un avviso pubblicato su questa pagina.
            </p>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 1.8 }}>
              Ti invitiamo a consultare periodicamente questa pagina per rimanere aggiornato sull&rsquo;utilizzo dei cookie sul nostro sito.
            </p>
          </section>

          {/* 7. Base Normativa */}
          <section style={{ marginBottom: 'var(--space-lg)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--c-cream)', marginBottom: 'var(--space-sm)' }}>
              7. Base Normativa
            </h2>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Questa Cookie Policy è redatta in conformità a:
            </p>
            <ul style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 2, paddingLeft: '1.5rem', listStyleType: 'disc' }}>
              <li>Regolamento (UE) 2016/679 del Parlamento Europeo (GDPR)</li>
              <li>Direttiva 2002/58/CE (Direttiva ePrivacy) aggiornata dalla Direttiva 2009/136/CE</li>
              <li>Provvedimento del Garante per la protezione dei dati personali dell&rsquo;8 maggio 2014, n. 229</li>
              <li>Linee guida cookie e altri strumenti di tracciamento del 10 giugno 2021</li>
            </ul>
          </section>

          {/* 8. Contatti */}
          <section style={{ marginBottom: 'var(--space-md)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--c-cream)', marginBottom: 'var(--space-sm)' }}>
              8. Contatti
            </h2>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Per domande o chiarimenti su questa Cookie Policy, puoi contattarci:
            </p>
            <div style={{ background: 'var(--c-dark-warm)', border: '1px solid rgba(240,233,220,0.08)', padding: '1rem' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', color: 'var(--c-cream)', fontWeight: 500, marginBottom: '0.5rem' }}>{siteData.name}</p>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 2 }}>
                {siteData.address.full}<br />
                Email: <a href={siteData.contact.emailLink} style={{ color: 'var(--c-sage)' }}>{siteData.contact.email}</a><br />
                Tel: <a href={siteData.contact.phoneLink} style={{ color: 'var(--c-sage)' }}>{siteData.contact.phone}</a>
              </p>
            </div>
          </section>

          {/* Zero Tracking Badge */}
          <div style={{ textAlign: 'center', padding: 'var(--space-md) 0', marginTop: 'var(--space-md)', borderTop: '1px solid rgba(240,233,220,0.06)' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(74, 103, 65, 0.15)', border: '2px solid var(--c-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--c-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', color: 'var(--c-cream)', marginBottom: '0.5rem' }}>Zero Tracciamento</p>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)' }}>Naviga tranquillo: questo sito rispetta la tua privacy e non traccia le tue attività online.</p>
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
            to="/privacy-policy"
            style={{ padding: '0.85rem 2rem', border: '1px solid rgba(240,233,220,0.3)', color: 'var(--c-cream)', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: 'var(--text-xs)', transition: 'all 0.4s' }}
          >
            Leggi la Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  )
}
