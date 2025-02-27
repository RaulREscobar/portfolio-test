<script setup>
defineProps({
    title: String,
    srcImage: String
})
</script>
<template>
    <v-img :src= srcImage with="50"></v-img>
    <h2>{{ title }}</h2>
</template>