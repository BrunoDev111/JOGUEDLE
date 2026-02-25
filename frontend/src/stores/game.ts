import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Question, GameState } from '@/types'

export const useGameStore = defineStore('game', () => {
  // State
  const currentGame = ref<string | null>(null)
  const score = ref(0)
  const currentRound = ref(0)
  const totalRounds = ref(5)
  const questions = ref<Question[]>([])
  const answeredQuestions = ref<number[]>([])
  const isPlaying = ref(false)
  const lastAnswerCorrect = ref<boolean | null>(null)
  const showResult = ref(false)

  // Computed
  const currentQuestion = computed(() => {
    if (currentRound.value > 0 && currentRound.value <= questions.value.length) {
      return questions.value[currentRound.value - 1]
    }
    return null
  })

  const isGameFinished = computed(() => {
    return currentRound.value > totalRounds.value
  })

  const scorePercentage = computed(() => {
    return Math.round((score.value / (totalRounds.value * 10)) * 100)
  })

  // Actions
  const startGame = (gameSlug: string, gameQuestions: Question[]) => {
    currentGame.value = gameSlug
    questions.value = gameQuestions
    score.value = 0
    currentRound.value = 1
    answeredQuestions.value = []
    isPlaying.value = true
    lastAnswerCorrect.value = null
    showResult.value = false
  }

  const submitAnswer = (answer: string | number | boolean) => {
    if (!currentQuestion.value) return

    const isCorrect = answer === currentQuestion.value.correct
    
    if (isCorrect) {
      score.value += 10
    }

    lastAnswerCorrect.value = isCorrect
    showResult.value = true
    answeredQuestions.value.push(currentQuestion.value.id)
  }

  const nextRound = () => {
    showResult.value = false
    lastAnswerCorrect.value = null
    currentRound.value++
  }

  const resetGame = () => {
    currentGame.value = null
    score.value = 0
    currentRound.value = 0
    questions.value = []
    answeredQuestions.value = []
    isPlaying.value = false
    lastAnswerCorrect.value = null
    showResult.value = false
  }

  const restartGame = () => {
    if (!currentGame.value || questions.value.length === 0) return
    
    const gameSlug = currentGame.value
    const gameQuestions = [...questions.value]
    
    startGame(gameSlug, gameQuestions)
  }

  return {
    // State
    currentGame,
    score,
    currentRound,
    totalRounds,
    questions,
    answeredQuestions,
    isPlaying,
    lastAnswerCorrect,
    showResult,
    // Computed
    currentQuestion,
    isGameFinished,
    scorePercentage,
    // Actions
    startGame,
    submitAnswer,
    nextRound,
    resetGame,
    restartGame
  }
})