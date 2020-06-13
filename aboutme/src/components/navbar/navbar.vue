<template>
    <div class="navBar">

        <v-app-bar
            color="#f5f9ff"
            height="160"
            elevation="0"
        >
            <v-spacer></v-spacer>
            <div id="nav-logo">
                <router-link :to="home">
                    <img src="@/assets/images/navbar/about-me-logo.svg" alt="about-me-logo" id="about-me-logo">
                </router-link>
            </div>
            <div class="nav-item"><router-link :to="aboutMe"> About </router-link></div>
            <div class="nav-item"><router-link :to="workExperience"> Experience </router-link></div>
            <div class="nav-item"><router-link :to="skills"> Skills </router-link></div>
            <div class="nav-item last-nav-item"><router-link :to="projects"> Projects </router-link></div>
            <v-spacer></v-spacer>
        </v-app-bar>

        <transition
        name="fade"
        mode="out-in"
        >
            <v-app-bar
                v-if="offsetTop > 150 && !isScrollingDown()"
                fixed
                color="#f5f9ff"
                height="60"
                elevation="5"
            >
                <v-spacer></v-spacer>
                <div class="nav-item"><router-link :to="aboutMe"> About </router-link></div>
                <div class="nav-item"><router-link :to="workExperience"> Experience </router-link></div>
                <div class="nav-item"><router-link :to="skills"> Skills </router-link></div>
                <div class="nav-item"><router-link :to="projects"> Projects </router-link></div>
                <v-spacer></v-spacer>
            </v-app-bar>
        </transition>

    </div>
</template>

<script>
    export default {
        name: "NavbarComponent",
        props: {
            offsetTop: {
                type: Number, required: true
            },
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
            lastOffset: 0,
            scrollingDown: false,
        }),
        methods: {
            isScrollingDown() {
                if(this.offsetTop != this.lastOffset){
                    if(this.offsetTop - this.lastOffset > 0){
                    this.scrollingDown = true;
                    } else {
                        this.scrollingDown = false;
                    }
                    this.lastOffset = this.offsetTop;
                }
                return this.scrollingDown;
            }
        },
    };
</script>

<style scoped>
a {
  text-decoration: none;
  color: grey !important;
}
.nav-item {
    font-size: 1.2em;
    margin-left:5px;
    padding: 5px;
    padding-right: 10px;
    font-weight: bold;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

#nav-logo {
    margin-right:15px;
}
#about-me-logo {
    height: 50px;
}
</style>