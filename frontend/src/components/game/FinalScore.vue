<template>
  <div class="final-score">
    <div class="score-emoji">{{ emoji }}</div>
    <h3>{{ message }}</h3>
    <p class="score-text">
      Você pontuou <strong>{{ score }}</strong> de {{ totalPoints }} pontos!
    </p>
    <p class="percentage">{{ percentage }}% de acertos</p>

    <div class="actions">
      <button class="action-btn restart" @click="$emit('restart')">
        🔄 Jogar Novamente
      </button>
      <button class="action-btn back" @click="$emit('back')">
        🏠 Voltar ao Menu
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  score: number
  totalRounds: number
}>()

defineEmits<{
  restart: []
  back: []
}>()

const totalPoints = computed(() => props.totalRounds * 10)
const percentage = computed(() => Math.round((props.score / totalPoints.value) * 100))

const emoji = computed(() => {
  const p = percentage.value
  if (p >= 80) return '🏆'
  if (p >= 60) return '🎉'
  if (p >= 40) return '👍'
  return '😢'
})

const message = computed(() => {
  const p = percentage.value
  if (p >= 80) return 'Excelente!'
  if (p >= 60) return 'Muito Bom!'
  if (p >= 40) return 'Bom trabalho!'
  return 'Tente novamente!'
})
</script>

<style scoped>
.final-score {
  text-align: center;
  padding: 40px 20px;
}

.score-emoji {
  font-size: 5em;
  margin-bottom: 20px;
  animation: bounce 0.6s ease;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.final-score h3 {
  font-size: 2.2em;
  margin-bottom: 20px;
  font-weight: 600;
}

.theme-light .final-score h3 {
  color: var(--text-primary);
}

.theme-neon .final-score h3 {
  color: var(--neon-cyan);
  text-transform: uppercase;
  text-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
}

.score-text {
  font-size: 1.3em;
  margin-bottom: 10px;
}

.theme-light .score-text {
  color: var(--text-secondary);
}

.theme-neon .score-text {
  color: var(--text-primary);
}

.score-text strong {
  font-weight: 700;
  font-size: 1.2em;
}

.theme-light .score-text strong {
  color: var(--text-primary);
}

.theme-neon .score-text strong {
  color: var(--neon-pink);
}

.percentage {
  font-size: 1.8em;
  font-weight: 700;
  margin: 20px 0 30px 0;
}

.theme-light .percentage {
  color: #667eea;
}

.theme-neon .percentage {
  color: var(--neon-pink);
  text-shadow: 0 0 20px rgba(255, 0, 255, 0.5);
}

/* Actions */
.actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin: 0 auto;
}

.action-btn {
  padding: 16px 30px;
  font-size: 1.05em;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid;
}

/* Light Theme Buttons */
.theme-light .action-btn.restart {
  background: #10b981;
  color: white;
  border-color: #10b981;
  border-radius: 12px;
}

.theme-light .action-btn.restart:hover {
  background: #059669;
  transform: translateY(-2px);
}

.theme-light .action-btn.back {
  background: var(--button-bg);
  color: var(--button-text);
  border-color: var(--button-bg);
  border-radius: 12px;
}

.theme-light .action-btn.back:hover {
  background: #000;
  transform: translateY(-2px);
}

/* Neon Theme Buttons */
.theme-neon .action-btn.restart {
  background: rgba(16, 185, 129, 0.3);
  color: #10b981;
  border-color: #10b981;
  border-radius: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.theme-neon .action-btn.restart:hover {
  background: rgba(16, 185, 129, 0.5);
  box-shadow: 0 0 30px rgba(16, 185, 129, 0.5);
  transform: translateY(-2px);
}

.theme-neon .action-btn.back {
  background: var(--button-bg);
  color: var(--button-text);
  border-color: var(--neon-pink);
  border-radius: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.theme-neon .action-btn.back:hover {
  background: var(--button-hover);
  box-shadow: 0 0 30px rgba(255, 0, 255, 0.5);
  transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 768px) {
  .score-emoji {
    font-size: 4em;
  }

  .final-score h3 {
    font-size: 1.8em;
  }

  .score-text {
    font-size: 1.1em;
  }

  .percentage {
    font-size: 1.5em;
  }
}
</style>