<template>
  <Transition name="modal">
    <div v-if="isOpen" class="game-modal" @click.self="close">
      <div class="modal-content">
        <button class="close-btn" @click="close">✕</button>
        
        <div class="game-area">
          <h2 class="game-title">{{ gameTitle }}</h2>
          
          <div class="score-display">
            Rodada {{ currentRound }}/{{ totalRounds }} | Pontos: {{ score }}
          </div>

          <slot />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{
  isOpen: boolean
  gameTitle: string
  currentRound: number
  totalRounds: number
  score: number
}>()

const emit = defineEmits<{
  close: []
}>()

const close = () => {
  emit('close')
}
</script>

<style scoped>
.game-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.theme-light .game-modal {
  background: var(--modal-overlay);
}

.theme-neon .game-modal {
  background: rgba(0, 0, 0, 0.95);
}

.modal-content {
  padding: 40px;
  max-width: 650px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  transition: all 0.3s;
}

.theme-light .modal-content {
  background: var(--modal-bg);
  border-radius: 20px;
  border: 1px solid var(--border-color);
}

.theme-neon .modal-content {
  background: var(--modal-bg);
  border-radius: 0;
  border: 2px solid var(--neon-pink);
  box-shadow: 0 0 40px rgba(255, 0, 255, 0.5);
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  font-size: 1.3em;
  font-weight: 600;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.theme-light .close-btn {
  background: var(--bg-tertiary);
  color: var(--text-primary);
  border-radius: 10px;
}

.theme-light .close-btn:hover {
  background: var(--button-bg);
  color: var(--button-text);
}

.theme-neon .close-btn {
  background: rgba(255, 0, 255, 0.2);
  color: var(--neon-pink);
  border-radius: 0;
  border: 2px solid var(--neon-pink);
}

.theme-neon .close-btn:hover {
  background: rgba(255, 0, 255, 0.4);
  box-shadow: 0 0 20px rgba(255, 0, 255, 0.5);
}

.game-title {
  margin-bottom: 25px;
  text-align: center;
  font-size: 2em;
  font-weight: 600;
  transition: all 0.3s;
}

.theme-light .game-title {
  color: var(--text-primary);
}

.theme-neon .game-title {
  color: var(--neon-cyan);
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
}

.score-display {
  text-align: center;
  font-size: 1.1em;
  margin-bottom: 30px;
  font-weight: 500;
  transition: all 0.3s;
}

.theme-light .score-display {
  color: var(--text-secondary);
}

.theme-neon .score-display {
  color: var(--neon-pink);
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Modal Transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: scale(0.9);
}

/* Responsive */
@media (max-width: 768px) {
  .modal-content {
    padding: 30px 20px;
  }

  .game-title {
    font-size: 1.5em;
  }
}
</style>