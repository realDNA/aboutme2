<template>
<div class="skills">

    <div id="skills-landing">
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

    <div class="skills-section-white">
        <div id="app">
          <v-app id="inspire">
            <v-row justify="center">
                <v-container>
                  <v-layout row wrap>
                    <v-flex xs12 sm6 md4 lg4 xl4
                        v-for="skillItem in skillsItems"
                        :key="skillItem.name">
                        <div class="text-center skills-introduce skill-item">
                            <skillBox
                            :skillBoxImage="skillItem.imageSrc"
                            :skillBoxName="skillItem.name"
                            :skillDetailTitle="skillItem.name"
                            >
                                <div v-html="skillItem.skillDetailContent"></div>
                            </skillBox>
                        </div>
                    </v-flex>
                  </v-layout>
                </v-container>
            </v-row>
          </v-app>
        </div>
    </div>

</div>
</template>

<script>
import ScrollDownArrow from "@/components/scrolldown/scrolldown.vue";
import skillBox from "@/components/skillbox/skillbox.vue";

export default {
  "name": 'skills',
  components: {
    ScrollDownArrow,
    skillBox,
  },
  data() {
    return {
        skillsItems: [
          {
            name: 'Full-Stack Web Development',
            imageSrc: "skills/web.svg",
            skillDetailContent:
            `
            <h3> Let Google help
                apps determine location.
                This means sending anonymous location data to
                 Google, even when no apps are running.
            </h3>
            <hr/>
            <a href="https://www.w3schools.com">Visit W3Schools.com!</a>
            <h2>fdfadsfasd ffa </h2>
            <h2>fdfadsfasd ffa </h2>
            <h2>fdfadsfasd ffa </h2>
            `
          },
          {
            name: 'Data Engineering',
            imageSrc: "skills/data.svg",
            skillDetailContent:
            `
            <h2>fdfafdfads</h2>
            `
          },
          {
            name: 'Firmware Development',
            imageSrc: "skills/firmware.svg",
            skillDetailContent:
            `
            <h3>fdfafdfads</h3>
            `
          },
          {
            name: 'DevOps',
            imageSrc: "skills/devops.svg",
            skillDetailContent:
            `
            <h2>fdfafdfads</h2>
            `
          },
          {
            name: 'Web Scraping',
            imageSrc: "skills/spider.svg",
            skillDetailContent:
            `
            <h2>fdfafdfads</h2>
            `
          },
          {
            name: 'Artificial Intelligence',
            imageSrc: "skills/ai.svg",
            skillDetailContent:
            `
            <h2>fdfafdfads</h2>
            `
          },
        ]
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

.skills-section-white {
    background-color: white;
    padding-bottom:50px;
}

.skill-item {
    transition: all .2s ease-in-out;
}

.skill-item:hover  {
    transform: scale(1.15);
    cursor: pointer;
}

.skill-title {
    margin-top: 15px;
}

#skills-landing {
    padding-bottom:150px;
}
</style>