import { FormEvent, useState } from 'react'
import { LEVELS } from '../../data/badges'
import { ChildProfile } from '../../types'
import styles from './ChildFormModal.module.css'

const EMOJI_OPTIONS = [
  '🧜‍♀️', '🧜‍♂️', '🦈', '🐋', '🐠', '🐟', '🐸', '🦭',
  '🐬', '🦦', '🐙', '🐊', '🐡', '🦀', '🐚', '🌊',
  '🦅', '🐳', '⭐', '🏊',
]

const EMOJI_COLORS: Record<string, { primary: string; secondary: string }> = {
  '🧜‍♀️': { primary: '#7c3aed', secondary: '#ede9fe' },
  '🧜‍♂️': { primary: '#6d28d9', secondary: '#ede9fe' },
  '🦈': { primary: '#ea580c', secondary: '#fff7ed' },
  '🐋': { primary: '#0284c7', secondary: '#e0f2fe' },
  '🐠': { primary: '#f97316', secondary: '#fff7ed' },
  '🐟': { primary: '#0891b2', secondary: '#ecfeff' },
  '🐸': { primary: '#16a34a', secondary: '#dcfce7' },
  '🦭': { primary: '#7c3aed', secondary: '#f5f3ff' },
  '🐬': { primary: '#0ea5e9', secondary: '#e0f2fe' },
  '🦦': { primary: '#92400e', secondary: '#fffbeb' },
  '🐙': { primary: '#9333ea', secondary: '#fdf4ff' },
  '🐊': { primary: '#15803d', secondary: '#f0fdf4' },
  '🐡': { primary: '#e11d48', secondary: '#fff1f2' },
  '🦀': { primary: '#dc2626', secondary: '#fef2f2' },
  '🐚': { primary: '#d97706', secondary: '#fffbeb' },
  '🌊': { primary: '#0369a1', secondary: '#e0f2fe' },
  '🦅': { primary: '#92400e', secondary: '#fef3c7' },
  '🐳': { primary: '#1d4ed8', secondary: '#dbeafe' },
  '⭐': { primary: '#ca8a04', secondary: '#fef9c3' },
  '🏊': { primary: '#0891b2', secondary: '#ecfeff' },
}

interface Props {
  existingProfile?: ChildProfile
  onSave: (profile: ChildProfile) => void
  onClose: () => void
}

export default function ChildFormModal({ existingProfile, onSave, onClose }: Props) {
  const [name, setName] = useState(existingProfile?.name ?? '')
  const [age, setAge] = useState<number>(existingProfile?.age ?? 5)
  const [emoji, setEmoji] = useState(existingProfile?.emoji ?? '🏊')
  const [achievedLevelIds, setAchievedLevelIds] = useState<string[]>(
    existingProfile?.achievedLevelIds ?? [],
  )

  const toggleLevel = (levelId: string) => {
    setAchievedLevelIds((prev) =>
      prev.includes(levelId) ? prev.filter((id) => id !== levelId) : [...prev, levelId],
    )
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!name.trim()) return
    const colors = EMOJI_COLORS[emoji] ?? { primary: '#0891b2', secondary: '#ecfeff' }
    const profile: ChildProfile = {
      id: existingProfile?.id ?? `child-${Date.now()}`,
      name: name.trim(),
      age,
      emoji,
      primaryColor: colors.primary,
      secondaryColor: colors.secondary,
      achievedLevelIds,
    }
    onSave(profile)
  }

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.title}>
          {existingProfile ? 'Kind bearbeiten' : 'Kind hinzufügen'}
        </h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Name */}
          <label className={styles.label}>
            Name
            <input
              className={styles.input}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="z. B. Lena"
              required
              maxLength={30}
              autoFocus
            />
          </label>

          {/* Age */}
          <label className={styles.label}>
            Alter
            <input
              className={styles.input}
              type="number"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              min={1}
              max={18}
              required
            />
          </label>

          {/* Emoji */}
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Emoji</legend>
            <div className={styles.emojiGrid}>
              {EMOJI_OPTIONS.map((e) => (
                <button
                  key={e}
                  type="button"
                  className={`${styles.emojiBtn} ${emoji === e ? styles.emojiBtnSelected : ''}`}
                  onClick={() => setEmoji(e)}
                  aria-label={e}
                >
                  {e}
                </button>
              ))}
            </div>
          </fieldset>

          {/* Already achieved levels */}
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Bereits erreichte Abzeichen</legend>
            <div className={styles.levelList}>
              {LEVELS.map((level) => (
                <label key={level.id} className={styles.levelLabel}>
                  <input
                    type="checkbox"
                    checked={achievedLevelIds.includes(level.id)}
                    onChange={() => toggleLevel(level.id)}
                    className={styles.checkbox}
                  />
                  <span className={styles.levelEmoji}>{level.emoji}</span>
                  {level.name}
                </label>
              ))}
            </div>
          </fieldset>

          <div className={styles.actions}>
            <button type="button" className={styles.cancelBtn} onClick={onClose}>
              Abbrechen
            </button>
            <button type="submit" className={styles.saveBtn} disabled={!name.trim()}>
              Speichern
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
