import { useNavigate } from 'react-router-dom'
import { CHILDREN } from '../../data/badges'
import { useProgress } from '../../hooks/useProgress'
import styles from './Home.module.css'

function ChildCard({ child }: { child: (typeof CHILDREN)[0] }) {
  const navigate = useNavigate()
  const { isBadgeAchieved } = useProgress(child.id)

  const earnableBadges = child.levels
    .filter((l) => !l.alreadyAchieved)
    .flatMap((l) => l.badges)

  const achievedCount = earnableBadges.filter((b) => isBadgeAchieved(b.id)).length
  const totalCount = earnableBadges.length

  const currentLevel = child.levels.find((l) => !l.alreadyAchieved)

  return (
    <button
      className={styles.childCard}
      style={{ background: `linear-gradient(145deg, ${child.primaryColor}, ${child.secondaryColor === child.primaryColor ? child.primaryColor + 'aa' : child.secondaryColor})` }}
      onClick={() => navigate(`/kind/${child.id}`)}
      aria-label={`${child.name} auswählen`}
    >
      <span className={styles.childEmoji}>{child.emoji}</span>
      <span className={styles.childName}>{child.name}</span>
      <span className={styles.childAge}>{child.age} Jahre</span>

      {currentLevel && (
        <div className={styles.goalBadge}>
          <span>{currentLevel.emoji}</span>
          <span>Ziel: {currentLevel.name}</span>
        </div>
      )}

      <div className={styles.progressRow}>
        <div className={styles.progressBarSmall}>
          <div
            className={styles.progressFillSmall}
            style={{ width: totalCount > 0 ? `${(achievedCount / totalCount) * 100}%` : '0%' }}
          />
        </div>
        <span className={styles.progressText}>
          {achievedCount}/{totalCount}
        </span>
      </div>
    </button>
  )
}

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.waves}>🌊</div>
        <h1 className={styles.title}>Schwimm-Tracker</h1>
        <p className={styles.subtitle}>Wer möchte heute trainieren?</p>
      </div>

      <div className={styles.childGrid}>
        {CHILDREN.map((child) => (
          <ChildCard key={child.id} child={child} />
        ))}
      </div>
    </div>
  )
}
