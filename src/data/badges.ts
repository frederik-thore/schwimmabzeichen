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
      tip: 'Stell dich an den Rand, schau nach vorne und spring einfach rein! Du schaffst das! 💪',
    },
    {
      id: 'seepferdchen-strecke',
      emoji: '🐟',
      name: '25 Meter!',
      description: '25 m schwimmen (beliebige Technik)',
      tip: 'Schwimm einfach drauflos – Brust, Kraulen oder Rücken, alles ist erlaubt!',
    },
    {
      id: 'seepferdchen-tauchen',
      emoji: '🤿',
      name: 'Tauchkünstler',
      description: 'Gegenstand aus schultertiefem Wasser aufheben',
      tip: 'Augen auf unter Wasser! Leg einen bunten Ring auf den Boden und tauch danach. 🤿',
    },
    {
      id: 'seepferdchen-regeln',
      emoji: '📋',
      name: 'Baderegeln-Profi',
      description: 'Baderegeln kennen und benennen',
      tip: 'Lern die Regeln mit Mama oder Papa: z.B. nie alleine schwimmen und auf den Bademeister hören!',
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
      tip: 'Arme gestreckt nach vorn, Kinn auf die Brust und dann eintauchen wie ein Pfeil! 🏹',
    },
    {
      id: 'bronze-strecke',
      emoji: '🏊',
      name: '200 Meter!',
      description: '15 Min. schwimmen – mind. 200 m (150 m Bauch/Rücken + 50 m andere Lage)',
      tip: 'Zähl die Bahnen: 4 Bahnen im 25m-Becken = 100 m. Du schaffst 8 Bahnen! Mach Pausen wenn nötig.',
    },
    {
      id: 'bronze-tauchen',
      emoji: '🤿',
      name: 'Tiefen-Taucher',
      description: 'Einmal ~2 m Tieftauchen von der Wasseroberfläche, Gegenstand heraufholen',
      tip: 'Tief Luft holen, dann kopfüber abtauchen. Der Gegenstand wartet auf dich! 💎',
    },
    {
      id: 'bronze-paketsprung',
      emoji: '💣',
      name: 'Bombe! 💥',
      description: 'Paketsprung ("Bombe") vom Startblock oder 1-Meter-Brett',
      tip: 'Knie an die Brust ziehen, Arme drum wickeln – und dann: BOMBE! Wer macht den größten Platscher? 💦',
    },
    {
      id: 'bronze-regeln',
      emoji: '📋',
      name: 'Baderegeln-Profi',
      description: 'Baderegeln kennen',
      tip: 'Kannst du mindestens 5 Baderegeln aufzählen? Frag deinen Trainer oder schau sie gemeinsam nach!',
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
      tip: 'Kopf zwischen die Arme, gestreckt wie eine Rakete ins Wasser! 🚀',
    },
    {
      id: 'silber-strecke',
      emoji: '⚡',
      name: '400 Meter!',
      description: '20 Min. schwimmen – mind. 400 m (300 m Bauch/Rücken + 100 m andere Lage)',
      tip: 'Teile die Strecke auf: erstmal 200 m in einer Lage, dann Pause, dann weiter. Schritt für Schritt! 🏊',
    },
    {
      id: 'silber-tauchen',
      emoji: '🤿',
      name: 'Tiefen-Taucher',
      description: 'Zweimal ~2 m Tieftauchen von der Wasseroberfläche, je einen Gegenstand heraufholen',
      tip: 'Zwei Ringe, zwei Tauchgänge – du kannst kurz an die Oberfläche zwischen den Tauchgängen!',
    },
    {
      id: 'silber-streckentauchen',
      emoji: '🦭',
      name: 'Strecken-Taucher',
      description: '10 m Streckentauchen mit Abstoß vom Beckenrand',
      tip: 'Kräftiger Abstoß vom Rand, Körper wie ein Brett – dann einfach durch das Wasser gleiten! 🦭',
    },
    {
      id: 'silber-sprung',
      emoji: '🦅',
      name: 'Hoch-Springer',
      description: 'Sprung aus 3 m Höhe oder 2 verschiedene Sprünge vom 1-Meter-Brett',
      tip: 'Vom 1m-Brett: erst Bombe, dann Kopfsprung üben. Das 3m-Brett kommt von ganz allein! 🦅',
    },
    {
      id: 'silber-regeln',
      emoji: '📋',
      name: 'Sicherheits-Profi',
      description: 'Baderegeln & Verhalten zur Selbstrettung kennen',
      tip: 'Was tust du, wenn jemand Hilfe braucht? Rufen, nicht selbst rein! Üb das mit Mama/Papa.',
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
      tip: 'Perfekter Einstieg: Arme gestreckt, Beine zusammen, spitz wie ein Bleistift ins Wasser! ✏️',
    },
    {
      id: 'gold-strecke',
      emoji: '🔥',
      name: '800 Meter!',
      description: '30 Min. schwimmen – mind. 800 m (650 m Bauch/Rücken + 150 m andere Lage)',
      tip: '800 m = 32 Bahnen im 25m-Becken. Zähl einfach mit – jede Bahn bringt dich näher zum Gold! 🥇',
    },
    {
      id: 'gold-kraul',
      emoji: '🐊',
      name: 'Krauler',
      description: 'Startsprung + 25 m Kraulschwimmen',
      tip: 'Beim Kraul: Arme abwechselnd, Beine schnell und gleichmäßig – und den Kopf beim Einatmen drehen!',
    },
    {
      id: 'gold-brust',
      emoji: '🐸',
      name: 'Brust-Sprinter',
      description: 'Startsprung + 50 m Brustschwimmen in max. 1:15 min',
      tip: '1:15 min für 50 m – das sind 2 Bahnen. Üb die Wende sauber, das spart viele Sekunden! ⏱️',
    },
    {
      id: 'gold-ruecken',
      emoji: '🦦',
      name: 'Rücken-Schwimmer',
      description: '50 m Rückenschwimmen (Grätschschwung ohne Arme oder Rückenkraul)',
      tip: 'Schau nach oben zur Decke, Hüfte hochhalten und ruhig paddeln – du kannst nicht so leicht sinken! 😄',
    },
    {
      id: 'gold-streckentauchen',
      emoji: '🐬',
      name: 'Strecken-Taucher',
      description: '10 m Streckentauchen aus der Schwimmlage (ohne Abstoß vom Beckenrand)',
      tip: 'Kein Abstoß erlaubt! Aus der Schwimmlage tief Luft holen und dann unter Wasser gleiten wie ein Delfin! 🐬',
    },
    {
      id: 'gold-ringtauchen',
      emoji: '💍',
      name: 'Ring-Taucher',
      description: '3 Tauchringe aus ~2 m Tiefe in max. 3 Minuten (max. 3 Versuche) heraufholen',
      tip: 'Leg die Ringe vorher selbst auf den Boden – dann weißt du wo sie liegen! Einer nach dem anderen. 💍',
    },
    {
      id: 'gold-hochsprung',
      emoji: '🦅',
      name: 'Hoch-Springer',
      description: 'Sprung aus 3 m Höhe',
      tip: 'Vom 3m-Brett: Atmen, nicht nach unten schauen, einfach loslaufen und springen! Du packst das! 💪',
    },
    {
      id: 'gold-retten',
      emoji: '🛟',
      name: 'Lebensretter',
      description: 'Baderegeln + Selbstrettung + einfache Fremdrettung bei Bade-, Boots- & Eisunfällen kennen',
      tip: 'Lern die 3 Schritte: Rufen – Werfen – wenn sicher dann Helfen. Du kannst Leben retten! 🛟',
    },
  ],
}

// ─── Level-Definitionen (Fallback & Wiederverwendung) ──────────────────────

export const LEVELS = [seepferdchen, bronze, silber, gold]

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
