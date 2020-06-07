<template>
  <v-app style="
    background: #f5f9ff;
  ">
    <NavbarComponent/>

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
    };
  },
  methods: {
  },
};
</script>

<style>

</style>
