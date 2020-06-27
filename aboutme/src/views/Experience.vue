<template>
  <div class="experience">

        <v-container>
          <v-layout row wrap>
            <v-flex xs12 sm12 md6 lg6 xl6>
                <div class="text-center experience-introduce">
                    <h1 > Experience </h1>
                    <div class="experience-introduce-sub">
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


        <v-container class="experience-work-timeline-section">
            <v-layout row wrap align-center>
                <v-row align="center"
                justify="center"
                class="experience-timeline-work-title">
                    <h2> Work </h2>
                </v-row>
            </v-layout>

            <div class="experience-timeline">
              <v-timeline>
                <v-timeline-item
                  v-for="item in workExperienceItems"
                  :key="item.name+item.jobPosition"
                  color="#dbdcff"
                >
                  <span slot="opposite"> {{item.startTime}} </span>
                  <workTimelinebox
                    :timeLineCardTitle="item.name"
                    :timeLineCardImage="item.imageSrc"
                    :timeLineCardJob="item.jobPosition"
                    :timeLineCardPeriod="item.period"
                    :timeLineCardUrlDescription="item.urlDescription"
                    :detailCardTitle="item.detailCardTitle"
                    v-scrollanimation
                  >
                    <div v-html="item.detailCardContent"></div>
                  </workTimelinebox>
                </v-timeline-item>
              </v-timeline>
            </div>
        </v-container>

        <v-container class="experience-education-timeline-section">
            <v-layout row wrap align-center>
                <v-row align="center"
                justify="center"
                class="experience-timeline-work-title">
                    <h2> Education </h2>
                </v-row>
            </v-layout>

            <div class="experience-timeline">
              <v-timeline reverse>
                <v-timeline-item
                  v-for="item in educationExperienceItems"
                  :key="item.name+item.degree"
                  color="#dbdcff"
                >
                  <span slot="opposite"> {{item.startTime}} </span>
                  <educationTimelinebox
                    :timeLineCardTitle="item.name"
                    :timeLineCardImage="item.imageSrc"
                    :timeLineCardDegree="item.degree"
                    :timeLineCardDepartment="item.department"
                    :timeLineCardPeriod="item.period"
                    :timeLineCardUrlDescription="item.urlDescription"
                    :detailCardTitle="item.detailCardTitle"
                    v-scrollanimation
                  >
                    <div v-html="item.detailCardContent"></div>
                  </educationTimelinebox>
                </v-timeline-item>
              </v-timeline>
            </div>
        </v-container>

  </div>
</template>

<script>
import ScrollDownArrow from "@/components/scrolldown/scrolldown.vue";
import workTimelinebox from "@/components/timelinebox/workTimelinebox.vue";
import educationTimelinebox from "@/components/timelinebox/educationTimelinebox.vue";

