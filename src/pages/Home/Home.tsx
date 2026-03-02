import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useChildren } from '../../hooks/useChildren'
import { useProgress } from '../../hooks/useProgress'
import { Child, ChildProfile } from '../../types'
import Mascot from '../../components/Mascot/Mascot'
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

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (confirmDelete) {
      onDelete()
    } else {
      setConfirmDelete(true)
    }
  }

  const handleCancelDelete = (e: React.MouseEvent) => {
    e.stopPropagation()
    setConfirmDelete(false)
  }

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation()
    onEdit()
  }

  return (
    <div className={styles.childCardWrapper}>
      <button
        className={styles.childCard}
        style={{
          background: `linear-gradient(145deg, ${child.primaryColor}, ${
            child.secondaryColor === child.primaryColor
              ? child.primaryColor + 'aa'
              : child.secondaryColor
          })`,
        }}
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
              style={{
                width: totalCount > 0 ? `${(achievedCount / totalCount) * 100}%` : '0%',
              }}
            />
          </div>
          <span className={styles.progressText}>
            {achievedCount}/{totalCount}
          </span>
        </div>
      </button>

      {/* Edit/Delete Actions */}
      <div className={styles.actions}>
        <button className={styles.editBtn} onClick={handleEdit} aria-label="Bearbeiten">
          ✏️
        </button>
        {confirmDelete ? (
          <>
            <button className={styles.confirmDeleteBtn} onClick={handleDelete}>
              ✓
            </button>
            <button className={styles.cancelDeleteBtn} onClick={handleCancelDelete}>
              ✕
            </button>
          </>
        ) : (
          <button className={styles.deleteBtn} onClick={handleDelete} aria-label="Löschen">
            🗑️
          </button>
        )}
      </div>
    </div>
  )
}

export default function Home() {
  const { children, addChild, updateChild, deleteChild } = useChildren()
  const [modalMode, setModalMode] = useState<'add' | { profile: ChildProfile } | null>(null)

  const handleSave = (profile: ChildProfile) => {
    if (modalMode === 'add') {
      addChild(profile)
    } else if (modalMode && typeof modalMode === 'object') {
      updateChild(profile)
    }
    setModalMode(null)
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.waves}>🌊</div>
        <Mascot size={64} className={styles.mascot} />
        <h1 className={styles.title}>Schwimm-Tracker</h1>
        <p className={styles.subtitle}>Wer möchte heute trainieren?</p>
      </div>

      <div className={styles.childGrid}>
        {children.map((child) => (
          <ChildCard
            key={child.id}
            child={child}
            onEdit={() =>
              setModalMode({
                profile: {
                  id: child.id,
                  name: child.name,
                  age: child.age,
                  emoji: child.emoji,
                  primaryColor: child.primaryColor,
                  secondaryColor: child.secondaryColor,
                  achievedLevelIds: child.levels
                    .filter((l) => l.alreadyAchieved)
                    .map((l) => l.id),
                },
              })
            }
            onDelete={() => deleteChild(child.id)}
          />
        ))}

        <button className={styles.addBtn} onClick={() => setModalMode('add')}>
          <span>➕</span>
          <span>Kind hinzufügen</span>
        </button>
      </div>

      {modalMode !== null && (
        <ChildFormModal
          initial={typeof modalMode === 'object' ? modalMode.profile : undefined}
          onSave={handleSave}
          onClose={() => setModalMode(null)}
        />
      )}
    </div>
  )
}

