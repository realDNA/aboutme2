<template>
    <div class="NavBar">

        <v-app-bar
            color="white"
            height="160"
            elevation="0"
        >

            <v-spacer></v-spacer>
            <router-link :to="home">
                <img src="@/assets/navbar/about-me-logo.svg" alt="about-me-logo" id="about-me-logo">
            </router-link>
            <router-link :to="aboutMe"><a> About Me </a></router-link>
            <div> About Me | </div>
            <div> Work Experience | </div>
            <div> Skills | </div>
            <div> Projects | </div>
             <v-spacer></v-spacer>

        </v-app-bar>
    </div>
</template>

<script>
    export default {
        name: "NavbarComponent",
        props: {
        },
        created () {
        },
        beforeDestroy() {
        },
        data: () => ({
            aboutMe: { name: "AboutMe" },
            home: { name: "Home" },
        }),
        methods: {

        },
    };
</script>

<style>
#about-me-logo {
    height: 50px;
}
</style>