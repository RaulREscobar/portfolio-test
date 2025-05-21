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
          <form @submit.prevent="handleSubmit">
            <v-text-field v-model="form.name" label="Nombre" variant="outlined" color="primary" class="mb-4" required />
            <v-text-field v-model="form.email" label="Email" type="email" variant="outlined" color="primary"
              class="mb-4" required />
            <v-textarea v-model="form.message" label="Mensaje" rows="4" variant="outlined" color="primary" class="mb-4"
              required />
            <v-btn type="submit" color="primary" block>Enviar mensaje</v-btn>
          </form>
        </v-col>
      </v-row>

      <v-row justify="center" class="mt-8">
        <v-col cols="12" class="text-center">
          <p class="text-white">O escribime directamente a:</p>
          <v-btn href="mailto:raul.r.escobar@gmail.com" color="primary" variant="outlined" class="mt-2">
            raul.r.escobar@gmail.com
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <!-- Popup de confirmación -->
    <v-dialog v-model="dialog" max-width="300">
      <v-card>
        <v-card-title class="text-h6 text-primary text-center">¡Mensaje enviado!</v-card-title>
        <v-card-text class="text-center pt-5 pb-0">Gracias por tu mensaje.
          <br>
          Te responderé pronto 😊
        </v-card-text>
        <v-card-text></v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" @click="dialog = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: '',
})

const dialog = ref(false)

const handleSubmit = async () => {
  try {
    const formData = new FormData()
    formData.append('name', form.value.name)
    formData.append('email', form.value.email)
    formData.append('message', form.value.message)
    formData.append('_captcha', 'false')

    await fetch('https://formsubmit.co/raul.r.escobar@gmail.com', {
      method: 'POST',
      body: formData,
    })

    dialog.value = true
    form.value = { name: '', email: '', message: '' }
  } catch (error) {
    console.error('Error al enviar el mensaje:', error)
  }
}
</script>

<style scoped>
.contact-section {
  background-color: #121212;
}
</style>
