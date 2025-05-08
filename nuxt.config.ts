import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src',

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Raul | Desarrollador Web',
      meta: [
        { name: 'description', content: 'Portfolio personal de Raul Escobar, desarrollador web.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },

  build: {
    transpile: ['vuetify'],
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  nitro: {
    firebase: {
      gen: 2
    }
  },

  compatibilityDate: '2025-03-09'
})