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
              <v-timeline>
                <v-timeline-item
                  v-for="item in workExperienceItems"
                  :key="item.name"
                  color="#dbdcff"
                >
                  <span slot="opposite"> {{item.startTime}} </span>
                  <timeLineBox
                    :timeLineCardTitle="item.name"
                    :timeLineCardImage="item.imageSrc"
                    :timeLineCardJob="item.jobPosition"
                    :timeLineCardPeriod="item.period"
                    :timeLineCardUrlDescription="item.urlDescription"
                    :detailCardTitle="item.detailCardTitle"
                  >
                    <div v-html="item.detailCardContent"></div>
                  </timeLineBox>
                </v-timeline-item>
              </v-timeline>
            </div>
        </v-container>

  </div>
</template>

<script>
import ScrollDownArrow from "@/components/scrolldown/scrolldown.vue";
import timeLineBox from "@/components/timelinebox/timelinebox.vue";

export default {
  "name": 'workExperience',
  components: {
    ScrollDownArrow,
    timeLineBox,
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