<template>
  <div class="about-me" id="scrolling-techniques">
    <div id="about-landing">
      <v-container>
        <v-row row wrap>
          <v-col cols="12" sm="12" md="6" lg="6" xl="6">
            <div class="text-center about-introduce">
              <h1>About</h1>
              <div class="about-introduce-sub">
                I’m a motivated Technical manager and software engineer
                committed to delivering impactful solutions through leadership
                and continuous learning.
              </div>
              <ScrollDownArrow />
            </div>
          </v-col>

          <v-col cols="12" sm="12" md="6" lg="6" xl="6" class="avatar-section">
            <div class="text-center about-image">
              <v-avatar size="300">
                <v-img
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
            <div class="about-introduce-sub">
              <ul>
                <li v-scrollanimation>
                  Master’s degree in Electrical Engineering with a strong
                  academic background and a passion for programming.
                </li>
                <li v-scrollanimation>
                  Over {{ softwareWorkSince }} of experience in software
                  development, project management, and team leadership,
                  delivering high-quality solutions.
                </li>
                <li v-scrollanimation>
                  Skilled in stakeholder communication, committed to providing
                  robust software solutions.
                </li>
                <li v-scrollanimation>
                  A self-taught learner with enthusiasm for acquiring new
                  knowledge and applying it in practice.
                </li>
                <li v-scrollanimation>
                  A self-driven software craftsman focused on clean code and
                  software best practices.
                </li>
                <li v-scrollanimation>
                  Come from Taiwan, a beautiful, democratic, and vibrant place.
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
                <li v-scrollanimation>
                  Managed automotive compliance processes aligned with ISO
                  21434, ISO 26262, and ASPICE.
                </li>
                <li v-scrollanimation>
                  Lead and manage web application team to ensure smooth project
                  execution.
                </li>
                <li v-scrollanimation>
                  Mentor and coach team members to foster growth and a
                  collaborative team culture.
                </li>
                <li v-scrollanimation>
                  Introduce OKR management at the executive level to enhance
                  focus and alignment.
                </li>
                <li v-scrollanimation>
                  Design systems for high stability, availability, and
                  scalability in web applications.
                </li>
                <li v-scrollanimation>
                  Manage mission-critical and time-sensitive projects to ensure
                  successful delivery.
                </li>
                <li v-scrollanimation>
                  Continuously optimize the performance and features of products
                  to meet user expectations.
                </li>
                <li v-scrollanimation>
                  Redesign and restructure legacy systems to enhance scalability
                  and ensure maintainability
                </li>
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
                <li v-scrollanimation>
                  Leverage my skills to drive meaningful change in the world and
                  become a game-changer.
                </li>
                <li v-scrollanimation>
                  Stay curious, stay bold. Embrace lifelong learning as an
                  adventure at every turn.
                </li>
                <li v-scrollanimation>
                  Mistakes are great teachers—embrace failure, get hands-on, and
                  learn as much as possible.
                </li>
                <li v-scrollanimation>
                  Happiness comes from the impact you create and the value you
                  bring to others.
                </li>
                <li v-scrollanimation>
                  Everyone has unique genius when placed in the right
                  environment.
                </li>
              </ul>
            </div>
          </div>
          <v-row justify-end>
            <v-col shrink style="text-align: right">
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
    softwareWorkSince: function () {
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
