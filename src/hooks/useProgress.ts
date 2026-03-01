import { useState, useCallback } from 'react'
import { ChildProgress, LevelAchievementDates } from '../types'

const storageKey = (childId: string) => `schwimmabzeichen-${childId}`
const levelDatesKey = (childId: string) => `schwimmabzeichen-${childId}-leveldates`

export function useProgress(childId: string) {
  const [progress, setProgress] = useState<ChildProgress>(() => {
    try {
      const raw = localStorage.getItem(storageKey(childId))
      return raw ? JSON.parse(raw) : {}
    } catch {
      return {}
    }
  })

  const [levelDates, setLevelDatesState] = useState<LevelAchievementDates>(() => {
    try {
      const raw = localStorage.getItem(levelDatesKey(childId))
      return raw ? JSON.parse(raw) : {}
    } catch {
      return {}
    }
  })

  const achieveBadge = useCallback(
    (badgeId: string) => {
      setProgress((prev) => {
        const updated = { ...prev, [badgeId]: new Date().toISOString() }
        localStorage.setItem(storageKey(childId), JSON.stringify(updated))
        return updated
      })
    },
    [childId],
  )

  const unachieveBadge = useCallback(
    (badgeId: string) => {
      setProgress((prev) => {
        const updated = { ...prev }
        delete updated[badgeId]
        localStorage.setItem(storageKey(childId), JSON.stringify(updated))
        return updated
      })
    },
    [childId],
  )

  const isBadgeAchieved = useCallback(
    (badgeId: string) => !!progress[badgeId],
    [progress],
  )

  const getBadgeDate = useCallback(
    (badgeId: string): Date | null =>
      progress[badgeId] ? new Date(progress[badgeId]) : null,
    [progress],
  )

  const setLevelDate = useCallback(
    (levelId: string, yearMonth: string) => {
      setLevelDatesState((prev) => {
        const updated = { ...prev }
        if (yearMonth) {
          updated[levelId] = yearMonth
        } else {
          delete updated[levelId]
        }
        localStorage.setItem(levelDatesKey(childId), JSON.stringify(updated))
        return updated
      })
    },
    [childId],
  )

  const getLevelDate = useCallback(
    (levelId: string): string | null => levelDates[levelId] ?? null,
    [levelDates],
  )

  return { progress, achieveBadge, unachieveBadge, isBadgeAchieved, getBadgeDate, setLevelDate, getLevelDate }
}
