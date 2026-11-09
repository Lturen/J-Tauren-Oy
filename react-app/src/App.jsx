import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Valinta from './pages/Valinta.jsx'
import Layout from './components/Layout.jsx'
import Etusivu from './pages/Etusivu.jsx'
import Ajoneuvohuolto from './pages/Ajoneuvohuolto.jsx'
import Veneidenhuolto from './pages/Veneidenhuolto.jsx'
import Tiepalvelu from './pages/Tiepalvelu.jsx'
import Yhteystiedot from './pages/Yhteystiedot.jsx'
import Aukioloajat from './pages/Aukioloajat.jsx'
import Viikonloppupaivystys from './pages/Viikonloppupaivystys.jsx'

// Ohjaa vanhat osoitteet (esim. QR-koodit, hakutulokset) uuteen paikkaan
function Redirect({ to }) {
  useEffect(() => { window.location.replace(to) }, [to])
  return null
}

const legacy = ['ajoneuvohuolto', 'veneidenhuolto', 'tiepalvelu', 'yhteystiedot', 'aukioloajat']

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Valinta />} />
      <Route path="/index.html" element={<Navigate to="/" replace />} />
      {legacy.map((p) => (
        <Route key={p} path={`/${p}`} element={<Redirect to={`/yritys/${p}`} />} />
      ))}
      <Route path="/yksityinen" element={<Layout />}>
        <Route index element={<Etusivu />} />
        <Route path="ajoneuvohuolto" element={<Ajoneuvohuolto />} />
        <Route path="veneidenhuolto" element={<Veneidenhuolto />} />
        <Route path="tiepalvelu" element={<Tiepalvelu />} />
        <Route path="yhteystiedot" element={<Yhteystiedot />} />
        <Route path="aukioloajat" element={<Aukioloajat />} />
        <Route path="viikonloppupaivystys" element={<Viikonloppupaivystys />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
