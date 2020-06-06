<template>
  <div class="home">

    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm12 md6>
            <h1> Aaron Wei </h1>
            <div>
                Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu
            </div>
        </v-flex>

        <v-flex xs12 sm12 md6>
            <img src="@/assets/main/focus.svg" alt="about-me-logo">
        </v-flex>
      </v-layout>
    </v-container>

  </div>

</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {
  },
  created () {
  },
  data() {
    return {
    };
  },
  methods: {
    background() {

    }
  },
};
</script>


<style>

.title::after {
    background-color: #9c9c9c;
    content: "";
    height: 3px;
    width: 36px;
    display: block;
    margin: 28px auto;
}
</style>
