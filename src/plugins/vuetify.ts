// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'dark',
      themes: {
        dark: {
          dark: true,
          colors: {
            background: '#121212',        // Fondo principal
            surface: '#1e1e1e',           // Superficies
            primary: '#64ffda',           // Verde lima (acento principal)
            secondary: '#1f4037',         // Verde profundo (contraste)
            accent: '#00c896',            // Verde Nuxt vibrante
            info: '#80cbc4',
            warning: '#fdd835',
            error: '#ef5350',
            success: '#66bb6a',
          },
        },
      }
    }
  })
  app.vueApp.use(vuetify)
})
