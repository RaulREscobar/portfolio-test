<script setup>

const links = [
    'Proyectos',
    'C.V.',
    'Contactame',
]
</script>

<template>
    <v-toolbar theme="dark">
        <v-icon>mdi-account-circle</v-icon>
        <v-toolbar-title>Raul</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn v-for="link in links" :key="link">
            {{ link }}
        </v-btn>
    </v-toolbar>
</template>