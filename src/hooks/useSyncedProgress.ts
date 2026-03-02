import { useAuth } from '../context/AuthContext'
import { useProgress } from './useProgress'
import { useFirestoreProgress } from './useFirestoreProgress'

/**
 * Transparenter Wrapper: nutzt Firestore wenn eingeloggt, sonst localStorage.
 * Exportiert dieselbe API wie useProgress.
 */
export function useSyncedProgress(childId: string) {
  const { user } = useAuth()
  const local = useProgress(childId)
  const remote = useFirestoreProgress(user?.uid ?? null, childId)

  if (user) return remote
  return local
}
