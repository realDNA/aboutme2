<template>
  <v-app
    style="background: #f5f9ff;"
    v-scroll="onScroll"
  >
    <NavbarComponent
    :offsetTop="offsetTop"
    />

    <v-content>
      <router-view />
    </v-content>

  </v-app>
</template>

<script>
import NavbarComponent from "@/components/navbar/navbar.vue";

export default {
  name: "App",
  components: {
    NavbarComponent,
  },
  created () {
  },
  data() {
    return {
        offsetTop: 0,
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
