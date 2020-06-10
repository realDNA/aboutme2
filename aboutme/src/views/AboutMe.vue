<template>
<div class="about-me">

    <div id="about-landing">
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

    <div class="about-me-description-section-white">
        <v-container>
            <v-flex xs12 sm12 md12 lg12 xl12>
                <div class="about-introduce">
                    <h1 class="text-center"> Who Am I </h1>
                    <div class="about-introduce-sub">
                        Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu
                        Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu
                        Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu
                        Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu
                        Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu
                        Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu
                    </div>
                </div>
            </v-flex>
        </v-container>
    </div>

    <div class="about-me-description-section-origin">
        <v-container>
            <v-flex xs12 sm12 md12 lg12 xl12>
                <div class="about-introduce">
                    <h1 class="text-center"> What Do I Do </h1>
                    <div class="about-introduce-sub">
                        Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu
                        Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu
                        Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu
                        Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu
                        Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu
                        Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu
                    </div>
                </div>
            </v-flex>
        </v-container>
    </div>

    <div class="about-me-description-section-white about-me-last-description-section">
        <v-container>
            <v-flex xs12 sm12 md12 lg12 xl12>
                <div class="about-introduce">
                    <h1 class="text-center"> Faith Is The Strength </h1>
                    <div class="about-introduce-sub">
                        Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu
                        Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu
                        Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu
                        Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu
                        Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu
                        Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu
                    </div>
                </div>
                <v-layout row wrap justify-end>
                    <v-flex shrink>
                        <img src="@/assets/images/aboutme/book.svg" id="about-book" alt="about-book">
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-container>
    </div>

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

<style scoped>
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

.about-me-description-section-white{
    background-color: white;
    padding-bottom:100px;
}

.about-me-description-section-origin{
    padding-bottom:100px;
}

.about-me-last-description-section {
    padding-bottom:0px;
}

#about-landing {
    padding-bottom:100px;
}

#about-book {
    height:300px;
    margin-top:50px;
}
</style>