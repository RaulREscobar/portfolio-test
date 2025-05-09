<template>
  <v-app-bar
    app
    flat
    color="transparent"
    class="header"
  >
    <v-container class="d-flex justify-space-between align-center">
      <div class="text-h6 font-weight-bold text-white">
        Raul Escobar
      </div>

      <v-btn-toggle
        v-if="$vuetify.display.mdAndUp"
        divided
        class="d-none d-md-flex"
        color="primary"
        variant="text"
      >
        <v-btn
          v-for="item in navItems"
          :key="item.label"
          :href="item.href"
          variant="text"
          class="text-white text-capitalize"
        >
          {{ item.label }}
        </v-btn>
      </v-btn-toggle>

      <v-menu
        v-else
        transition="scale-transition"
        location="bottom right"
      >
        <template #activator="{ props }">
          <v-btn icon v-bind="props" variant="text" color="white">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="item in navItems"
            :key="item.label"
            :href="item.href"
          >
            <v-list-item-title>{{ item.label }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-container>
  </v-app-bar>
</template>

<script setup>
const navItems = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Experiencia', href: '#experience' },
  //{ label: 'Testimonios', href: '#testimonials' },
  { label: 'Contacto', href: '#contact' },
]
</script>

<style scoped>
.header {
  backdrop-filter: blur(10px);
  background-color: rgba(18, 18, 18, 0.8);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
}
</style>

  

<!-- <script setup>

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
</template> -->