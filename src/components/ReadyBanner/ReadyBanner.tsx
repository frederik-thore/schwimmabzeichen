import styles from './ReadyBanner.module.css'

interface Props {
  levelName: string
  levelEmoji: string
  levelColor: string
}

export default function ReadyBanner({ levelName, levelEmoji, levelColor }: Props) {
  return (
    <div className={styles.banner} style={{ borderColor: levelColor }}>
      <div className={styles.fire}>🎉</div>
      <div className={styles.trophy}>{levelEmoji}</div>
      <p className={styles.title}>Bereit für die Prüfung!</p>
      <p className={styles.sub}>
        Du hast alle Trainings-Aufgaben für <strong>{levelName}</strong> geschafft!
      </p>
      <p className={styles.cta}>👉 Jetzt zur Prüfung anmelden!</p>
    </div>
  )
}
