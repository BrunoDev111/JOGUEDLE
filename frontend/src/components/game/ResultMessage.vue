<template>
  <Transition name="slide-up">
    <div v-if="show" class="result-message" :class="messageClass">
      <div class="result-icon">{{ icon }}</div>
      <div class="result-text">
        <p class="result-title">{{ title }}</p>
        <p v-if="explanation" class="result-explanation">{{ explanation }}</p>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  show: boolean
  isCorrect: boolean
  explanation?: string
}>()

const icon = computed(() => props.isCorrect ? '🎉' : '❌')
const title = computed(() => props.isCorrect ? 'Correto! +10 pontos' : 'Errado!')
const messageClass = computed(() => props.isCorrect ? 'success' : 'error')
</script>

<style scoped>
.result-message {
  margin-top: 20px;
  padding: 20px;
  border-radius: 12px;
  border: 2px solid;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: all 0.3s ease;
}

/* Light Theme */
.theme-light .result-message.success {
  background: #d4edda;
  border-color: var(--color-correct);
}

.theme-light .result-message.error {
  background: #f8d7da;
  border-color: var(--color-wrong);
}

/* Neon Theme */
.theme-neon .result-message {
  border-radius: 0;
}

.theme-neon .result-message.success {
  background: rgba(16, 185, 129, 0.1);
  border-color: var(--color-correct);
  box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
}

.theme-neon .result-message.error {
  background: rgba(239, 68, 68, 0.1);
  border-color: var(--color-wrong);
  box-shadow: 0 0 20px rgba(239, 68, 68, 0.3);
}

/* Icon */
.result-icon {
  font-size: 2.5em;
  flex-shrink: 0;
}

/* Text */
.result-text {
  flex: 1;
}

.result-title {
  font-size: 1.2em;
  font-weight: 600;
  margin-bottom: 5px;
}

.theme-light .result-message.success .result-title {
  color: #155724;
}

.theme-light .result-message.error .result-title {
  color: #721c24;
}

.theme-neon .result-message.success .result-title {
  color: var(--color-correct);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.theme-neon .result-message.error .result-title {
  color: var(--color-wrong);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.result-explanation {
  font-size: 0.95em;
  line-height: 1.5;
  margin-top: 5px;
}

.theme-light .result-explanation {
  color: var(--text-primary);
}

.theme-neon .result-explanation {
  color: var(--text-secondary);
}

/* Transition */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Responsive */
@media (max-width: 768px) {
  .result-message {
    flex-direction: column;
    text-align: center;
  }

  .result-icon {
    font-size: 2em;
  }

  .result-title {
    font-size: 1.1em;
  }
}
</style>