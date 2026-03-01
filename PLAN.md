# 🏊 Schwimmabzeichen-Tracker – Projektplan

Eine kindgerechte, spielerische Web-App zum Tracken des Fortschritts für Schwimmabzeichen – gebaut für **Freja** (6 J.) und **Henrik** (4 J.).

---

## 🎯 Ziel der App

Kinder sollen beim Erreichen ihrer Schwimmabzeichen motiviert und begleitet werden. Die App macht Fortschritte sichtbar, feiert Erfolge und zeigt, wann ein Kind bereit ist, zur offiziellen Prüfung anzutreten.

### Kinderprofile

| Kind | Alter | Erreichtes Abzeichen | Aktuelles Ziel |
|------|-------|----------------------|----------------|
| Freja | 6 Jahre | 🐴 Seepferdchen, 🥉 Bronze | 🥈 Silber |
| Henrik | 4 Jahre | – | 🐴 Seepferdchen |

---

## ✨ Features

### Fortschritts-Badges
Für jedes Schwimmabzeichen gibt es einzelne **Trainings-Badges** – kleine Meilensteine, die bereits im Training abgehakt werden können (z. B. „Ersten Gegenstand hochgetaucht 🤿"). Jeder Badge ist mit einem **lustigen, kindgerechten Bild** dargestellt.

Sobald alle Trainings-Badges für ein Abzeichen gesammelt wurden, erscheint eine klare Meldung:
> 🎉 „Du bist bereit für deine Prüfung! Jetzt anmelden!"

### Spielerische & motivierende Elemente
- 🎊 **Konfetti-Animation** wenn ein Badge oder Abzeichen erreicht wird
- ⭐ **Sterne & Levelanzeige** als visueller Fortschrittsbalken
- Große, bunte Bilder und Icons – **Henrik kann noch nicht lesen**, daher sind alle Badges primär bildbasiert; Freja bekommt zusätzlich kurze Texte

### Zeiterfassung
Jedes erreichte Badge wird mit **Datum und Uhrzeit** gespeichert, damit der Lernfortschritt über die Zeit nachvollziehbar bleibt.

### Weitere Features
- 👤 Zwei Kinderprofile, einfach umschaltbar
- 💾 Alle Daten lokal im Browser gespeichert (kein Login, kein Server nötig)
- 📱 Mobil-optimiert – perfekt für die Nutzung am Beckenrand

---

## 🏅 Schwimmabzeichen & Anforderungen

> Alle Anforderungen gemäß der **Deutschen Prüfungsordnung Schwimmen (DPO), gültig ab 1. Januar 2020**.

### 🐴 Seepferdchen *(Henriks Ziel)*
| # | Trainings-Badge | Anforderung |
|---|-----------------|-------------|
| 1 | 🏊 Erster Sprung | Sprung vom Beckenrand in schultertiefes Wasser |
| 2 | 🌊 25 Meter! | 25 m schwimmen (beliebige Technik) |
| 3 | 🤿 Tauchkünstler | Gegenstand aus schultertiefem Wasser aufheben |
| 4 | 📋 Baderegeln-Profi | Baderegeln kennen und benennen |

### 🥉 Bronze *(von Freja bereits erreicht)*
| # | Trainings-Badge | Anforderung |
|---|-----------------|-------------|
| 1 | 🏊 Kopfsprung! | Sprung kopfwärts vom Beckenrand |
| 2 | 🌊 200 Meter! | 15 Min. schwimmen, mind. 200 m (150 m Bauch/Rücken + 50 m andere Lage, Lagewechsel ohne Festhalten) |
| 3 | 🤿 Tiefen-Taucher | Einmal ~2 m Tieftauchen von der Wasseroberfläche, Gegenstand heraufholen |
| 4 | 🎽 Paketsprung | Paketsprung vom Startblock oder 1-Meter-Brett |
| 5 | 📋 Baderegeln-Profi | Baderegeln kennen |

### 🥈 Silber *(Frejas Ziel)*
| # | Trainings-Badge | Anforderung |
|---|-----------------|-------------|
| 1 | 🏊 Kopfsprung! | Sprung kopfwärts vom Beckenrand |
| 2 | 🌊 400 Meter! | 20 Min. schwimmen, mind. 400 m (300 m Bauch/Rücken + 100 m andere Lage, Lagewechsel ohne Festhalten) |
| 3 | 🤿 Tiefen-Taucher | Zweimal ~2 m Tieftauchen von der Wasseroberfläche, je einen Gegenstand heraufholen |
| 4 | 🧱 Strecken-Taucher | 10 m Streckentauchen mit Abstoß vom Beckenrand |
| 5 | 🎽 Hoch-Springer | Sprung aus 3 m Höhe oder 2 verschiedene Sprünge vom 1-Meter-Brett |
| 6 | 📋 Sicherheits-Profi | Baderegeln & Verhalten zur Selbstrettung kennen |

### 🥇 Gold
| # | Trainings-Badge | Anforderung |
|---|-----------------|-------------|
| 1 | 🏊 Kopfsprung! | Sprung kopfwärts vom Beckenrand |
| 2 | 🌊 800 Meter! | 30 Min. schwimmen, mind. 800 m (650 m Bauch/Rücken + 150 m andere Lage, Lagewechsel ohne Festhalten) |
| 3 | 🐊 Krauler | Startsprung + 25 m Kraulschwimmen |
| 4 | 🏅 Brust-Sprinter | Startsprung + 50 m Brustschwimmen in max. 1:15 min |
| 5 | 🔄 Rücken-Schwimmer | 50 m Rückenschwimmen (Grätschschwung ohne Arme oder Rückenkraul) |
| 6 | 🧱 Strecken-Taucher | 10 m Streckentauchen aus der Schwimmlage (ohne Abstoß vom Beckenrand) |
| 7 | 🤿 Ring-Taucher | 3 Tauchringe aus ~2 m Tiefe in max. 3 Minuten (max. 3 Versuche) heraufholen |
| 8 | 🎽 Hoch-Springer | Sprung aus 3 m Höhe |
| 9 | 🛟 Lebensretter | Baderegeln + Selbstrettung + einfache Fremdrettung bei Bade-, Boots- & Eisunfällen kennen |

---

## ☁️ Kostenloses Hosting

Die App ist eine reine **Static Site** (HTML + JS + CSS, kein Backend) – perfekt für kostenlose Hosting-Angebote. Alle Daten bleiben im Browser des Nutzers (localStorage), es wird kein Server benötigt.

### Deployment: **GitHub Pages** mit GitHub Actions

| Anbieter | Kosten | Bandbreite | Builds/Monat | Eigene Domain | Besonderheit |
|---|---|---|---|---|---|
| **GitHub Pages** | **kostenlos** | 100 GB | unbegrenzt | ✅ kostenlos | Direkt im GitHub-Repo integriert, CI/CD via Actions |
| Vercel (Hobby) | kostenlos | 100 GB | unbegrenzt | ✅ kostenlos | Einfachstes Setup, hervorragend für React/Vite |
| Netlify (Free) | kostenlos | ~100 GB | 300 Credits | ✅ kostenlos | Guter DX, aber Credit-Limits seit 2024 |
| Cloudflare Pages | kostenlos | unbegrenzt | 500 | ✅ kostenlos | Schnellstes CDN, unbegrenzte Anfragen |

### Warum GitHub Pages?
- **Alles an einem Ort**: Code, CI/CD und Hosting leben im selben GitHub-Repo
- **Kein zusätzlicher Account** bei einem Drittanbieter nötig
- **GitHub Actions** baut die App automatisch bei jedem `git push` und deployt sie
- Die App ist unter `https://<username>.github.io/schwimmabzeichen/` erreichbar

### Deployment-Schritte (nach Fertigstellung der App)
1. Code in ein **GitHub-Repository** pushen
2. In `vite.config.ts` ist der `base`-Pfad bereits gesetzt: `base: '/schwimmabzeichen/'`
3. GitHub Actions Workflow (`.github/workflows/deploy.yml`) läuft automatisch bei jedem Push auf `main`
4. In den GitHub-Repo-Einstellungen unter **Pages** → Source: `gh-pages`-Branch auswählen
5. Die App ist sofort unter der `github.io`-URL erreichbar

---

## 🛠️ Technologiestack

| Bereich | Technologie | Begründung |
|---------|-------------|------------|
| Framework | **React 18** | Komponentenbasiert, ideal für Kinderprofile & Badge-Listen |
| Build-Tool | **Vite 5** | Schnelles Setup, sofortiger Dev-Server |
| Sprache | **TypeScript** | Typsicherheit für Datenschemas (Profile, Badges, Abzeichen) |
| Styling | **CSS Modules** | Scoped Styles, kein Build-Tool-Overhead |
| Animationen | **canvas-confetti** | Leichtgewichtige Konfetti-Effekte |
| Routing | **react-router-dom** | Navigation zwischen Startseite und Kindprofil |
| Persistenz | **localStorage** | Kein Backend nötig, offline-fähig |
| Icons/Bilder | Emoji + SVG-Illustrationen | Universell verständlich, auch ohne Lesekenntnis |

### Projektstruktur

```
schwimmabzeichen/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions: Build & Deploy auf GitHub Pages
├── public/
│   └── assets/               # Badge-Illustrationen, Hintergrundbilder
├── src/
│   ├── components/
│   │   ├── BadgeCard/        # Einzelner Trainings-Badge mit Bild
│   │   ├── AwardLevelCard/   # Übersicht eines Schwimmabzeichens
│   │   └── ReadyBanner/      # "Bereit für die Prüfung!"-Anzeige
│   ├── data/
│   │   └── badges.ts         # Alle Abzeichen & Anforderungen als Datenschema
│   ├── hooks/
│   │   └── useProgress.ts    # Fortschritt lesen/schreiben in localStorage
│   ├── pages/
│   │   ├── Home/             # Startseite (Kindauswahl)
│   │   └── ChildView/        # Detailseite pro Kind
│   ├── types/
│   │   └── index.ts          # TypeScript-Typen
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── Dockerfile                # Produktion: Multi-stage Build (Node → nginx)
├── Dockerfile.dev            # Entwicklung: Vite Dev-Server mit Hot Reload
└── docker-compose.yml        # Lokale Entwicklungsumgebung per Docker
```

---

## 🚀 Entwicklungsschritte

1. **Setup** – Vite + React + TypeScript Projekt initialisieren ✅
2. **Pakete** – canvas-confetti, react-router-dom installieren ✅
3. **Datenschema** – Abzeichen, Badges und Kinderprofile als TypeScript-Typen ✅
4. **Persistenz** – `useProgress`-Hook mit localStorage ✅
5. **Komponenten** – BadgeCard, AwardLevelCard, ReadyBanner ✅
6. **Seiten** – Home (Kindauswahl), ChildView (Fortschritt) ✅
7. **Routing** – react-router-dom mit GitHub Pages basename ✅
8. **Animationen** – Konfetti bei Badge-Erreichen ✅
9. **Docker** – Dockerfile (Produktion) + Dockerfile.dev + docker-compose ✅
10. **CI/CD** – GitHub Actions Workflow für automatisches Deployment ✅

---

## 📋 Lokale Entwicklung

### Option A: direkt mit Node
```bash
npm install
npm run dev
```
Öffne [http://localhost:5173](http://localhost:5173) im Browser.

### Option B: mit Docker 🐳

**Entwicklung** (Hot Reload aktiv):
```bash
docker compose up
```
Öffne [http://localhost:5173](http://localhost:5173) im Browser.

**Produktion lokal testen** (nginx serviert den fertigen Bundle):
```bash
docker build -t schwimmabzeichen .
docker run -p 8080:80 schwimmabzeichen
```
Öffne [http://localhost:8080](http://localhost:8080) im Browser.
