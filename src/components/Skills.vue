<template>
    <section id="skills" class="skills-section py-16 px-4">
        <v-container>
            <v-row justify="center">
                <v-col cols="12" md="8" class="text-center mb-8">
                    <h2 class="text-h4 font-weight-bold text-primary">Habilidades & Tecnologías</h2>
                    <v-divider class="my-4" />
                    <p class="text-white">
                        Estas son algunas de las herramientas y tecnologías que uso regularmente.
                    </p>
                </v-col>

                <v-col cols="12">
                    <v-row justify="center" align="center" class="gap-y-6">
                        <v-col v-for="(skill, i) in skills" :key="i" cols="3" sm="4" md="3"
                            class="d-flex justify-center">
                            <v-card class="pa-4 text-center skill-card" elevation="4" color="surface" rounded="xl">
                                <v-icon :icon="skill.icon" size="36" color="primary" class="mb-2" />
                                <div class="text-white font-weight-medium">{{ skill.name }}</div>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script setup>
const skills = [
    { name: 'Vue.js', icon: 'mdi-vuejs' },
    { name: 'Nuxt 3', icon: 'mdi-nuxt' },
    { name: 'Vuetify', icon: 'mdi-vuetify' },
    { name: 'JavaScript', icon: 'mdi-language-javascript' },
    { name: 'TypeScript', icon: 'mdi-language-typescript' },
    { name: 'HTML5', icon: 'mdi-language-html5' },
    { name: 'CSS3', icon: 'mdi-language-css3' },
    { name: 'Git', icon: 'mdi-git' },
    { name: 'Firebase', icon: 'mdi-fire' },
    { name: 'Figma', icon: 'mdi-figma' },
    { name: 'Tailwind CSS', icon: 'mdi-tailwind' },
    { name: 'Node.js', icon: 'mdi-nodejs' },
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