import { useState } from 'react'
import { AwardLevel } from '../../types'
import BadgeCard from '../BadgeCard/BadgeCard'
import ReadyBanner from '../ReadyBanner/ReadyBanner'
import styles from './AwardLevelCard.module.css'

interface Props {
  level: AwardLevel
  isBadgeAchieved: (id: string) => boolean
  getBadgeDate: (id: string) => Date | null
  getLevelDate: (levelId: string) => string | null
  setLevelDate: (levelId: string, yearMonth: string) => void
  onAchieve: (id: string) => void
  onUnachieve: (id: string) => void
}

function formatYearMonth(yearMonth: string): string {
  const match = yearMonth.match(/^(\d{4})-(\d{2})$/)
  if (!match) return yearMonth
  const date = new Date(Number(match[1]), Number(match[2]) - 1, 1)
  return date.toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })
}

export default function AwardLevelCard({
  level,
  isBadgeAchieved,
  getBadgeDate,
  getLevelDate,
  setLevelDate,
  onAchieve,
  onUnachieve,
}: Props) {
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
              🏆 Bereits erreicht!
              {getLevelDate(level.id) && (
                <span className={styles.achievedDate}>
                  {' · Erreicht im '}
                  {formatYearMonth(getLevelDate(level.id)!)}
                </span>
              )}
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
          {level.alreadyAchieved && (
            <div className={styles.datePicker}>
              <label className={styles.dateLabel} style={{ color: level.color }}>
                📅 Wann erreicht? (optional)
              </label>
              <input
                type="month"
                className={styles.dateInput}
                style={{ borderColor: level.color }}
                value={getLevelDate(level.id) ?? ''}
                onChange={(e) => setLevelDate(level.id, e.target.value)}
              />
            </div>
          )}
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
        </div>
      )}
    </div>
  )
}
