<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="4">
                <Avatar size="300" />
            </v-col>
            <v-col cols="12" md="8">
                <Hellow />
            </v-col>
        </v-row>
        <v-row justify="space-around">
            <v-btn href="/Proyectos" variant="text" prepend-icon="mdi-code-block-tags" stacked>Proyectos</v-btn>
            <v-btn href="/CV" variant="text" prepend-icon="mdi-file-document-outline" stacked>CV</v-btn>
            <v-btn href="/Contactame" variant="text" prepend-icon="mdi-human-greeting-proximity" stacked>Contactame</v-btn>
        </v-row>
        <h2 class="text-start">Proyectos</h2>
        <v-row class="pa-4">
            <v-card class="mt-8">
                <v-row>
                    <v-col cols="4">
                        <Avatar size="100" />
                    </v-col>
                    <v-col cols="8" align-self="center">
                        <v-card-title>Raven Gim</v-card-title>
                    </v-col>
                </v-row>
                <v-card-text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum doloribus ducimus facere consequuntur,
                    recusandae maxime aut expedita natus, reprehenderit facilis ipsum dicta? Nisi ipsum impedit eveniet
                    harum ullam provident fugit.
                    Unde voluptatum voluptatibus necessitatibus ipsum a possimus quae blanditiis sunt! Hic, esse voluptatum!
                    Dolorem iusto assumenda veniam temporibus nam provident, quasi fugiat, autem voluptatibus quia commodi,
                    sit quidem reprehenderit praesentium!
                </v-card-text>
            </v-card>
            <v-card class="mt-8">
                <v-row>
                    <v-col cols="4">
                        <Avatar size="100" />
                    </v-col>
                    <v-col cols="8" align-self="center">
                        <v-card-title>Raven Gim</v-card-title>
                    </v-col>
                </v-row>
                <v-card-text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum doloribus ducimus facere consequuntur,
                    recusandae maxime aut expedita natus, reprehenderit facilis ipsum dicta? Nisi ipsum impedit eveniet
                    harum ullam provident fugit.
                    Unde voluptatum voluptatibus necessitatibus ipsum a possimus quae blanditiis sunt! Hic, esse voluptatum!
                    Dolorem iusto assumenda veniam temporibus nam provident, quasi fugiat, autem voluptatibus quia commodi,
                    sit quidem reprehenderit praesentium!
                </v-card-text>
        </v-card>
    </v-row>
    <v-row justify="end">
        <v-btn variant="text">Ver mas</v-btn>
    </v-row>
    <Skills />
    
</v-container></template>