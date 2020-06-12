<template>
<div class="projects">

    <div id="projects-landing">
        <v-container>
          <v-layout row wrap>
            <v-flex xs12 sm12 md6 lg6 xl6>
                <div class="text-center projects-introduce">
                    <h1 > Projects </h1>
                    <div class="projects-introduce-sub">
                        Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu
                    </div>
                    <ScrollDownArrow/>
                </div>
            </v-flex>

            <v-flex xs12 sm12 md6 lg6 xl6>
                <img src="@/assets/images/projects/projects.svg" alt="projects">
            </v-flex>
          </v-layout>
        </v-container>
    </div>

    <div class="projects-section-white">
        <div id="app">
          <v-app id="inspire">
            <v-row justify="center">
                <v-container>
                  <v-layout row wrap>
                    <v-flex xs12 sm6 md4 lg4 xl4
                        v-for="projectItem in projectsItems"
                        :key="projectItem.name">
                        <div class="text-center projects-introduce project-item">
                            <projectBox
                            :projectBoxImage="projectItem.imageSrc"
                            :projectBoxName="projectItem.name"
                            :projectDetailTitle="projectItem.name"
                            >
                                <div v-html="projectItem.projectDetailContent"></div>
                            </projectBox>
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
import projectBox from "@/components/projectbox/projectbox.vue";

export default {
  "name": 'projects',
  components: {
    ScrollDownArrow,
    projectBox,
  },
  data() {
    return {
        projectsItems: [
          {
            name: 'FraudWall',
            imageSrc: "projects/fraudwall.svg",
            projectDetailContent:
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
            name: 'Quick Silver',
            imageSrc: "projects/quicksilver.png",
            projectDetailContent:
            `
            <h2>fdfafdfads</h2>
            `
          },
          {
            name: 'OTN Hot News',
            imageSrc: "projects/otnhotnews.png",
            projectDetailContent:
            `
            <h2>fdfafdfads</h2>
            `
          },
          {
            name: 'Cactus Identification',
            imageSrc: "projects/cactus.png",
            projectDetailContent:
            `
            <h2>fdfafdfads</h2>
            `
          },
          {
            name: 'Lumix-FT7',
            imageSrc: "projects/lumix-FT7.png",
            projectDetailContent:
            `
            <h3>fdfafdfads</h3>
            `
          },
          {
            name: 'KeyMission170',
            imageSrc: "projects/keyMission170.png",
            projectDetailContent:
            `
            <h2>fdfafdfads</h2>
            `
          },
          {
            name: 'Lego Robot',
            imageSrc: "projects/lego.png",
            projectDetailContent:
            `
            <h2>fdfafdfads</h2>
            `
          },
          {
            name: 'And More ...',
            imageSrc: "projects/more.svg",
            projectDetailContent:
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
.projects-introduce {
    margin: 50px;
    margin-top: 150px;
}

.projects-introduce-sub {
    margin-top: 25px;
    margin-bottom: 25px;
    font-size: 1.5em;
}

.projects-section-white {
    background-color: white;
    padding-bottom:50px;
}

.project-item {
    transition: all .2s ease-in-out;
}

.project-item:hover  {
    transform: scale(1.15);
    cursor: pointer;
}

.project-title {
    margin-top: 15px;
}

#projects-landing {
    padding-bottom:150px;
}
</style>