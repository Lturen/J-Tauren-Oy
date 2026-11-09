import { Link } from 'react-router-dom'
import { img, YRITYS_URL } from '../data.js'

export default function Valinta() {
  return (
    <div className="valinta">
      <div className="valinta-main">
        <h1>J Tauren Oy</h1>
        <img className="ford-badge" src={img('ford-huolto-vantaa.webp')} alt="Ford-huolto Vantaa" />
        <p>Fordeihin erikoistunut huolto &amp; korjaus, Vantaa. Valitse asiakastyyppi:</p>
        <div className="valinta-cards">
          <Link to="/yksityinen" className="valinta-card privat">
            <img className="card-img" src={img('autokorjaamo-tuusula.jpg')} alt="Kaikki merkit autohuolto" />
            <strong>Yksityisasiakas</strong>
            <span className="sub">Oma auto, vene tai tiepalvelu</span>
          </Link>
          <a href={YRITYS_URL} className="valinta-card yritys">
            <img className="card-img" src={img('logo.png')} alt="J Taurén Oy logo" />
            <strong>Yritysasiakas</strong>
            <span className="sub">Yritysten ajoneuvot ja kalusto</span>
          </a>
        </div>
      </div>
    </div>
  )
}
