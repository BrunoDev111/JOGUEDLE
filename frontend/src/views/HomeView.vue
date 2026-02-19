<template>
  <div class="home">
    <header>
      <h1>{{ siteTitle }}</h1>
      <p>{{ siteSubtitle }}</p>
    </header>

    <div class="games-grid">
      <GameCard
        v-for="(game, index) in games"
        :key="game.id"
        :icon="game.icon"
        :name="game.name"
        :description="game.description"
        :card-number="index + 1"
        @click="openGame(game)"
      />
    </div>

    <!-- Modal do Jogo -->
    <GameModal
      :is-open="modalOpen"
      :game-title="selectedGame?.name || ''"
      :current-round="1"
      :total-rounds="5"
      :score="0"
      @close="closeGame"
    >
      <div class="temp-content">
        <p>Jogo: {{ selectedGame?.name }}</p>
        <p>Em breve você jogará {{ selectedGame?.description }}</p>
      </div>
    </GameModal>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useThemeStore } from '@/stores/theme'
import GameCard from '@/components/game/GameCard.vue'
import GameModal from '@/components/game/GameModal.vue'

const themeStore = useThemeStore()

const siteTitle = computed(() => {
  return themeStore.currentTheme === 'neon' ? 'JOGUEDLE' : 'JogueDLE'
})

const siteSubtitle = computed(() => {
  return themeStore.currentTheme === 'neon' 
    ? '// SISTEMA DE JOGOS DLE //' 
    : 'Seu desafio DLE todo dia'
})

interface Game {
  id: number
  icon: string
  name: string
  description: string
  slug: string
}

const games: Game[] = [
  { id: 1, icon: '$', name: 'CARODLE', description: 'Qual produto é mais caro?', slug: 'carodle' },
  { id: 2, icon: '⏱', name: 'CRONODLE', description: 'O que aconteceu primeiro?', slug: 'cronodle' },
  { id: 3, icon: '±', name: 'NUMERODLE', description: 'Qual número é maior?', slug: 'numerodle' },
  { id: 4, icon: '?', name: 'VERDADLE', description: 'Verdadeiro ou falso?', slug: 'verdadle' },
  { id: 5, icon: '""', name: 'FRASEDLE', description: 'Complete a frase famosa', slug: 'frasedle' }
]

const modalOpen = ref(false)
const selectedGame = ref<Game | null>(null)

const openGame = (game: Game) => {
  selectedGame.value = game
  modalOpen.value = true
}

const closeGame = () => {
  modalOpen.value = false
  selectedGame.value = null
}
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

/* Temporary modal content */
.temp-content {
  text-align: center;
  padding: 40px 20px;
}

.temp-content p {
  margin: 10px 0;
  font-size: 1.1em;
}

.theme-light .temp-content p {
  color: var(--text-primary);
}

.theme-neon .temp-content p {
  color: var(--neon-cyan);
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