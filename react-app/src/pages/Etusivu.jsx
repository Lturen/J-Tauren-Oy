import { Link } from 'react-router-dom'
import { img } from '../data.js'
import { Cta } from '../components/Parts.jsx'

const shot = { width: '100%', borderRadius: 12, boxShadow: 'var(--shadow)' }

export default function Etusivu() {
  return (
    <>
      <section className="hero">
        <h1>Autosi kuntoon kerralla</h1>
        <p>Ammattitaitoista huoltoa ja korjausta Vantaalla. Ford Transit -erikoisosaamista ja palvelua kaikille bensa- ja dieselautoille.</p>
      </section>

      <section className="about-strip">
        <div className="container about-inner">
          <div>
            <h2 className="section-title">Autosi huoltoa ammattilaiselta</h2>
            <p className="section-sub">Vuosikymmenten kokemus merkistä ja mallista riippumatta</p>
            <p>Olipa kyseessä perheen kakkosauto, määräaikaishuolto tai vaativampi moottoriremontti, meiltä löytyy ammattitaito ja työkalut vian ratkaisemiseen.</p>
            <br />
            <p>Moderni diagnostiikkalaitteisto ja laadukkaat varaosat takaavat, että saat autollesi kerralla oikean korjauksen ilman ylimääräisiä kuluja tai viivytyksiä. Palvelemme joustavasti myös viikonloppuisin.</p>
            <Link to="/yksityinen/ajoneuvohuolto" className="btn" style={{ marginTop: 8 }}>Tutustu palveluihin</Link>
          </div>
          <img
            src={img('asentaja-vantaa.jpg')}
            alt="Asentaja huoltaa Ford Transitia Vantaalla"
            style={{ ...shot, maxHeight: 560, objectFit: 'cover', objectPosition: 'center 55%' }}
          />
        </div>
      </section>

      <section className="section">
        <div className="container about-inner">
          <img src={img('hitsaustyot-vantaa.jpg')} alt="Hitsauskone hitsaustöihin Vantaalla" style={shot} />
          <div>
            <h2 className="section-title">Hitsaustyöt ammattitaidolla</h2>
            <p className="section-sub">Rikkinäinen rakenne takaisin kuntoon</p>
            <p>Hitsaamme korirakenteita, pakokaasuputkistoja ja muita metallirakenteita. Ruostevaurio, haljennut kiinnike tai katsastusta vaivaava vika korjataan kestävästi, ja työ tehdään tarvittaessa autoon, veneeseen tai muuhun kohteeseen.</p>
            <br />
            <p>Hitsaus ja korjaus samassa paikassa tarkoittaa, että auto ei kierrä korjaamolta toiselle. Kerro tarpeesi, niin arvioimme työn ja sovimme aikataulun.</p>
            <Link to="/yksityinen/yhteystiedot" className="btn" style={{ marginTop: 8 }}>Kysy hitsaustyöstä</Link>
          </div>
        </div>
      </section>

      <section className="about-strip">
        <div className="container about-inner">
          <div>
            <h2 className="section-title">Veneen ja perämoottorin huolto</h2>
            <p>Kausihuollot, öljynvaihdot ja tekniset korjaukset: veneilykausi alkaa ilman huolia.</p>
            <br />
            <Link to="/yksityinen/veneidenhuolto" className="btn" style={{ marginTop: 8 }}>Lue lisää</Link>
          </div>
          <img src={img('peramoottorinoljynvaihto.jpg')} alt="Veneiden huolto" style={shot} />
        </div>
      </section>

      <section className="section">
        <div className="container about-inner">
          <img src={img('Tiepalvelukuva.png')} alt="Tiepalvelu" style={shot} />
          <div>
            <h2 className="section-title">Nopeasti auttava tiepalvelu</h2>
            <p>Rengas puhkesi tai akku hyytyi? Tulemme paikan päälle ratkaisemaan tilanteen nopeasti ja turvallisesti.</p>
            <br />
            <Link to="/yksityinen/tiepalvelu" className="btn" style={{ marginTop: 8 }}>Lue lisää</Link>
          </div>
        </div>
      </section>

      <Cta title="Onko autosi huollon tarpeessa?" text="Ota yhteyttä, niin vastataan nopeasti ja sovitaan sopiva aika." />
    </>
  )
}
