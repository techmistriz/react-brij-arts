// Serendipity Arts Festival — International / Cultural Projects Atlas
// Two narratives:
//   • institutional  → projects commissioned with foreign institutions / embassies
//   • thematic       → projects that read the culture of a country or Indian region,
//                       without an external institutional commission.

import ouinchImg from "@/assets/atlas/ouinch-ouinch.jpg.asset.json";
import antigoneImg from "@/assets/atlas/antigone.jpg.asset.json";
import shaktiImg from "@/assets/atlas/shakti.jpg.asset.json";
import pixelImg from "@/assets/atlas/pixel.jpg.asset.json";
import carbonImg from "@/assets/atlas/carbon.jpg.asset.json";
import kubaImg from "@/assets/atlas/uploads/kuba-wojcik-trio.png.asset.json";
import fieldsImg from "@/assets/atlas/uploads/fields-of-forces.png.asset.json";
import folksImg from "@/assets/atlas/uploads/thats-all-folks.png.asset.json";
import bellsImg from "@/assets/atlas/uploads/the-bells.png.asset.json";
import toDaBoneImg from "@/assets/atlas/uploads/to-da-bone.png.asset.json";
import superStrangerImg from "@/assets/atlas/uploads/super-stranger.png.asset.json";
import motherhoodImg from "@/assets/atlas/uploads/motherhood.png.asset.json";
import indiaInVeniceImg from "@/assets/atlas/uploads/india-in-venice.jpg.asset.json";
import superheroImg from "@/assets/atlas/uploads/superhero-cover.png.asset.json";
import refletImg from "@/assets/atlas/uploads/reflet-cover.png.asset.json";
import razaiImg from "@/assets/atlas/uploads/razai-cover.png.asset.json";
import crashImg from "@/assets/atlas/uploads/crash-cover.png.asset.json";
import foliosImg from "@/assets/atlas/uploads/folios-cover.png.asset.json";
import chunkyMoveImg from "@/assets/atlas/uploads/chunky-move-cover.png.asset.json";
import arlesImg from "@/assets/atlas/uploads/arles-cover.png.asset.json";
import birminghamImg from "@/assets/atlas/uploads/birmingham-cover.jpg.asset.json";
import promenadeImg from "@/assets/atlas/uploads/promenade-cover.png.asset.json";
import laMerImg from "@/assets/atlas/uploads/la-mer-cover.png.asset.json";
import nousVenonsImg from "@/assets/atlas/uploads/nous-venons-cover.png.asset.json";
import caravaggioImg from "@/assets/atlas/uploads/caravaggio-cover.png.asset.json";
import resurgenceImg from "@/assets/atlas/uploads/resurgence-cover.png.asset.json";
import centroHistoricoImg from "@/assets/atlas/uploads/centro-historico-cover.png.asset.json";
import mundoGoaImg from "@/assets/atlas/uploads/mundo-goa-cover.png.asset.json";
import palyantasiaImg from "@/assets/atlas/uploads/palyantasia-cover.png.asset.json";
import embroideryImg from "@/assets/atlas/uploads/embroidery-cover.png.asset.json";
import suspensioImg from "@/assets/atlas/uploads/suspensio-cover.png.asset.json";
import bSideCloudyKuImg from "@/assets/atlas/uploads/b-side-cloudy-ku-cover.png.asset.json";
import bellsGif from "@/assets/atlas/gifs/bells.webp";
import refletGif from "@/assets/atlas/gifs/reflet.webp";
import suspensioGif from "@/assets/atlas/gifs/suspensio.webp";
import crashGif from "@/assets/atlas/gifs/crash.webp";
import arlesGif from "@/assets/atlas/gifs/arles-grant-2025.webp";
import chunkyMoveGif from "@/assets/atlas/gifs/chunky-move.webp";
import foliosGif from "@/assets/atlas/gifs/folios-of-time.webp";
import superheroGif from "@/assets/atlas/gifs/super-hero.webp";
import chariWadooGif from "@/assets/atlas/gifs/chari-wadoo.webp";
import carpentryGif from "@/assets/atlas/gifs/carpentry.webp";
import culinaryOdysseyGif from "@/assets/atlas/gifs/culinary-odyssey.webp";
import deusNosAcudiGif from "@/assets/atlas/gifs/deus-nos-acudi.webp";
import echoesGif from "@/assets/atlas/gifs/echoes-chitrakathi.webp";
import embroideryGif from "@/assets/atlas/gifs/embroidery.webp";
import enowateGif from "@/assets/atlas/gifs/enowate.webp";
import feathersGif from "@/assets/atlas/gifs/feathers-on-water.webp";
import futureOfSaltGif from "@/assets/atlas/gifs/future-of-goa-salt.webp";
import bebincaGif from "@/assets/atlas/gifs/goa-is-a-bebinca.webp";
import palyanytsiaGif from "@/assets/atlas/gifs/palyantasia.webp";
import potteryGif from "@/assets/atlas/gifs/pottery-without-clay.webp";
import rammanGif from "@/assets/atlas/gifs/ramman.webp";
import smallestTraditionsGif from "@/assets/atlas/gifs/smallest-big-traditions.webp";

export type ProjectCategory = "institutional" | "thematic";

export type AtlasProject = {
  title: string;
  country: string;
  partners?: string;
  state?: string;
  year: number;
  discipline: string;
  url?: string;
  notes?: string;
  category: ProjectCategory;
  collaborator?: string;
  image?: string;
  imageSourceUrl?: string;
  gif?: string;
};

export type LatLng = { lat: number; lng: number };

