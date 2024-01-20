<script setup>
const skills = [
    'node',
    'JavaScript',
    'React',
    'Vue',
    'vuetify'

]
</script>

<template>
    <v-container align="center">
        <h2 class="text-start">SKILLS</h2>
        <v-btn v-for="skill in skills" variant="text">
            <v-icon size="50px" icon="$vuetify">
            </v-icon></v-btn>
    </v-container>
</template>