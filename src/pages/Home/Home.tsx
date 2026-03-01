import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Child } from '../../types'
import { useChildren } from '../../hooks/useChildren'
import { useProgress } from '../../hooks/useProgress'
import ChildFormModal from '../../components/ChildFormModal/ChildFormModal'
import styles from './Home.module.css'

function ChildCard({
  child,
  onEdit,
  onDelete,
}: {
  child: Child
  onEdit: (child: Child) => void
  onDelete: (child: Child) => void
}) {
  const navigate = useNavigate()
  const { isBadgeAchieved } = useProgress(child.id)

  const earnableBadges = child.levels
    .filter((l) => !l.alreadyAchieved)
    .flatMap((l) => l.badges)

  const achievedCount = earnableBadges.filter((b) => isBadgeAchieved(b.id)).length
  const totalCount = earnableBadges.length

  const currentLevel = child.levels.find((l) => !l.alreadyAchieved)

  return (
    <div className={styles.cardWrapper}>
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
              style={{ width: totalCount > 0 ? `${(achievedCount / totalCount) * 100}%` : '0%' }}
            />
          </div>
          <span className={styles.progressText}>
            {achievedCount}/{totalCount}
          </span>
        </div>
      </button>

      <div className={styles.cardActions}>
        <button
          className={styles.cardActionBtn}
          onClick={(e) => {
            e.stopPropagation()
            onEdit(child)
          }}
          aria-label={`${child.name} bearbeiten`}
          title="Bearbeiten"
        >
          ✏️
        </button>
        <button
          className={styles.cardActionBtn}
          onClick={(e) => {
            e.stopPropagation()
            onDelete(child)
          }}
          aria-label={`${child.name} löschen`}
          title="Löschen"
        >
          🗑️
        </button>
      </div>
    </div>
  )
}

export default function Home() {
  const { children, addChild, updateChild, deleteChild } = useChildren()
  const [modalOpen, setModalOpen] = useState(false)
  const [editingChild, setEditingChild] = useState<Child | undefined>(undefined)

  function handleOpenAdd() {
    setEditingChild(undefined)
    setModalOpen(true)
  }

  function handleOpenEdit(child: Child) {
    setEditingChild(child)
    setModalOpen(true)
  }

  function handleDelete(child: Child) {
    if (window.confirm(`„${child.name}" wirklich löschen?`)) {
      deleteChild(child.id)
    }
  }

  function handleSave(child: Child) {
    if (editingChild) {
      updateChild(child)
    } else {
      addChild(child)
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
        {children.map((child) => (
          <ChildCard
            key={child.id}
            child={child}
            onEdit={handleOpenEdit}
            onDelete={handleDelete}
          />
        ))}

        <button className={styles.addBtn} onClick={handleOpenAdd} aria-label="Kind hinzufügen">
          <span className={styles.addBtnIcon}>＋</span>
          <span>Kind hinzufügen</span>
        </button>
      </div>

      {modalOpen && (
        <ChildFormModal
          child={editingChild}
          onSave={handleSave}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  )
}
