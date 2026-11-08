import { PageHero, ServiceGrid, Cta } from '../components/Parts.jsx'
import { autoPalvelut } from '../data.js'

export default function Ajoneuvohuolto() {
  return (
    <>
      <PageHero image="auto/autokorjaamo.avif" title="Auton huolto & korjaus Vantaalla" text="Ammattitaitoista huoltoa ja korjausta, kerralla kuntoon." />
      <section className="section">
        <div className="container">
          <h2 className="section-title">Mitä teemme?</h2>
          <p className="section-sub">Kattava valikoima huolto- ja korjauspalveluita autollesi</p>
          <ServiceGrid items={autoPalvelut} />
        </div>
      </section>
      <Cta title="Varaa huoltoaika" text="Ota yhteyttä, niin sovitaan sopiva aika nopeasti." />
    </>
  )
}
