<template>
  <div 
    class="game-card"
    :class="`game-${cardNumber}`"
    @click="$emit('click')"
  >
    <div class="game-icon">
      <div class="icon-circle">{{ icon }}</div>
    </div>
    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  name: string
  description: string
  cardNumber: number
}>()

defineEmits<{
  click: []
}>()
</script>

<style scoped>
.game-card {
  padding: 50px 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px;
  text-align: center;
}

/* Light Theme Cards */
.theme-light .game-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
}

.theme-light .game-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--card-hover-shadow);
  border-color: var(--border-hover);
}

/* Neon Theme Cards */
.theme-neon .game-card {
  background: var(--card-bg);
  border: 2px solid;
  border-radius: 0;
}

.theme-neon .game-card.game-1 { 
  border-color: var(--neon-pink); 
  box-shadow: 0 0 20px rgba(255, 0, 255, 0.3); 
}

.theme-neon .game-card.game-2 { 
  border-color: var(--neon-cyan); 
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3); 
}

.theme-neon .game-card.game-3 { 
  border-color: var(--neon-pink); 
  box-shadow: 0 0 20px rgba(255, 0, 255, 0.3); 
}

.theme-neon .game-card.game-4 { 
  border-color: var(--neon-cyan); 
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3); 
}

.theme-neon .game-card.game-5 { 
  border-color: var(--neon-pink); 
  box-shadow: 0 0 20px rgba(255, 0, 255, 0.3); 
}

.theme-neon .game-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 0 40px rgba(255, 0, 255, 0.6);
}

/* Icons */
.game-icon {
  margin-bottom: 25px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8em;
  font-weight: 600;
  transition: all 0.3s;
}

.theme-light .icon-circle {
  background: #000;
  color: #fff;
}

.theme-light .game-card.game-2 .icon-circle,
.theme-light .game-card.game-4 .icon-circle {
  background: #f5f5f5;
  color: #000;
  border: 2px solid #000;
}

.theme-neon .icon-circle {
  background: transparent;
  font-size: 3em;
  border-radius: 0;
  filter: drop-shadow(0 0 10px currentColor);
}

.theme-neon .game-1 .icon-circle,
.theme-neon .game-3 .icon-circle,
.theme-neon .game-5 .icon-circle {
  color: var(--neon-pink);
}

.theme-neon .game-2 .icon-circle,
.theme-neon .game-4 .icon-circle {
  color: var(--neon-cyan);
}

/* Titles */
.game-card h2 {
  margin-bottom: 8px;
  font-size: 1.6em;
  font-weight: 600;
  letter-spacing: -0.5px;
  transition: all 0.3s;
}

.theme-light .game-card h2 {
  color: var(--text-primary);
}

.theme-neon .game-card h2 {
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1.4em;
}

.theme-neon .game-1 h2,
.theme-neon .game-3 h2,
.theme-neon .game-5 h2 {
  color: var(--neon-pink);
}

.theme-neon .game-2 h2,
.theme-neon .game-4 h2 {
  color: var(--neon-cyan);
}

/* Descriptions */
.game-card p {
  font-size: 0.95em;
  font-weight: 400;
  line-height: 1.5;
  transition: all 0.3s;
}

.theme-light .game-card p {
  color: var(--text-secondary);
}

.theme-neon .game-card p {
  color: #999;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.75em;
}
</style>