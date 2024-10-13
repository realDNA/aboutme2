<template>
  <v-app style="background: #f5f9ff;" v-scroll="onScroll">
    <NavbarComponent :offsetTop="offsetTop" />
    <v-main>
      <!-- Updated router-view using v-slot -->
      <router-view v-slot="{ Component }">
        <transition name="slide-right" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavbarComponent from "@/components/navbar/navbar.vue";

export default {
  name: "App",
  components: {
    NavbarComponent,
  },
  data() {
    return {
      offsetTop: 0,
    };
  },
  methods: {
    onScroll() {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop;
    },
  },
};
</script>

<style scoped>
a {
    text-decoration: none !important;
}

.main-background {
    background: #f5f9ff;
}

/* Slide-right transition styles for Vue 3 */
.slide-right-enter-active, .slide-right-leave-active {
  transition: all 0.5s ease;
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>



<style>

.slide-right-enter-active {
    transition-duration: 0.5s;
    transition-property: height, opacity, transform;
    transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
    overflow: hidden;
}

.slide-right-leave-active {
    opacity: 0;
    transform: translate(2em, 0);
}

.slide-right-enter {
    opacity: 0;
    transform: translate(-2em, 0);
}

.before-enter {
    opacity: 0;
    transform: translateY(50px);
    transition: all 1s cubic-bezier(.54,-0.11,.57,1.45);
}

.enter {
    opacity: 1;
    transform: translateY(0px);
}
</style>