export default {
  "name": 'workExperience',
  components: {
    ScrollDownArrow,
    workTimelinebox,
    educationTimelinebox
  },
  data() {
    return {
        workExperienceItems: [
          {
            name: 'National Cheng Kung University',
            imageSrc: "work-experience/ncku.svg",
            jobPosition: 'Intern',
            startTime: "2012 Nov",
            period: "2012 Nov - 2014 Jun",
            urlDescription: {
                title: "NCKU",
                url: "https://web.ncku.edu.tw/"
            },
            detailCardTitle: "National Cheng Kung University",
            detailCardContent:
            `
            <h3>
                Lorem ipsum dolor
                sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Dapibus ultrices in iaculis nunc sed augue lacus.
                Quam nulla porttitor massa id neque aliquam.
                Ultrices mi tempus imperdiet nulla malesuada.
                Eros in cursus turpis massa tincidunt dui ut ornare lectus.
                Egestas sed sed risus pretium.
                Lorem dolor sed viverra ipsum.
                Gravida rutrum quisque non tellus.
                Rutrum tellus pellentesque eu tincidunt tortor.
                Sed blandit libero volutpat sed cras ornare.
                Et netus et malesuada fames ac.
                Ultrices eros in cursus turpis massa tincidunt dui ut ornare.
                Lacus sed viverra tellus in.
                Sollicitudin ac orci phasellus egestas.
                Purus in mollis nunc sed.
                Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque.
                Interdum consectetur libero id faucibus nisl tincidunt eget.
            </h3>
            `
          },
          {
            name: 'Ability',
            jobPosition: 'Firmware Engineer',
            imageSrc: "work-experience/camera.svg",
            startTime: "2014 Nov",
            period: "2014 Nov - 2017 Oct",
            urlDescription: {
                title: "Ability",
                url: "http://www.abilitycorp.com.tw/html/index.php"
            },
            detailCardTitle: "Ability",
            detailCardContent:
            `
            <h3>
                Lorem ipsum dolor
                sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Dapibus ultrices in iaculis nunc sed augue lacus.
                Quam nulla porttitor massa id neque aliquam.
                Ultrices mi tempus imperdiet nulla malesuada.
                Eros in cursus turpis massa tincidunt dui ut ornare lectus.
                Egestas sed sed risus pretium.
                Lorem dolor sed viverra ipsum.
                Gravida rutrum quisque non tellus.
                Rutrum tellus pellentesque eu tincidunt tortor.
                Sed blandit libero volutpat sed cras ornare.
                Et netus et malesuada fames ac.
                Ultrices eros in cursus turpis massa tincidunt dui ut ornare.
                Lacus sed viverra tellus in.
                Sollicitudin ac orci phasellus egestas.
                Purus in mollis nunc sed.
                Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque.
                Interdum consectetur libero id faucibus nisl tincidunt eget.
            </h3>
            `
          },
          {
            name: 'Jewel Paymentech',
            jobPosition: 'Software Developer',
            imageSrc: "work-experience/jewel.svg",
            startTime: "2017 Dec",
            period: "2017 Dec - Now",
            urlDescription: {
                title: "Jewel Paymentech",
                url: "https://www.jewelpaymentech.com/"
            },
            detailCardTitle: "Jewel Paymentech",
            detailCardContent:
            `
            <h3>
                Lorem ipsum dolor
                sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Dapibus ultrices in iaculis nunc sed augue lacus.
                Quam nulla porttitor massa id neque aliquam.
                Ultrices mi tempus imperdiet nulla malesuada.
                Eros in cursus turpis massa tincidunt dui ut ornare lectus.
                Egestas sed sed risus pretium.
                Lorem dolor sed viverra ipsum.
                Gravida rutrum quisque non tellus.
                Rutrum tellus pellentesque eu tincidunt tortor.
                Sed blandit libero volutpat sed cras ornare.
                Et netus et malesuada fames ac.
                Ultrices eros in cursus turpis massa tincidunt dui ut ornare.
                Lacus sed viverra tellus in.
                Sollicitudin ac orci phasellus egestas.
                Purus in mollis nunc sed.
                Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque.
                Interdum consectetur libero id faucibus nisl tincidunt eget.
            </h3>
            `
          }
        ],
        educationExperienceItems: [
          {
            name: 'National Cheng Kung University',
            imageSrc: "education-experience/nckues.svg",
            degree: 'Bachelor',
            department: 'Engineering Science',
            startTime: "2008 Sep",
            period: "2008 Sep - 2012 Jun",
            urlDescription: {
                title: "NCKU ES",
                url: "http://www.es.ncku.edu.tw/esncku/en/"
            },
            detailCardTitle: "National Cheng Kung University",
            detailCardContent:
            `
            <h3>
                Lorem ipsum dolor
                sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Dapibus ultrices in iaculis nunc sed augue lacus.
                Quam nulla porttitor massa id neque aliquam.
                Ultrices mi tempus imperdiet nulla malesuada.
                Eros in cursus turpis massa tincidunt dui ut ornare lectus.
                Egestas sed sed risus pretium.
                Lorem dolor sed viverra ipsum.
                Gravida rutrum quisque non tellus.
                Rutrum tellus pellentesque eu tincidunt tortor.
                Sed blandit libero volutpat sed cras ornare.
                Et netus et malesuada fames ac.
                Ultrices eros in cursus turpis massa tincidunt dui ut ornare.
                Lacus sed viverra tellus in.
                Sollicitudin ac orci phasellus egestas.
                Purus in mollis nunc sed.
                Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque.
                Interdum consectetur libero id faucibus nisl tincidunt eget.
            </h3>
            `
          },
          {
            name: 'National Cheng Kung University',
            imageSrc: "education-experience/nckuee.svg",
            degree: 'Master',
            department: 'Electrical Engineering',
            startTime: "2012 Sep",
            period: "2012 Sep - 2014 July",
            urlDescription: {
                title: "NCKU EE",
                url: "https://www.ee.ncku.edu.tw/en/"
            },
            detailCardTitle: "Ability",
            detailCardContent:
            `
            <h3>
                Lorem ipsum dolor
                sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Dapibus ultrices in iaculis nunc sed augue lacus.
                Quam nulla porttitor massa id neque aliquam.
                Ultrices mi tempus imperdiet nulla malesuada.
                Eros in cursus turpis massa tincidunt dui ut ornare lectus.
                Egestas sed sed risus pretium.
                Lorem dolor sed viverra ipsum.
                Gravida rutrum quisque non tellus.
                Rutrum tellus pellentesque eu tincidunt tortor.
                Sed blandit libero volutpat sed cras ornare.
                Et netus et malesuada fames ac.
                Ultrices eros in cursus turpis massa tincidunt dui ut ornare.
                Lacus sed viverra tellus in.
                Sollicitudin ac orci phasellus egestas.
                Purus in mollis nunc sed.
                Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque.
                Interdum consectetur libero id faucibus nisl tincidunt eget.
            </h3>
            `
          }
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
.experience-introduce {
    margin: 50px;
    margin-top: 150px;
}

.experience-introduce-sub {
    margin-top: 25px;
    margin-bottom: 25px;
    font-size: 1.5em;
}

.experience-work-timeline-section {
    margin-top: 150px;
}

.experience-education-timeline-section {
    margin-top: 50px;
}

.experience-timeline {
    padding:0px 0px 100px 0px;
}

.experience-timeline-work-title {
    margin-bottom: 5%;
}

</style>