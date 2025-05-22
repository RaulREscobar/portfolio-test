<template>
    <v-container id="skills" class="py-16">
        <v-row justify="center">
            <v-col cols="12" md="8" class="text-center mb-8">
                <h2 class="text-h4 font-weight-bold text-primary">Habilidades & Tecnologías</h2>
                <v-divider class="my-4" />
                <p class="text-white">
                    Estas son algunas de las herramientas y tecnologías que uso regularmente.
                </p>
            </v-col>
        </v-row>
        <v-row class="mt-8" dense>
            <v-col v-for="(group, index) in categorizedSkills" :key="index" cols="12" sm="6" md="6" class="mb-6">
                <v-card elevation="2" class="pa-4 h-100 bg-surface text-white" rounded="xl">
                    <v-card-title class="text-h6 mb-4">
                        {{ group.title }}
                    </v-card-title>
                    <v-card-text>
                        <v-row dense>
                            <v-col v-for="(tech, idx) in group.items" :key="idx" class="">
                                <v-chip :prepend-icon="tech.icon" color="primary" class="skill-card" variant="text"
                                    size="large"
                                    @click="$router.push(`/tech/${tech.label.toLowerCase()}`)"
                                    >
                                    {{ tech.label }}
                                </v-chip>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
const categorizedSkills = [
    {
        title: 'Frontend',
        items: [
            { label: 'HTML', icon: 'mdi-language-html5' },
            { label: 'CSS', icon: 'mdi-language-css3' },
            { label: 'JavaScript', icon: 'mdi-language-javascript' },
            { label: 'TypeScript', icon: 'mdi-language-typescript' },
            { label: 'Vue 3', icon: 'mdi-vuejs' },
            { label: 'Vuetify', icon: 'mdi-vuetify' },
            { label: 'React', icon: 'mdi-react' },
            { label: 'Next.js', icon: 'mdi-alpha-n-box' },
            { label: 'Bootstrap', icon: 'mdi-bootstrap' },
            { label: 'Tailwind', icon: 'mdi-tailwind' },
        ]
    },
    {
        title: 'Backend',
        items: [
            { label: 'Node.js', icon: 'mdi-nodejs' },
            { label: 'Express', icon: 'mdi-alpha-e-box' },
            { label: 'NestJS', icon: 'mdi-alpha-n-box-outline' },
            { label: 'Prisma', icon: 'mdi-database-outline' },
        ],
    },
    {
        title: 'CMS & eCommerce',
        items: [
            { label: 'WordPress', icon: 'mdi-wordpress' },
            { label: 'WooCommerce', icon: 'mdi-cart-outline' },
        ],
    },
    {
        title: 'Base de Datos y Servicios',
        items: [
            { label: 'Firebase', icon: 'mdi-fire' },
            { label: 'MySQL', icon: 'mdi-database' },
        ],
    },
    {
        title: 'Herramientas',
        items: [
            { label: 'Figma', icon: 'mdi-figma' },
            { label: 'GitHub', icon: 'mdi-github' },
        ],
    },
]
</script>

<style scoped>
.skills-section {
    background-color: #121212;
}

.skill-card {
    transition: transform 0.3s ease;
}

.skill-card:hover {
    transform: translateY(-4px);
}
</style>
