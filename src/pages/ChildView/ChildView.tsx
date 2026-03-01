import { useState, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CHILDREN } from '../../data/badges'
import { useProgress } from '../../hooks/useProgress'
import AwardLevelCard from '../../components/AwardLevelCard/AwardLevelCard'
import Mascot from '../../components/Mascot/Mascot'
import styles from './ChildView.module.css'

export default function ChildView() {
  const { childId } = useParams<{ childId: string }>()
  const navigate = useNavigate()

  const child = CHILDREN.find((c) => c.id === childId)

  const { isBadgeAchieved, getBadgeDate, achieveBadge, unachieveBadge } =
    useProgress(child?.id ?? '')

  const [celebrating, setCelebrating] = useState(false)

  const handleAchieve = useCallback(
    (badgeId: string) => {
      achieveBadge(badgeId)
      setCelebrating(true)
      setTimeout(() => setCelebrating(false), 3000)
    },
    [achieveBadge],
  )

  if (!child) {
    return (
      <div style={{ padding: 40, textAlign: 'center' }}>
        <p>Kind nicht gefunden.</p>
        <button onClick={() => navigate('/')}>← Zurück</button>
      </div>
    )
  }

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

        <Mascot celebrating={celebrating} size={80} className={styles.mascot} />

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
            onAchieve={handleAchieve}
            onUnachieve={unachieveBadge}
          />
        ))}
      </div>
    </div>
  )
}
