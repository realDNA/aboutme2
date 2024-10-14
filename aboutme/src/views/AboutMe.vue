<template>
  <div class="about-me" id="scrolling-techniques">
    <div id="about-landing">
      <v-container>
        <v-row row wrap>
          <v-col cols="12" sm="12" md="6" lg="6" xl="6">
            <div class="text-center about-introduce">
              <h1>About</h1>
              <div class="about-introduce-sub">
                I am from Taiwan and like to explore the world. My knowledge is
                across hardware, firmware, and software in the area of IT.
              </div>
              <ScrollDownArrow />
            </div>
          </v-col>

          <v-col cols="12" sm="12" md="6" lg="6" xl="6" class="avatar-section">
            <div class="text-center about-image">
              <v-avatar size="300">
                <img
                  :src="require('@/assets/images/aboutme/avatar.jpg')"
                  alt="avatar"
                />
              </v-avatar>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="about-me-description-section-white">
      <v-container>
        <v-col cols="12" sm="12" md="12" lg="12" xl="12">
          <div class="about-introduce">
            <h1 class="text-center">Who Am I</h1>
            <div class="about-introduce-sub" v-scrollanimation>
              <ul>
                <li>
                  Master’s degree in Electrical Engineering with a strong
                  academic background and a passion for programming.
                </li>
                <li>
                  Over {{ softwareWorkSince }} of experience in software
                  development, project management, and team leadership,
                  delivering high-quality solutions.
                </li>
                <li>
                  Skilled in stakeholder communication, committed to providing
                  robust software solutions.
                </li>
                <li>
                  A self-taught learner with enthusiasm for acquiring new
                  knowledge and applying it in practice.
                </li>
                <li>
                  A self-driven software craftsman focused on clean code and
                  software best practices.
                </li>
                <li>
                  Come from Taiwan, a beautiful, democratic, and vibrant
                  country.
                </li>
              </ul>
            </div>
          </div>
        </v-col>
      </v-container>
    </div>

    <div class="about-me-description-section-origin">
      <v-container>
        <v-col cols="12" sm="12" md="12" lg="12" xl="12">
          <div class="about-introduce">
            <h1 class="text-center">What Have I Done</h1>
            <div class="about-introduce-sub" v-scrollanimation>
              <ul>
                <li>
                  Developing on payment fraud detection product and scoring
                  engine to prevent and catch fraud.
                </li>
                <li>
                  Developed and collaborated with Nikon / Panasonic on sport /
                  digital cameras.
                </li>
                <li>
                  Keep optimizing performance and features of products to
                  improve user experience.
                </li>
                <li>
                  Delivered several mission-critical and time-critical products.
                </li>
                <li>Team management as a team leader.</li>
              </ul>
            </div>
          </div>
        </v-col>
      </v-container>
    </div>

    <div
      class="about-me-description-section-white about-me-last-description-section"
    >
      <v-container>
        <v-col cols="12" sm="12" md="12" lg="12" xl="12">
          <div class="about-introduce">
            <h1 class="text-center">What I Believe</h1>
            <div class="about-introduce-sub" v-scrollanimation>
              <ul>
                <li>
                  Leverage my skills to drive meaningful change in the world and
                  become a game-changer.
                </li>
                <li>
                  Stay curious, stay bold. Embrace lifelong learning as an
                  adventure at every turn.
                </li>
                <li>
                  Mistakes are great teachers—embrace failure, get hands-on, and
                  learn as much as possible.
                </li>
                <li>
                  Happiness comes from the impact you create and the value you
                  bring to others.
                </li>
                <li>
                  Everyone has unique genius when placed in the right
                  environment.
                </li>
              </ul>
            </div>
          </div>
          <v-row justify-end>
            <v-col shrink style="text-align: right;">
              <img
                :src="require('@/assets/images/aboutme/book.svg')"
                id="about-book"
                alt="about-book"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-container>
    </div>
  </div>
</template>

<script>
import ScrollDownArrow from "@/components/scrolldown/scrolldown.vue";
import moment from "moment";

export default {
  name: "aboutMe",
  components: {
    ScrollDownArrow,
  },
  computed: {
    softwareWorkSince: function() {
      let fromTime = moment("2014-11-01").diff(moment(), "milliseconds");
      let duration = moment.duration(fromTime);
      //   let timeString =
      //     duration.years() / -1 + " years " + duration.months() / -1 + " months";
      let timeString = duration.years() / -1 + " years ";
      return timeString;
    },
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
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

.about-me-description-section-white {
  background-color: white;
  padding-bottom: 100px;
}

.about-me-description-section-origin {
  padding-bottom: 100px;
}

.about-me-last-description-section {
  padding-bottom: 0px;
}

#about-landing {
  padding-bottom: 100px;
}

#about-book {
  height: 300px;
  margin-top: 50px;
}
</style>
