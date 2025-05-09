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
            class="mb-8 "
          >
            <v-card elevation="5" class="rounded-xl project-card d-flex flex-column align-center pt-3 flex-sm-row">
              <v-img
                :src="project.image"
                height="150"
                width="150"
                class="rounded-circle"
                cover
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
    import imgGS from '../assets/gs.jpg';
    import imgLDL from '../assets/delaluz.jpg';
    import imgLogo from '../../public/logofinal.png';
    import imgAvatar from '../../public/foto-site.jpg';
  const projects = [
    {
      title: 'Tienda Online',
      description: 'El sitio web lamparasdelaluz.com es una tienda online de iluminación artesanal. Se especializa en la venta de lámparas de diseño, ofreciendo una variedad de productos como lámparas colgantes, de pie, de mesa y apliques para interiores y exteriores.',
      image: imgLDL,
      live: 'https://lamparasdelaluz.com',
      repo: '',
    },
    {
      title: 'SPA personalizada',
      description: 'El sitio web gransabanaremesas.web.app es una plataforma que ofrece servicios de envío de remesas. Esta orientado a facilitar transferencias de dinero, posiblemente enfocándose en la comunidad venezolana.',
      image: imgGS,
      live: 'https://gransabanaremesas.web.app/',
      repo: '',
    },
    {
      title: 'Portfolio Nuxt',
      description: 'Sitio personal desarrollado con Nuxt 3 y Vuetify, diseñado para destacar mis habilidades como desarrollador frontend. Incluye secciones dedicadas a mi experiencia, proyectos destacados y tecnologías que domino, todo presentado con una estética moderna, responsive y de alto rendimiento. Ideal para reclutadores, clientes o cualquier persona interesada en conocer mi perfil profesional.',
      image: imgAvatar,
      live: '/#hero',
      repo: '',
    },
    {
      title: 'Consultora de Desarrollo de Software',
      description: 'Sitio web para EscCode, mi consultora de desarrollo de software. Es una SPA construida con Next.js, Tailwind CSS y Framer Motion, con diseño oscuro, elegante y animaciones suaves. Incluye secciones dinámicas como servicios, proyectos, testimonios y contacto, y fue optimizado para Firebase Hosting como sitio estático.',
      image: imgLogo,
      live: 'https://esccodesitio.web.app/',
      repo: '',
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
  