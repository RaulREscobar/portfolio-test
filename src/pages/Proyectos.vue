<script setup>
import { ref } from 'vue';
import imgChongazen from '@/assets/chongazen.png';
import imgAtym from '@/assets/atym.jpg';
import imgPaula from '@/assets/paula.png';
import imgDeLaLuz from '@/assets/delaluz.jpg';
import imgNaranjos from '@/assets/naranjos.jpg';
import imgRamallo from '@/assets/ramallo.jpg';
import imgCc from '@/assets/cc.png';
import imgGs from '@/assets/gs.jpg';



definePageMeta({
    layout: "proyectos"
})
const route = useRoute()
const show = ref(false)

const proyects = [
    {
        name: "ChongaZen",
        category: "Sitio web Wordpress",
        description: "ChongaZen es un espacio de autoconocimiento y encuentro interior dirigido por Mecha Garrido. A través de consultas personalizadas como cartas astrales, revoluciones solares y tarot astrológico, busca brindar a sus clientes herramientas para comprender y sanar aspectos de sus vidas",
        colorBtn: "orange-lighten-2",
        url: "https://chongazen.com",
        img: imgChongazen,
    },
    {
        name: "Lamparas DeLaLuz",
        category: "Sitio web Wordpress",
        description: "El sitio web lamparasdelaluz.com es una tienda online de iluminación artesanal. Se especializa en la venta de lámparas de diseño, ofreciendo una variedad de productos como lámparas colgantes, de pie, de mesa y apliques para interiores y exteriores.",
        colorBtn: "brown-lighten-2",
        url: "https://lamparasdelaluz.com",
        img: imgDeLaLuz,
    },
    {
        name: "Paula Aranoa",
        category: "Sitio web Wordpress",
        description: "El sitio web paulaaranoa.com es un portafolio fotográfico donde la artista Paula Aranoa exhibe su trabajo visual. Presenta diversas series de fotografía artística, explorando temas como la introspección, lo cotidiano, la arquitectura y el paisaje.",
        colorBtn: "",
        url: "https://paulaaranoa.com",
        img: imgPaula,
    },
    {
        name: "Atym",
        category: "Sitio web Wordpress",
        description: "Atym.online es un estudio de diseño gráfico que se especializa en la creación de identidades visuales, marcas e historias. Ofrecen servicios de diseño de branding y consultorías personales, acompañando a sus clientes en el desarrollo de su mejor versión gráfica.",
        colorBtn: "light-blue-lighten-2",
        url: "https://atym.online",
        img: imgAtym,
    },
    {
        name: "Fundación los Naranjos",
        category: "Sitio web Wordpress",
        description: "El sitio web fundacionlosnaranjos.org es un sitio institucional y de impacto social. Representa a una organización sin fines de lucro que brinda formación y oportunidades laborales a jóvenes en situación de vulnerabilidad a través del trabajo con cerámica.",
        colorBtn: "orange-lighten-2",
        url: "https://fundacionlosnaranjos.org/",
        img: imgNaranjos,
    },
    {
        name: "Ramallo Informa",
        category: "Sitio web Wordpress",
        description: "El sitio web ramalloinforma.com.ar es un portal de noticias local que se centra en proporcionar información actualizada sobre diversos aspectos de la ciudad de Ramallo y sus alrededores. Cubre una amplia gama de secciones.",
        colorBtn: "red-lighten-2",
        url: "https://ramalloinforma.com.ar/",
        img: imgRamallo,
    },
    {
        name: "Carolina Calderon",
        category: "Sitio web Wordpress",
        description: "El sitio web carolina-calderon.com es una plataforma profesional dedicada a la asesoría de imagen personal. Ofrece servicios personalizados, tanto presenciales como en línea, orientados a ayudar a individuos a descubrir y potenciar su estilo personal.",
        colorBtn: "brown-lighten-2",
        url: "https://carolina-calderon.com/",
        img: imgCc,
    },
    {
        name: "Gran Sabana",
        category: "SPA personalizada",
        description: "El sitio web gransabanaremesas.web.app es una plataforma que ofrece servicios de envío de remesas. Esta orientado a facilitar transferencias de dinero, posiblemente enfocándose en la comunidad venezolana.",
        colorBtn: "yellow-lighten-2",
        url: "https://gransabanaremesas.web.app/",
        img: imgGs,
    },
]
</script> 

<template>
    <v-conteiner>
        <h1 class="text-center">
            Aquí puedes ver mis proyectos
        </h1>

        <v-row class="mt-2">
            <v-card v-for="item of proyects" :key=item.name class="mx-auto ma-6" max-width="344" width="250px">
            <v-img height="200px" :src=item.img cover ></v-img>

            <v-card-title>
                {{ item.name }}
            </v-card-title>

            <v-card-subtitle>
                {{ item.category }}
            </v-card-subtitle>

            <v-card-actions>
                <v-btn :href=item.url target="_blank" :color=item.colorBtn text="Ir al sitio"></v-btn>

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
        </v-row>
      
    </v-conteiner>

</template>








<!-- <script setup>
definePageMeta({
    layout: "proyectos"
})

const proyects = [
    {
        title: "Wordpress",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum doloribus ducimus facere consequuntur,            recusandae maxime aut expedita natus, reprehenderit facilis ipsum dicta? Nisi ipsum impedit eveniet harum ullam provident fugit. Unde voluptatum voluptatibus necessitatibus ipsum a possimus quae blanditiis sunt! Hic, esse voluptatum! Dolorem iusto assumenda veniam temporibus nam provident, quasi fugiat, autem voluptatibus quia commodi, sit quidem reprehenderit praesentium!"
    },
    {
        title: "APIs",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum doloribus ducimus facere consequuntur,            recusandae maxime aut expedita natus, reprehenderit facilis ipsum dicta? Nisi ipsum impedit eveniet harum ullam provident fugit. Unde voluptatum voluptatibus necessitatibus ipsum a possimus quae blanditiis sunt! Hic, esse voluptatum! Dolorem iusto assumenda veniam temporibus nam provident, quasi fugiat, autem voluptatibus quia commodi, sit quidem reprehenderit praesentium!"
    },
    {
        title: "Personalizados",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum doloribus ducimus facere consequuntur,            recusandae maxime aut expedita natus, reprehenderit facilis ipsum dicta? Nisi ipsum impedit eveniet harum ullam provident fugit. Unde voluptatum voluptatibus necessitatibus ipsum a possimus quae blanditiis sunt! Hic, esse voluptatum! Dolorem iusto assumenda veniam temporibus nam provident, quasi fugiat, autem voluptatibus quia commodi, sit quidem reprehenderit praesentium!"
    },
]

</script>
<template>
    <h1>Proyectos</h1>

    <v-card v-for="item in proyects" :key="item.title" class="mt-8 pa-4">
        <v-row>
            <v-col cols="4">
                <Avatar size="100" />
            </v-col>
            <v-col cols="8" align-self="center">
                <v-card-title> {{ item.title }} </v-card-title>
            </v-col>
        </v-row>
        <v-card-text>
            {{ item.text }}
        </v-card-text>
    </v-card>
</template> -->