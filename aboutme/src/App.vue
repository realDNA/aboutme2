<template>
  <v-app>

    <ParallaxComponent
        height="700"
        src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
    >
        <h1 class="display-1 font-weight-thin mb-4">Vuetify.js</h1>
        <h4 class="subheading">Build your application today!</h4>
    </ParallaxComponent>

    <NavbarComponent v-model="isIntersecting"/>

    <section :class="isIntersecting ? 'content-nav-with-fixed' : 'content-nav-without-fixed'">
        <router-view/>
    </section>

  </v-app>
</template>

<script>
import NavbarComponent from "@/components/navbar/navbar.vue";
import ParallaxComponent from "@/components/parallax/parallax.vue";

export default {
  name: "App",
  components: {
    NavbarComponent,
    ParallaxComponent,
  },
  created () {
  },
  data() {
    return {
      isIntersecting: false,
    };
  },
  methods: {
  },
};
</script>

<style>
.content-nav-without-fixed {
    padding: 130px 0 140px 0;
}

.content-nav-with-fixed {
    padding: 195px 0 140px 0;
}
</style>
