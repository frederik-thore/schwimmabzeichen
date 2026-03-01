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
      tip: 'Arme hoch, tief Luft holen und einfach rein! Du schaffst das! 💪',
    },
    {
      id: 'seepferdchen-strecke',
      emoji: '🐟',
      name: '25 Meter!',
      description: '25 m schwimmen (beliebige Technik)',
      tip: 'Beine strampeln und Arme rudern – Schritt für Schritt ans Ziel! 🏁',
    },
    {
      id: 'seepferdchen-tauchen',
      emoji: '🤿',
      name: 'Tauchkünstler',
      description: 'Gegenstand aus schultertiefem Wasser aufheben',
      tip: 'Tief einatmen, Augen auf und einfach nach dem Gegenstand greifen! 🎯',
    },
    {
      id: 'seepferdchen-regeln',
      emoji: '📋',
      name: 'Baderegeln-Profi',
      description: 'Baderegeln kennen und benennen',
      tip: 'Frag Mama oder Papa die Regeln ab – am besten wie ein Quiz! 🎉',
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
      tip: 'Arme neben den Kopf, Blick nach unten – dann abtauchen wie ein Delfin! 🐬',
    },
    {
      id: 'bronze-strecke',
      emoji: '🏊',
      name: '200 Meter!',
      description: '15 Min. schwimmen – mind. 200 m (150 m Bauch/Rücken + 50 m andere Lage)',
      tip: 'Nicht zu schnell starten – gleichmäßig schwimmen und du hast am Ende noch Kraft! 💪',
    },
    {
      id: 'bronze-tauchen',
      emoji: '🤿',
      name: 'Tiefen-Taucher',
      description: 'Einmal ~2 m Tieftauchen von der Wasseroberfläche, Gegenstand heraufholen',
      tip: 'Beim Abtauchen die Füße nach oben kippen – dann kommst du schneller runter! 🎯',
    },
    {
      id: 'bronze-paketsprung',
      emoji: '💣',
      name: 'Bombe! 💥',
      description: 'Paketsprung ("Bombe") vom Startblock oder 1-Meter-Brett',
      tip: 'Knie fest ans Kinn ziehen und laut „Bombe!" rufen! 💥',
    },
    {
      id: 'bronze-regeln',
      emoji: '📋',
      name: 'Baderegeln-Profi',
      description: 'Baderegeln kennen',
      tip: 'Wiederhole die Regeln vor dem Training kurz – dann sitzt alles! ✅',
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
      tip: 'Gerade Arme, Blick nach unten – wie ein Pfeil ins Wasser! 🎯',
    },
    {
      id: 'silber-strecke',
      emoji: '⚡',
      name: '400 Meter!',
      description: '20 Min. schwimmen – mind. 400 m (300 m Bauch/Rücken + 100 m andere Lage)',
      tip: 'Zähle die Bahnen – nach jeder Bahn bist du näher am Ziel! 🏁',
    },
    {
      id: 'silber-tauchen',
      emoji: '🤿',
      name: 'Tiefen-Taucher',
      description: 'Zweimal ~2 m Tieftauchen von der Wasseroberfläche, je einen Gegenstand heraufholen',
      tip: 'Beim zweiten Tauchversuch die Energie gut einteilen – ruhig und fokussiert! 🧘',
    },
    {
      id: 'silber-streckentauchen',
      emoji: '🦭',
      name: 'Strecken-Taucher',
      description: '10 m Streckentauchen mit Abstoß vom Beckenrand',
      tip: 'Kräftiger Abstoß vom Rand und den Körper ganz strecken – dann gleitet es sich leicht! 🦭',
    },
    {
      id: 'silber-sprung',
      emoji: '🦅',
      name: 'Hoch-Springer',
      description: 'Sprung aus 3 m Höhe oder 2 verschiedene Sprünge vom 1-Meter-Brett',
      tip: 'Mutig sein und gerade springen – der Aufprall ist gar nicht so schlimm! 🦅',
    },
    {
      id: 'silber-regeln',
      emoji: '📋',
      name: 'Sicherheits-Profi',
      description: 'Baderegeln & Verhalten zur Selbstrettung kennen',
      tip: 'Die Regeln laut aufsagen hilft beim Merken – probiere es aus! 📢',
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
      tip: 'Perfekte Haltung: Arme anlegen und wie ein Torpedo einstechen! 🚀',
    },
    {
      id: 'gold-strecke',
      emoji: '🔥',
      name: '800 Meter!',
      description: '30 Min. schwimmen – mind. 800 m (650 m Bauch/Rücken + 150 m andere Lage)',
      tip: 'Die ersten Bahnen ruhig nehmen, dann steigern – so hast du Kraft für alle 800 m! 🔥',
    },
    {
      id: 'gold-kraul',
      emoji: '🐊',
      name: 'Krauler',
      description: 'Startsprung + 25 m Kraulschwimmen',
      tip: 'Arme abwechselnd vorne rein und beim Atmen den Kopf drehen – nicht heben! 🐊',
    },
    {
      id: 'gold-brust',
      emoji: '🐸',
      name: 'Brust-Sprinter',
      description: 'Startsprung + 50 m Brustschwimmen in max. 1:15 min',
      tip: 'Beine gleichzeitig wie ein Frosch anziehen und dann kräftig abstoßen! 🐸',
    },
    {
      id: 'gold-ruecken',
      emoji: '🦦',
      name: 'Rücken-Schwimmer',
      description: '50 m Rückenschwimmen (Grätschschwung ohne Arme oder Rückenkraul)',
      tip: 'Ohren ins Wasser, Bauch hoch und gleichmäßig paddeln – dann bleibst du oben! 🦦',
    },
    {
      id: 'gold-streckentauchen',
      emoji: '🐬',
      name: 'Strecken-Taucher',
      description: '10 m Streckentauchen aus der Schwimmlage (ohne Abstoß vom Beckenrand)',
      tip: 'Kopf nach unten, Beine hoch – und dann einfach gleiten! 🐬',
    },
    {
      id: 'gold-ringtauchen',
      emoji: '💍',
      name: 'Ring-Taucher',
      description: '3 Tauchringe aus ~2 m Tiefe in max. 3 Minuten (max. 3 Versuche) heraufholen',
      tip: 'Alle 3 Ringe im Blick behalten und einen nach dem anderen holen! 💍',
    },
    {
      id: 'gold-hochsprung',
      emoji: '🦅',
      name: 'Hoch-Springer',
      description: 'Sprung aus 3 m Höhe',
      tip: 'Augen geradeaus, Körper gerade – dann ist der Sprung aus 3 m gar kein Problem! 🦅',
    },
    {
      id: 'gold-retten',
      emoji: '🛟',
      name: 'Lebensretter',
      description: 'Baderegeln + Selbstrettung + einfache Fremdrettung bei Bade-, Boots- & Eisunfällen kennen',
      tip: 'Lerne die Regeln auswendig – du könntest damit eines Tages wirklich helfen! 🛟',
    },
  ],
}

// ─── Kinderprofile ─────────────────────────────────────────────────────────

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
