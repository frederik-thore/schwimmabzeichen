import { useNavigate, useParams } from 'react-router-dom'
import { CHILDREN } from '../../data/badges'
import { useProgress } from '../../hooks/useProgress'
import AwardLevelCard from '../../components/AwardLevelCard/AwardLevelCard'
import styles from './ChildView.module.css'

export default function ChildView() {
  const { childId } = useParams<{ childId: string }>()
  const navigate = useNavigate()

  const child = CHILDREN.find((c) => c.id === childId)

  if (!child) {
    return (
      <div style={{ padding: 40, textAlign: 'center' }}>
        <p>Kind nicht gefunden.</p>
        <button onClick={() => navigate('/')}>← Zurück</button>
      </div>
    )
  }

  const { isBadgeAchieved, getBadgeDate, achieveBadge, unachieveBadge, getLevelDate, setLevelDate } =
    useProgress(child.id)

  const earnableBadges = child.levels
    .filter((l) => !l.alreadyAchieved)
    .flatMap((l) => l.badges)
  const achievedCount = earnableBadges.filter((b) => isBadgeAchieved(b.id)).length
  const totalCount = earnableBadges.length
  const percent = totalCount > 0 ? Math.round((achievedCount / totalCount) * 100) : 0

  // Sterne-Anzeige: je 20 % ein Stern
  const stars = Math.floor(percent / 20)

  return (
    <div className={styles.page}>
      {/* Header */}
      <div
        className={styles.header}
        style={{ background: `linear-gradient(135deg, ${child.primaryColor}, ${child.primaryColor}bb)` }}
      >
        <button
          className={styles.backBtn}
          onClick={() => navigate('/')}
          aria-label="Zurück zur Auswahl"
        >
          <span style={{ pointerEvents: 'none' }}>←</span>
        </button>

        <span className={styles.avatar}>{child.emoji}</span>
        <h1 className={styles.name}>{child.name}</h1>

        <div className={styles.stars}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={i < stars ? styles.starOn : styles.starOff}>
              ⭐
            </span>
          ))}
        </div>

        <div className={styles.progressWrap}>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${percent}%` }}
            />
          </div>
          <span className={styles.progressLabel}>
            {achievedCount} von {totalCount} Aufgaben
          </span>
        </div>
      </div>

      {/* Level-Karten */}
      <div className={styles.levels}>
        {child.levels.map((level) => (
          <AwardLevelCard
            key={level.id}
            level={level}
            isBadgeAchieved={isBadgeAchieved}
            getBadgeDate={getBadgeDate}
            getLevelDate={getLevelDate}
            setLevelDate={setLevelDate}
            onAchieve={achieveBadge}
            onUnachieve={unachieveBadge}
          />
        ))}
      </div>
    </div>
  )
}