export const DISCIPLINES = [
  "Dance",
  "Theatre",
  "Music",
  "Visual Arts",
  "Photography",
  "Film",
  "Craft",
  "Culinary Arts",
  "Literature",
  "Residency",
  "Multidisciplinary",
] as const;

export const COUNTRY_COORDS: Record<string, LatLng> = {
  India: { lat: 22.0, lng: 79.0 },
  France: { lat: 46.6, lng: 2.2 },
  "United Kingdom": { lat: 54.0, lng: -2.0 },
  Switzerland: { lat: 46.82, lng: 8.23 },
  "Dominican Republic": { lat: 18.74, lng: -70.16 },
  Japan: { lat: 36.2, lng: 138.25 },
  Poland: { lat: 51.92, lng: 19.13 },
  Italy: { lat: 41.87, lng: 12.56 },
  Germany: { lat: 51.16, lng: 10.45 },
  Australia: { lat: -25.27, lng: 133.77 },
  Denmark: { lat: 56.26, lng: 9.5 },
  Taiwan: { lat: 23.69, lng: 120.96 },
  Belgium: { lat: 50.5, lng: 4.47 },
  Portugal: { lat: 39.4, lng: -8.2 },
  Nigeria: { lat: 9.08, lng: 8.67 },
  Ukraine: { lat: 48.38, lng: 31.17 },
  Mozambique: { lat: -18.67, lng: 35.53 },
  Malawi: { lat: -13.25, lng: 34.3 },
  Kenya: { lat: -0.02, lng: 37.9 },
  Tanzania: { lat: -6.37, lng: 34.89 },
  Uganda: { lat: 1.37, lng: 32.29 },
  Angola: { lat: -11.2, lng: 17.87 },
};

export const STATE_COORDS: Record<string, LatLng> = {
  Goa: { lat: 15.49, lng: 73.82 },
  Delhi: { lat: 28.61, lng: 77.21 },
  Ladakh: { lat: 34.15, lng: 77.58 },
  "Jammu & Kashmir": { lat: 33.78, lng: 76.57 },
  "Tamil Nadu": { lat: 11.13, lng: 78.66 },
  Kerala: { lat: 10.85, lng: 76.27 },
  Rajasthan: { lat: 27.02, lng: 74.22 },
  Maharashtra: { lat: 19.66, lng: 75.71 },
  Uttarakhand: { lat: 30.07, lng: 79.02 },
  "West Bengal": { lat: 22.98, lng: 87.85 },
  Punjab: { lat: 31.15, lng: 75.34 },
  Chhattisgarh: { lat: 21.27, lng: 81.86 },
  Meghalaya: { lat: 25.46, lng: 91.36 },
  Manipur: { lat: 24.66, lng: 93.9 },
};

const A24 = "https://archive2024.serendipityartsfestival.com";
const A23 = "https://archive2023.serendipityartsfestival.com";
const A19 = "https://archive.serendipityartsfestival.com/archives-2019";
const LIVE = "https://www.serendipityartsfestival.com";
const ORG = "https://serendipityarts.org";

