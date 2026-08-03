import { FaInstagram, FaEnvelope } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { IoMdStats } from 'react-icons/io'

//Hero
import polaco1 from '@assets/polaco1.webp'

import argentina from '@assets/argentina.webp'
import atlanta from '@assets/escudo_atlanta.webp'
//Escudos trayectoria
import escudoNewells from '@assets/escudos/escudo_newells.webp'
import escudoCusco from '@assets/escudos/escudo_cusco.webp'
//Gallery
import image1 from '@assets/gallery/image1.webp'
import image2 from '@assets/gallery/image2.webp'
import image3 from '@assets/gallery/image3.webp'
import image4 from '@assets/gallery/image4.webp'
import image5 from '@assets/gallery/image5.webp'
import image6 from '@assets/gallery/image6.webp'
import image7 from '@assets/gallery/image7.webp'
import image8 from '@assets/gallery/image8.webp'
import image9 from '@assets/gallery/image9.webp'
import image10 from '@assets/gallery/image10.webp'
import image11 from '@assets/gallery/image11.webp'
import image12 from '@assets/gallery/image12.webp'
import image13 from '@assets/gallery/image13.webp'
import image14 from '@assets/gallery/image14.webp'
import image15 from '@assets/gallery/image15.webp'
import image16 from '@assets/gallery/image16.webp'
import image17 from '@assets/gallery/image17.webp'
import image18 from '@assets/gallery/image18.webp'
import image19 from '@assets/gallery/image19.webp'
import image20 from '@assets/gallery/image20.webp'
import image21 from '@assets/gallery/image21.webp'
import image22 from '@assets/gallery/image22.webp'
import image23 from '@assets/gallery/image23.webp'
import image24 from '@assets/gallery/image24.webp'
//Redes
import transfermkt from '@assets/contact2.svg'
import ledsports from '@assets/contact3.webp'
import moon from '@assets/contact4.webp'


const name = 'JULIAN'
const fullName = 'AQUINO'

