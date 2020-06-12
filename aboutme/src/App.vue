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

</style>
