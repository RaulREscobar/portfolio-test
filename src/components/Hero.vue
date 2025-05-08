<template>
    <section id="hero" class="hero-section d-flex align-center justify-center flex-column text-center">
        <h1 class="text-h2 font-weight-bold mb-4">
            Hola, soy <span style="color: #64ffda">Raul Escobar</span>
        </h1>
        <h2 class="text-h5 font-weight-medium mb-6">Desarrollador Web FullStack</h2>
        <div>
            <v-btn color="primary" class="mr-4" @click="scrollTo('#contact')">Contáctame</v-btn>
            <v-btn variant="outlined" href="../assets/cv.pdf" target="_blank">Ver CV</v-btn>
        </div>
    </section>
</template>

<script setup>
const scrollTo = (selector) => {
    const el = document.querySelector(selector)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.hero-section {
    height: 90vh;
    padding: 2rem;
    background: linear-gradient(135deg, #1f4037 0%, #2c7744 100%);
    color: white;
}
</style>