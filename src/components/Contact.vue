<template>
    <section id="contact" class="contact-section py-16 px-4">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center mb-8">
            <h2 class="text-h4 font-weight-bold text-primary">Contacto</h2>
            <v-divider class="my-4" />
            <p class="text-white">¿Tenés una idea o proyecto en mente? ¡Hablemos!</p>
          </v-col>
        </v-row>
  
        <v-row justify="center">
          <v-col cols="12" md="6">
            <form
              :action="mailtoLink"
              method="POST"
              enctype="text/plain"
            >
              <v-text-field
                v-model="form.name"
                label="Nombre"
                variant="outlined"
                color="primary"
                class="mb-4"
                required
              />
              <v-text-field
                v-model="form.email"
                label="Email"
                type="email"
                variant="outlined"
                color="primary"
                class="mb-4"
                required
              />
              <v-textarea
                v-model="form.message"
                label="Mensaje"
                rows="4"
                variant="outlined"
                color="primary"
                class="mb-4"
                required
              />
              <v-btn type="submit" color="primary" block>Enviar mensaje</v-btn>
            </form>
          </v-col>
        </v-row>
  
        <v-row justify="center" class="mt-8">
          <v-col cols="12" class="text-center">
            <p class="text-white">O escribime directamente a:</p>
            <v-btn
              href="mailto:raul.r.escobar@gmail.com"
              color="primary"
              variant="outlined"
              class="mt-2"
            >
              raul.r.escobar@gmail.com
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const form = ref({
    name: '',
    email: '',
    message: '',
  })
  
  const mailtoLink = computed(() => {
    const subject = encodeURIComponent('Contacto desde el portfolio')
    const body = encodeURIComponent(
      `Nombre: ${form.value.name}\nEmail: ${form.value.email}\n\nMensaje:\n${form.value.message}`
    )
    return `mailto:raul.r.escobar@gmail.com?subject=${subject}&body=${body}`
  })
  </script>
  
  <style scoped>
  .contact-section {
    background-color: #121212;
  }
  </style>
  