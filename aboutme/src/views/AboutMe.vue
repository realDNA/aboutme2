<template>
<div class="about-me">

    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm12 md6 lg6 xl6>
            <div class="text-center about-introduce">
                <h1 > About me </h1>
                <div class="about-introduce-sub">
                    Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu
                </div>
                <ScrollDownArrow/>
            </div>
        </v-flex>

        <v-flex xs12 sm12 md6 lg6 xl6 class="avatar-section">
            <div class="text-center about-image">
                <v-avatar size="300">
                    <img
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                      alt="John"
                    >
                </v-avatar>
            </div>
        </v-flex>
      </v-layout>

    </v-container>

</div>
</template>

<script>
import ScrollDownArrow from "@/components/scrolldown/scrolldown.vue";

export default {
  "name": 'aboutMe',
  components: {
    ScrollDownArrow,
  },
  data() {
    return {
    }
  },
  methods: {

  },
  mounted() {

  },
}
</script>

<style>
.about-introduce {
    margin: 50px;
    margin-top: 150px;
}

.about-image {
    margin: 100px;

}

.avatar-section {
    background-image: url("../assets/images/aboutme/avatar-back.svg");
    background-position: center;
}

.about-introduce-sub {
    margin-top: 25px;
    margin-bottom: 25px;
    font-size: 1.5em;
}

</style>