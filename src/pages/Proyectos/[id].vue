<script setup>
definePageMeta({
    layout: "proyectos"
})
const route = useRoute()
</script>

<template>
    <v-conteiner>
        <h1>
            Proye {{ route.params.id }}
        </h1>
    </v-conteiner>

</template>