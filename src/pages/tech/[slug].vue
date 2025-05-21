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
                <v-col v-for="project in filteredProjects" :key="project.id" cols="12" md="6" lg="4">
                    <v-card class="bg-surface pa-4" elevation="4">
                        <v-img :src="project.image" height="180"  class="rounded-xl mb-4" />
                        <v-card-title class="text-primary font-weight-bold text-h6">
                            {{ project.title }}
                        </v-card-title>
                        <v-card-text class="text-white mb-2">
                            {{ project.description }}
                        </v-card-text>
                        <div class="d-flex flex-wrap mt-2">
                            <v-chip v-for="tech in project.technologies" :key="tech" color="green-darken-2"
                                text-color="white" small class="ma-1">
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
            <v-row justify="center" class="mt-10">
                <v-col cols="12" class="text-center">
                    <v-btn color="primary" @click="$router.back()" prepend-icon="mdi-arrow-left">
                        Volver
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script setup>
import { useRoute } from 'vue-router'
import imgPortfolio from '../../assets/portfolio.png';
import imgAtym from '../../assets/atym.jpg';
import imgLampara from '../../assets/delaluz.jpg';
import imgCc from '../../assets/cc.png';
import imgChonga from '../../assets/chongazen.png';
import imgEsc from '../../assets/esccode.png';
import imgGran from '../../assets/gs.jpg';
import imgLaura from '../../assets/lauratoro.png';
import imgNaranjos from '../../assets/naranjos.jpg';
import imgPaula from '../../assets/paula.png';
import imgRamallo from '../../assets/ramallo.jpg';
import imgTechnous from '../../assets/technous.jpg';


const route = useRoute()
const techSlug = route.params.slug.toLowerCase()

const techName = techSlug.charAt(0).toUpperCase() + techSlug.slice(1)

const projects = [
    {
        id: 1,
        title: 'Landing Vue y Vuetify',
        description: 'Un Portfolio Web responsive y animada usando Vuex, Vue 3 y Vuetify.',
        image: imgPortfolio,
        technologies: ['vue', 'vuetify', 'html', 'css', 'vuex', 'javascript', 'firebase', 'github'],
    },
    {
        id: 2,
        title: 'Backend con Node y NestJS',
        description: 'API RESTful escalable con autenticación, base de datos y mensajes del servidor en tiempo real.',
        image: '/img/backend-node.jpg',
        technologies: ['node', 'nestjs', 'typescript', 'prisma', 'mysql', 'express', 'javascript', 'websockets'],
    },
    {
        id: 3,
        title: 'Sitio WordPress para un cliente',
        description: 'Sitio autoadministrable y optimizado para SEO.',
        image: imgAtym,
        technologies: ['wordpress', 'html', 'css','SEO'],
    },
    {
        id: 4,
        title: 'WooCommerce y Wordpress',
        description: 'Tienda online con login, carrito y panel de administración.',
        image: imgLampara,
        technologies: ['wordpress', 'woocommerce', 'html', 'css'],
    },
    {
        id: 5,
        title: 'Actualización y rediseño Wordpress',
        description: 'Actualización, rediseño y mejoras en tienda online.',
        image: imgCc,
        technologies: ['wordpress', 'woocommerce', 'html', 'css'],
    },
    {
        id: 6,
        title: 'Diseño a medida y Catalogo Wordpress',
        description: 'Diseño de sitio a medida con cátalogo online',
        image: imgChonga,
        technologies: ['wordpress', 'html', 'css', 'javascript'],
    },
    {
        id: 7,
        title: 'Landing para negocio',
        description: 'Diseño de sitio a medida con Next.Js, Talwind y alojado en Firebase',
        image: imgEsc,
        technologies: ['next.js', 'html', 'css', 'javascript', 'typescript', 'talwind', 'firebase', 'github'],
    },
    {
        id: 8,
        title: 'App web para cálculo de remesas',
        description: 'Aplicación en Vue con rutas, sistema de login y base de datos NoSQL ',
        image: imgGran,
        technologies: ['vue 3', 'html', 'css', 'javascript', 'vuetify', 'firebase', 'github', 'firestore', 'nosql', 'figma'],
    },
    {
        id: 9,
        title: 'Portfolio Wordpress',
        description: 'Portafolio fotográfico con WooCommerce para pedir presupuesto',
        image: imgLaura,
        technologies: ['wordpress', 'html', 'css', 'woocommerce'],
    },
     {
        id: 10,
        title: 'Portfolio Wordpress',
        description: 'Mejoras y mantenimiento en Portafolio fotográfico + Blog',
        image: imgPaula,
        technologies: ['wordpress', 'html', 'css', 'woocommerce'],
    },
    {
        id: 11,
        title: 'Sitio de noticias Wordpress',
        description: 'Mejoras, mantenimiento e integraciones en Wordpress',
        image: imgRamallo,
        technologies: ['wordpress', 'html', 'css'],
    },
    {
        id: 12,
        title: 'Landing de Consultoria',
        description: 'Diseño, creación y puesta en marcha de landing page en Next js',
        image: imgTechnous,
        technologies: ['next.js', 'talwind', 'css', 'html', 'react', 'typescript', 'javascript', 'firebase', 'figma', 'github'],
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
