// ============================================
// Types - JogueDLE
// ============================================

export type ThemeType = 'light' | 'neon'

export interface Game {
    id: string
    slug: string
    name: string
    description: string
    icon: string
    gradient: string
}

export interface CompareItem {
    name: string
    image?: string
    emoji?: string
    value: number
    displayValue: string
}

export interface Question {
    id: number
    gameSlug: string
    type: 'compare' | 'timeline' | 'fact' | 'complete'

     // Para jogos de comparação (Carodle, Cronodle, Numerodle)
    item1?: CompareItem
    item2?: CompareItem

    // Para Real/Fake (Verdadle)
     statement?: string
  
    // Para Complete (Frasedle)
    phrase?: string
    options?: string[]
  
    correct: string | number | boolean
    explanation?: string

}

export interface GameState {
    currentGame: string | null
    score: number
    currentRound: number
    totalRounds: number
    questions: Question[]
    isPlaying: boolean
    answeredQuestions: number[]
}

export interface DailyScore {
  gameSlug: string
  date: string
  score: number
  totalRounds: number
  percentage: number
  completed: boolean
}