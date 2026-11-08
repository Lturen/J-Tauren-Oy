# J Taurén Oy – verkkosivusto

Vantaalla toimivan autokorjaamon (J Taurén Oy, Ford Transit -erikoisosaaminen) sivusto. Osoite: https://jtauren.com (GitHub Pages, `CNAME` juuressa). Repo: https://github.com/Lturen/J-Tauren-Oy. Kieli: suomi (kaikki sivustotekstit ja kommunikointi).

Yritys: Santaradantie 7 A 129, 01380 Vantaa. Puh. 040 140 0847 ja 040 488 0361 (tiepalvelu). janne@jtauren.com. Y-tunnus 3469119-6. Yhteydenottolomake lähetetään Formspreehen (`https://formspree.io/f/mgaevqqd`).

## Mitä projekti sisältää

### 1. Vanha staattinen sivusto (yritysasiakkaat) – repon juuri
Käsin kirjoitettu HTML/CSS ilman build-vaihetta. Sinisellä teemalla.
- Sivut: `index.html`, `ajoneuvohuolto.html`, `veneidenhuolto.html`, `tiepalvelu.html`, `yhteystiedot.html`, `aukioloajat.html` (+ `palvelut.html`, `compare-vans.html`)
- Tyylit: `style.css`; kuvat juuressa ja kansioissa `palvelut/`, `tiepalvelu/`, `Veneiden huolto kuvia/`
- Sisäiset linkit ovat suhteellisia ilman `.html`-päätettä (esim. `href="ajoneuvohuolto"`), osa juurilinkkejä (`href="/"`, `src="/palvelut/..."`).
- **Tähän ei ole koskettu** React-työn aikana.

### 2. React-versio (yksityisasiakkaat) – `react-app/`
Vite + React + React Router. Punainen teema.
- `/` – asiakastyypin valinta (`src/pages/Valinta.jsx`): Yksityisasiakas → `/yksityinen`, Yritysasiakas → vanha sivusto (`YRITYS_URL` tiedostossa `src/data.js`: kehityksessä `/index.html`, tuotannossa `/yritys/`).
- `/yksityinen/...` – etusivu, ajoneuvohuolto, veneidenhuolto, tiepalvelu, yhteystiedot (toimiva lomake), aukioloajat. Yhteinen runko `src/components/Layout.jsx`, apukomponentit `src/components/Parts.jsx`, palvelulistat `src/data.js`.
- Punainen teema: luokka `.theme-red` Layoutin ympärillä, värit CSS-muuttujina tiedostossa `src/react.css`. `src/style.css` on kopio vanhasta `style.css`:stä (muokkaa tarvittaessa erikseen).
- Kuvat: `react-app/public/img/` (kopioita; isot alkuperäiset pakattu: `asentaja-vantaa.jpg`, `hitsaustyot-vantaa.jpg`).
- Etusivun osiot vaihtelevat taustaa ja kuvan puolta: asentaja → hitsaustyöt (mainostaa hitsausosaamista) → venehuolto → tiepalvelu → CTA.
- Vanhat osoitteet ohjataan (`App.jsx`): `/index.html` → `/`; `/ajoneuvohuolto`, `/veneidenhuolto`, `/tiepalvelu`, `/yhteystiedot`, `/aukioloajat` → `/yritys/...`; tuntemattomat → `/`. Syy: käyntikortin QR-koodi osoittaa `index.html`:ään.
- Kehityksessä `vite.config.js`:n `legacySite`-plugin tarjoilee vanhan sivuston juuresta, jotta Yritysasiakas-linkki toimii.

Ajo: `cd react-app && npm run dev` → http://localhost:5173. (VS Code Live Server näyttää vain vanhan sivuston.) Build: `npm run build`.

### 3. Julkaisu – `.github/workflows/deploy.yml`
GitHub Actions: buildaa Reactin ja kokoaa sivuston: React juureen, vanha sivusto kopioidaan polkuun `/yritys/` (juurilinkit korjataan `sed`illä), `404.html` = React `index.html` (SPA-reititys Pagesissa), `CNAME` mukaan.
- Push `developer` tai `main`: build ajetaan.
- Julkaisu Pagesiin **vain `main`-haarasta**.

## Tila (8.11.2026)
- Työ on `developer`-haarassa ja pushattu GitHubiin (viimeisin commit `8c2d844`). **`main` on koskematon, livesivusto ennallaan.** Käyttäjä ei halua yhdistää `main`iin ennen kuin on katsonut tuloksen.
- Selaimessa ulkoasua ei ole varmistettu kuin käyttäjän omalla katselulla; GitHub Actions -ajoa ei ole vielä nähty onnistuvan GitHubissa.

## Ennen mergeä `main`iin
1. Tarkista Actions-välilehdeltä, että `developer`-buildi on vihreä.
2. GitHub: Settings → Pages → Source = **GitHub Actions** (vaihda vasta juuri ennen mergeä, muuten livesivusto voi mennä tyhjäksi).
3. Päätä, vieläkö QR/`/index.html` ohjataan valintasivulle (nykyinen) vai suoraan `/yritys/`-etusivulle.
4. Tarkista hitsausosion teksti (osa on Clauden muotoilua: "hitsaus ja korjaus samassa paikassa", vene/muu kohde).
5. Harkitse auton rekisterikilven (SXZ-172) sumennusta kuvassa `asentaja-vantaa.jpg`.
6. Merge: PR https://github.com/Lturen/J-Tauren-Oy/pull/new/developer tai `git checkout main && git merge developer && git push`.

## Tiedossa / siivottavaa
- Viten mallitiedostot jäivät käyttämättöminä: `react-app/src/App.css`, `src/index.css`, `src/assets/`, `public/icons.svg` (poistokomento estettiin; poista käsin).
- Juuressa seuraamatta isot alkuperäiskuvat (`Asentaja_vantaa.jpg`, `Hitsaustyöt_Vanta.jpg`, `Hitsaustyöt_Vantaa.jpg`); niitä ei commitoitu. Käytössä pakatut kopiot `react-app/public/img/`. `Hitsaustyöt_Vanta.jpg` (yhden a:n versio) on käyttämättä.
- Yritysasiakkaan puolta ei ole uusittu Reactilla; mahdollinen seuraava vaihe.
- Työskentele `developer`-haarassa; tarkista haara: `git branch --show-current`.
