import { AwardLevel, Child } from '../types'

// ─── Abzeichen-Definitionen ────────────────────────────────────────────────

const seepferdchen: AwardLevel = {
  id: 'seepferdchen',
  name: 'Seepferdchen',
  emoji: '🐴',
  color: '#0891b2',
  bgColor: '#ecfeff',
  badges: [
    {
      id: 'seepferdchen-sprung',
      emoji: '🤸',
      name: 'Erster Sprung!',
      description: 'Sprung vom Beckenrand ins schultertiefe Wasser',
    },
    {
      id: 'seepferdchen-strecke',
      emoji: '🐟',
      name: '25 Meter!',
      description: '25 m schwimmen (beliebige Technik)',
    },
    {
      id: 'seepferdchen-tauchen',
      emoji: '🤿',
      name: 'Tauchkünstler',
      description: 'Gegenstand aus schultertiefem Wasser aufheben',
    },
    {
      id: 'seepferdchen-regeln',
      emoji: '📋',
      name: 'Baderegeln-Profi',
      description: 'Baderegeln kennen und benennen',
    },
  ],
}

const bronze: AwardLevel = {
  id: 'bronze',
  name: 'Bronze',
  emoji: '🥉',
  color: '#b45309',
  bgColor: '#fffbeb',
  badges: [
    {
      id: 'bronze-kopfsprung',
      emoji: '🤸',
      name: 'Kopfsprung!',
      description: 'Sprung kopfwärts vom Beckenrand',
    },
    {
      id: 'bronze-strecke',
      emoji: '🏊',
      name: '200 Meter!',
      description: '15 Min. schwimmen – mind. 200 m (150 m Bauch/Rücken + 50 m andere Lage)',
    },
    {
      id: 'bronze-tauchen',
      emoji: '🤿',
      name: 'Tiefen-Taucher',
      description: 'Einmal ~2 m Tieftauchen von der Wasseroberfläche, Gegenstand heraufholen',
    },
    {
      id: 'bronze-paketsprung',
      emoji: '💣',
      name: 'Bombe! 💥',
      description: 'Paketsprung ("Bombe") vom Startblock oder 1-Meter-Brett',
    },
    {
      id: 'bronze-regeln',
      emoji: '📋',
      name: 'Baderegeln-Profi',
      description: 'Baderegeln kennen',
    },
  ],
}

const silber: AwardLevel = {
  id: 'silber',
  name: 'Silber',
  emoji: '🥈',
  color: '#6b7280',
  bgColor: '#f9fafb',
  badges: [
    {
      id: 'silber-kopfsprung',
      emoji: '🤸',
      name: 'Kopfsprung!',
      description: 'Sprung kopfwärts vom Beckenrand',
    },
    {
      id: 'silber-strecke',
      emoji: '⚡',
      name: '400 Meter!',
      description: '20 Min. schwimmen – mind. 400 m (300 m Bauch/Rücken + 100 m andere Lage)',
    },
    {
      id: 'silber-tauchen',
      emoji: '🤿',
      name: 'Tiefen-Taucher',
      description: 'Zweimal ~2 m Tieftauchen von der Wasseroberfläche, je einen Gegenstand heraufholen',
    },
    {
      id: 'silber-streckentauchen',
      emoji: '🦭',
      name: 'Strecken-Taucher',
      description: '10 m Streckentauchen mit Abstoß vom Beckenrand',
    },
    {
      id: 'silber-sprung',
      emoji: '🦅',
      name: 'Hoch-Springer',
      description: 'Sprung aus 3 m Höhe oder 2 verschiedene Sprünge vom 1-Meter-Brett',
    },
    {
      id: 'silber-regeln',
      emoji: '📋',
      name: 'Sicherheits-Profi',
      description: 'Baderegeln & Verhalten zur Selbstrettung kennen',
    },
  ],
}

const gold: AwardLevel = {
  id: 'gold',
  name: 'Gold',
  emoji: '🥇',
  color: '#d97706',
  bgColor: '#fffbeb',
  badges: [
    {
      id: 'gold-kopfsprung',
      emoji: '🤸',
      name: 'Kopfsprung!',
      description: 'Sprung kopfwärts vom Beckenrand',
    },
    {
      id: 'gold-strecke',
      emoji: '🔥',
      name: '800 Meter!',
      description: '30 Min. schwimmen – mind. 800 m (650 m Bauch/Rücken + 150 m andere Lage)',
    },
    {
      id: 'gold-kraul',
      emoji: '🐊',
      name: 'Krauler',
      description: 'Startsprung + 25 m Kraulschwimmen',
    },
    {
      id: 'gold-brust',
      emoji: '🐸',
      name: 'Brust-Sprinter',
      description: 'Startsprung + 50 m Brustschwimmen in max. 1:15 min',
    },
    {
      id: 'gold-ruecken',
      emoji: '🦦',
      name: 'Rücken-Schwimmer',
      description: '50 m Rückenschwimmen (Grätschschwung ohne Arme oder Rückenkraul)',
    },
    {
      id: 'gold-streckentauchen',
      emoji: '🐬',
      name: 'Strecken-Taucher',
      description: '10 m Streckentauchen aus der Schwimmlage (ohne Abstoß vom Beckenrand)',
    },
    {
      id: 'gold-ringtauchen',
      emoji: '💍',
      name: 'Ring-Taucher',
      description: '3 Tauchringe aus ~2 m Tiefe in max. 3 Minuten (max. 3 Versuche) heraufholen',
    },
    {
      id: 'gold-hochsprung',
      emoji: '🦅',
      name: 'Hoch-Springer',
      description: 'Sprung aus 3 m Höhe',
    },
    {
      id: 'gold-retten',
      emoji: '🛟',
      name: 'Lebensretter',
      description: 'Baderegeln + Selbstrettung + einfache Fremdrettung bei Bade-, Boots- & Eisunfällen kennen',
    },
  ],
}

// ─── Kinderprofile ─────────────────────────────────────────────────────────

export const LEVELS = [seepferdchen, bronze, silber, gold]

export const CHILDREN: Child[] = [
  {
    id: 'freja',
    name: 'Freja',
    age: 6,
    emoji: '🧜‍♀️',
    primaryColor: '#7c3aed',
    secondaryColor: '#ede9fe',
    levels: [
      { ...seepferdchen, alreadyAchieved: true },
      { ...bronze, alreadyAchieved: true },
      { ...silber },
      { ...gold },
    ],
  },
  {
    id: 'henrik',
    name: 'Henrik',
    age: 4,
    emoji: '🦈',
    primaryColor: '#ea580c',
    secondaryColor: '#fff7ed',
    levels: [
      { ...seepferdchen },
      { ...bronze },
      { ...silber },
      { ...gold },
    ],
  },
  {
    id: 'ben',
    name: 'Ben',
    age: 9,
    emoji: '🐋',
    primaryColor: '#0284c7',
    secondaryColor: '#e0f2fe',
    levels: [
      { ...seepferdchen, alreadyAchieved: true },
      { ...bronze, alreadyAchieved: true },
      { ...silber, alreadyAchieved: true },
      { ...gold },
    ],
  },
]
