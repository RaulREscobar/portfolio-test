<script setup>
    const input = ""
</script>

<template>
    <v-container>
        <h2 class="text-start">CONTACTAME</h2>
        <v-sheet width="300" class="mx-auto">
    <v-form fast-fail @submit.prevent>
      <v-text-field
        v-model="input"
        label="Nombre"
      ></v-text-field>

      <v-text-field
        v-model="input"
        label="E-mail"
      ></v-text-field>

      <v-textarea label="Mensaje">

      </v-textarea>
      <div class="text-end">
          <v-btn type="submit" justify="right" class="mt-2">Enviar</v-btn>
      </div>
    </v-form>
  </v-sheet>
    </v-container>    
</template>