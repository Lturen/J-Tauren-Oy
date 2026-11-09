import { useState, useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { img, YRITYS_URL } from '../data.js'

export default function Layout() {
  const [open, setOpen] = useState(false)
  const [sub, setSub] = useState(null)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
    setSub(null)
    window.scrollTo(0, 0)
  }, [pathname])

  const toggleSub = (name) => (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault()
      setSub(sub === name ? null : name)
    }
  }

  return (
    <div className="theme-red">
      <header>
        <div className="container">
          <Link to="/" aria-label="Takaisin asiakastyypin valintaan" title="Takaisin asiakastyypin valintaan">
            <img src={img('logo.png')} alt="J Taurén Oy logo" className="header-logo" />
          </Link>
          <Link to="/yksityinen" className="site-title">
            J Tauren <span>Oy</span>
            <small>Fordeihin erikoistunut huolto &amp; korjaus</small>
          </Link>
        </div>
      </header>

      <div className="navbar">
        <div className="container">
          <button className="nav-toggle" aria-label="Avaa valikko" onClick={() => setOpen(!open)}>
            <span></span><span></span><span></span>
          </button>
          <nav id="main-nav" className={open ? 'open' : ''}>
            <ul>
              <li><NavLink to="/yksityinen" end>Etusivu</NavLink></li>
              <li className={`nav-item ${sub === 'p' ? 'open' : ''}`}>
                <NavLink to="/yksityinen/ajoneuvohuolto" onClick={toggleSub('p')}>
                  Palvelut <span className="nav-arrow">▼</span>
                </NavLink>
                <ul className="dropdown">
                  <li><NavLink to="/yksityinen/ajoneuvohuolto">Auton huolto &amp; korjaus</NavLink></li>
                  <li><NavLink to="/yksityinen/veneidenhuolto">Veneiden huolto</NavLink></li>
                  <li><NavLink to="/yksityinen/tiepalvelu">Tiepalvelu</NavLink></li>
                </ul>
              </li>
              <li><NavLink to="/yksityinen/viikonloppupaivystys">Viikonloppupäivystys</NavLink></li>
              <li className={`nav-item ${sub === 'y' ? 'open' : ''}`}>
                <NavLink to="/yksityinen/yhteystiedot" onClick={toggleSub('y')}>
                  Yhteystiedot <span className="nav-arrow">▼</span>
                </NavLink>
                <ul className="dropdown">
                  <li><NavLink to="/yksityinen/yhteystiedot">Yhteystiedot</NavLink></li>
                  <li><NavLink to="/yksityinen/aukioloajat">Aukioloajat</NavLink></li>
                </ul>
              </li>
              <li className="nav-switch"><a href={YRITYS_URL}>Yritysasiakkaille</a></li>
            </ul>
          </nav>
        </div>
      </div>

      <Outlet />

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h4>J Taurén Oy</h4>
              <p>Fordeihin erikoistunut huolto &amp; korjaus.<br />Ammattitaitoista palvelua Transit-omistajille.</p>
              <p>Y-tunnus: 3469119-6</p>
            </div>
            <div className="footer-col">
              <h4>Sivut</h4>
              <Link to="/yksityinen">Etusivu</Link>
              <Link to="/yksityinen/ajoneuvohuolto">Palvelut</Link>
              <Link to="/yksityinen/viikonloppupaivystys">Viikonloppupäivystys</Link>
              <Link to="/yksityinen/yhteystiedot">Yhteystiedot</Link>
              <Link to="/">Vaihda asiakastyyppiä</Link>
            </div>
            <div className="footer-col">
              <h4>Yhteystiedot</h4>
              <p>📞 040 140 0847</p>
              <p>✉️ janne@jtauren.com</p>
              <p>📍 Santaradantie 7 A 129, 01380 Vantaa</p>
            </div>
          </div>
          <div className="footer-bottom">
            &copy; 2026 J Taurén Oy. Kaikki oikeudet pidätetään.<br />
            <small style={{ opacity: 0.6 }}>Sivuston toteutus: Lauri Taurén</small>
          </div>
        </div>
      </footer>

      <a href="tel:+358401400847" className="call-fab" aria-label="Soita meille">📞</a>
    </div>
  )
}
