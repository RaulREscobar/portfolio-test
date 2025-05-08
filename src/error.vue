<template>
    <v-container
      class="d-flex justify-center align-center"
      style="height: 100vh; text-align: center;"
    >
      <v-row>
        <v-col>
          <v-img :src=image404 height="300" contain />
          <h1 class="display-1 font-weight-bold text-white mt-4">¡Oops!</h1>
          <p class="headline text-white">
            Lo siento, la página que buscas no existe.
          </p>
          <v-btn
            color="primary"
            href="/"
            class="mt-6"
            variant="outlined"
          >
            Volver al Inicio
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import image404 from './assets/atym.jpg'
  </script>
  
  <style scoped>
  body {
    background-color: #121212;
  }
  </style>
  