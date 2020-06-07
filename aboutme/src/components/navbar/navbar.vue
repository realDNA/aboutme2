<template>
    <div class="NavBar">

        <v-app-bar
            color="#f5f9ff"
            height="160"
            elevation="0"
        >
            <v-spacer></v-spacer>

            <div id="nav-logo">
                <router-link :to="home">
                    <img src="@/assets/navbar/about-me-logo.svg" alt="about-me-logo" id="about-me-logo">
                </router-link>
            </div>

            <div class="nav-item"><router-link :to="aboutMe"> About Me </router-link></div>
            <div class="nav-item"><router-link :to="workExperience"> Work Experience </router-link></div>
            <div class="nav-item"><router-link :to="skills"> Skills </router-link></div>
            <div class="nav-item last-nav-item"><router-link :to="projects"> Projects </router-link></div>

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
            home: { name: "Home" },
            aboutMe: { name: "AboutMe" },
            workExperience: { name: "WorkExperience" },
            skills: { name: "Skills" },
            projects: { name: "Projects" },
        }),
        methods: {

        },
    };
</script>

<style>
a {
  text-decoration: none;
  color: grey !important;
}

.nav-item {
    font-size: 1.2em;
    margin-left:5px;
    padding: 5px;
    padding-right: 10px;
    border-right: 1px solid #c7c2c2;
}

.last-nav-item {
    border-right: 0;
}

#nav-logo {
    margin-right:15px;
}

#about-me-logo {
    height: 50px;
}
</style>