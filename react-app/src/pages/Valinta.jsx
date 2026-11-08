import { Link } from 'react-router-dom'
import { img, YRITYS_URL } from '../data.js'

export default function Valinta() {
  return (
    <div className="valinta">
      <div className="valinta-main">
        <img src={img('logo.png')} alt="J Taurén Oy logo" />
        <h1>J Tauren Oy</h1>
        <p>Fordeihin erikoistunut huolto &amp; korjaus, Vantaa. Valitse asiakastyyppi:</p>
        <div className="valinta-cards">
          <Link to="/yksityinen" className="valinta-card privat">
            <span className="icon">🚗</span>
            <strong>Yksityisasiakas</strong>
            <span className="sub">Oma auto, vene tai tiepalvelu</span>
          </Link>
          <a href={YRITYS_URL} className="valinta-card yritys">
            <span className="icon">🏢</span>
            <strong>Yritysasiakas</strong>
            <span className="sub">Yritysten ajoneuvot ja kalusto</span>
          </a>
        </div>
      </div>
    </div>
  )
}
