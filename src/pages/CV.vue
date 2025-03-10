<script setup>

const downloadPdf = () => {
    // create element <a> for download PDF
    const link = document.createElement('a');
    link.href = '@/assets/cv.pdf';
    link.target = '_blank';
    link.download = 'cv.pdf';

    // Simulate a click on the element <a>
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
</script>

<template>
    <v-container>
        <h2 class="text-center">Proximamente podran ver mi CV Aquí</h2>
        <h2 class="text-center">Pero pueden escribirme y me pondre en contacto con ustedes</h2>
        <!-- <v-btn text="descargar" @click="downloadPdf()"></v-btn> -->
    </v-container>
</template>