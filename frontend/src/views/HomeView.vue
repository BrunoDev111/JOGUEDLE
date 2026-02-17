<template>
  <div class="home">
    <header>
      <h1>{{ siteTitle }}</h1>
      <p>{{ siteSubtitle }}</p>
    </header>

    <div class="games-grid">
      <div class="game-card" v-for="game in games" :key="game.id">
        <div class="game-icon">
          <div class="icon-circle">{{ game.icon }}</div>
        </div>
        <h2>{{ game.name }}</h2>
        <p>{{ game.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()

const siteTitle = computed(() => {
  return themeStore.currentTheme === 'neon' ? 'JOGUEDLE' : 'JogueDLE'
})

const siteSubtitle = computed(() => {
  return themeStore.currentTheme === 'neon' 
    ? '// SISTEMA DE JOGOS DLE //' 
    : 'Seu desafio DLE todo dia'
})

const games = [
  { id: 1, icon: '$', name: 'CARODLE', description: 'Qual produto é mais caro?' },
  { id: 2, icon: '⏱', name: 'CRONODLE', description: 'O que aconteceu primeiro?' },
  { id: 3, icon: '±', name: 'NUMERODLE', description: 'Qual número é maior?' },
  { id: 4, icon: '?', name: 'VERDADLE', description: 'Verdadeiro ou falso?' },
  { id: 5, icon: '""', name: 'FRASEDLE', description: 'Complete a frase famosa' }
]
</script>

<style scoped>
.home {
  padding: 20px;
  min-height: 100vh;
}

header {
  text-align: center;
  margin-bottom: 60px;
  padding: 60px 0 40px 0;
}

/* Light Theme */
.theme-light header h1 {
  font-size: 3.5em;
  font-weight: 300;
  letter-spacing: -2px;
  color: var(--text-primary);
}

.theme-light header p {
  font-size: 1em;
  color: var(--text-secondary);
  font-weight: 400;
  letter-spacing: 0.5px;
  margin-top: 10px;
}

/* Neon Theme */
.theme-neon header h1 {
  font-size: 4em;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 5px;
  background: linear-gradient(45deg, #ff00ff, #00ffff, #ff00ff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(255, 0, 255, 0.5);
  animation: glow 2s ease-in-out infinite;
}

@keyframes glow {
  0%, 100% { filter: brightness(1); }
  50% { filter: brightness(1.3); }
}

.theme-neon header p {
  font-size: 1.1em;
  color: var(--neon-cyan);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 10px;
}

/* Games Grid */
.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
}

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
  border: 2px solid var(--border-color);
  border-radius: 0;
}

.theme-neon .game-card:nth-child(even) {
  border-color: var(--neon-cyan);
}

.theme-neon .game-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: var(--card-hover-shadow);
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

.theme-light .game-card:nth-child(even) .icon-circle {
  background: #f5f5f5;
  color: #000;
  border: 2px solid #000;
}

.theme-neon .icon-circle {
  background: transparent;
  color: var(--neon-pink);
  font-size: 3em;
  border-radius: 0;
  filter: drop-shadow(0 0 10px currentColor);
}

.theme-neon .game-card:nth-child(even) .icon-circle {
  color: var(--neon-cyan);
}

/* Titles */
.game-card h2 {
  margin-bottom: 8px;
  font-size: 1.6em;
  font-weight: 600;
  letter-spacing: -0.5px;
}

.theme-light .game-card h2 {
  color: var(--text-primary);
}

.theme-neon .game-card h2 {
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1.4em;
  color: var(--neon-pink);
}

.theme-neon .game-card:nth-child(even) h2 {
  color: var(--neon-cyan);
}

/* Descriptions */
.game-card p {
  font-size: 0.95em;
  font-weight: 400;
  line-height: 1.5;
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

/* Responsive */
@media (max-width: 768px) {
  header h1 {
    font-size: 2.5em !important;
  }
  
  .games-grid {
    grid-template-columns: 1fr;
  }
}
</style>