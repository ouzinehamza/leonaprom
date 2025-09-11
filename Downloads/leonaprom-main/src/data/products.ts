import { Product } from "../components/ProductCard";

// Prix et noms inspirés de wafaplus.com (sept. 2025) – descriptions rédigées pour ce site.
// Images: illustrations libres (Pexels/Unsplash) correspondant au type de produit.
export const products: Product[] = [
  {
    id: 'coax-100m',
    name: 'Dashcam 1080p/30fps Hikvision ',
    price: 480,
    category: 'Accessoires',
    image: 'https://wafaplus.com/1202-home_default/dashcam-1080p30fps-hikvision-ae-dc2018-d1-.jpg',
    description: "Dashcam 1080p/30fps avec vision nocturne et détection de mouvement.",
    brand: 'Hikvision'
  },
  {
    id: 'nvr-8ch-4k',
    name: 'Caméra Dual-Lens 4MP + 6MP & Zoom Optique 25x et ColorVu Hikvision',
    price: 6980,
    category: 'Enregistreurs',
    image: 'https://wafaplus.com/1224-large_default/camera-dual-lens-4mp-6mp-avec-zoom-optique-25x-et-colorvu-hikvision-ds-2se7c425mwg-eb26.jpg',
    description: "Enregistreur réseau 8 canaux 4K, décodage H.265+ et sortie HDMI pour une gestion fluide.",
    brand: 'Hikvision'
  },
  {
    id: 'dvr-4ch-5mp',
    name: 'Lecteur de cartes modulaire professionnel série KD8 - IP - Hikvision',
    price: 540,
    category: 'Enregistreurs',
    image: 'https://wafaplus.com/1220-large_default/lecteur-de-cartes-modulaire-professionnel-serie-kd8-ip-hikvision-ds-kd-e.jpg',
    description: "Lecteur de cartes modulaire professionnel pour un stockage optimisé.",
    brand: 'Hikvision'
  },
  {
    id: 'hdd-2tb-surveillance',
    name: 'Routeur Sans Fil WIFI 6 AC1800 Hikvision',
    price: 540,
    category: 'Stockage',
    image: 'https://wafaplus.com/1222-large_default/routeur-sans-fil-wifi-6-ac1800-hikvision-ds-3wr18x.jpg',
    description: "Routeur sans fil WIFI 6 AC1800 pour une connexion rapide et stable.",
    brand: 'Hikvision'
  },
  {
    id: 'microsd-64',
    name: 'Ventouse électromagnétique 272 Kg Hikvision',
    price: 320,
    category: 'Stockage',
    image: 'https://wafaplus.com/1206-large_default/ventouse-electromagnetique-272-kg-hikvision-ds-k4h255s.jpg',
    description: "Ventouse électromagnétique 272 Kg pour fixation sécurisée.",
    brand: 'Hikvision'
  },
  {
    id: 'switch-poe-8',
    name: '10 unités connecteurs BNC pour les caméras de vidéosurveillance',
    price: 30,
    category: 'Réseau',
    image: 'https://wafaplus.com/1210-large_default/connecteurs-bnc-pour-camera.jpg',
    description: "Connecteurs BNC pour caméras de vidéosurveillance, installation facile et fiable.",
    brand:'Generic'
  },
  {
    id: 'ups-1000',
    name: 'Dashcam Wi-Fi mobile avec écran 1600p 3 pouces, audio, Hikvision',
    price: 1200,
    category: 'Alimentation',
    image: 'https://wafaplus.com/1204-large_default/copy-of-dashcam-wi-fi-mobile-avec-ecran-1600p-3-pouces-audio-hikvision-ae-dc5313-c6pro.jpg',
    description: "Dashcam Wi-Fi mobile avec écran 1600p 3 pouces, audio, Hikvision",
    brand: 'Hikvision'
  },
  {
    id: 'utp-cat6-305',
    name: 'Accessoires LZ pour ventouse Hikvision',
    price: 150,
    category: 'Réseau',
    image: 'https://wafaplus.com/1208-large_default/accessoires-lz-pour-ventouse-hikvision-ds-k4h255-lz.jpg',
    description: "interrupteur de fin de course, alimentation 12VDC, câblage propre.",
    brand: 'Hikvision'
  },
  
];

export default products;
