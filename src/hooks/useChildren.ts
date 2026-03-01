import { useState, useCallback } from 'react'
import { CHILDREN, LEVELS } from '../data/badges'
import { Child, ChildProfile } from '../types'

const STORAGE_KEY = 'schwimmabzeichen-children-profiles'

function childToProfile(child: Child): ChildProfile {
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

export function profileToChild(profile: ChildProfile): Child {
  return {
    id: profile.id,
    name: profile.name,
    age: profile.age,
    emoji: profile.emoji,
    primaryColor: profile.primaryColor,
    secondaryColor: profile.secondaryColor,
    levels: LEVELS.map((level) => ({
      ...level,
      badges: [...level.badges],
      alreadyAchieved: profile.achievedLevelIds.includes(level.id),
    })),
  }
}

export function useChildren() {
  const [profiles, setProfiles] = useState<ChildProfile[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw !== null) return JSON.parse(raw) as ChildProfile[]
      // First run: initialise from hardcoded defaults
      const defaults = CHILDREN.map(childToProfile)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaults))
      return defaults
    } catch {
      return CHILDREN.map(childToProfile)
    }
  })

  const addChild = useCallback(
    (profile: ChildProfile) => {
      setProfiles((prev) => {
        const updated = [...prev, profile]
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
        return updated
      })
    },
    [],
  )

  const updateChild = useCallback(
    (id: string, profile: ChildProfile) => {
      setProfiles((prev) => {
        const updated = prev.map((p) => (p.id === id ? profile : p))
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
        return updated
      })
    },
    [],
  )

  const deleteChild = useCallback(
    (id: string) => {
      localStorage.removeItem(`schwimmabzeichen-${id}`)
      setProfiles((prev) => {
        const updated = prev.filter((p) => p.id !== id)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
        return updated
      })
    },
    [],
  )

  const children = profiles.map(profileToChild)

  return { children, profiles, addChild, updateChild, deleteChild }
}
