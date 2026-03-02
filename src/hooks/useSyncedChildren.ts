import { useEffect, useRef } from 'react'
import { collection, doc, getDocs, setDoc } from 'firebase/firestore'
import { db } from '../lib/firebase'
import { useAuth } from '../context/AuthContext'
import { useChildren } from './useChildren'
import { useFirestoreChildren } from './useFirestoreChildren'
import { ChildProfile } from '../types'
import { CHILDREN } from '../data/badges'

const PROFILES_KEY = 'schwimmabzeichen-children-profiles'
const PROGRESS_KEY = (childId: string) => `schwimmabzeichen-${childId}`

function childToProfile(child: (typeof CHILDREN)[number]): ChildProfile {
  return {
    id: child.id,
    name: child.name,
    age: child.age,
    emoji: child.emoji,
    primaryColor: child.primaryColor,
    secondaryColor: child.secondaryColor,
    achievedLevelIds: child.levels.filter((l) => l.alreadyAchieved).map((l) => l.id),
  }
}

/**
 * Transparenter Wrapper: nutzt Firestore wenn eingeloggt, sonst localStorage.
 * Beim ersten Login werden lokale Daten automatisch nach Firestore migriert.
 */
export function useSyncedChildren() {
  const { user } = useAuth()
  const local = useChildren()
  const remote = useFirestoreChildren(user?.uid ?? null)
  const migratedRef = useRef(false)

  useEffect(() => {
    if (!user || migratedRef.current) return
    migratedRef.current = true

    async function migrate() {
      // Prüfen ob Firestore bereits Daten hat → dann keine Migration nötig
      const snapshot = await getDocs(collection(db, 'users', user!.uid, 'children'))
      if (!snapshot.empty) return

      // Lokale Profile aus localStorage laden
      const rawProfiles = localStorage.getItem(PROFILES_KEY)
      let profiles: ChildProfile[] | null = null
      if (rawProfiles) {
        try { profiles = JSON.parse(rawProfiles) } catch { /* ignore */ }
      }

      // Fallback: Standardprofile aus dem Code nehmen
      if (!profiles || profiles.length === 0) {
        profiles = CHILDREN.map(childToProfile)
      }

      // Profile + Fortschritt nach Firestore schreiben
      for (const profile of profiles) {
        await setDoc(doc(db, 'users', user!.uid, 'children', profile.id), profile)

        const rawProgress = localStorage.getItem(PROGRESS_KEY(profile.id))
        if (rawProgress) {
          try {
            const progress = JSON.parse(rawProgress)
            await setDoc(doc(db, 'users', user!.uid, 'progress', profile.id), progress)
          } catch { /* Fortschritt-Migration fehlgeschlagen */ }
        }
      }

      // localStorage nach erfolgreicher Migration aufräumen
      localStorage.removeItem(PROFILES_KEY)
      for (const profile of profiles) {
        localStorage.removeItem(PROGRESS_KEY(profile.id))
      }
    }

    migrate()
  }, [user])

  // Firestore-Daten wenn eingeloggt, sonst localStorage
  if (user) return remote
  return local
}
