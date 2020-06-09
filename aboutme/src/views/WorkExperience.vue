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
                  <span slot="opposite"> {{item.time}} </span>
                  <timeLineBox
                    :timeLineCardTitle="item.name"
                    :timeLineCardContent="item.jobPosition"
                    :timeLineCardImage="item.imageSrc"
                    detailCardTitle="sdfsfsdfadsf"
                    detailCardContent="dfdsafsdafsadfsdfdsafasdfdsf"
                  />
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
            jobPosition: 'intern',
            time: "2012 Nov",
            imageSrc: "work-experience/ncku.svg"
          },
          {
            name: 'Ability',
            jobPosition: 'Firmware Engineer',
            time: "2014 Nov",
            imageSrc: "ncku.svg"
          },
          {
            name: 'Jewel Paymentech',
            jobPosition: 'Software Developer',
            time: "2017 Dec",
            imageSrc: "ncku.svg"
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