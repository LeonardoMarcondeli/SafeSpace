import Lara from '@primeuix/themes/lara';

export default defineNuxtConfig({
  modules: [
      '@primevue/nuxt-module'
  ],

  primevue: {
      options: {
          theme: {
              preset: Lara
          }
      }
  },
  
  css: [
    'primeflex/primeflex.css',
    '@/assets/css/main.css'
  ],

  compatibilityDate: '2025-04-08'
})