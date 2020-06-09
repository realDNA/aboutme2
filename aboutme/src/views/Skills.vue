<template>
<div class="skills">

    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm12 md6 lg6 xl6>
            <div class="text-center skills-introduce">
                <h1 > Skills </h1>
                <div class="skills-introduce-sub">
                    Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu
                </div>
                <ScrollDownArrow/>
            </div>
        </v-flex>

        <v-flex xs12 sm12 md6 lg6 xl6>
            <img src="@/assets/images/skills/skills.svg" alt="skills">
        </v-flex>
      </v-layout>

    </v-container>

</div>
</template>

<script>
import ScrollDownArrow from "@/components/scrolldown/scrolldown.vue";

export default {
  "name": 'skills',
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
.skills-introduce {
    margin: 50px;
    margin-top: 150px;
}

.skills-introduce-sub {
    margin-top: 25px;
    margin-bottom: 25px;
    font-size: 1.5em;
}
</style>