<script setup>

const links = [
    'Proyectos',
    'C.V.',
    'Contactame',
]
</script>

<template>
    <v-toolbar theme="light" fixed="true">
        <v-img :width="50" aspect-ratio="1/1" cover
            src="@/../public/logoBlack.png"></v-img>
        <v-spacer></v-spacer>
        <v-btn v-for="link in links" :key="link">
            {{ link }}
        </v-btn>
    </v-toolbar>
</template>