<template>
    <v-app
    class="main-background"
    v-scroll="onScroll">
        <NavbarComponent
        :offsetTop="offsetTop"/>

        <v-content>
            <transition
            name="slide-right"
            mode="out-in">
                <router-view />
            </transition>
        </v-content>
    </v-app>
</template>

<script>
import NavbarComponent from "@/components/navbar/navbar.vue";

export default {
  name: "App",
  components: {
    NavbarComponent
  },
  created () {
  },
  data() {
    return {
        offsetTop: 0
    };
  },
  methods: {
    onScroll () {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
    }
  },
};
</script>

<style>
.main-background {
    background: #f5f9ff;
}

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
