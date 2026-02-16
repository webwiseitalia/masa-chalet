import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import siteData from '../constants/siteData'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(siteData.cookieConsentKey)
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(siteData.cookieConsentKey, 'accepted')
    setVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem(siteData.cookieConsentKey, 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <>
      {/* Backdrop blur */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9998,
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          background: 'rgba(10, 15, 10, 0.5)',
        }}
      />

      {/* Banner */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          background: 'var(--c-dark)',
          borderTop: '1px solid rgba(240,233,220,0.1)',
          padding: 'clamp(1.5rem, 3vw, 2.5rem) clamp(1.5rem, 4vw, 3rem)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '280px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', color: 'var(--c-cream)', marginBottom: '0.5rem' }}>
                Informativa Cookie
              </p>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--c-cream-muted)', lineHeight: 1.7 }}>
                Questo sito utilizza esclusivamente cookie tecnici necessari al funzionamento.
                Non utilizziamo cookie di profilazione o tracciamento.
                Per maggiori informazioni consulta la nostra{' '}
                <Link to="/cookie-policy" style={{ color: 'var(--c-sage)', textDecoration: 'underline' }}>Cookie Policy</Link>{' '}
                e la{' '}
                <Link to="/privacy-policy" style={{ color: 'var(--c-sage)', textDecoration: 'underline' }}>Privacy Policy</Link>.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexShrink: 0, alignItems: 'center' }}>
              <button
                onClick={handleReject}
                style={{
                  padding: '0.75rem 1.75rem',
                  border: '1px solid var(--c-sage)',
                  background: 'transparent',
                  color: 'var(--c-sage)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontSize: 'var(--text-xs)',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
              >
                Rifiuta
              </button>
              <button
                onClick={handleAccept}
                style={{
                  padding: '0.75rem 1.75rem',
                  border: '1px solid var(--c-sage)',
                  background: 'var(--c-sage)',
                  color: 'var(--c-black)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontSize: 'var(--text-xs)',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
              >
                Accetta
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