export const PROJECTS: AtlasProject[] = [
  { category: "institutional", title: "City as Stage: Presentation", country: "United Kingdom", partners: "India + United Kingdom", year: 2023, discipline: "Theatre", url: `${A23}/program/city-as-stage`, notes: "British Council programme pairing Indian practitioners with UK advisor Pooja Ghai (Tamasha Theatre Company)." },
  { category: "institutional", title: "Ouinch Ouinch: Happy Hype", country: "Switzerland", year: 2023, discipline: "Dance", url: `${A23}/program/ouinch-ouinch-happy-hype`, image: ouinchImg.url, notes: "Compagnie des Marmots Geneva, supported by Pro Helvetia and the Swiss Embassy — 75 years of Switzerland–India relations." },
  { category: "institutional", title: "Street Canvas: Hand-Painted Signs from India and the Dominican Republic", country: "Dominican Republic", partners: "India + Dominican Republic", year: 2023, discipline: "Photography", url: `${A23}/exhibition/street-canvas-hand-painted-signs-from-india-and-the-dominican-republic`, notes: "Aradhana Seth and Maurice Sanchez — supported by the Embassy of the Dominican Republic in India." },
  { category: "institutional", title: "Serendipity Arles Grant 2023–24: Phase I", country: "France", partners: "France + South Asia", year: 2023, discipline: "Photography", url: `${A23}/exhibition/serendipity-arles-grant-2023-24-phase-i`, notes: "Les Rencontres d’Arles × SAF, supported by Institut Français en Inde — flagship India–France photography exchange." },
  { category: "institutional", title: "Antigone, Interrupted", country: "United Kingdom", partners: "Scotland / United Kingdom", year: 2023, discipline: "Dance", url: `${A23}/program/antigone-interrupted`, image: antigoneImg.url, notes: "Scottish Dance Theatre, toured via British Council under the Made in Scotland strand." },
  { category: "institutional", title: "Shakti", country: "Japan", partners: "India + Japan", year: 2023, discipline: "Dance", url: `${A23}/program/shakti`, image: shaktiImg.url, notes: "Indo-Japanese dance theatre with Navdhara India Dance Theatre, produced with Japan Foundation New Delhi." },
  { category: "institutional", title: "Pixel", country: "France", year: 2023, discipline: "Dance", url: `${A23}/program/pixel`, image: pixelImg.url, notes: "Compagnie Käfig × Adrien M & Claire B — hip-hop and digital projection, supported by Institut Français and Alliance Française." },
  { category: "institutional", title: "Fields of Forces", country: "France", year: 2023, discipline: "Visual Arts", url: "https://archive2023.serendipityartsfestival.com/exhibition/fields-of-forces", image: fieldsImg.url, notes: "Musée d’Art Moderne de Paris video collection, curated by Jessica Castex and Odile Burluraux." },

  { category: "institutional", title: "The Kuba Wójcik Trio", country: "Poland", year: 2024, discipline: "Music", url: `${A24}/programmes/the-kuba-wojcik-trio`, image: kubaImg.url, notes: "Polish guitarist Kuba Wójcik with trio, supported by the Polish Institute New Delhi and Jazz Po Polsku Foundation." },
  { category: "institutional", title: "That's All Folks!", country: "Italy", partners: "Italy + Germany + France", year: 2024, discipline: "Dance", url: `${A24}/programmes/thats-all-folks`, image: folksImg.url, notes: "A co-production between Pina Bausch Zentrum, Fondazione Fabbrica Europa, CHATHA Lyon and 2 WORKS (D. Papaioannou)." },
  { category: "institutional", title: "Carbon", country: "United Kingdom", partners: "India + UK + USA + Germany", year: 2024, discipline: "Visual Arts", url: `${A24}/exhibition/carbon`, image: carbonImg.url, notes: "Science Gallery Bengaluru — international science-art exhibition curated by Ravi Agarwal.", collaborator: "Science Gallery Bengaluru" },
  { category: "institutional", title: "The Bells", country: "Australia", year: 2024, discipline: "Theatre", url: `${A24}/programmes/the-bells`, image: bellsImg.url, gif: bellsGif, notes: "5ANGRYMen Theatre Company — supported by the Centre for Australia-India Relations and the Australian Consulate-General Mumbai." },
  { category: "institutional", title: "TO DA BONE", country: "France", year: 2024, discipline: "Dance", url: `${A24}/programmes/to-da-bone`, image: toDaBoneImg.url, notes: "(La)Horde collective — Institut Français, Charleroi danse, Théâtre de la Ville, Gaîté Lyrique.", collaborator: "(La)Horde · Charleroi danse · Théâtre de la Ville de Paris" },
  { category: "institutional", title: "Super Stranger", country: "Japan", year: 2024, discipline: "Dance", url: `${A24}/programmes/super-stranger`, image: superStrangerImg.url, notes: "Yuki Aoki / Newcomer “H” Sokerissa! — supported by Japan Foundation India and The Big Issue Japan Foundation." },
  { category: "institutional", title: "M(Other)Hood", country: "Taiwan", partners: "Taiwan + Germany + India", year: 2024, discipline: "Dance", url: `${A24}/programmes/motherhood`, image: motherhoodImg.url, notes: "Fan Xiang Jun — rare India–Taiwan–Germany collaboration via Goethe Institut India and Taipei Performing Arts Center." },
  { category: "institutional", title: "Geographies of Yourself", country: "Germany", year: 2024, discipline: "Visual Arts", url: `${A24}/programmes/geographies-of-yourself`, imageSourceUrl: `${A24}/programmes/geographies-of-yourself`, notes: "Loans from Berlin gallery neugerriemschneider — Ai Weiwei, Olafur Eliasson, Tomás Saraceno, Sheba Chhachhi, Zarina Hashmi.", collaborator: "Gallery neugerriemschneider, Berlin" },
  { category: "institutional", title: "Pilgrim", country: "Denmark", year: 2024, discipline: "Dance", url: `${A24}/programmes/pilgrim`, notes: "Mark Philip / Uppercut Dance Theater — supported by the Danish Arts Foundation." },
  { category: "institutional", title: "The Poetics of Waters", country: "France", year: 2024, discipline: "Visual Arts", url: `${A24}/exhibition/poetics-of-waters`, notes: "Emmanuelle Huynh & Jocelyn Cottenin — Centre national des arts plastiques + Loire Atlantique + Saint-Nazaire." },
  { category: "institutional", title: "India in Venice — Venice Biennale", country: "Italy", partners: "India + Italy", year: 2024, discipline: "Visual Arts", url: "https://indiainvenice.com/", image: indiaInVeniceImg.url, notes: "India Pavilion at the Venice Biennale — Serendipity Arts’ international platform for Indian contemporary art on the world stage." },

  { category: "institutional", title: "Superhero", country: "Australia", partners: "Australia + India", year: 2025, discipline: "Dance", url: `${LIVE}/programmes/superhero-goa`, image: superheroImg.url, gif: superheroGif, notes: "Raghav Handa × Attakkalari Centre for Movement Arts — Creative Australia + Centre for Australia-India Relations (Maitri Grant)." },
  { category: "institutional", title: "Reflet", country: "France", year: 2025, discipline: "Dance", url: `${LIVE}/programmes/reflet-2-goa`, image: refletImg.url, gif: refletGif, notes: "Xuan LE & Shihya PENG — contemporary dance, hip-hop, roller-skating; French Embassy, Institut Français, Alliance Française." },
  { category: "institutional", title: "Razai", country: "Italy", partners: "India + Italy + Japan", year: 2025, discipline: "Dance", url: `${LIVE}/programmes/razai-goa`, image: razaiImg.url, notes: "Jayachandran Palazhy — trilateral commission with Istituto Italiano di Cultura Mumbai and Japan Foundation India." },
  { category: "institutional", title: "Suspensio Spiritualis", country: "Poland", year: 2025, discipline: "Visual Arts", url: `${LIVE}/`, image: suspensioImg.url, gif: suspensioGif, notes: "Tomasz Koclęga — humanoid sculptures at the Art Park, supported by the Polish Institute in India." },
  { category: "institutional", title: "B-Side: Cloudy Ku", country: "Australia", year: 2025, discipline: "Music", url: `${LIVE}/`, image: bSideCloudyKuImg.url, notes: "Serendipity × Asia TOPA Exchange — Centre for Australia-India Relations expanding into electronic music." },
  { category: "institutional", title: "CRASH!", country: "Denmark", partners: "Denmark + India", year: 2025, discipline: "Dance", url: `${LIVE}/`, image: crashImg.url, gif: crashGif, notes: "Uppercut Dance Theater × Indian street dancers — supported by the Danish Cultural Institute India." },
  { category: "institutional", title: "Folios of Time 2.0", country: "United Kingdom", partners: "United Kingdom + India", year: 2025, discipline: "Dance", url: `${LIVE}/`, image: foliosImg.url, gif: foliosGif, notes: "British Council residency: Dickson Mbi (UK) & Ashley Lobo (India) mentor emerging movement artists." },
  { category: "institutional", title: "Chunky Move — You, Beauty", country: "Australia", year: 2025, discipline: "Dance", url: `${LIVE}/`, image: chunkyMoveImg.url, gif: chunkyMoveGif, notes: "Australian contemporary dance — Asia TOPA, Arts Centre Melbourne, Creative Australia." },
  { category: "institutional", title: "Serendipity × Arles Grant 2025", country: "France", partners: "France + South Asia", year: 2025, discipline: "Photography", url: `${LIVE}/programmes`, image: arlesImg.url, gif: arlesGif, notes: "Third edition of the longest-running bilateral grant at SAF, with Les Rencontres d’Arles and Institut Français India." },
  { category: "institutional", title: "Home Is Where the Heart Is", country: "United Kingdom", year: 2025, discipline: "Craft", url: `${LIVE}/`, notes: "Roo Dhissou & Nilupa Yasmin — British Council × Craftspace (Made in the Middle)." },
  { category: "institutional", title: "Serendipity Arts Festival — Mini Edition Birmingham", country: "United Kingdom", partners: "India + United Kingdom", year: 2025, discipline: "Multidisciplinary", url: "https://archive-safminiedition.serendipityartsfestival.com/birmingham", image: birminghamImg.url, notes: "May 23–26, 2025 at Royal Birmingham Conservatoire & Symphony Hall, in partnership with Birmingham City University." },
  { category: "institutional", title: "Serendipity Arts London — Great Exhibition Road Festival", country: "United Kingdom", partners: "India + United Kingdom", year: 2025, discipline: "Multidisciplinary", url: "https://serendipityarts.org/serendipity-arts-london/", notes: "Two interventions across South Kensington and Science Museum Lates as part of the Great Exhibition Road Festival, in partnership with Imperial College London." },

  { category: "thematic", title: "Promenade avec François", country: "France", year: 2024, discipline: "Visual Arts", url: `${A24}/programmes/promenade-avec-francois`, image: promenadeImg.url, notes: "A meditation on French photographic memory carried across to Goa." },
  { category: "thematic", title: "La mer allée avec le soleil / The Sea All Gone Along With the Sun", country: "France", year: 2024, discipline: "Visual Arts", url: `${A24}/programmes/la-mer-allee-avec-le-soleilthe-sea-all-gone-along-with-the-sun-2016`, image: laMerImg.url, notes: "A Francophone reflection on water, coast and migration." },
  { category: "thematic", title: "Nous venons de trop loin pour oublier qui nous sommes", country: "France", year: 2024, discipline: "Visual Arts", url: `${A24}/programmes/nous-venons-de-trop-loin-pour-oublier-qui-nous-sommes-2019-weve-come-too-far-to-forget-who-we-are`, image: nousVenonsImg.url, notes: "‘We’ve come too far to forget who we are’ — a diasporic French voice on identity and memory." },
  { category: "thematic", title: "Caravaggio — Magdalene in Ecstasy / Maddalena in Estasi", country: "Italy", year: 2025, discipline: "Visual Arts", url: `${LIVE}/programmes/caravaggio-magdalene-in-ecstasy-maddalena-in-estasi-goa`, image: caravaggioImg.url, notes: "A Caravaggio masterwork travels into Goa — a thread of Italian Baroque devotion." },
  { category: "thematic", title: "Isheeta Chakrvarty Collective & Gianni Denitto", country: "Italy", year: 2024, discipline: "Music", url: `${A24}/programmes/isheeta-chakrvarty-collective-and-gianni-denitto`, notes: "Italian saxophonist Gianni Denitto meets an Indian jazz collective." },
  { category: "thematic", title: "Taste Love! A Date with Limoncello 24", country: "Italy", year: 2024, discipline: "Culinary Arts", url: `${A24}/programmes/taste-love-a-date-with-limoncello-24`, notes: "A Southern-Italian aperitivo tradition tasted on the Goan shore." },
  { category: "thematic", title: "Mundo Goa", country: "Portugal", year: 2019, discipline: "Visual Arts", url: `${A19}/mundo-goa-39`, image: mundoGoaImg.url, notes: "Curated by Vivek Menezes — a Lusophone geography that stretches from Goa to the Atlantic.", collaborator: "Curated by Vivek Menezes" },
  { category: "thematic", title: "Azulejo 2019 — Mundo Goa", country: "Portugal", year: 2019, discipline: "Visual Arts", url: `${A19}/azulejo-2019-mundo-goa-40`, notes: "Portuguese tile-painting traditions read through a Goan lens.", collaborator: "Curated by Vivek Menezes" },
  { category: "thematic", title: "Altar — Mundo Goa", country: "Portugal", year: 2019, discipline: "Visual Arts", url: `${A19}/altar-mundo-goa-41`, notes: "Amruta Patil reframes the Portuguese-Catholic altar from a Goan perspective.", collaborator: "Amruta Patil" },
  { category: "thematic", title: "ICON — Mundo Goa", country: "Portugal", year: 2019, discipline: "Visual Arts", url: `${A19}/icon-mundo-goa-50`, notes: "Solomon Souza paints saints, sailors and the iconography of the Lusophone world.", collaborator: "Solomon Souza" },
  { category: "thematic", title: "Let There Be Love — Mundo Goa", country: "Portugal", year: 2019, discipline: "Visual Arts", url: `${A19}/let-there-be-love-mundo-goa-47`, notes: "Brendan Fernandes layers diasporic queerness onto a Portuguese-Goan inheritance.", collaborator: "Brendan Fernandes" },
  { category: "thematic", title: "Resurgence of Memory: Oceanic Archives and the Portuguese Connection", country: "Portugal", year: 2024, discipline: "Literature", url: `${A24}/programmes/resurgence-of-memory-oceanic-archives-and-the-portuguese-connection`, image: resurgenceImg.url, notes: "A literary panel charting the Lusophone Indian Ocean." },
  { category: "thematic", title: "Centro Histórico (2012)", country: "Portugal", year: 2024, discipline: "Film", url: `${A24}/programmes/centro-historico-2012`, image: centroHistoricoImg.url, notes: "A Portuguese omnibus film screened as a Lusophone time-capsule." },
  { category: "thematic", title: "Palyantasia", country: "Ukraine", year: 2025, discipline: "Culinary Arts", url: `${LIVE}/programmes/palyanytsia-the-soul-of-ukrainian-bread-goa`, image: palyantasiaImg.url, gif: palyanytsiaGif, notes: "A Ukrainian bread ritual presented as cultural resilience." },
  { category: "thematic", title: "Embroidery Workshop: Fish Tales from Ukraine", country: "Ukraine", year: 2025, discipline: "Craft", url: `${LIVE}/programmes/embroidery-workshop-fish-tales-from-ukraine-goa`, image: embroideryImg.url, gif: embroideryGif, notes: "Ukrainian folk embroidery shared as living craft." },
  { category: "thematic", title: "Ukrainian Borscht: UNESCO Heritage in a Bowl", country: "Ukraine", year: 2025, discipline: "Culinary Arts", url: `${LIVE}/programmes/ukrainian-borscht-unesco-heritage-in-a-bowl-goa`, notes: "A UNESCO-listed Ukrainian heritage dish presented in Goa." },
  { category: "thematic", title: "Create Your Own Petrykivka-Inspired Mandala", country: "Ukraine", year: 2025, discipline: "Craft", url: `${LIVE}/programmes/create-your-own-petrykivka-inspired-mandala-goa`, notes: "Ukrainian Petrykivka folk painting in conversation with Indian mandala traditions." },
  { category: "thematic", title: "Palettes", country: "France", year: 2025, discipline: "Dance", url: `${LIVE}/parent-programme/day-1-at-the-arena-goa`, notes: "French nouveau cirque with wooden pallets as co-performers." },
  { category: "thematic", title: "Deus Nos Acudi", country: "Mozambique", year: 2025, discipline: "Dance", url: `${LIVE}/programmes/deus-nos-acudi-goa`, gif: deusNosAcudiGif, notes: "Pak Ndjamena — a Lusophone post-colonial work resonating in Goa.", collaborator: "Pak Ndjamena" },
  { category: "thematic", title: "Handle With Care", country: "Belgium", year: 2025, discipline: "Theatre", url: `${LIVE}/`, notes: "Ontroerend Goed — audience-authored theatre from Belgium’s renowned experimental company.", collaborator: "Ontroerend Goed" },
  { category: "thematic", title: "Enowate", country: "Nigeria", year: 2025, discipline: "Dance", url: `${LIVE}/`, gif: enowateGif, notes: "A solo rooted in African heritage and diasporic identity.", collaborator: "Curated by Jayachandran Palazhy" },

  { category: "thematic", title: "Serendipity Arts Residency", country: "India", state: "Delhi", year: 2026, discipline: "Residency", url: "https://serendipityarts.org/serendipity-arts-residency-2026/", notes: "The flagship Serendipity Arts Residency 2026 — a year-long programme supporting emerging Indian and South Asian practitioners through research, mentorship and public outcomes across disciplines." },
  { category: "thematic", title: "Chaar Yaar — Ek Dilli", country: "India", state: "Delhi", year: 2025, discipline: "Culinary Arts", url: `${LIVE}/programmes/chaar-yaar-ek-dilli-goa`, notes: "A Delhi food memoir told across four friends and one city." },
  { category: "thematic", title: "India Art Fair", country: "India", state: "Delhi", year: 2026, discipline: "Visual Arts", url: "https://serendipityarts.org/beyond_the_festival/india-art-fair-2026/", imageSourceUrl: "https://serendipityarts.org/beyond_the_festival/india-art-fair-2026/", notes: "Serendipity Arts at India Art Fair 2026 — a presentation that extends the Festival’s curatorial conversation into New Delhi’s leading contemporary art platform.", collaborator: "India Art Fair, New Delhi" },
  { category: "thematic", title: "Panel Discussion on Abundance in Scarcity", country: "India", state: "Ladakh", year: 2024, discipline: "Literature", url: `${A24}/programmes/panel-discussion-on-abundance-in-scarcity`, notes: "A Ladakhi conversation about living ingeniously with little." },
  { category: "thematic", title: "Abundance in Scarcity: Exploring Ladakh's Sustainable Ingenuity", country: "India", state: "Ladakh", year: 2024, discipline: "Craft", url: `${A24}/micro-programme/abundance-in-scarcity-exploring-ladakhs-sustainable-ingenuity`, notes: "A craft micro-programme drawn from Ladakhi sustainability." },
  { category: "thematic", title: "Hands, Tools, and the Living Thread: From Kashmiri Craft Ateliers", country: "India", state: "Jammu & Kashmir", year: 2025, discipline: "Craft", url: `${LIVE}/programmes/hands-tools-and-the-living-thread-from-kashmiri-craft-ateliers-goa`, notes: "Kashmiri ateliers carry their working tools and threads to Goa." },
  { category: "thematic", title: "Kari Kalamdani Kaleidoscope: Colors of Kashmir", country: "India", state: "Jammu & Kashmir", year: 2025, discipline: "Craft", url: `${LIVE}/programmes/kari-kalamdani-kaleidoscope-colors-of-kashmir-goa`, notes: "Kashmir’s painted-pen-case tradition turned into a colour-field workshop." },
  { category: "thematic", title: "Pulp Fiction: Handcrafting Kashmiri Stories", country: "India", state: "Jammu & Kashmir", year: 2025, discipline: "Craft", url: `${LIVE}/programmes/pulp-fiction-handcrafting-kashmiri-stories-goa`, notes: "Kashmiri papier-mâché as narrative craft." },
  { category: "thematic", title: "Felt Fest: Dive into Namda Making", country: "India", state: "Jammu & Kashmir", year: 2025, discipline: "Craft", url: `${LIVE}/programmes/felt-fest-dive-into-namda-making-goa`, notes: "Kashmir’s endangered Namda felted-wool craft revived hands-on." },
  { category: "thematic", title: "Siachen", country: "India", state: "Jammu & Kashmir", year: 2024, discipline: "Visual Arts", url: `${A24}/programmes/siachen`, notes: "A visual essay from the world’s highest battleground." },
  { category: "thematic", title: "Culinary Cosmopolitanism through Porotta Shops of Rural and Coastal Tamil Nadu", country: "India", state: "Tamil Nadu", year: 2025, discipline: "Culinary Arts", url: `${LIVE}/programmes/culinary-cosmopolitanism-through-porotta-shops-of-rural-and-coastal-tamil-nadu-goa`, notes: "The Tamil Nadu porotta shop read as a site of everyday cosmopolitanism." },
  { category: "thematic", title: "Culinary Cosmopolitanism: Porotta Shops (Workshop)", country: "India", state: "Tamil Nadu", year: 2025, discipline: "Culinary Arts", url: `${LIVE}/programmes/culinary-cosmopolitanism-through-porotta-shops-of-rural-and-coastal-tamil-nadu-workshop-goa`, notes: "A working porotta kitchen recreated from coastal Tamil Nadu." },
  { category: "thematic", title: "Funkybodhi ft. S. Rani's Irular Ensemble", country: "India", state: "Tamil Nadu", year: 2025, discipline: "Music", url: `${LIVE}/programmes/funkybodhi-ft-s-ranis-irular-ensemble-goa`, notes: "Indigenous Irular voices from Tamil Nadu meet contemporary funk." },
  { category: "thematic", title: "Mrcchakatikam in Kutiyattam", country: "India", state: "Kerala", year: 2025, discipline: "Theatre", url: `${LIVE}/programmes/mrcchakatikam-in-kutiyattam-goa`, notes: "Kerala’s UNESCO-listed Kutiyattam staging of Mrcchakatikam." },
  { category: "thematic", title: "Vayali Bamboo Band: Nature's Melody", country: "India", state: "Kerala", year: 2025, discipline: "Music", url: `${LIVE}/programmes/vayali-bamboo-band-natures-melody-goa`, notes: "A Kerala bamboo orchestra rooted in folk ecology." },
  { category: "thematic", title: "Ottam: Born to Run", country: "India", state: "Kerala", year: 2025, discipline: "Theatre", url: `${LIVE}/programmes/ottam-born-to-run-goa`, notes: "A Malayalam-language work of pursuit and survival." },
  { category: "thematic", title: "The Legends of Khasak", country: "India", state: "Kerala", year: 2025, discipline: "Theatre", url: `${LIVE}/programmes/the-legends-of-khasak-goa`, notes: "O. V. Vijayan’s landmark Malayalam novel staged." },
  { category: "thematic", title: "Mudiyettu", country: "India", state: "Kerala", year: 2024, discipline: "Dance", url: `${A24}/programmes/mudiyettu`, notes: "A UNESCO-listed Kerala ritual theatre form presented in full." },
  { category: "thematic", title: "Pottery Without Clay: The Art of Jaipur's Blue Pottery", country: "India", state: "Rajasthan", year: 2025, discipline: "Craft", url: `${LIVE}/programmes/pottery-without-clay-the-art-of-jaipurs-blue-pottery-goa`, gif: potteryGif, notes: "Jaipur’s clay-less blue pottery tradition explained and worked." },
  { category: "thematic", title: "Pottery Without Clay", country: "India", state: "Rajasthan", year: 2024, discipline: "Craft", url: `${A24}/programmes/pottery-without-clay-goa`, notes: "The 2024 chapter of Jaipur’s blue-pottery story." },
  { category: "thematic", title: "Pichwai for Young Creators", country: "India", state: "Rajasthan", year: 2025, discipline: "Craft", url: `${LIVE}/programmes/pichwai-for-young-creators-goa`, notes: "Rajasthan’s Pichwai devotional painting handed to a new generation." },
  { category: "thematic", title: "Echoes of Chitrakathi", country: "India", state: "Maharashtra", year: 2025, discipline: "Theatre", url: `${LIVE}/programmes/echoes-of-chitrakathi-goa`, gif: echoesGif, notes: "Maharashtra’s Chitrakathi picture-storytelling tradition restaged." },
  { category: "thematic", title: "Bombay Lights", country: "India", state: "Maharashtra", year: 2024, discipline: "Music", url: `${A24}/programmes/bombay-lights`, notes: "A musical love-letter to Bombay’s neon-lit nights." },
  { category: "thematic", title: "Ramman: A Unique Folk Experience", country: "India", state: "Uttarakhand", year: 2025, discipline: "Dance", url: `${LIVE}/programmes/ramman-a-unique-folk-experience-goa`, gif: rammanGif, notes: "A UNESCO-listed ritual theatre from the villages of Uttarakhand." },
  { category: "thematic", title: "Tangra to Truffle Sushi: A Journey Through India's Evolving Pan-Asian Palate", country: "India", state: "West Bengal", year: 2025, discipline: "Culinary Arts", url: `${LIVE}/programmes/tangra-to-truffle-sushi-a-journey-through-indias-evolving-pan-asian-palate-goa`, notes: "From Kolkata’s Tangra Chinatown to contemporary pan-Asian fine dining." },
  { category: "thematic", title: "Bhav Prem Ras: The Garland of Baul Songs", country: "India", state: "West Bengal", year: 2024, discipline: "Music", url: `${A24}/programmes/bhav-prem-ras-the-garland-of-baul-songs`, notes: "A garland of Bengal’s mystic Baul songs." },
  { category: "thematic", title: "Rangla Punjab", country: "India", state: "Punjab", year: 2024, discipline: "Dance", url: `${A24}/programmes/rangla-punjab`, notes: "A choreographic portrait of colourful Punjab." },
  { category: "thematic", title: "Daira's Jaadoo Bastar", country: "India", state: "Chhattisgarh", year: 2024, discipline: "Music", url: `${A24}/programmes/dairas-jaadoo-bastar`, notes: "A musical journey through the magic of Bastar." },
  { category: "thematic", title: "Tpu Wa Sain: Tales of Sisterhood and Womanhood in the Jaintia Hills", country: "India", state: "Meghalaya", year: 2024, discipline: "Visual Arts", url: `${A24}/programmes/tpu-wa-sain-tales-of-sisterhood-and-womanhood-in-the-jaintia-hills`, notes: "Matrilineal stories from the Jaintia Hills of Meghalaya." },
  { category: "thematic", title: "Relief Camp", country: "India", state: "Manipur", year: 2024, discipline: "Theatre", url: `${A24}/programmes/relief-camp`, notes: "A theatrical reckoning with displacement in Manipur." },
  { category: "thematic", title: "Eternal Manipuri", country: "India", state: "Manipur", year: 2019, discipline: "Dance", url: `${ORG}/festival/eternal-manipuri/`, notes: "A long-form celebration of Manipuri classical dance." },
  { category: "thematic", title: "Counter Current: Unmapping Beauty at Torda Creek", country: "India", state: "Goa", year: 2025, discipline: "Visual Arts", url: `${LIVE}/programmes/counter-current-unmapping-beauty-at-torda-creek-goa`, notes: "A Goan creek-side intervention unmapping conventional beauty." },
  { category: "thematic", title: "Goa is a Bebinca", country: "India", state: "Goa", year: 2025, discipline: "Culinary Arts", url: `${LIVE}/programmes/goa-is-a-bebinca-goa`, gif: bebincaGif, notes: "Goa told in the seven layers of bebinca." },
  { category: "thematic", title: "The Culinary Odyssey of Goa", country: "India", state: "Goa", year: 2025, discipline: "Culinary Arts", url: `${LIVE}/programmes/the-culinary-odyssey-of-goa-goa`, gif: culinaryOdysseyGif, notes: "A long table tracing Goan culinary memory." },
  { category: "thematic", title: "Visual Storytelling in Goa | In the Footsteps of Mario de Miranda", country: "India", state: "Goa", year: 2025, discipline: "Visual Arts", url: `${LIVE}/programmes/visual-storytelling-in-goa-in-the-footsteps-of-mario-de-miranda-goa`, notes: "Walking Goa through the eye of Mario de Miranda." },
  { category: "thematic", title: "Goa's Smallest Big Tradition: The Mini Narkasur Archive", country: "India", state: "Goa", year: 2025, discipline: "Visual Arts", url: `${LIVE}/programmes/goas-smallest-big-tradition-the-mini-narkasur-archive-goa`, gif: smallestTraditionsGif, notes: "Goa’s mini Narkasur effigies as a quiet folk archive." },
  { category: "thematic", title: "Fading Flavours: A Smell Walk in Panjim", country: "India", state: "Goa", year: 2025, discipline: "Culinary Arts", url: `${LIVE}/programmes/fading-flavours-a-smell-walk-in-panjim-goa`, notes: "A smell-walk through the disappearing aromas of Panjim." },
  { category: "thematic", title: "Feathers on Water: Listening to the Birds of Goa", country: "India", state: "Goa", year: 2025, discipline: "Culinary Arts", url: `${LIVE}/programmes/feathers-on-water-listening-to-the-birds-of-goa-goa`, gif: feathersGif, notes: "Listening to the birds of Goa’s wetlands." },
  { category: "thematic", title: "The Future of Goa's Salts", country: "India", state: "Goa", year: 2025, discipline: "Culinary Arts", url: `${LIVE}/programmes/the-future-of-goas-salts-goa`, gif: futureOfSaltGif, notes: "Saltpans, salt-farmers and Goa’s edible future." },
  { category: "thematic", title: "CHARI WADDO: An Echo of Time", country: "India", state: "Goa", year: 2025, discipline: "Photography", url: `${LIVE}/programmes/chari-waddo-an-echo-of-time-goa`, gif: chariWadooGif, notes: "A photographic echo of a Goan ward across time." },
  { category: "thematic", title: "Traditional Carpentry Workshop with Vijay Chari", country: "India", state: "Goa", year: 2025, discipline: "Craft", url: `${LIVE}/programmes/traditional-carpentry-workshop-with-vijay-chari-goa`, gif: carpentryGif, notes: "Traditional Goan carpentry with master Vijay Chari.", collaborator: "Vijay Chari" },
  { category: "thematic", title: "Sign Painting Workshop with Arif Alam Khan", country: "India", state: "Goa", year: 2025, discipline: "Craft", url: `${LIVE}/programmes/sign-painting-workshop-with-arif-alam-khan-goa`, notes: "Hand sign-painting, taught in Goa.", collaborator: "Arif Alam Khan" },
  { category: "thematic", title: "Goa Familia — Archive of Potential (Goan) Futures", country: "India", state: "Goa", year: 2024, discipline: "Photography", url: `${A24}/programmes/goa-familia-archive-of-potential-goan-futures`, notes: "A family-album archive imagining Goa’s possible futures." },
  { category: "thematic", title: "Redefining Goan Food for the Next Generation", country: "India", state: "Goa", year: 2024, discipline: "Culinary Arts", url: `${A24}/programmes/redefining-goan-food-for-the-next-generation`, notes: "Goan kitchens passing themselves on." },
  { category: "thematic", title: "Dudhsagar-Khandepar River Chronicles", country: "India", state: "Goa", year: 2024, discipline: "Visual Arts", url: `${A24}/programmes/dudhsagar-khandepar-river-chronicles-knowing-riparian-ecosystems-and-cyanotype-printing`, notes: "Goan riparian ecosystems read through cyanotype." },
  { category: "thematic", title: "Mushrooms of Goa: Knowing and Growing", country: "India", state: "Goa", year: 2024, discipline: "Culinary Arts", url: `${A24}/programmes/mushrooms-of-goa-knowing-and-growing`, notes: "The hidden mycological life of Goa." },
  { category: "thematic", title: "Cross Pollination Networks of Goa (Apiculture in Goa)", country: "India", state: "Goa", year: 2024, discipline: "Craft", url: `${A24}/programmes/cross-pollination-networks-of-goa-apiculture-in-goa`, notes: "Goan bee-keeping as a network of cross-pollinations." },
  { category: "thematic", title: "The Goan Stage: Narratives of Identity", country: "India", state: "Goa", year: 2024, discipline: "Theatre", url: `${A24}/programmes/the-goan-stage-narratives-of-identity`, notes: "The Goan stage as a site of identity." },
  { category: "thematic", title: "Seaweed Tidepool Walk — Exploring the Seaweed Forests of Dona Paula", country: "India", state: "Goa", year: 2024, discipline: "Culinary Arts", url: `${A24}/programmes/seaweed-tidepool-walk-exploring-the-seaweed-forests-of-dona-paula`, notes: "A guided walk through the seaweed forests of Dona Paula." },
  { category: "thematic", title: "Around the Corner, Goa", country: "India", state: "Goa", year: 2024, discipline: "Visual Arts", url: `${A24}/programmes/around-the-corner-goa`, notes: "Small Goan corners turned into a city-scale exhibition." },
  { category: "thematic", title: "Panjim Cube Project", country: "India", state: "Goa", year: 2024, discipline: "Visual Arts", url: `${A24}/programmes/panjim-cube-project`, notes: "A Panjim public-space cube as a moving canvas." },
  { category: "thematic", title: "Bhupen in Goa", country: "India", state: "Goa", year: 2024, discipline: "Visual Arts", url: `${A24}/programmes/bhupen-in-goa`, notes: "Bhupen Khakhar returning to Goa." },
  { category: "thematic", title: "Evolving Trends in Feni", country: "India", state: "Goa", year: 2024, discipline: "Culinary Arts", url: `${A24}/programmes/evolving-trends-in-feni`, notes: "How Goa’s feni is being re-thought." },
  { category: "thematic", title: "Ritual Sweet Map of Goa", country: "India", state: "Goa", year: 2024, discipline: "Culinary Arts", url: `${A24}/programmes/ritual-sweet-map-of-goa`, notes: "A map of Goa drawn in its ritual sweets." },
];

export const YEARS = Array.from(new Set(PROJECTS.map((p) => p.year))).sort((x, y) => y - x);
export const COUNTRIES = Array.from(new Set(PROJECTS.map((p) => p.country))).sort();
export const INDIA_STATES = Array.from(
  new Set(PROJECTS.filter((p) => p.country === "India" && p.state).map((p) => p.state!)),
).sort();

export function projectSlug(p: Pick<AtlasProject, "title" | "year" | "country">): string {
  const base = `${p.title}-${p.country}-${p.year}`
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return base;
}

export function findProjectBySlug(slug: string): AtlasProject | undefined {
  return PROJECTS.find((p) => projectSlug(p) === slug);
}
