import { useEffect, useState, useCallback } from 'react'
import {
  doc,
  onSnapshot,
  setDoc,
  updateDoc,
  deleteField,
} from 'firebase/firestore'
import { db } from '../lib/firebase'
import { ChildProgress } from '../types'

const LEVEL_PREFIX = '__level__'

export function useFirestoreProgress(uid: string | null, childId: string) {
  const [progress, setProgress] = useState<ChildProgress>({})

  useEffect(() => {
    if (!uid || !childId || childId === '__none__') {
      setProgress({})
      return
    }

    const ref = doc(db, 'users', uid, 'progress', childId)
    const unsubscribe = onSnapshot(ref, (snap) => {
      setProgress(snap.exists() ? (snap.data() as ChildProgress) : {})
    })
    return unsubscribe
  }, [uid, childId])

  const achieveBadge = useCallback(
    async (badgeId: string) => {
      if (!uid) return
      const ref = doc(db, 'users', uid, 'progress', childId)
      await setDoc(ref, { [badgeId]: new Date().toISOString() }, { merge: true })
    },
    [uid, childId],
  )

  const unachieveBadge = useCallback(
    async (badgeId: string) => {
      if (!uid) return
      const ref = doc(db, 'users', uid, 'progress', childId)
      await updateDoc(ref, { [badgeId]: deleteField() })
    },
    [uid, childId],
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

  const getLevelDate = useCallback(
    (levelId: string): string | null => progress[`${LEVEL_PREFIX}${levelId}`] ?? null,
    [progress],
  )

  const setLevelDate = useCallback(
    async (levelId: string, value: string | null) => {
      if (!uid) return
      const key = `${LEVEL_PREFIX}${levelId}`
      const ref = doc(db, 'users', uid, 'progress', childId)
      if (value) {
        await setDoc(ref, { [key]: value }, { merge: true })
      } else {
        await updateDoc(ref, { [key]: deleteField() })
      }
    },
    [uid, childId],
  )

  return {
    progress,
    achieveBadge,
    unachieveBadge,
    isBadgeAchieved,
    getBadgeDate,
    getLevelDate,
    setLevelDate,
  }
}
