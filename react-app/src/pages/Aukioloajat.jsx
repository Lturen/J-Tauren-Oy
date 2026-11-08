import { Cta } from '../components/Parts.jsx'

export default function Aukioloajat() {
  return (
    <>
      <section className="hero">
        <h1>Autokorjaamo auki viikonloppuisin Vantaa</h1>
        <p>Palvelemme joustavasti toiveidesi mukaan, myös viikonloppuisin.</p>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section-title">Aukioloajat</h2>
          <p className="section-sub">Ei kiinteitä aukioloaikoja: palvelemme silloin kun sinulle sopii</p>
          <p>J Tauren Oy:llä ei ole perinteisiä kiinteitä aukioloaikoja. Palvelemme asiakkaitamme joustavasti toiveiden mukaisesti. Sovitaan yhdessä aika, joka sopii juuri sinun aikatauluusi.</p>
          <br />
          <p>Töitä tehdään myös viikonloppuisin. Jos arki on kiireinen, lauantai tai sunnuntai käy huoltopäiväksi siinä missä arkipäiväkin.</p>
          <br />
          <p>Soita tai jätä yhteydenottopyyntö, niin sovitaan sopiva aika, olipa kyseessä määräaikaishuolto, korjaus tai kiireellisempi vika.</p>
        </div>
      </section>
      <Cta title="Sovitaan sinulle sopiva aika" text="Ota yhteyttä, palvelemme myös viikonloppuisin." />
    </>
  )
}
