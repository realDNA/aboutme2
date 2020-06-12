<template>
    <div class="navBar">
        <v-app-bar
            app
            color="#f5f9ff"
            shrink-on-scroll
            hide-on-scroll
            elevate-on-scroll
            height="160"
            class="nav-padding"
            v-model="showCompleteNavbar"
        >
            <v-spacer></v-spacer>

            <div id="nav-logo">
                <router-link :to="home">
                    <img
                    src="@/assets/images/navbar/about-me-logo.svg"
                    alt="about-me-logo"
                    :class="getNavClassLogo()"
                    />
                </router-link>
            </div>

            <div :class="getNavClassItem()"><router-link :to="aboutMe"> About Me </router-link></div>
            <div :class="getNavClassItem()"><router-link :to="workExperience"> Work Experience </router-link></div>
            <div :class="getNavClassItem()"><router-link :to="skills"> Skills </router-link></div>
            <div :class="getNavClassItemLast()"><router-link :to="projects"> Projects </router-link></div>
            <v-spacer></v-spacer>

        </v-app-bar>
    </div>
</template>

<script>
    export default {
        name: "NavbarComponent",
        props: {
            offsetTop: {
              type: Number,
              required: true
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
            showCompleteNavbar: true,
        }),
        methods: {
            getNavClassLogo() {
                if(this.offsetTop > 10 ) {
                    if(this.showCompleteNavbar) {
                        return "about-me-logo-medium"
                    } else {
                        return "about-me-logo-small"
                    }
                } else {
                    return "about-me-logo"
                }
            },
            getNavClassItem() {
                if(this.offsetTop > 10 ) {
                    if(this.showCompleteNavbar) {
                        return "nav-item-medium"
                    } else {
                        return "nav-item"
                    }
                } else {
                    return "nav-item"
                }
            },
            getNavClassItemLast() {
                if(this.offsetTop > 10 ) {
                    if(this.showCompleteNavbar) {
                        return "nav-item-medium last-nav-item"
                    } else {
                        return "nav-item last-nav-item"
                    }
                } else {
                    return "nav-item last-nav-item"
                }
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
    font-size: 0.75em;
    margin-left:5px;
    margin-top:7px;
    padding: 5px;
    padding-right: 10px;
    border-right: 1px solid #c7c2c2;
}

.nav-item-medium {
    font-size: 0.75em;
    margin-left:5px;
    margin-top:-12px;
    padding: 5px;
    padding-right: 10px;
    border-right: 1px solid #c7c2c2;
}

.last-nav-item {
    border-right: 0;
}

.nav-padding {
    padding:50px;
}

.about-me-logo {
    height: 50px;
}

.about-me-logo-small {
    height: 30px;
    margin-top:8px;
}

.about-me-logo-medium {
    height: 40px;
    margin-top:-70px;
}

.about-me-logo-small,
.about-me-logo-medium,
.about-me-logo,
.nav-item,
.nav-item-medium
{
    transition: all .3s ease-in-out;
}

#nav-logo {
    margin-right:15px;
}
</style>