import { useEffect, useRef } from 'react'
import { collection, doc, getDocs, setDoc } from 'firebase/firestore'
import { db } from '../lib/firebase'
import { useAuth } from '../context/AuthContext'
import { useChildren } from './useChildren'
import { useFirestoreChildren } from './useFirestoreChildren'
import { ChildProfile } from '../types'

const PROFILES_KEY = 'schwimmabzeichen-children-profiles'
const PROGRESS_KEY = (childId: string) => `schwimmabzeichen-${childId}`

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

      // Lokale Profile laden
      const rawProfiles = localStorage.getItem(PROFILES_KEY)
      if (!rawProfiles) return
      let profiles: ChildProfile[]
      try {
        profiles = JSON.parse(rawProfiles)
      } catch {
        return
      }

      // Profile + Fortschritt nach Firestore schreiben
      for (const profile of profiles) {
        await setDoc(doc(db, 'users', user!.uid, 'children', profile.id), profile)

        const rawProgress = localStorage.getItem(PROGRESS_KEY(profile.id))
        if (rawProgress) {
          try {
            const progress = JSON.parse(rawProgress)
            await setDoc(doc(db, 'users', user!.uid, 'progress', profile.id), progress)
          } catch {
            // Fortschritt-Migration fehlgeschlagen – ignorieren
          }
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
