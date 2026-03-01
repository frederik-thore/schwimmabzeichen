import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useChildren } from '../../hooks/useChildren'
import { useProgress } from '../../hooks/useProgress'
import { Child, ChildProfile } from '../../types'
import ChildFormModal from '../../components/ChildFormModal/ChildFormModal'
import styles from './Home.module.css'

function ChildCard({
  child,
  onEdit,
  onDelete,
}: {
  child: Child
  onEdit: () => void
  onDelete: () => void
}) {
  const navigate = useNavigate()
  const { isBadgeAchieved } = useProgress(child.id)
  const [confirmDelete, setConfirmDelete] = useState(false)

  const earnableBadges = child.levels
    .filter((l) => !l.alreadyAchieved)
    .flatMap((l) => l.badges)

  const achievedCount = earnableBadges.filter((b) => isBadgeAchieved(b.id)).length
  const totalCount = earnableBadges.length

  const currentLevel = child.levels.find((l) => !l.alreadyAchieved)

  return (
    <div
      className={styles.childCardWrapper}
      style={{
        background: `linear-gradient(145deg, ${child.primaryColor}, ${child.secondaryColor === child.primaryColor ? child.primaryColor + 'aa' : child.secondaryColor})`,
      }}
    >
      <button
        className={styles.childCard}
        onClick={() => navigate(`/kind/${child.id}`)}
        aria-label={`${child.name} auswählen`}
      >
        <span className={styles.childEmoji}>{child.emoji}</span>
        <span className={styles.childName}>{child.name}</span>
        <span className={styles.childAge}>{child.age} Jahre</span>

        {currentLevel && (
          <div className={styles.goalBadge}>
            <span>{currentLevel.emoji}</span>
            <span>Ziel: {currentLevel.name}</span>
          </div>
        )}

        <div className={styles.progressRow}>
          <div className={styles.progressBarSmall}>
            <div
              className={styles.progressFillSmall}
              style={{ width: totalCount > 0 ? `${(achievedCount / totalCount) * 100}%` : '0%' }}
            />
          </div>
          <span className={styles.progressText}>
            {achievedCount}/{totalCount}
          </span>
        </div>
      </button>

      <div className={styles.cardActions}>
        {confirmDelete ? (
          <>
            <span className={styles.confirmText}>Löschen?</span>
            <button
              className={`${styles.actionBtn} ${styles.actionBtnConfirm}`}
              onClick={() => { setConfirmDelete(false); onDelete() }}
              aria-label="Löschen bestätigen"
            >
              ✓
            </button>
            <button
              className={styles.actionBtn}
              onClick={() => setConfirmDelete(false)}
              aria-label="Abbrechen"
            >
              ✕
            </button>
          </>
        ) : (
          <>
            <button
              className={styles.actionBtn}
              onClick={onEdit}
              aria-label={`${child.name} bearbeiten`}
            >
              ✏️
            </button>
            <button
              className={styles.actionBtn}
              onClick={() => setConfirmDelete(true)}
              aria-label={`${child.name} löschen`}
            >
              🗑️
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default function Home() {
  const { children, profiles, addChild, updateChild, deleteChild } = useChildren()
  const [modalOpen, setModalOpen] = useState(false)
  const [editingProfile, setEditingProfile] = useState<ChildProfile | undefined>()

  const openAddModal = () => {
    setEditingProfile(undefined)
    setModalOpen(true)
  }

  const openEditModal = (profile: ChildProfile) => {
    setEditingProfile(profile)
    setModalOpen(true)
  }

  const handleSave = (profile: ChildProfile) => {
    if (editingProfile) {
      updateChild(editingProfile.id, profile)
    } else {
      addChild(profile)
    }
    setModalOpen(false)
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.waves}>🌊</div>
        <h1 className={styles.title}>Schwimm-Tracker</h1>
        <p className={styles.subtitle}>Wer möchte heute trainieren?</p>
      </div>

      <div className={styles.childGrid}>
        {children.map((child) => {
          const profile = profiles.find((p) => p.id === child.id)
          if (!profile) return null
          return (
            <ChildCard
              key={child.id}
              child={child}
              onEdit={() => openEditModal(profile)}
              onDelete={() => deleteChild(child.id)}
            />
          )
        })}

        <button className={styles.addBtn} onClick={openAddModal}>
          <span className={styles.addIcon}>+</span>
          Kind hinzufügen
        </button>
      </div>

      {modalOpen && (
        <ChildFormModal
          existingProfile={editingProfile}
          onSave={handleSave}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  )
}
