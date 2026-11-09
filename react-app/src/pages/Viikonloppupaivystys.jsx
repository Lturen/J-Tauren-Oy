import { Link } from 'react-router-dom'
import { PageHero, Cta } from '../components/Parts.jsx'

const TITLE = 'Autokorjaamo auki viikonloppuisin Vantaa | Viikonloppupäivystys – J Taurén Oy'
const DESC =
  'Autokorjaamo Vantaalla palvelee viikonloppuisin päivystyksen merkeissä resurssien puitteissa. Huollot, korjaukset ja tiepalvelu myös lauantaina ja sunnuntaina. Soita ja sovitaan aika.'

const faq = [
  [
    'Onko autokorjaamo auki lauantaisin ja sunnuntaisin?',
    'J Taurén Oy:llä ei ole kiinteitä aukioloaikoja. Teemme töitä myös viikonloppuisin päivystyksen merkeissä resurssien puitteissa. Soita tai jätä yhteydenottopyyntö, niin sovitaan sinulle sopiva aika.',
  ],
  [
    'Millaisia töitä viikonloppuisin tehdään?',
    'Määräaikaishuollot, jarruhuollot, vikadiagnostiikka, katsastuskunnostus, rengastyöt ja muut korjaukset. Palvelemme Ford Transit -ajoneuvojen lisäksi kaikkia bensa- ja dieselautoja merkistä riippumatta.',
  ],
  [
    'Auto jäi tien päälle viikonloppuna. Voiko tiepalvelua tilata?',
    'Kyllä. Soita tiepalvelunumeroon 040 488 0361, niin kerromme, miten ja milloin pääsemme auttamaan.',
  ],
  [
    'Pitääkö viikonloppuaika varata etukäteen?',
    'Suosittelemme soittamaan tai laittamaan viestiä mahdollisimman ajoissa, sillä päivystys perustuu sovittuihin aikoihin. Kiireellisissä vioissa soita suoraan.',
  ],
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

export default function Viikonloppupaivystys() {
  return (
    <>
      <title>{TITLE}</title>
      <meta name="description" content={DESC} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        image="auto/autokorjaamo.avif"
        title="Autokorjaamo auki viikonloppuisin Vantaalla"
        text="Viikonloppupäivystys: palvelemme lauantaisin ja sunnuntaisin resurssien puitteissa, kun arkena ei ehdi."
      />

      <section className="section">
        <div className="container">
          <h2 className="section-title">Viikonloppupäivystys Vantaalla</h2>
          <p className="section-sub">Huolto ja korjaus silloin kun sinulle sopii</p>
          <p>
            Arki on usein liian kiireistä auton huoltoon. Siksi J Taurén Oy palvelee myös viikonloppuisin
            päivystyksen merkeissä. Meillä ei ole perinteisiä kiinteitä aukioloaikoja, vaan sovimme ajan yhdessä
            niin, että se sopii sinun aikatauluusi. Lauantai tai sunnuntai käy huoltopäiväksi siinä missä
            arkipäiväkin.
          </p>
          <br />
          <p>
            Viikonloppupäivystys toimii resurssien puitteissa. Käytännössä se tarkoittaa, että aika sovitaan
            ennakkoon puhelimella tai viestillä, ja kiireellisissä tapauksissa teemme parhaamme auttaaksemme
            mahdollisimman pian.
          </p>
        </div>
      </section>

      <section className="about-strip">
        <div className="container">
          <h2 className="section-title">Mitä voimme tehdä viikonloppuna?</h2>
          <p className="section-sub">Autojen huolto ja korjaus Vantaalla myös lauantaisin ja sunnuntaisin</p>
          <ul style={{ paddingLeft: 22 }}>
            <li>Määräaikaishuollot ja öljynvaihdot</li>
            <li>Jarruhuollot ja alustatyöt</li>
            <li>Vikadiagnostiikka ja vikakoodien luku</li>
            <li>Katsastuskunnostus ennen katsastusta</li>
            <li>Rengastyöt ja hitsaustyöt</li>
            <li>Tiepalvelu, kun auto jää tien päälle</li>
          </ul>
          <br />
          <p>
            Palvelemme Ford Transit -pakettiautojen lisäksi kaikkia bensa- ja dieselautoja merkistä ja mallista
            riippumatta.{' '}
            <Link to="/yksityinen/ajoneuvohuolto" style={{ color: 'var(--blue-mid)', fontWeight: 600 }}>
              Katso kaikki palvelut
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--white)', padding: '48px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Sovi viikonloppuaika tai kysy päivystyksestä</h2>
          <p className="section-sub">Soita, niin katsotaan yhdessä sopiva aika.</p>
          <a href="tel:+358401400847" className="btn" style={{ fontSize: '1.3rem', padding: '18px 40px' }}>
            📞 040 140 0847
          </a>
          <p style={{ marginTop: 16 }}>
            Auto jäi tien päälle? Tiepalvelu:{' '}
            <a href="tel:+358404880361" style={{ color: 'var(--blue-mid)', fontWeight: 600 }}>040 488 0361</a>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Usein kysyttyä viikonloppupäivystyksestä</h2>
          {faq.map(([q, a]) => (
            <div key={q} style={{ marginTop: 20 }}>
              <h3>{q}</h3>
              <p>{a}</p>
            </div>
          ))}
        </div>
      </section>

      <Cta title="Ota yhteyttä" text="Jätä yhteydenottopyyntö, niin palaamme asiaan ja sovimme sopivan ajan." />
    </>
  )
}
