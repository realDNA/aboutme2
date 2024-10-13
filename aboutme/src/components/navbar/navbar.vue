<template>
  <div class="navBar">
    <v-app-bar
      :class="{ 'navbar-scrolled': isScrolled, 'navbar-hidden': isHidden }"
      :height="isScrolled ? 58 : 130"
      color="#f5f9ff"
      :elevation="isScrolled ? 3 : 0"
      scroll-behavior="hide"
      class="cool-navbar"
    >
      <v-spacer></v-spacer>
      <div id="nav-logo">
        <router-link :to="home">
          <img
            :src="require('@/assets/images/navbar/about-me-logo.svg')"
            alt="about-me-logo"
            id="about-me-logo"
          />
        </router-link>
      </div>
      <div class="nav-item"><router-link :to="aboutMe"> About </router-link></div>
      <div class="nav-item"><router-link :to="workExperience"> Experiences </router-link></div>
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
    offsetTop: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    home: { name: "Home" },
    aboutMe: { name: "AboutMe" },
    workExperience: { name: "Experience" },
    skills: { name: "Skills" },
    projects: { name: "Projects" },
    isScrolled: false,
    isHidden: false,
  }),
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
  },
};
</script>

<style scoped>
/* Cool Navbar Design */
/* Focus/Active state for router-link */
.nav-item a:focus,
.nav-item a:active {
  color: rgb(129, 129, 245); /* Prevent color change on click */
  outline: none; /* Remove the focus outline */
}

/* Nav Bar Container */
.cool-navbar {
  transition: all 0.4s ease-in-out;
  backdrop-filter: blur(10px); /* Blur effect on navbar */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  position: fixed;
  width: 100%;
}

/* Hover Effects for Links */
.nav-item {
  font-size: 1.2em;
  margin-left: 15px;
  padding: 10px;
  padding-right: 20px;
  font-weight: bold;
  color: #333 !important;
  transition: all 0.3s ease-in-out;
  position: relative;
}

/* Animated underline hover effect */
.nav-item:hover::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #8a84fb; /* Your custom color */
  transform: scaleX(1);
  transition: transform 0.3s ease-in-out;
  transform-origin: bottom left;
}

.nav-item::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #afb5fd;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
  transform-origin: bottom left;
}

/* Smooth transition when navbar collapses */
.v-application .v-app-bar.v-app-bar--collapsed {
  height: 70px !important; /* Custom collapsed height */
  transition: all 0.3s ease-in-out;
}

/* Transition the logo size when the navbar collapses */
#nav-logo img {
  height: 50px;
  transition: height 0.3s ease-in-out;
}

.v-application .v-app-bar.v-app-bar--collapsed #nav-logo img {
  height: 35px;
  transition: height 0.3s ease-in-out;
}

/* Smooth fade-in and fade-out for the logo */
#nav-logo img {
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}

.v-application .v-app-bar.v-app-bar--collapsed #nav-logo img {
  opacity: 0.7;
  transition: opacity 0.3s ease-in-out;
}

/* Scroll behavior - makes navbar look like it hovers smoothly */
.cool-navbar.scroll {
  background: rgba(255, 255, 255, 0.9); /* Semi-transparent */
  transition: background 0.3s ease-in-out;
}

/* Logo and Scroll Item Styling */
#about-me-logo {
  height: 50px;
}

.nav-item-scroll {
  font-size: 1.1em;
  margin-left: 5px;
  padding: 5px;
  padding-right: 10px;
  font-weight: bold;
  color: #333 !important;
  transition: all 0.3s ease-in-out;
}

/* Logo Scroll State */
#about-me-logo-scroll {
  height: 40px;
  margin-top: 5px;
  opacity: 0.9;
  transition: opacity 0.3s ease-in-out;
}

#nav-logo {
  margin-right: 15px;
}

a {
  text-decoration: none;
}

.navbar-hidden {
  opacity: 0;
  transform: translateY(-100%);
  transition: all 0.4s ease-in-out;
}

/* When the navbar is scrolled, adjust the height */
.navbar-scrolled {
  transition: all 0.3s ease-in-out;
}

/* Adjust the logo size on scroll */
#nav-logo img {
  height: 50px;
  transition: height 0.3s ease-in-out;
}

.navbar-scrolled #nav-logo img {
  height: 35px;
}
</style>