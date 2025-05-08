<template>
    <v-footer class="footer py-6 px-4" padless>
      <v-container>
        <v-row align="center" justify="space-between" class="text-white">
          <v-col cols="12" md="4" class="text-center text-md-start mb-4 mb-md-0">
            <span class="font-weight-bold">© {{ currentYear }} Raul Escobar</span>
          </v-col>
  
          <v-col cols="12" md="4" class="text-center mb-4 mb-md-0">
            <v-btn
              v-for="link in links"
              :key="link.label"
              :href="link.href"
              variant="text"
              color="primary"
              class="mx-2"
            >
              {{ link.label }}
            </v-btn>
          </v-col>
  
          <v-col cols="12" md="4" class="text-center text-md-end">
            <v-btn
              icon
              :href="social.github"
              target="_blank"
              variant="text"
              color="primary"
            >
              <v-icon>mdi-github</v-icon>
            </v-btn>
            <v-btn
              icon
              :href="social.linkedin"
              target="_blank"
              variant="text"
              color="primary"
            >
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
            <v-btn
              icon
              :href="social.whatsapp"
              target="_blank"
              variant="text"
              color="primary"
            >
              <v-icon>mdi-whatsapp</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </template>
  
  <script setup>
  const currentYear = new Date().getFullYear()
  
  const links = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Sobre mí', href: '#about' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Contacto', href: '#contact' },
  ]
  
  const social = {
    github: 'https://github.com/tuusuario',
    linkedin: 'https://www.linkedin.com/in/tuusuario/',
    whatsapp: 'https://wa.me/541140766161', // Reemplazá con tu número
  }
  </script>
  
  <style scoped>
  .footer {
    background-color: #1a1a1a;
  }
  </style>
  