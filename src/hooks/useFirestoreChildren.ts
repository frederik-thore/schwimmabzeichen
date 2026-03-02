import { useEffect, useState, useCallback } from 'react'
import {
  collection,
  doc,
  onSnapshot,
  setDoc,
  deleteDoc,
  query,
} from 'firebase/firestore'
import { db } from '../lib/firebase'
import { Child, ChildProfile } from '../types'
import { LEVELS } from '../data/badges'

function profileToChild(profile: ChildProfile): Child {
  return {
    id: profile.id,
    name: profile.name,
    age: profile.age,
    emoji: profile.emoji,
    primaryColor: profile.primaryColor,
    secondaryColor: profile.secondaryColor,
    levels: LEVELS.map((level) => ({
      ...level,
      badges: [...level.badges],
      alreadyAchieved: profile.achievedLevelIds.includes(level.id),
    })),
  }
}

export function useFirestoreChildren(uid: string | null) {
  const [profiles, setProfiles] = useState<ChildProfile[]>([])
  const [loading, setLoading] = useState(!!uid)

  useEffect(() => {
    if (!uid) {
      setProfiles([])
      setLoading(false)
      return
    }

    setLoading(true)
    const q = query(collection(db, 'users', uid, 'children'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const loaded: ChildProfile[] = snapshot.docs.map((d) => d.data() as ChildProfile)
      setProfiles(loaded)
      setLoading(false)
    })
    return unsubscribe
  }, [uid])

  const children: Child[] = profiles.map(profileToChild)

  const addChild = useCallback(
    async (profile: ChildProfile) => {
      if (!uid) return
      await setDoc(doc(db, 'users', uid, 'children', profile.id), profile)
    },
    [uid],
  )

  const updateChild = useCallback(
    async (profile: ChildProfile) => {
      if (!uid) return
      await setDoc(doc(db, 'users', uid, 'children', profile.id), profile)
    },
    [uid],
  )

  const deleteChild = useCallback(
    async (id: string) => {
      if (!uid) return
      await deleteDoc(doc(db, 'users', uid, 'children', id))
    },
    [uid],
  )

  const getChildById = useCallback(
    (id: string): Child | undefined => children.find((c) => c.id === id),
    [children],
  )

  return { children, profiles, addChild, updateChild, deleteChild, getChildById, loading }
}
