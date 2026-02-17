<template>
  <button 
    class="theme-toggle"
    @click="themeStore.toggleTheme()"
    :title="toggleTitle"
  >
    <span class="toggle-text">{{ toggleText }}</span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()

const toggleText = computed(() => {
  return themeStore.currentTheme === 'light' ? '💫 Neon' : '☀️ Light'
})

const toggleTitle = computed(() => {
  return themeStore.currentTheme === 'light' 
    ? 'Mudar para tema Neon' 
    : 'Mudar para tema Light'
})
</script>

<style scoped>
.theme-toggle {
  position: fixed;
  top: 30px;
  right: 30px;
  z-index: 1000;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9em;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  border: 2px solid;
}

/* Light Theme Style */
.theme-light .theme-toggle {
  background: #fff;
  color: #1a1a1a;
  border-color: #1a1a1a;
}

.theme-light .theme-toggle:hover {
  background: #1a1a1a;
  color: #fff;
  transform: translateY(-2px);
}

/* Neon Theme Style */
.theme-neon .theme-toggle {
  background: rgba(20, 25, 50, 0.8);
  color: #00ffff;
  border-color: #ff00ff;
  box-shadow: 0 0 20px rgba(255, 0, 255, 0.3);
  text-transform: uppercase;
  letter-spacing: 2px;
}

.theme-neon .theme-toggle:hover {
  background: rgba(255, 0, 255, 0.2);
  box-shadow: 0 0 30px rgba(255, 0, 255, 0.5);
  transform: translateY(-2px);
}

.toggle-text {
  display: inline-block;
}

/* Responsive */
@media (max-width: 768px) {
  .theme-toggle {
    top: 20px;
    right: 20px;
    padding: 10px 20px;
    font-size: 0.85em;
  }
}
</style>