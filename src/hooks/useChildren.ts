import { useState, useCallback } from 'react'
import { Child, ChildProfile } from '../types'
import { CHILDREN, LEVELS } from '../data/badges'

const STORAGE_KEY = 'schwimmabzeichen-children-profiles'

function profileToChild(profile: ChildProfile): Child {
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

function loadProfiles(): ChildProfile[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw) as ChildProfile[]
  } catch {
    // fall through to default
  }
  // Erste-Start-Fallback: hartcodierte Profile
  return CHILDREN.map(childToProfile)
}

function saveProfiles(profiles: ChildProfile[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profiles))
}

export function useChildren() {
  const [profiles, setProfiles] = useState<ChildProfile[]>(loadProfiles)

  const children: Child[] = profiles.map(profileToChild)

  const addChild = useCallback((profile: ChildProfile) => {
    setProfiles((prev) => {
      const updated = [...prev, profile]
      saveProfiles(updated)
      return updated
    })
  }, [])

  const updateChild = useCallback((profile: ChildProfile) => {
    setProfiles((prev) => {
      const updated = prev.map((p) => (p.id === profile.id ? profile : p))
      saveProfiles(updated)
      return updated
    })
  }, [])

  const deleteChild = useCallback((id: string) => {
    setProfiles((prev) => {
      const updated = prev.filter((p) => p.id !== id)
      saveProfiles(updated)
      return updated
    })
  }, [])

  const getChildById = useCallback(
    (id: string): Child | undefined => children.find((c) => c.id === id),
    [children],
  )

  return { children, profiles, addChild, updateChild, deleteChild, getChildById }
}
