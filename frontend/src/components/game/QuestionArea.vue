<template>
  <div class="question-area">
    <!-- Jogo Finalizado -->
    <div v-if="gameStore.isGameFinished">
      <FinalScore
        :score="gameStore.score"
        :total-rounds="gameStore.totalRounds"
        @restart="gameStore.restartGame()"
        @back="$emit('close')"
      />
    </div>

    <!-- Jogo em Andamento -->
    <div v-else-if="gameStore.currentQuestion">
      <!-- Jogos de Comparação: Carodle, Cronodle, Numerodle -->
      <div v-if="isCompareGame" class="compare-game">
        <h3 class="question-title">{{ questionTitle }}</h3>
        
        <div class="compare-items">
          <CompareItem
            v-if="gameStore.currentQuestion.item1"
            :emoji="gameStore.currentQuestion.item1.emoji || ''"
            :name="gameStore.currentQuestion.item1.name"
            :display-value="gameStore.currentQuestion.item1.displayValue"
            :show-value="gameStore.showResult"
            :is-selected="selectedAnswer === 'item1'"
            :is-disabled="gameStore.showResult"
            @click="handleAnswer('item1')"
          />
          
          <CompareItem
            v-if="gameStore.currentQuestion.item2"
            :emoji="gameStore.currentQuestion.item2.emoji || ''"
            :name="gameStore.currentQuestion.item2.name"
            :display-value="gameStore.currentQuestion.item2.displayValue"
            :show-value="gameStore.showResult"
            :is-selected="selectedAnswer === 'item2'"
            :is-disabled="gameStore.showResult"
            @click="handleAnswer('item2')"
          />
        </div>
      </div>

      <!-- Jogo de Verdadeiro/Falso: Verdadle -->
      <div v-else-if="gameStore.currentQuestion.type === 'fact'" class="fact-game">
        <div class="statement-area">
          <h3>{{ gameStore.currentQuestion.statement }}</h3>
        </div>
        
        <div class="options">
          <OptionButton
            label="✅ VERDADEIRO"
            :is-correct="selectedAnswer === true && gameStore.showResult && gameStore.lastAnswerCorrect === true"
            :is-wrong="selectedAnswer === true && gameStore.showResult && gameStore.lastAnswerCorrect === false"
            :is-disabled="gameStore.showResult"
            @click="handleAnswer(true)"
          />
          
          <OptionButton
            label="❌ FALSO"
            :is-correct="selectedAnswer === false && gameStore.showResult && gameStore.lastAnswerCorrect === true"
            :is-wrong="selectedAnswer === false && gameStore.showResult && gameStore.lastAnswerCorrect === false"
            :is-disabled="gameStore.showResult"
            @click="handleAnswer(false)"
          />
        </div>
      </div>

      <!-- Jogo de Completar: Frasedle -->
      <div v-else-if="gameStore.currentQuestion.type === 'complete'" class="complete-game">
        <div class="phrase-area">
          <h3>"{{ gameStore.currentQuestion.phrase }}"</h3>
        </div>
        
        <div class="options">
          <OptionButton
            v-for="(option, index) in gameStore.currentQuestion.options"
            :key="index"
            :label="option"
            :is-correct="selectedAnswer === index && gameStore.showResult && gameStore.lastAnswerCorrect === true"
            :is-wrong="selectedAnswer === index && gameStore.showResult && gameStore.lastAnswerCorrect === false"
            :is-disabled="gameStore.showResult"
            @click="handleAnswer(index)"
          />
        </div>
      </div>

      <!-- Mensagem de Resultado -->
      <ResultMessage
        :show="gameStore.showResult"
        :is-correct="gameStore.lastAnswerCorrect || false"
        :explanation="gameStore.currentQuestion.explanation"
      />

      <!-- Botão Próxima Rodada -->
      <button
        v-if="gameStore.showResult"
        class="next-btn"
        @click="nextQuestion"
      >
        {{ gameStore.currentRound < gameStore.totalRounds ? 'Próxima Pergunta ➡️' : 'Ver Resultado Final 🏆' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useGameStore } from '@/stores/game'
import CompareItem from './CompareItem.vue'
import OptionButton from './OptionButton.vue'
import ResultMessage from './ResultMessage.vue'
import FinalScore from './FinalScore.vue'

defineEmits<{
  close: []
}>()

const gameStore = useGameStore()
const selectedAnswer = ref<string | number | boolean | null>(null)

// Computed
const isCompareGame = computed(() => {
  return gameStore.currentQuestion?.type === 'compare' || 
         gameStore.currentQuestion?.type === 'timeline'
})

const questionTitle = computed(() => {
  if (!gameStore.currentGame) return ''
  
  switch (gameStore.currentGame) {
    case 'carodle':
      return 'Qual é mais caro?'
    case 'cronodle':
      return 'Qual aconteceu primeiro?'
    case 'numerodle':
      return 'Qual número é maior?'
    default:
      return ''
  }
})

// Methods
const handleAnswer = (answer: string | number | boolean) => {
  if (gameStore.showResult) return
  
  selectedAnswer.value = answer
  gameStore.submitAnswer(answer)
}

const nextQuestion = () => {
  selectedAnswer.value = null
  gameStore.nextRound()
}
</script>

<style scoped>
.question-area {
  min-height: 300px;
}

/* Question Title */
.question-title {
  text-align: center;
  font-size: 1.3em;
  margin-bottom: 25px;
  font-weight: 600;
}

.theme-light .question-title {
  color: var(--text-primary);
}

.theme-neon .question-title {
  color: var(--neon-cyan);
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* Compare Game */
.compare-game {
  margin-bottom: 20px;
}

.compare-items {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-bottom: 20px;
}

/* Fact Game */
.statement-area {
  padding: 30px;
  margin-bottom: 20px;
  transition: all 0.3s;
  border-radius: 15px;
  border: 2px solid;
}

.theme-light .statement-area {
  background: var(--bg-tertiary);
  border-color: var(--border-color);
}

.theme-neon .statement-area {
  background: var(--bg-tertiary);
  border-color: rgba(255, 0, 255, 0.3);
  border-radius: 0;
}

.statement-area h3 {
  font-size: 1.2em;
  line-height: 1.6;
  text-align: center;
}

.theme-light .statement-area h3 {
  color: var(--text-primary);
}

.theme-neon .statement-area h3 {
  color: var(--text-primary);
}

/* Phrase Game */
.phrase-area {
  padding: 30px;
  margin-bottom: 20px;
  transition: all 0.3s;
  border-radius: 15px;
  border: 2px solid;
}

.theme-light .phrase-area {
  background: var(--bg-tertiary);
  border-color: var(--border-color);
}

.theme-neon .phrase-area {
  background: var(--bg-tertiary);
  border-color: rgba(255, 0, 255, 0.3);
  border-radius: 0;
}

.phrase-area h3 {
  font-size: 1.3em;
  line-height: 1.6;
  text-align: center;
  font-style: italic;
}

.theme-light .phrase-area h3 {
  color: var(--text-primary);
}

.theme-neon .phrase-area h3 {
  color: var(--text-primary);
}

/* Options */
.options {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Next Button */
.next-btn {
  border: none;
  padding: 16px 30px;
  font-size: 1.05em;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid;
}

.theme-light .next-btn {
  background: var(--button-bg);
  color: var(--button-text);
  border-color: var(--button-bg);
  border-radius: 12px;
}

.theme-light .next-btn:hover {
  background: #000;
  transform: translateY(-2px);
}

.theme-neon .next-btn {
  background: rgba(255, 0, 255, 0.3);
  color: var(--neon-pink);
  border-color: var(--neon-pink);
  border-radius: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.theme-neon .next-btn:hover {
  background: rgba(255, 0, 255, 0.5);
  box-shadow: 0 0 30px rgba(255, 0, 255, 0.5);
  transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 768px) {
  .compare-items {
    flex-direction: column;
  }

  .question-title {
    font-size: 1.1em;
  }

  .statement-area,
  .phrase-area {
    padding: 20px;
  }

  .statement-area h3,
  .phrase-area h3 {
    font-size: 1.1em;
  }
}
</style>