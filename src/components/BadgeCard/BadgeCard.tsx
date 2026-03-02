import { useState } from 'react'
import confetti from 'canvas-confetti'
import { TrainingBadge } from '../../types'
import styles from './BadgeCard.module.css'

interface Props {
  badge: TrainingBadge
  achieved: boolean
  achievedAt: Date | null
  locked: boolean // alreadyAchieved level → all treated as done, no toggle
  levelColor: string
  levelBgColor: string
  onAchieve: () => void
  onUnachieve: () => void
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function fireworks(color: string) {
  confetti({
    particleCount: 120,
    spread: 80,
    origin: { y: 0.6 },
    colors: [color, '#fbbf24', '#f472b6', '#34d399'],
  })
}

export default function BadgeCard({
  badge,
  achieved,
  achievedAt,
  locked,
  levelColor,
  levelBgColor,
  onAchieve,
  onUnachieve,
}: Props) {
  const isDone = achieved || locked
  const [tipOpen, setTipOpen] = useState(false)

  const handleClick = () => {
    if (locked) return
    if (!achieved) {
      onAchieve()
      fireworks(levelColor)
    } else {
      if (window.confirm(`"${badge.name}" wieder als offen markieren?`)) {
        onUnachieve()
      }
    }
  }

  const handleTipToggle = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation()
    if ('key' in e && e.key !== 'Enter' && e.key !== ' ') return
    setTipOpen((prev) => !prev)
  }

  return (
    <button
      className={`${styles.card} ${isDone ? styles.done : styles.open}`}
      style={
        isDone
          ? { backgroundColor: levelBgColor, borderColor: levelColor }
          : undefined
      }
      onClick={handleClick}
      aria-label={`${badge.name}: ${isDone ? 'geschafft' : 'noch offen'}`}
    >
      <span className={styles.emoji}>{badge.emoji}</span>

      {isDone && <span className={styles.checkmark}>✅</span>}

      <span className={styles.name}>{badge.name}</span>

      {isDone && achievedAt && (
        <span className={styles.date}>{formatDate(achievedAt)}</span>
      )}

      {!isDone && (
        <span className={styles.desc}>{badge.description}</span>
      )}

      {!isDone && badge.tip && (
        <span
          className={styles.tipToggle}
          role="button"
          tabIndex={0}
          aria-label={tipOpen ? 'Trainingstipp ausblenden' : 'Trainingstipp anzeigen'}
          aria-expanded={tipOpen}
          onClick={handleTipToggle}
          onKeyDown={handleTipToggle}
        >
          💡
        </span>
      )}

      {!isDone && tipOpen && badge.tip && (
        <span className={styles.tip}>{badge.tip}</span>
      )}
    </button>
  )
}
