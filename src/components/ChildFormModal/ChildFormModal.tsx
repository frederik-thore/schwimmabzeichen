import { useState } from 'react'
import { ChildProfile } from '../../types'
import { LEVELS } from '../../data/badges'
import styles from './ChildFormModal.module.css'

const EMOJI_OPTIONS = [
  '🧜‍♀️', '🦈', '🐋', '🐬', '🦭', '🐠', '🐟', '🦀',
  '🧒', '👦', '👧', '🧑', '🧒‍♂️', '🧒‍♀️', '🦊', '🐸',
  '🦁', '🐯', '🐧', '🦋', '⭐', '🌟', '🚀', '🎈',
]

const COLOR_PRESETS: { primary: string; secondary: string }[] = [
  { primary: '#7c3aed', secondary: '#ede9fe' },
  { primary: '#ea580c', secondary: '#fff7ed' },
  { primary: '#0284c7', secondary: '#e0f2fe' },
  { primary: '#16a34a', secondary: '#dcfce7' },
  { primary: '#db2777', secondary: '#fce7f3' },
  { primary: '#ca8a04', secondary: '#fef9c3' },
  { primary: '#0891b2', secondary: '#ecfeff' },
  { primary: '#dc2626', secondary: '#fee2e2' },
]

function colorForEmoji(emoji: string): { primary: string; secondary: string } {
  const idx = EMOJI_OPTIONS.indexOf(emoji)
  return COLOR_PRESETS[((idx < 0 ? 0 : idx) % COLOR_PRESETS.length)]
}

interface Props {
  initial?: ChildProfile
  onSave: (profile: ChildProfile) => void
  onClose: () => void
}

export default function ChildFormModal({ initial, onSave, onClose }: Props) {
  const [name, setName] = useState(initial?.name ?? '')
  const [age, setAge] = useState(String(initial?.age ?? ''))
  const [emoji, setEmoji] = useState(initial?.emoji ?? '🧒')
  const [achievedLevelIds, setAchievedLevelIds] = useState<string[]>(
    initial?.achievedLevelIds ?? [],
  )

  const toggleLevel = (id: string) => {
    setAchievedLevelIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) return
    const colors = colorForEmoji(emoji)
    const profile: ChildProfile = {
      id: initial?.id ?? `child-${Date.now()}`,
      name: name.trim(),
      age: parseInt(age) || 0,
      emoji,
      primaryColor: initial?.primaryColor ?? colors.primary,
      secondaryColor: initial?.secondaryColor ?? colors.secondary,
      achievedLevelIds,
    }
    onSave(profile)
  }

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Schließen">✕</button>
        <h2 className={styles.title}>
          {initial ? '✏️ Kind bearbeiten' : '➕ Kind hinzufügen'}
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
              placeholder="z.B. Freja"
              required
              autoFocus
            />
          </label>

          {/* Alter */}
          <label className={styles.label}>
            Alter
            <input
              className={styles.input}
              type="number"
              min={1}
              max={18}
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="z.B. 6"
            />
          </label>

          {/* Emoji */}
          <div className={styles.label}>
            Emoji
            <div className={styles.emojiGrid}>
              {EMOJI_OPTIONS.map((e) => (
                <button
                  key={e}
                  type="button"
                  className={`${styles.emojiBtn} ${emoji === e ? styles.emojiSelected : ''}`}
                  onClick={() => setEmoji(e)}
                >
                  {e}
                </button>
              ))}
            </div>
          </div>

          {/* Bereits erreichte Abzeichen */}
          <div className={styles.label}>
            Bereits erreicht
            <div className={styles.levelList}>
              {LEVELS.map((level) => (
                <label key={level.id} className={styles.levelCheck}>
                  <input
                    type="checkbox"
                    checked={achievedLevelIds.includes(level.id)}
                    onChange={() => toggleLevel(level.id)}
                  />
                  <span>{level.emoji} {level.name}</span>
                </label>
              ))}
            </div>
          </div>

          <button type="submit" className={styles.submitBtn}>
            💾 Speichern
          </button>
        </form>
      </div>
    </div>
  )
}
