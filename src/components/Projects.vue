<template>
    <section id="projects" class="projects-section py-16 px-4">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center mb-8">
            <h2 class="text-h4 font-weight-bold text-primary">Proyectos destacados</h2>
            <v-divider class="my-4" />
            <p class="text-white">Algunos trabajos que reflejan mi experiencia y enfoque como desarrollador.</p>
          </v-col>
        </v-row>
  
        <v-row>
          <v-col
            v-for="(project, i) in projects"
            :key="i"
            cols="12"
            md="6"
            class="mb-8"
          >
            <v-card elevation="5" class="rounded-xl project-card">
              <v-img
                :src="project.image"
                height="200"
                cover
                class="rounded-t-xl"
              />
              <v-card-text class="bg-surface text-white">
                <h3 class="text-h6 font-weight-bold mb-2">{{ project.title }}</h3>
                <p class="text-body-2 mb-4">{{ project.description }}</p>
                <v-btn
                  v-if="project.live"
                  :href="project.live"
                  target="_blank"
                  class="me-2"
                  color="primary"
                  size="small"
                  variant="flat"
                >
                  Ver sitio
                </v-btn>
                <v-btn
                  v-if="project.repo"
                  :href="project.repo"
                  target="_blank"
                  color="secondary"
                  size="small"
                  variant="outlined"
                >
                  Código
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </template>
  
  <script setup>
  const projects = [
    {
      title: 'Portfolio Nuxt',
      description: 'Sitio personal desarrollado con Nuxt 3 y Vuetify para mostrar mis habilidades como frontend.',
      image: '/projects/portfolio-nuxt.jpg',
      live: 'https://miportfolio.com',
      repo: 'https://github.com/usuario/portfolio-nuxt',
    },
    {
      title: 'Tienda Online',
      description: 'E-commerce personalizado con integración a pasarela de pagos y panel de administración.',
      image: '/projects/tienda-online.jpg',
      live: 'https://mitienda.com',
      repo: 'https://github.com/usuario/tienda-online',
    },
    {
      title: 'Gestor de Pedidos',
      description: 'App web para gestionar pedidos en tiempo real entre sucursales usando Firebase y Vue.',
      image: '/projects/gestor-pedidos.jpg',
      live: '',
      repo: 'https://github.com/usuario/gestor-pedidos',
    },
  ]
  </script>
  
  <style scoped>
  .projects-section {
    background-color: #1a1a1a;
  }
  
  .project-card {
    transition: transform 0.3s ease;
  }
  .project-card:hover {
    transform: translateY(-5px);
  }
  </style>
  