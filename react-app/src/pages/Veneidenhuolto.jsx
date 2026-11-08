import { PageHero, ServiceGrid, Cta } from '../components/Parts.jsx'
import { venePalvelut } from '../data.js'

export default function Veneidenhuolto() {
  return (
    <>
      <PageHero image="peramoottorinoljynvaihto.jpg" title="Perämoottorin huolto Vantaa" text="Ammattitaitoista veneiden huolto- ja korjauspalvelua." />
      <section className="section">
        <div className="container">
          <h2 className="section-title">Veneiden huoltopalvelut</h2>
          <p className="section-sub">Huolehdimme veneesi kunnosta niin kauden alussa kuin sen aikanakin.</p>
          <ServiceGrid items={venePalvelut} />
        </div>
      </section>
      <Cta title="Varaa veneen huoltoaika" text="Ota yhteyttä, niin sovitaan sopiva aika." />
    </>
  )
}
