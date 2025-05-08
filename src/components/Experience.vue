<template>
    <section id="experience" class="experience-section py-16 px-4">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center mb-8">
            <h2 class="text-h4 font-weight-bold text-primary">Experiencia & Trayectoria</h2>
            <v-divider class="my-4" />
            <p class="text-white">Un recorrido por los roles y experiencias que definieron mi camino profesional.</p>
          </v-col>
        </v-row>
  
        <v-timeline align="start" side="start" density="comfortable">
          <v-timeline-item
            v-for="(item, i) in experiences"
            :key="i"
            :dot-color="item.color"
            fill-dot
          >
            <v-card class="bg-surface text-white pa-4" elevation="4" rounded="xl">
              <div class="text-subtitle-1 font-weight-bold mb-1">{{ item.title }}</div>
              <div class="text-caption text-grey mb-2">{{ item.date }} — {{ item.place }}</div>
              <div class="text-body-2">{{ item.description }}</div>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-container>
    </section>
  </template>
  
  <script setup>
  const experiences = [
    {
      title: 'Desarrollador Web Freelance',
      place: 'Proyectos personales y clientes',
      date: '2021 - Presente',
      description: 'Diseño y desarrollo de sitios y aplicaciones web a medida, trabajando con Vue, Nuxt, React, Next, Firebase y CMS como WordPress. Comunicación directa con clientes, resolución de problemas y entregas en tiempo.',
      color: 'primary',
    },
    {
      title: 'Estudios Universitarios en Desarrollo de Software',
      place: 'Instituto / Universidad',
      date: '2025 - En curso',
      description: 'Formación académica que refuerza mi capacidad de análisis, arquitectura de software y trabajo en equipo. Complemento ideal para mi experiencia práctica.',
      color: 'green',
    },
    {
      title: 'Colaboración en proyectos',
      place: 'Desarrollo de API',
      date: '2024 - 2024',
      description: 'Participación en un equipo de desarrollo de una API para subastas, utilizando NestJS, Prisma, SQL, WebSockets, JWT, entre otras tecnologías.',
      color: 'secondary',
    },
    {
      title: 'Curso de Desarrollo Web Full Stack',
      place: 'Fundación formar - Digital Hause',
      date: '2021',
      description: 'Curso de Desarrollo Web Full Stack con formación complementaria en habilidades blandas, trabajo en equipo y metodologías ágiles.',
      color: 'accent',
    },
  ]
  </script>
  
  <style scoped>
  .experience-section {
    background-color: #121212;
  }
  </style>
  