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
      tip: 'Stell dich an den Rand, schau nach vorne und spring mit beiden Füßen rein. Du schaffst das! 💪',
    },
    {
      id: 'seepferdchen-strecke',
      emoji: '🐟',
      name: '25 Meter!',
      description: '25 m schwimmen (beliebige Technik)',
      tip: 'Strample gleichmäßig und halt den Kopf locker. Zähl einfach deine Züge – 25 Meter sind gar nicht weit!',
    },
    {
      id: 'seepferdchen-tauchen',
      emoji: '🤿',
      name: 'Tauchkünstler',
      description: 'Gegenstand aus schultertiefem Wasser aufheben',
      tip: 'Tief einatmen, dann mutig abtauchen. Augen auf – den Gegenstand siehst du ganz schnell!',
    },
    {
      id: 'seepferdchen-regeln',
      emoji: '📋',
      name: 'Baderegeln-Profi',
      description: 'Baderegeln kennen und benennen',
      tip: 'Lerne die Regeln mit Mama oder Papa zusammen – dann bist du sicher am Wasser und kannst anderen helfen!',
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
      tip: 'Arme gestreckt über den Kopf, Kinn zur Brust – und einfach kippen. Übung macht den Meister!',
    },
    {
      id: 'bronze-strecke',
      emoji: '🏊',
      name: '200 Meter!',
      description: '15 Min. schwimmen – mind. 200 m (150 m Bauch/Rücken + 50 m andere Lage)',
      tip: 'Nicht hetzen – ruhig und gleichmäßig schwimmen. Denk an deinen Atem und du schaffst locker 200 m!',
    },
    {
      id: 'bronze-tauchen',
      emoji: '🤿',
      name: 'Tiefen-Taucher',
      description: 'Einmal ~2 m Tieftauchen von der Wasseroberfläche, Gegenstand heraufholen',
      tip: 'Tief Luft holen, dann gerade nach unten tauchen. Den Gegenstand fest greifen und ab nach oben!',
    },
    {
      id: 'bronze-paketsprung',
      emoji: '💣',
      name: 'Bombe! 💥',
      description: 'Paketsprung ("Bombe") vom Startblock oder 1-Meter-Brett',
      tip: 'Knie anziehen, Arme drumherum – und schön weit springen für den größten Platsch! 💦',
    },
    {
      id: 'bronze-regeln',
      emoji: '📋',
      name: 'Baderegeln-Profi',
      description: 'Baderegeln kennen',
      tip: 'Lerne die Regeln mit Mama oder Papa zusammen – dann bist du sicher am Wasser und kannst anderen helfen!',
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
      tip: 'Arme gestreckt, Blick nach unten und mutig kippen – du kannst das schon!',
    },
    {
      id: 'silber-strecke',
      emoji: '⚡',
      name: '400 Meter!',
      description: '20 Min. schwimmen – mind. 400 m (300 m Bauch/Rücken + 100 m andere Lage)',
      tip: 'Fang ruhig an und steiger dein Tempo langsam. Mit gleichmäßigem Atem schaffst du die 400 m spielend!',
    },
    {
      id: 'silber-tauchen',
      emoji: '🤿',
      name: 'Tiefen-Taucher',
      description: 'Zweimal ~2 m Tieftauchen von der Wasseroberfläche, je einen Gegenstand heraufholen',
      tip: 'Erst einen holen, kurz verschnaufen – dann nochmal ran! Du kennst das schon vom Bronze.',
    },
    {
      id: 'silber-streckentauchen',
      emoji: '🦭',
      name: 'Strecken-Taucher',
      description: '10 m Streckentauchen mit Abstoß vom Beckenrand',
      tip: 'Kräftiger Abstoß, Körper gestreckt wie ein Pfeil – dann einfach gleiten lassen!',
    },
    {
      id: 'silber-sprung',
      emoji: '🦅',
      name: 'Hoch-Springer',
      description: 'Sprung aus 3 m Höhe oder 2 verschiedene Sprünge vom 1-Meter-Brett',
      tip: 'Oben kurz durchatmen, Blick geradeaus – und ab! Der Sprung dauert nur eine Sekunde. 🦅',
    },
    {
      id: 'silber-regeln',
      emoji: '📋',
      name: 'Sicherheits-Profi',
      description: 'Baderegeln & Verhalten zur Selbstrettung kennen',
      tip: 'Lerne, wie du dich selbst retten kannst – das ist das Wichtigste, was du am Wasser wissen kannst!',
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
      tip: 'Sauber gestreckt, Arme voran – zeig, wie ein echter Profi springt!',
    },
    {
      id: 'gold-strecke',
      emoji: '🔥',
      name: '800 Meter!',
      description: '30 Min. schwimmen – mind. 800 m (650 m Bauch/Rücken + 150 m andere Lage)',
      tip: 'Bleib entspannt und denk an deinen Rhythmus. Jede Länge bringt dich näher ans Ziel – du bist stark!',
    },
    {
      id: 'gold-kraul',
      emoji: '🐊',
      name: 'Krauler',
      description: 'Startsprung + 25 m Kraulschwimmen',
      tip: 'Abwechselnd Arme, Beine gleichmäßig schlagen und seitlich atmen. Kraul ist schnell – du wirst es lieben!',
    },
    {
      id: 'gold-brust',
      emoji: '🐸',
      name: 'Brust-Sprinter',
      description: 'Startsprung + 50 m Brustschwimmen in max. 1:15 min',
      tip: 'Kraftvoll abdrücken, Arme weit nach vorne ziehen – und zack, schon bist du am Ziel!',
    },
    {
      id: 'gold-ruecken',
      emoji: '🦦',
      name: 'Rücken-Schwimmer',
      description: '50 m Rückenschwimmen (Grätschschwung ohne Arme oder Rückenkraul)',
      tip: 'Schau nach oben, Hüfte hoch und Beine locker schlagen. Rückenschwimmen macht Spaß!',
    },
    {
      id: 'gold-streckentauchen',
      emoji: '🐬',
      name: 'Strecken-Taucher',
      description: '10 m Streckentauchen aus der Schwimmlage (ohne Abstoß vom Beckenrand)',
      tip: 'Erst tief einatmen, dann elegant abtauchen und wie ein Delfin gleiten!',
    },
    {
      id: 'gold-ringtauchen',
      emoji: '💍',
      name: 'Ring-Taucher',
      description: '3 Tauchringe aus ~2 m Tiefe in max. 3 Minuten (max. 3 Versuche) heraufholen',
      tip: 'Sieh die Ringe als Schatz – tauche gezielt einen nach dem anderen. Konzentration ist der Schlüssel!',
    },
    {
      id: 'gold-hochsprung',
      emoji: '🦅',
      name: 'Hoch-Springer',
      description: 'Sprung aus 3 m Höhe',
      tip: 'Tief durchatmen, mutig an den Rand treten – du hast das schon beim Silber geübt! 🦅',
    },
    {
      id: 'gold-retten',
      emoji: '🛟',
      name: 'Lebensretter',
      description: 'Baderegeln + Selbstrettung + einfache Fremdrettung bei Bade-, Boots- & Eisunfällen kennen',
      tip: 'Ein echter Lebensretter zu sein ist etwas ganz Besonderes – lerne die Regeln gut und du kannst anderen helfen!',
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
