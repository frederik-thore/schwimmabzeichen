import { useState, useCallback, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useChildren } from '../../hooks/useChildren'
import { useProgress } from '../../hooks/useProgress'
import AwardLevelCard from '../../components/AwardLevelCard/AwardLevelCard'
import Mascot from '../../components/Mascot/Mascot'
import styles from './ChildView.module.css'

export default function ChildView() {
  const { childId } = useParams<{ childId: string }>()
  const navigate = useNavigate()
  const { getChildById } = useChildren()

  const child = getChildById(childId ?? '')

  // Hooks müssen vor dem Early-Return stehen (Rules of Hooks)
  const { isBadgeAchieved, getBadgeDate, getLevelDate, setLevelDate, achieveBadge, unachieveBadge } =
    useProgress(child?.id ?? '__none__')

  const [celebrating, setCelebrating] = useState(false)
  const celebrateTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleAchieveBadge = useCallback(
    (badgeId: string) => {
      achieveBadge(badgeId)
      setCelebrating(true)
      if (celebrateTimer.current) clearTimeout(celebrateTimer.current)
      celebrateTimer.current = setTimeout(() => setCelebrating(false), 3000)
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

        <Mascot celebrating={celebrating} size={64} className={styles.mascot} />
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
            onAchieve={handleAchieveBadge}
            onUnachieve={unachieveBadge}
            onSetLevelDate={setLevelDate}
          />
        ))}
      </div>
    </div>
  )
}

