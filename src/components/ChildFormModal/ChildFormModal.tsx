import { useState, FormEvent } from 'react'
import { Child, AwardLevel } from '../../types'
import { buildChildLevels } from '../../hooks/useChildren'
import { BASE_LEVELS } from '../../data/badges'
import styles from './ChildFormModal.module.css'

const EMOJI_OPTIONS = [
  '🧒', '👧', '👦', '🧜‍♀️', '🦈', '🐋', '🐬', '🐟',
  '🦭', '🐸', '🦦', '🌊', '🤿', '🏊', '🚣', '⭐',
  '🦁', '🐯', '🐻', '🦊', '🐼', '🐨', '🐰', '🦋',
]

const COLOR_SCHEMES = [
  { primary: '#7c3aed', secondary: '#ede9fe' },
  { primary: '#ea580c', secondary: '#fff7ed' },
  { primary: '#0284c7', secondary: '#e0f2fe' },
  { primary: '#16a34a', secondary: '#dcfce7' },
  { primary: '#dc2626', secondary: '#fef2f2' },
  { primary: '#d97706', secondary: '#fffbeb' },
  { primary: '#0891b2', secondary: '#ecfeff' },
  { primary: '#be185d', secondary: '#fdf2f8' },
]

interface Props {
  child?: Child
  onSave: (child: Child) => void
  onClose: () => void
}

export default function ChildFormModal({ child, onSave, onClose }: Props) {
  const editing = !!child

  const [name, setName] = useState(child?.name ?? '')
  const [age, setAge] = useState(child?.age?.toString() ?? '')
  const [emoji, setEmoji] = useState(child?.emoji ?? '🧒')
  const [colorIndex, setColorIndex] = useState(() => {
    if (!child) return 0
    const index = COLOR_SCHEMES.findIndex((c) => c.primary === child.primaryColor)
    return index === -1 ? 0 : index
  })
  const [achievedLevelIds, setAchievedLevelIds] = useState<string[]>(() => {
    if (!child) return []
    return child.levels
      .filter((l) => l.alreadyAchieved)
      .map((l) => l.id)
  })

  function toggleLevel(levelId: string) {
    setAchievedLevelIds((prev) =>
      prev.includes(levelId) ? prev.filter((id) => id !== levelId) : [...prev, levelId],
    )
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const trimmed = name.trim()
    if (!trimmed) return

    const scheme = COLOR_SCHEMES[colorIndex] ?? COLOR_SCHEMES[0]
    const savedChild: Child = {
      id: child?.id ?? `child-${Date.now()}`,
      name: trimmed,
      age: parseInt(age, 10) || 0,
      emoji,
      primaryColor: scheme.primary,
      secondaryColor: scheme.secondary,
      levels: buildChildLevels(achievedLevelIds),
    }
    onSave(savedChild)
  }

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.title}>
          {editing ? 'Profil bearbeiten' : 'Kind hinzufügen'}
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
              onChange={(e) => setAge(e.target.value)}
              placeholder="z. B. 7"
              min={1}
              max={18}
              required
            />
          </label>

          {/* Emoji picker */}
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Avatar</legend>
            <div className={styles.emojiGrid}>
              {EMOJI_OPTIONS.map((e) => (
                <button
                  key={e}
                  type="button"
                  className={`${styles.emojiBtn} ${e === emoji ? styles.emojiBtnSelected : ''}`}
                  onClick={() => setEmoji(e)}
                  aria-label={e}
                >
                  {e}
                </button>
              ))}
            </div>
          </fieldset>

          {/* Color picker */}
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Farbe</legend>
            <div className={styles.colorGrid}>
              {COLOR_SCHEMES.map((scheme, i) => (
                <button
                  key={i}
                  type="button"
                  className={`${styles.colorBtn} ${i === colorIndex ? styles.colorBtnSelected : ''}`}
                  style={{ background: scheme.primary }}
                  onClick={() => setColorIndex(i)}
                  aria-label={`Farbe ${i + 1}`}
                />
              ))}
            </div>
          </fieldset>

          {/* Already achieved levels */}
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Bereits erreicht</legend>
            <div className={styles.levelList}>
              {BASE_LEVELS.map((level: AwardLevel) => (
                <label key={level.id} className={styles.checkLabel}>
                  <input
                    type="checkbox"
                    checked={achievedLevelIds.includes(level.id)}
                    onChange={() => toggleLevel(level.id)}
                    className={styles.checkbox}
                  />
                  <span>
                    {level.emoji} {level.name}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className={styles.actions}>
            <button type="button" className={styles.btnCancel} onClick={onClose}>
              Abbrechen
            </button>
            <button type="submit" className={styles.btnSave}>
              {editing ? 'Speichern' : 'Hinzufügen'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
