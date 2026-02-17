<template>
  <ThemeSelector />
  <ThemeToggle />
  
  <div class="app-container">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import ThemeSelector from '@/components/theme/ThemeSelector.vue'
import ThemeToggle from '@/components/theme/ThemeToggle.vue'
</script>

<style>
@import '@/assets/styles/globals.css';
@import '@/assets/styles/themes/light.css';
@import '@/assets/styles/themes/neon.css';

.app-container {
  position: relative;
  z-index: 2;
  min-height: 100vh;
}
</style>