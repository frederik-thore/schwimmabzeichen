import { useState } from 'react'
import { AwardLevel } from '../../types'
import BadgeCard from '../BadgeCard/BadgeCard'
import ReadyBanner from '../ReadyBanner/ReadyBanner'
import styles from './AwardLevelCard.module.css'

function formatMonthYear(value: string): string {
  const [year, month] = value.split('-').map(Number)
  if (!year || !month) return ''
  return new Date(year, month - 1).toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })
}

interface Props {
  level: AwardLevel
  isBadgeAchieved: (id: string) => boolean
  getBadgeDate: (id: string) => Date | null
  getLevelDate: (levelId: string) => string | null
  onAchieve: (id: string) => void
  onUnachieve: (id: string) => void
  onSetLevelDate: (levelId: string, value: string | null) => void
}

export default function AwardLevelCard({
  level,
  isBadgeAchieved,
  getBadgeDate,
  getLevelDate,
  onAchieve,
  onUnachieve,
  onSetLevelDate,
}: Props) {
  const levelDate = getLevelDate(level.id)
  const [expanded, setExpanded] = useState(!level.alreadyAchieved)

  const trainingAchieved = level.alreadyAchieved
    ? level.badges.length
    : level.badges.filter((b) => isBadgeAchieved(b.id)).length

  const total = level.badges.length
  const allDone = trainingAchieved === total
  const readyForExam = !level.alreadyAchieved && allDone

  const progressPercent = Math.round((trainingAchieved / total) * 100)

  return (
    <div
      className={`${styles.card} ${level.alreadyAchieved ? styles.achieved : ''}`}
      style={{ borderColor: level.color }}
    >
      {/* Header */}
      <button
        className={styles.header}
        style={{ backgroundColor: level.alreadyAchieved ? level.color : '#fff' }}
        onClick={() => setExpanded((e) => !e)}
        aria-expanded={expanded}
      >
        <span className={styles.levelEmoji}>{level.emoji}</span>
        <div className={styles.headerText}>
          <span
            className={styles.levelName}
            style={{ color: level.alreadyAchieved ? '#fff' : level.color }}
          >
            {level.name}
          </span>
          {level.alreadyAchieved ? (
            <span className={styles.alreadyTag}>
              🏆 Bereits erreicht!{levelDate ? ` · Erreicht im ${formatMonthYear(levelDate)}` : ''}
            </span>
          ) : (
            <span className={styles.progress} style={{ color: level.color }}>
              {trainingAchieved}/{total} Aufgaben
            </span>
          )}
        </div>
        <span className={styles.chevron}>{expanded ? '▲' : '▼'}</span>
      </button>

      {/* Fortschrittsbalken */}
      {!level.alreadyAchieved && (
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${progressPercent}%`, backgroundColor: level.color }}
          />
        </div>
      )}

      {/* Badge-Grid */}
      {expanded && (
        <div className={styles.body}>
          <div className={styles.grid}>
            {level.badges.map((badge) => (
              <BadgeCard
                key={badge.id}
                badge={badge}
                achieved={isBadgeAchieved(badge.id)}
                achievedAt={getBadgeDate(badge.id)}
                locked={!!level.alreadyAchieved}
                levelColor={level.color}
                levelBgColor={level.bgColor}
                onAchieve={() => onAchieve(badge.id)}
                onUnachieve={() => onUnachieve(badge.id)}
              />
            ))}
          </div>

          {readyForExam && (
            <ReadyBanner
              levelName={level.name}
              levelEmoji={level.emoji}
              levelColor={level.color}
            />
          )}

          {level.alreadyAchieved && (
            <div className={styles.dateSection}>
              <label className={styles.dateLabel} htmlFor={`date-${level.id}`}>
                📅 Wann erreicht?
              </label>
              <input
                id={`date-${level.id}`}
                type="month"
                className={styles.dateInput}
                value={levelDate ?? ''}
                onChange={(e) => onSetLevelDate(level.id, e.target.value || null)}
              />
            </div>
          )}
        </div>
      )}
    </div>
  )
}
