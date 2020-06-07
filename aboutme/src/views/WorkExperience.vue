<template>
  <div class="work-experience">

    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm12 md6 lg6 xl6>
            <div class="text-center work-experience-introduce">
                <h1 class="work-experience-introduce-title"> Work Experience </h1>
                <div class="work-experience-introduce-sub">
                    Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu
                </div>
            </div>
        </v-flex>

        <v-flex xs12 sm12 md6 lg6 xl6>
            <img src="@/assets/images/work-experience/workchat.svg" alt="about-me-logo">
        </v-flex>
      </v-layout>

    </v-container>
  </div>
</template>

<script>
//import pushIn from '@/assets/vendors/js/pushIn.js'

export default {
  "name": 'workExperience',
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
.work-experience-introduce {
    margin: 100px;
}

.work-experience-introduce-sub {
    margin-top: 25px;
    margin-bottom: 25px;
    font-size: 1.5em;
}
</style>