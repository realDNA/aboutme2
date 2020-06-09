<template>
  <div class="work-experience">

        <v-container>
          <v-layout row wrap>
            <v-flex xs12 sm12 md6 lg6 xl6>
                <div class="text-center work-experience-introduce">
                    <h1 > Work Experience </h1>
                    <div class="work-experience-introduce-sub">
                        Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu
                    </div>
                    <ScrollDownArrow/>
                </div>
            </v-flex>

            <v-flex xs12 sm12 md6 lg6 xl6>
                <img src="@/assets/images/work-experience/workchat.svg" alt="work-experience">
            </v-flex>
          </v-layout>

        </v-container>


        <v-container class="work-experience-timeline-section">
            <div class="work-experience-timeline">
              <v-timeline align-top dense>
                <v-timeline-item
                  v-for="n in 3"
                  :key="n"
                  color="#dbdcff"
                >
                  <span slot="opposite">Tus eu perfecto</span>
                  <section  v-scroll-reveal.reset="{ delay: 600 }">
                      <v-row class="pt-1">
                          <v-col cols="1">
                            <strong> 2017 Apr </strong>
                          </v-col>
                          <v-col>
                            <v-card class="elevation-2">
                                <v-card-title class="headline">Lorem ipsum</v-card-title>
                                <v-card-text>
                                    Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
                                    Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
                                    Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
                                    Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
                                    Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
                                    Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
                                </v-card-text>
                              </v-card>
                          </v-col>
                       </v-row>

                  </section>
                </v-timeline-item>
              </v-timeline>
            </div>
        </v-container>

  </div>
</template>

<script>
import ScrollDownArrow from "@/components/scrolldown/scrolldown.vue";

export default {
  "name": 'workExperience',
  components: {
    ScrollDownArrow,
  },
  data() {
    return {
        closeDialog: false,
    }
  },
  methods: {

  },
  mounted() {

  },
}
</script>

<style scoped>
.work-experience-introduce {
    margin: 50px;
    margin-top: 150px;
}

.work-experience-introduce-sub {
    margin-top: 25px;
    margin-bottom: 25px;
    font-size: 1.5em;
}

.work-experience-timeline-section {
    margin-top: 150px;
}

.work-experience-timeline {
    padding:0px 0px 150px 0px;
}
</style>