import { Link } from 'react-router-dom'
import { img } from '../data.js'

export function PageHero({ image, title, text, height = 340 }) {
  return (
    <section
      className="hero"
      style={{ padding: 0, position: 'relative', minHeight: height, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
    >
      <img src={img(image)} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35 }} />
      <div style={{ position: 'relative', textAlign: 'center', padding: '60px 24px' }}>
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  )
}

export function ServiceGrid({ items }) {
  return (
    <div className="service-img-grid">
      {items.map(([title, src, text]) => (
        <div className="service-img-card" key={title}>
          <img loading="lazy" src={img(src)} alt={title} />
          <div className="card-body">
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export function Cta({ title, text }) {
  return (
    <section className="cta-strip">
      <div className="container">
        <h2>{title}</h2>
        <p>{text}</p>
        <Link to="/yksityinen/yhteystiedot" className="btn">Ota yhteyttä</Link>
      </div>
    </section>
  )
}
