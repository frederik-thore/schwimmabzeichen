export interface TrainingBadge {
  id: string
  emoji: string
  name: string
  description: string
}

export interface AwardLevel {
  id: string
  name: string
  emoji: string
  color: string
  bgColor: string
  alreadyAchieved?: boolean
  badges: TrainingBadge[]
}

export interface Child {
  id: string
  name: string
  age: number
  emoji: string
  primaryColor: string
  secondaryColor: string
  levels: AwardLevel[]
}

export type ChildProgress = Record<string, string> // badgeId → ISO-Datumstring
export type LevelAchievementDates = Record<string, string> // levelId → "YYYY-MM"
