import { useState, useCallback } from 'react'
import { Child } from '../types'
import { CHILDREN, BASE_LEVELS } from '../data/badges'

const STORAGE_KEY = 'schwimmabzeichen-children'

function loadFromStorage(): Child[] | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Child[]) : null
  } catch {
    return null
  }
}

function saveToStorage(children: Child[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(children))
}

/** Reconstructs a child's levels from BASE_LEVELS with the given alreadyAchieved set. */
export function buildChildLevels(achievedLevelIds: string[]) {
  return BASE_LEVELS.map((level) => ({
    ...level,
    alreadyAchieved: achievedLevelIds.includes(level.id) || undefined,
  }))
}

export function useChildren() {
  const [children, setChildren] = useState<Child[]>(() => {
    const stored = loadFromStorage()
    return stored ?? CHILDREN
  })

  const addChild = useCallback((child: Child) => {
    setChildren((prev) => {
      const updated = [...prev, child]
      saveToStorage(updated)
      return updated
    })
  }, [])

  const updateChild = useCallback((child: Child) => {
    setChildren((prev) => {
      const updated = prev.map((c) => (c.id === child.id ? child : c))
      saveToStorage(updated)
      return updated
    })
  }, [])

  const deleteChild = useCallback((childId: string) => {
    setChildren((prev) => {
      const updated = prev.filter((c) => c.id !== childId)
      saveToStorage(updated)
      return updated
    })
  }, [])

  return { children, addChild, updateChild, deleteChild }
}
