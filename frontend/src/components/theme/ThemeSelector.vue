<template>
  <Transition name="fade">
    <div v-if="!themeStore.themeSelected" class="theme-selector">
      <div class="selector-content">
        <h1>Bem-vindo ao JogueDLE!</h1>
        <p>Escolha seu tema favorito para começar</p>
        
        <div class="theme-options">
          <!-- Opção Neon -->
          <div 
            class="theme-option neon-preview"
            @click="selectTheme('neon')"
          >
            <div class="theme-icon">⬢</div>
            <h2>NEON</h2>
            <p>Cyberpunk • Futurista • Neon</p>
          </div>

          <!-- Opção Light -->
          <div 
            class="theme-option light-preview"
            @click="selectTheme('light')"
          >
            <div class="theme-icon">○</div>
            <h2>minimalist</h2>
            <p>Clean • Simples • Elegante</p>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'
import type { ThemeType } from '@/types'

const themeStore = useThemeStore()

const selectTheme = (theme: ThemeType) => {
  themeStore.selectTheme(theme)
}
</script>

<style scoped>
.theme-selector {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0f1419;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.selector-content {
  text-align: center;
  max-width: 900px;
  width: 100%;
  padding: 40px;
}

.selector-content h1 {
  font-size: 3.5em;
  color: #fff;
  margin-bottom: 15px;
  font-weight: 700;
  letter-spacing: -1px;
}

.selector-content > p {
  font-size: 1.2em;
  color: #9ca3af;
  margin-bottom: 50px;
  font-weight: 400;
}

.theme-options {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  max-width: 700px;
  margin: 0 auto;
}

.theme-option {
  background: #1a1f2e;
  border: 3px solid #2d3548;
  border-radius: 20px;
  padding: 50px 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.theme-option:hover {
  transform: translateY(-8px) scale(1.03);
  border-color: #4b5563;
}

/* Neon Preview */
.theme-option.neon-preview {
  background: linear-gradient(135deg, rgba(138, 43, 226, 0.1) 0%, rgba(0, 191, 255, 0.1) 100%);
  border-color: #ff00ff;
}

.theme-option.neon-preview:hover {
  border-color: #00ffff;
  box-shadow: 0 0 40px rgba(255, 0, 255, 0.4);
}

.theme-option.neon-preview h2 {
  color: #ff00ff;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 0 0 20px rgba(255, 0, 255, 0.5);
}

.theme-option.neon-preview p {
  color: #00ffff;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Courier New', monospace;
}

.theme-option.neon-preview .theme-icon {
  filter: drop-shadow(0 0 15px rgba(255, 0, 255, 0.7));
}

/* Light Preview */
.theme-option.light-preview {
  background: #f5f5f5;
  border-color: #e0e0e0;
}

.theme-option.light-preview:hover {
  border-color: #1a1a1a;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

.theme-option.light-preview h2 {
  color: #1a1a1a;
  font-weight: 300;
  letter-spacing: -1px;
}

.theme-option.light-preview p {
  color: #666;
  font-weight: 400;
}

/* Theme Icon */
.theme-icon {
  font-size: 4em;
  margin-bottom: 20px;
}

.theme-option h2 {
  font-size: 2.5em;
  margin-bottom: 15px;
  font-weight: 700;
}

.theme-option p {
  font-size: 1em;
  margin-bottom: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .theme-options {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .selector-content h1 {
    font-size: 2.5em;
  }
}

/* Fade Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>