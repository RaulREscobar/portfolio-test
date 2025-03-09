<script setup>
import { ref } from 'vue'

definePageMeta({
    layout: "proyectos"
})
const route = useRoute()
const show = ref(false)

const proyects = [
    {
        name: "ChongaZen",
        category:"Sitio web Wordpress",
        description:"ChongaZen es un espacio de autoconocimiento y encuentro interior dirigido por Mecha Garrido, que ofrece servicios de astrología y tarot en Madrid, España. A través de consultas personalizadas como cartas astrales, revoluciones solares y tarot astrológico, busca brindar a sus clientes herramientas para comprender y sanar aspectos de sus vidas",
        colorBtn: "orange-lighten-2",
        url:"https://chongazen.com",
        img:""
    }
]
</script>

<template>
    <v-conteiner>
        <h1 class="text-center">
            Mis sitios realizados en
            {{ route.params.id }}
        </h1>
        <v-card v-for="item of proyects" :key=item.name class="mx-auto" max-width="344">
            <v-img height="200px" src="@../../../public/foto-site.jpg" cover></v-img>

            <v-card-title>
                {{ item.name }}
            </v-card-title>

            <v-card-subtitle>
                {{ item.category }}
            </v-card-subtitle>

            <v-card-actions>
                <v-btn :href=item.url  target="_blank" :color=item.colorBtn text="Ir al sitio"></v-btn>

                <v-spacer></v-spacer>

                <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
            </v-card-actions>

            <v-expand-transition>
                <div v-show="show">
                    <v-divider></v-divider>

                    <v-card-text>
                        {{ item.description }}
                    </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>
    </v-conteiner>

</template>