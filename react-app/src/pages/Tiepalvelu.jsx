import { PageHero, ServiceGrid, Cta } from '../components/Parts.jsx'
import { tiePalvelut } from '../data.js'

export default function Tiepalvelu() {
  return (
    <>
      <PageHero image="Tiepalvelukuva.png" title="Tiepalvelu Vantaa" text="Jäikö auto tienpäälle? Ota yhteyttä." />
      <section className="section">
        <div className="container">
          <h2 className="section-title">Tiepalvelut Vantaalla ja lähialueilla</h2>
          <p className="section-sub">Jäitkö tien päälle tai puhkesiko rengas? Autamme nopeasti.</p>
          <ServiceGrid items={tiePalvelut} />
        </div>
      </section>
      <section className="section" style={{ background: 'var(--white)', padding: '48px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Tiepalvelu: soita heti</h2>
          <p className="section-sub">Vastaamme puhelimeen ja tulemme paikalle niin nopeasti kuin mahdollista.</p>
          <a href="tel:+358404880361" className="btn" style={{ fontSize: '1.3rem', padding: '18px 40px' }}>📞 040 4880361</a>
        </div>
      </section>
      <Cta title="Muuta apua tarvitaan?" text="Jätä yhteydenottopyyntö ja palaamme asiaan." />
    </>
  )
}
