export const img = (p) => encodeURI(`/img/${p}`)

export const YRITYS_URL = import.meta.env.DEV ? '/index.html' : '/yritys/'

export const autoPalvelut = [
  ['Määräaikaishuollot', 'auto/Maaraikaishuollot.avif', 'Öljynvaihdot, suodattimet ja nesteiden tarkistukset valmistajan ohjeiden mukaan. Huoltokirja päivitetään aina.'],
  ['Jarruhuollot', 'auto/Jarruhuollot.avif', 'Jarrulevyt, -palat ja jarrunesteen vaihto. Turvallisuus on etusijalla.'],
  ['Diagnostiikka & vikakoodit', 'auto/Diagnostiikka & vikakoodit.avif', 'Ford-spesifisillä laitteilla luemme ja nollaamme vikakoodit sekä päivitämme ohjelmistoja.'],
  ['Moottori & voimansiirto', 'auto/Moottori & voimansiirto.avif', 'Moottorin, vaihteiston, kytkimen ja kardaanin korjaukset ja uusinnat.'],
  ['Alusta & jousitus', 'auto/Alusta & jousitus.avif', 'Iskunvaimentimet, jouset, raidetangot ja muut alustakomponentit. Suuntaus tarvittaessa.'],
  ['Sähköjärjestelmät', 'auto/Sahkojarjestelmat.avif', 'Akku, laturi, käynnistinmoottori, valaistus ja anturit.'],
  ['Ilmastointi', 'auto/Ilmastointi.avif', 'Ilmastointijärjestelmän huolto, kylmäaineen täyttö ja komponenttien vaihto.'],
  ['Hitsaustyöt', 'auto/Hitsaustyot.avif', 'Korirakenteen, pakokaasuputkiston ja muiden metallirakenteiden hitsaus ja korjaus.'],
  ['Katsastuskunnostus', 'auto/katsastuskunnostus.avif', 'Tarkistamme ja korjaamme puutteet ennen katsastusta, jotta läpäisy onnistuu ensimmäisellä kerralla.'],
  ['Rengastyöt', 'auto/rengastyot.avif', 'Renkaan vaihto, tasapainotus ja korjaus. Pidämme ajoneuvosi turvallisesti tiellä.'],
]

export const venePalvelut = [
  ['Moottorin huolto', 'vene/moottorin huolto.avif', 'Perämoottoreiden ja sisämoottoreiden huollot, öljynvaihdot ja suodattimet. Moottori kuntoon ennen vesille lähtöä.'],
  ['Mekaaniset korjaukset', 'vene/mekaaniset korjaukset.avif', 'Ohjausjärjestelmät, potkurit, akselit ja muut mekaaniset komponentit tarkistettuna ja korjattuna.'],
  ['Sähköjärjestelmät', 'vene/sahkojarjestelmat.avif', 'Akut, navigointilaitteet, valaistus ja muut veneen sähköiset järjestelmät.'],
  ['Hitsaustyöt', 'vene/hitsaustyot.avif', 'Metallirakenteiden, rungon ja muiden hitsausta vaativien osien korjaukset.'],
  ['Kausihuolto', 'vene/kausihuolto.avif', 'Kevät- ja syyshuollot: vesille lasku ja talvisäilytysvalmistelut kerralla kuntoon.'],
]

export const tiePalvelut = [
  ['Paikalla korjaus', 'tie/paikalla korjaus.avif', 'Pyrimme aina korjaamaan ajoneuvon paikan päällä, koska se on nopein tapa päästä taas liikkeelle.'],
  ['Akku & käynnistys', 'tie/autonapuvirta.avif', 'Tyhjä akku tai käynnistysvika hoidetaan paikan päällä: hyppykäynnistys tai akun vaihto tarpeen mukaan.'],
  ['Rengasrikko', 'tie/rengasrikko.avif', 'Renkaan vaihto tai paikkaustuki tienvarressa. Tarvittaessa järjestetään kuljetus lähimpään korjaamoon.'],
  ['Paikan päällä diagnostiikka', 'tie/paikan paalla diagnostiikka.avif', 'Kannettavalla diagnostiikkalaitteella selvitämme vian syyn nopeasti myös tienvarressa.'],
]
