import { useAuth } from '../../context/AuthContext'
import styles from './SyncBanner.module.css'

export default function SyncBanner() {
  const { user, loading, signInWithGoogle, signOut, isConfigured } = useAuth()

  if (!isConfigured || loading) return null

  if (user) {
    return (
      <div className={styles.banner}>
        <span className={styles.icon}>☁️</span>
        <span className={styles.label}>
          Synchronisiert als <strong>{user.displayName ?? user.email}</strong>
        </span>
        <button className={styles.signOutBtn} onClick={signOut}>
          Abmelden
        </button>
      </div>
    )
  }

  return (
    <div className={styles.banner}>
      <span className={styles.icon}>💾</span>
      <span className={styles.label}>Nur auf diesem Gerät gespeichert</span>
      <button className={styles.signInBtn} onClick={signInWithGoogle}>
        ☁️ Sync aktivieren
      </button>
    </div>
  )
}
