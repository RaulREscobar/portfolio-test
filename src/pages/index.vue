<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="4">
                <Avatar size="200" />
            </v-col>
            <v-col cols="12" md="8" class="d-flex align-center">
                <Hellow />
            </v-col>
        </v-row>
        <v-row justify="space-around">
            <v-btn href="/Proyectos" variant="text" prepend-icon="mdi-code-block-tags" stacked>Proyectos</v-btn>
            <v-btn href="/CV" variant="text" prepend-icon="mdi-file-document-outline" stacked>CV</v-btn>
            <v-btn href="/Contactame" variant="text" prepend-icon="mdi-human-greeting-proximity"
                stacked>Contactame</v-btn>
        </v-row>
        <!-- <h2 class="text-start mt-6">Proyectos</h2> -->
        <v-row class="pa-4">
            <v-card class="mt-8">
                <v-row class="pa-4">
                    <v-col cols="12" md="4">
                        <v-img src='@/assets/wordpress.png' height="100%"></v-img>
                    </v-col>
                    <v-col cols="12" md="8" align-self="center">
                        <v-card-text>
                            WordPress es un sistema de gestión de contenido (CMS) de código abierto que permite crear y
                            administrar sitios web de forma sencilla. Es la plataforma más popular del mundo, utilizada
                            para blogs, sitios corporativos, tiendas en línea y más.
                            WordPress destaca por su facilidad de uso, su amplia biblioteca de temas y plugins, y su
                            comunidad activa que brinda soporte y actualizaciones constantes.
                        </v-card-text>
                        <v-btn href="/proyectos" text="Mis proyectos wordpress"></v-btn>
                    </v-col>
                </v-row>

            </v-card>
            <v-card class="mt-8">
                <v-row class="pa-4">
                    <v-col cols="12" md="4">
                        <v-img src='@/assets/web.png' height="100%"></v-img>
                    </v-col>
                    <v-col cols="12" md="8" align-self="center">
                        <v-card-text>
                            El desarrollo web a medida es la creación de sitios y aplicaciones web personalizados según
                            las necesidades específicas de un cliente o negocio. A diferencia de los CMS o plataformas
                            prediseñadas, este tipo de desarrollo utiliza tecnologías como HTML, CSS, JavaScript,
                            frameworks frontend (Vue, React, Angular) y backend (Node.js, Django, Laravel, NestJS,
                            etc.), además de bases de datos como MySQL, PostgreSQL o Firebase. Su principal ventaja es
                            la flexibilidad y escalabilidad, permitiendo integrar funcionalidades únicas, optimizar el
                            rendimiento y mejorar la seguridad, adaptándose completamente a los objetivos del proyecto.
                        </v-card-text>
                        <v-btn href="/proyectos" text="Mis proyectos Personalizados"></v-btn>
                    </v-col>
                </v-row>

            </v-card>
        </v-row>
        <v-row justify="end">
            <v-btn variant="text" href="/proyectos">Ver proyectos</v-btn>
        </v-row>
        <!-- <Skills /> -->

    </v-container>
</template>