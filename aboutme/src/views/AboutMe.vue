<template>
<div class="about-me" id="scrolling-techniques">

    <div id="about-landing">
        <v-container>
          <v-layout row wrap>
            <v-flex xs12 sm12 md6 lg6 xl6>
                <div class="text-center about-introduce">
                    <h1 > About </h1>
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

    <div class="about-me-description-section-white" >
        <v-container>
            <v-flex xs12 sm12 md12 lg12 xl12>
                <div class="about-introduce">
                    <h1 class="text-center"> Who Am I </h1>
                    <div class="about-introduce-sub" v-scrollanimation>
                        <ul>
                            <li>Having electrical engineering academy background and like programming.</li>
                            <li>Have been firmware engineer for 3 years and software engineer for {{ softwareWorkSince }}.</li>
                            <li>Enjoy providing robust software and firmware solutions very much.</li>
                            <li>An autodidact. Like to learn new knowledge and put it into practice.</li>
                            <li>Having solid knowledge across hardware, firmware and software.</li>
                            <li>Having master's degree of electrical engineering.</li>
                            <li>Come from Taiwan, a beautiful, democratic and enthusiastic country.</li>
                        </ul>
                    </div>
                </div>
            </v-flex>
        </v-container>
    </div>

    <div class="about-me-description-section-origin">
        <v-container>
            <v-flex xs12 sm12 md12 lg12 xl12>
                <div class="about-introduce">
                    <h1 class="text-center"> What Have I Done </h1>
                    <div class="about-introduce-sub" v-scrollanimation>
                        <ul>
                            <li>Develop on payment fraud detection product and scoring engine to prevent and catch fraud.</li>
                            <li>Develop and collaborate with Nikon / Panasonic on sport / digital cameras.</li>
                            <li>Optimize performance and features for products to improve user experience.</li>
                            <li>Deliver mission-critical and time-critical products.</li>
                            <li>Attend Kaggle AI competition to identify cactus.</li>
                            <li>Self-motivated to learn new technologies and get hands dirty.</li>
                        </ul>
                    </div>
                </div>
            </v-flex>
        </v-container>
    </div>

    <div class="about-me-description-section-white about-me-last-description-section">
        <v-container>
            <v-flex xs12 sm12 md12 lg12 xl12>
                <div class="about-introduce">
                    <h1 class="text-center"> What I Believe </h1>
                    <div class="about-introduce-sub" v-scrollanimation>
                        <ul>
                            <li>Use my ability to contribute to the world and change the game.</li>
                            <li>Stay hungry, stay foolish. Lifetime learning is way important and keep sticking to it.</li>
                            <li>Mistake is always a good teacher. Get hands dirty and try to fail as more as possible.</li>
                            <li>Happiness comes from how much you can impact others, how much value you provide to others.</li>
                            <li>Everyone is a genius if put them into right position.</li>
                        </ul>
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
import moment from 'moment'

export default {
  "name": 'aboutMe',
  components: {
    ScrollDownArrow,
  },
  computed: {
    softwareWorkSince: function () {
        let fromTime = moment("2017-12-15").diff(moment(), "milliseconds")
        let duration = moment.duration(fromTime)
        let timeString = duration.years() / -1 + " years and " + duration.months() / -1 + " months"
        return timeString
    }
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