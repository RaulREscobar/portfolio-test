<script setup>
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
</template>