export const playerData = {
  name,
  fullName,
  initials: `${name[0]}${fullName[0]}`,
  displayName: `${name} ${fullName}`,
  number: 10,
  position: 'Mediocampista Ofensivo',
  positionShort: 'MCO',
  nationality: 'Argentino',
  nationalityFlag: argentina,
  age: 22,
  height: '1.60m',
  weight: '75kg',
  foot: 'Ambidiestro',
  birthDate: '27 / 02 / 2004',
  birthPlace: 'Rosario, Argentina',
  currentClub: 'Atlanta',
  logoCurrentClub: atlanta,
  image: polaco1,
  

  stats: [
    { label: 'Velocidad', value: 87 },
    { label: 'Remate', value: 81 },
    { label: 'Regate', value: 83 },
    { label: 'Pases', value: 79 },
    { label: 'Presión Alta', value: 87 },
    { label: 'Visión de Juego', value: 84 },
  ],

  seasonStats: [
    { label: 'Partidos', value: 11 },
    { label: 'Pases Completos', value: 15 },
    { label: 'Oportunidades', value: 7 },
    { label: 'Tiros al arco', value: 6 },
    { label: 'Min / Part.', value: "141'" },
    { label: 'Valoración', value: 8.5 },
  ],

  clubs: [
    {
      name:    'Atlanta',
      country: 'Argentina',
      years:   '2026 — Actualidad',
      logo:    atlanta,
      titles:  ['Torneo Apertura 2026'],
      info:    '',
    },
    {
      name:    'Cusco FC',
      country: 'Perú',
      years:   '2025 — 2026',
      logo:    escudoCusco,
      titles:  [],
      info:    '',
    },
    {
      name:    'Newells Old Boys',
      country: 'Argentina',
      years:   '2024 — 2025',
      logo:    escudoNewells,
      titles:  [],
      info:    'Préstamo',
    },
   
  ],

  videos: [
    {
      id: 'v2',
      instagramId: 'DDshB3mP8Ol',
      title: 'Highlights Newells Old Boys',
      fullTitle: 'Julian Aquino | Jugadas destacadas',
      season: 'Newells Old Boys',
      league: 'Highlights',
      thumbnail: image9,
      cover: image9,
      category: 'Highlights',
    },
    {
      id: 'v3',
      instagramId: 'CVtldaAl0XH',
      title: 'Hack-trick Torneo Proyección',
      fullTitle: 'Julian Aquino | Hack-trick Torneo Proyección',
      season: 'Goles Hack-trick',
      league: 'Torneo Proyección',
      thumbnail: image8,
      cover: image8,
      category: 'Gol',
    },
    
    {
      id: 'v4',
      instagramId: 'CgZwZRSuPiN',
      title: 'Gol de la Fecha',
      fullTitle: 'Julian Aquino | Gol de la Fecha',
      season: 'Torneo Proyección',
      league: 'Torneo Proyección',
      thumbnail: image24,
      cover: image24,
      category: 'Gol',
    },
  ],



  gallery: [
    { id: 1, src: image1, alt: 'Julian Aquino', caption: 'Atlanta', category: 'Partido', aspect: 'wide' },
    { id: 2, src: image2, alt: 'Julian Aquino', caption: 'Atlanta', category: 'Festejo', aspect: 'tall' },
    { id: 3, src: image3, alt: 'Julian Aquino', caption: 'Atlanta', category: 'Entrenamiento', aspect: 'square' },
    { id: 4, src: image4, alt: 'Julian Aquino', caption: 'Atlanta', category: 'Partido', aspect: 'wide' },
    { id: 5, src: image5, alt: 'Julian Aquino', caption: 'Atlanta', category: 'Equipo', aspect: 'wide' },
    { id: 6, src: image6, alt: 'Julian Aquino', caption: 'Atlanta', category: 'Retrato', aspect: 'tall' },
    { id: 7, src: image7, alt: 'Julian Aquino', caption: 'Atlanta', category: 'Partido', aspect: 'wide' },
    { id: 8, src: image8, alt: 'Julian Aquino', caption: 'Atlanta', category: 'Partido', aspect: 'wide' },
    { id: 9, src: image9, alt: 'Julian Aquino', caption: 'Atlanta', category: 'Partido', aspect: 'wide' },
    { id: 10, src: image10, alt: 'Julian Aquino', caption: 'Atlanta', category: 'Partido', aspect: 'wide' },
    { id: 11, src: image11, alt: 'Julian Aquino', caption: 'Atlanta', category: 'Partido', aspect: 'wide' },
    { id: 12, src: image12, alt: 'Julian Aquino', caption: 'Atlanta', category: 'Partido', aspect: 'wide' },
    { id: 13, src: image13, alt: 'Julian Aquino', caption: 'Atlanta', category: 'Partido', aspect: 'wide' },
    { id: 14, src: image14, alt: 'Julian Aquino', caption: 'Atlanta', category: 'Partido', aspect: 'wide' },
    { id: 15, src: image15, alt: 'Julian Aquino', caption: 'Atlanta', category: 'Partido', aspect: 'wide' },
    { id: 16, src: image16, alt: 'Julian Aquino', caption: 'Atlanta', category: 'Partido', aspect: 'wide' },
    { id: 17, src: image17, alt: 'Julian Aquino', caption: 'Atlanta', category: 'Partido', aspect: 'wide' },
    { id: 18, src: image18, alt: 'Julian Aquino', caption: 'Atlanta', category: 'Partido', aspect: 'wide' },
    { id: 19, src: image19, alt: 'Julian Aquino', caption: 'Atlanta', category: 'Partido', aspect: 'wide' },
    { id: 20, src: image20, alt: 'Julian Aquino', caption: 'Atlanta', category: 'Partido', aspect: 'wide' },
    { id: 21, src: image21, alt: 'Julian Aquino', caption: 'Atlanta', category: 'Partido', aspect: 'wide' },
    { id: 22, src: image22, alt: 'Julian Aquino', caption: 'Atlanta', category: 'Partido', aspect: 'wide' },
    { id: 23, src: image23, alt: 'Julian Aquino', caption: 'Atlanta', category: 'Partido', aspect: 'wide' },
    { id: 24, src: image24, alt: 'Julian Aquino', caption: 'Atlanta', category: 'Partido', aspect: 'wide' },
  ],

  socialMedia: [
    {
      label: 'Instagram',
      icon: FaInstagram,
      iconBg: FaInstagram,
      handle: '@juli.aquino10',
      url: 'https://www.instagram.com/juli.aquino10',
      hoverColor: '#E1306C',
      hoverGradient: 'insta-gradient',
    },
    {
      label: 'TransferMarkt',
      image: transfermkt,
      iconBg: IoMdStats,
      handle: '/julian-aquino',
      url: 'https://www.transfermarkt.com.ar/julian-aquino/profil/spieler/1057314',
      hoverColor: '#2e73f2',
    },
  ],

  contact: [
    {
      title: 'Representante Deportivo',
      label: 'Moon Sports Group',
      image: moon,
      handle: '@moonsportsgroup_',
      url: 'https://www.instagram.com/moonsportsgroup_/',
      hoverColor: 'rgba(19, 81, 139, 0.2)',
      borderColor: 'rgb(19, 81, 139)',
    },
    {
      title: 'Contacto Marketing',
      label: 'led sports marketing',
      image: ledsports,
      handle: '@_ledsports',
      url: 'https://www.instagram.com/_ledsports/',
      hoverColor: 'rgba(212,168,75,0.18)',
      borderColor: 'rgb(129, 103, 46)',
    },
  ],
}
