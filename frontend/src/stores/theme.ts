import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import type { ThemeType } from '@/types'

export const useThemeStore = defineStore('theme', () => {
  // State
  const currentTheme = ref<ThemeType>('light')
  const themeSelected = ref(false)

  // Carregar tema salvo do localStorage
  const loadTheme = () => {
    const saved = localStorage.getItem('joguedle-theme')
    const selected = localStorage.getItem('joguedle-theme-selected')
    
    if (saved && (saved === 'light' || saved === 'neon')) {
      currentTheme.value = saved
    }
    
    if (selected === 'true') {
      themeSelected.value = true
    }
  }

  // Aplicar tema no body
  const applyTheme = (theme: ThemeType) => {
    document.body.classList.remove('theme-light', 'theme-neon')
    document.body.classList.add(`theme-${theme}`)
  }

  // Selecionar tema (primeira vez)
  const selectTheme = (theme: ThemeType) => {
    currentTheme.value = theme
    themeSelected.value = true
    localStorage.setItem('joguedle-theme', theme)
    localStorage.setItem('joguedle-theme-selected', 'true')
    applyTheme(theme)
  }

  // Trocar tema (depois de selecionado)
  const toggleTheme = () => {
    currentTheme.value = currentTheme.value === 'light' ? 'neon' : 'light'
    localStorage.setItem('joguedle-theme', currentTheme.value)
    applyTheme(currentTheme.value)
  }

  // Watch para aplicar tema quando mudar
  watch(currentTheme, (newTheme) => {
    applyTheme(newTheme)
  })

  // Inicializar
  loadTheme()
  applyTheme(currentTheme.value)

  return {
    currentTheme,
    themeSelected,
    selectTheme,
    toggleTheme,
    loadTheme
  }
})