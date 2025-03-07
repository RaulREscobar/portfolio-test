<script setup>

const itemnsMenu = [
    'Proyectos',
    'CV',
    'Contactame',
]
</script>

<template>
    <v-toolbar theme="light" fixed="true">
        <v-btn href="/">
            <v-img :width="50" aspect-ratio="1/1" cover
            src="@/../public/logoBlack.png"></v-img>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn v-for="item in itemnsMenu" :key="item" :href="item" >
            {{ item }}
        </v-btn>
    </v-toolbar>
</template>