<script setup>

const links = [
    'Proyectos',
    'CV',
    'Contactame',
]
</script>

<template>
    <v-footer class="bg-grey-lighten-1">
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          variant="text"
          class="mx-2"
          rounded="xl"
          :href=link
        >
          {{ link }}
        </v-btn>
        <v-col class="text-center mt-4" cols="12">
          {{ new Date().getFullYear() }} — <strong>EscCode</strong>
        </v-col>
      </v-row>
    </v-footer>
  </template>