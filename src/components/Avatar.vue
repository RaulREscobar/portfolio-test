<script setup>
defineProps({
    size: String,
})
</script>

<template>
<v-img aspect-ratio="1/1" :height=size cover src="@/../public/foto-site.jpg"></v-img>
</template>