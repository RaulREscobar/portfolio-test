<template>
    <section id="testimonials" class="testimonials-section py-16 px-4">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center mb-8">
            <h2 class="text-h4 font-weight-bold text-primary">Testimonios</h2>
            <v-divider class="my-4" />
            <p class="text-white">Lo que dicen quienes trabajaron conmigo.</p>
          </v-col>
        </v-row>
  
        <v-carousel
          hide-delimiter-background
          cycle
          height="auto"
          show-arrows="hover"
          class="testimonial-carousel"
        >
          <v-carousel-item
            v-for="(testimonial, i) in testimonials"
            :key="i"
          >
            <v-card
              class="mx-auto pa-6 text-white testimonial-card"
              elevation="5"
              max-width="600"
              rounded="xl"
              color="surface"
            >
              <blockquote class="mb-4 text-body-1">“{{ testimonial.quote }}”</blockquote>
              <div class="text-subtitle-2 font-weight-medium">
                — {{ testimonial.name }}
                <span class="text-caption text-grey">({{ testimonial.role }})</span>
              </div>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </v-container>
    </section>
  </template>
  
  <script setup>
  const testimonials = [
    {
      name: 'Laura Gómez',
      role: 'Diseñadora UX/UI',
      quote: 'Trabajar con él fue súper fluido. Siempre atento a los detalles y con muy buena comunicación en equipo.',
    },
    {
      name: 'Martín Pérez',
      role: 'CTO en Startup',
      quote: 'Su enfoque en la calidad del código y en cumplir los tiempos fue clave para el éxito del proyecto.',
    },
    {
      name: 'Romina Sosa',
      role: 'Clienta freelance',
      quote: 'Me ayudó a lanzar mi tienda online desde cero. ¡100% recomendable por su compromiso y paciencia!',
    },
  ]
  </script>
  
  <style scoped>
  .testimonials-section {
    background-color: #1e1e1e;
  }
  
  .testimonial-card {
    transition: transform 0.3s ease;
    text-align: center;
  }
  .testimonial-card:hover {
    transform: scale(1.02);
  }
  </style>
  