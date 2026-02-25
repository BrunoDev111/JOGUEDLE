<template>
  <div 
    class="compare-item"
    :class="{ selected: isSelected, disabled: isDisabled }"
    @click="handleClick"
  >
    <div class="emoji">{{ emoji }}</div>
    <h3>{{ name }}</h3>
    <p v-if="showValue" class="value">{{ displayValue }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  emoji: string
  name: string
  displayValue?: string
  isSelected?: boolean
  isDisabled?: boolean
  showValue?: boolean
}>()

const emit = defineEmits<{
  click: []
}>()

const handleClick = () => {
  emit('click')
}
</script>

<style scoped>
.compare-item {
  flex: 1;
  padding: 30px 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid;
  min-width: 200px;
}

.compare-item.disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

/* Light Theme */
.theme-light .compare-item {
  background: var(--bg-tertiary);
  border-radius: 15px;
  border-color: var(--border-color);
}

.theme-light .compare-item:not(.disabled):hover {
  border-color: var(--border-hover);
  transform: translateY(-5px);
  background: var(--bg-secondary);
}

.theme-light .compare-item.selected {
  border-color: var(--border-hover);
  background: var(--bg-secondary);
}

/* Neon Theme */
.theme-neon .compare-item {
  background: var(--bg-tertiary);
  border-radius: 0;
  border-color: var(--neon-pink);
}

.theme-neon .compare-item:not(.disabled):hover {
  border-color: var(--neon-cyan);
  transform: translateY(-5px);
  background: rgba(255, 0, 255, 0.1);
  box-shadow: 0 0 30px rgba(255, 0, 255, 0.3);
}

.theme-neon .compare-item.selected {
  border-color: var(--neon-cyan);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
}

/* Emoji */
.emoji {
  font-size: 3.5em;
  margin-bottom: 15px;
  transition: transform 0.3s ease;
}

.compare-item:hover .emoji {
  transform: scale(1.1);
}

.theme-neon .emoji {
  filter: drop-shadow(0 0 10px rgba(255, 0, 255, 0.5));
}

/* Title */
.compare-item h3 {
  margin-bottom: 10px;
  font-size: 1.1em;
  transition: all 0.3s;
  font-weight: 600;
}

.theme-light .compare-item h3 {
  color: var(--text-primary);
}

.theme-neon .compare-item h3 {
  color: var(--neon-cyan);
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Value (shown after answer) */
.value {
  margin-top: 10px;
  font-size: 1.2em;
  font-weight: 700;
}

.theme-light .value {
  color: var(--text-primary);
}

.theme-neon .value {
  color: var(--neon-pink);
}

/* Responsive */
@media (max-width: 768px) {
  .compare-item {
    min-width: 150px;
    padding: 20px 15px;
  }

  .emoji {
    font-size: 2.5em;
  }

  .compare-item h3 {
    font-size: 1em;
  }
}
</style>