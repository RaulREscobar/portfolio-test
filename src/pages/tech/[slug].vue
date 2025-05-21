<template>
  <section class="py-16 px-4">
    <v-container>
      <v-row justify="center" class="mb-10">
        <v-col cols="12" md="8" class="text-center">
          <h1 class="text-h4 font-weight-bold text-primary">
            Proyectos con {{ techName }}
          </h1>
          <v-divider class="my-4" />
          <p class="text-white">
            Estos son algunos proyectos donde utilicé esta tecnología.
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          v-for="project in filteredProjects"
          :key="project.id"
          cols="12"
          md="6"
          lg="4"
        >
          <v-card class="bg-surface pa-4" elevation="4">
            <v-img
              :src="project.image"
              height="180"
              cover
              class="rounded-xl mb-4"
            />
            <v-card-title class="text-primary font-weight-bold text-h6">
              {{ project.title }}
            </v-card-title>
            <v-card-text class="text-white mb-2">
              {{ project.description }}
            </v-card-text>
            <div class="d-flex flex-wrap mt-2">
              <v-chip
                v-for="tech in project.technologies"
                :key="tech"
                color="green-darken-2"
                text-color="white"
                small
                class="ma-1"
              >
                {{ tech }}
              </v-chip>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <v-row v-if="filteredProjects.length === 0" justify="center" class="mt-10">
        <v-col cols="12" class="text-center">
          <p class="text-grey">No se encontraron proyectos con esta tecnología.</p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const techSlug = route.params.slug.toLowerCase()

const techName = techSlug.charAt(0).toUpperCase() + techSlug.slice(1)

const projects = [
  {
    id: 1,
    title: 'Landing con Vue y Vuetify',
    description: 'Una landing page responsive y animada usando Vue 3 y Vuetify.',
    image: '/img/vue-landing.jpg',
    technologies: ['vue', 'vuetify', 'html', 'css'],
  },
  {
    id: 2,
    title: 'Backend con Node y NestJS',
    description: 'API RESTful escalable con autenticación y base de datos.',
    image: '/img/backend-node.jpg',
    technologies: ['node', 'nestjs', 'typescript', 'prisma'],
  },
  {
    id: 3,
    title: 'Sitio WordPress para un cliente',
    description: 'Sitio autoadministrable y optimizado para SEO.',
    image: '/img/wp-client.jpg',
    technologies: ['wordpress', 'html', 'css'],
  },
  {
    id: 4,
    title: 'E-commerce con Next.js y Firebase',
    description: 'Tienda online con login, carrito y panel de administración.',
    image: '/img/next-firebase.jpg',
    technologies: ['next', 'firebase', 'react', 'tailwind'],
  },
]

const filteredProjects = projects.filter((project) =>
  project.technologies.includes(techSlug)
)
</script>

<style scoped>
section {
  background-color: #121212;
}
</style>
