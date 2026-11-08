import { Routes, Route } from 'react-router-dom'
import Valinta from './pages/Valinta.jsx'
import Layout from './components/Layout.jsx'
import Etusivu from './pages/Etusivu.jsx'
import Ajoneuvohuolto from './pages/Ajoneuvohuolto.jsx'
import Veneidenhuolto from './pages/Veneidenhuolto.jsx'
import Tiepalvelu from './pages/Tiepalvelu.jsx'
import Yhteystiedot from './pages/Yhteystiedot.jsx'
import Aukioloajat from './pages/Aukioloajat.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Valinta />} />
      <Route path="/yksityinen" element={<Layout />}>
        <Route index element={<Etusivu />} />
        <Route path="ajoneuvohuolto" element={<Ajoneuvohuolto />} />
        <Route path="veneidenhuolto" element={<Veneidenhuolto />} />
        <Route path="tiepalvelu" element={<Tiepalvelu />} />
        <Route path="yhteystiedot" element={<Yhteystiedot />} />
        <Route path="aukioloajat" element={<Aukioloajat />} />
      </Route>
    </Routes>
  )
}
