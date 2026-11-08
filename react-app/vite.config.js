import fs from 'node:fs'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Kehityksessä tarjoillaan vanha staattinen sivusto (yritysasiakkaille)
// repositorion juuresta, jotta "Yritysasiakas"-linkki toimii myös `npm run dev`-tilassa.
function legacySite() {
  const root = path.resolve(__dirname, '..')
  const types = { '.html': 'text/html', '.css': 'text/css', '.png': 'image/png', '.jpg': 'image/jpeg', '.avif': 'image/avif', '.ico': 'image/x-icon' }
  return {
    name: 'legacy-site',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = decodeURIComponent((req.url || '').split('?')[0])
        const legacy = ['/index.html', '/ajoneuvohuolto', '/veneidenhuolto', '/tiepalvelu', '/yhteystiedot', '/aukioloajat', '/style.css']
        const isLegacy = legacy.includes(url) || /^\/(palvelut|tiepalvelu|Veneiden huolto kuvia)\//.test(url) || /^\/[^/]+\.(avif|jpg|png)$/.test(url)
        if (!isLegacy) return next()
        let file = path.join(root, url)
        if (!path.extname(file)) file += '.html'
        if (!file.startsWith(root) || !fs.existsSync(file) || !fs.statSync(file).isFile()) return next()
        res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream')
        fs.createReadStream(file).pipe(res)
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), legacySite()],
})
