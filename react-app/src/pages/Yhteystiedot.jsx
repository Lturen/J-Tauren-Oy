import { useState } from 'react'
import { PageHero } from '../components/Parts.jsx'

const palvelut = [
  ['maaraikaishuolto', 'Määräaikaishuolto'],
  ['jarruhuolto', 'Jarruhuolto'],
  ['diagnostiikka', 'Diagnostiikka / vikakoodit'],
  ['moottori', 'Moottori / voimansiirto'],
  ['ilmastointi', 'Ilmastointi'],
  ['alusta', 'Alusta / jousitus'],
  ['sahko', 'Sähköjärjestelmät'],
  ['katsastus', 'Katsastuskunnostus'],
  ['vene', 'Veneen huolto'],
  ['tiepalvelu', 'Tiepalvelu'],
  ['muu', 'Muu'],
]

const MAP =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1977.4133807204757!2d25.064351376724495!3d60.28969473378169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692064b40bdf0c3%3A0xa63b47ca2da1dfbc!2sSantaradantie%207%20129%2C%2001380%20Vantaa!5e0!3m2!1sen!2sfi!4v1782672078097!5m2!1sen!2sfi'

export default function Yhteystiedot() {
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    setStatus({ text: 'Lähetetään...', ok: true })
    try {
      const res = await fetch('https://formspree.io/f/mgaevqqd', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error()
      form.reset()
      setStatus({ text: 'Kiitos! Viesti lähetetty, palaamme asiaan pian.', ok: true })
    } catch {
      setStatus({ text: 'Lähetys epäonnistui. Soita numeroon 040 140 0847.', ok: false })
    }
  }

  return (
    <>
      <PageHero image="JTaurenOy.avif" title="Ota yhteyttä" height={300} />
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <div className="contact-box">
                <h3>Yhteystiedot</h3>
                <div className="contact-row">
                  <span className="ci">📞</span>
                  <div>
                    <strong>Puhelin</strong><br />
                    <a href="tel:+358401400847">040 140 0847</a><br />
                    <a href="tel:+358404880361">040 488 0361</a>
                  </div>
                </div>
                <div className="contact-row">
                  <span className="ci">✉️</span>
                  <div><strong>Sähköposti</strong><br /><a href="mailto:janne@jtauren.com">janne@jtauren.com</a></div>
                </div>
                <div className="contact-row">
                  <span className="ci">📍</span>
                  <div><strong>Osoite</strong><br />Santaradantie 7 A 129<br />01380 Vantaa</div>
                </div>
              </div>
              <div style={{ marginTop: 18, borderRadius: 10, overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
                <iframe title="Kartta" src={MAP} width="100%" height="280" style={{ border: 0, display: 'block' }} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
              </div>
            </div>

            <div className="contact-box">
              <h3>Lähetä viesti</h3>
              <form onSubmit={submit}>
                <input type="hidden" name="_subject" value="Yhteydenotto (yksityisasiakas) – jtauren.com" />
                <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />
                <input type="text" name="nimi" placeholder="Nimesi *" required />
                <input type="tel" name="puhelin" placeholder="Puhelinnumero" minLength={5} />
                <input type="email" name="email" placeholder="Sähköpostiosoite *" required />
                <select name="palvelu" defaultValue="">
                  <option value="" disabled>Valitse palvelu...</option>
                  {palvelut.map(([v, t]) => <option key={v} value={v}>{t}</option>)}
                </select>
                <input type="text" name="ajoneuvo" placeholder="Ajoneuvon malli ja vuosimalli (esim. Transit 2019)" />
                <input type="text" name="rekisterinumero" placeholder="Rekisterinumero (esim. ABC-123)" />
                <textarea name="viesti" placeholder="Kerro lisää: miten voimme auttaa? *" required />
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.9rem', color: '#555', cursor: 'pointer' }}>
                  <input type="checkbox" name="gdpr" required style={{ marginTop: 3, width: 16, height: 16, flexShrink: 0, accentColor: 'var(--blue-mid)' }} />
                  <span>Hyväksyn, että antamiani yhteystietoja käytetään yhteydenottoon. Tietoja ei luovuteta kolmansille osapuolille.</span>
                </label>
                <button type="submit" className="btn">Lähetä viesti</button>
              </form>
              {status && <div style={{ marginTop: 14, fontWeight: 600, color: status.ok ? '#1e7e34' : '#c0392b' }}>{status.text}</div>}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
