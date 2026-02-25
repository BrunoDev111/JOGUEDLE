<template>
  <button
    class="option-btn"
    :class="buttonClass"
    :disabled="isDisabled"
    @click="handleClick"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  label: string
  isCorrect?: boolean
  isWrong?: boolean
  isDisabled?: boolean
}>()

const emit = defineEmits<{
  click: []
}>()

const buttonClass = computed(() => {
  if (props.isCorrect) return 'correct'
  if (props.isWrong) return 'wrong'
  return ''
})

const handleClick = () => {
  if (!props.isDisabled) {
    emit('click')
  }
}
</script>

<style scoped>
.option-btn {
  width: 100%;
  padding: 18px 20px;
  font-size: 1.05em;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  text-align: left;
  border: 2px solid;
}

.option-btn:disabled {
  cursor: not-allowed;
}

/* Light Theme */
.theme-light .option-btn {
  background: var(--bg-secondary);
  border-color: var(--border-color);
  color: var(--text-primary);
  border-radius: 12px;
}

.theme-light .option-btn:not(:disabled):hover {
  background: var(--bg-tertiary);
  border-color: var(--border-hover);
  transform: translateX(5px);
}

/* Neon Theme */
.theme-neon .option-btn {
  background: rgba(255, 0, 255, 0.1);
  border-color: var(--neon-pink);
  color: var(--text-primary);
  border-radius: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.theme-neon .option-btn:not(:disabled):hover {
  background: rgba(255, 0, 255, 0.3);
  border-color: var(--neon-cyan);
  box-shadow: 0 0 20px rgba(255, 0, 255, 0.4);
  transform: translateX(5px);
}

/* Correct Answer */
.option-btn.correct {
  background: var(--color-correct) !important;
  border-color: var(--color-correct) !important;
  color: white !important;
  font-weight: 600;
}

/* Wrong Answer */
.option-btn.wrong {
  background: var(--color-wrong) !important;
  border-color: var(--color-wrong) !important;
  color: white !important;
  font-weight: 600;
}

/* Responsive */
@media (max-width: 768px) {
  .option-btn {
    padding: 15px 18px;
    font-size: 1em;
  }
}
</style>