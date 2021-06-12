<template>
  <div class="experience">

        <v-container>
          <v-layout row wrap>
            <v-flex xs12 sm12 md6 lg6 xl6>
                <div class="text-center experience-introduce">
                    <h1 > Experiences </h1>
                    <div class="experience-introduce-sub">
                        Keep overcoming challenges and everything I experienced is meant to make me stronger and better.
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
                <ul>
                    <li> Worked as an intern in the NCKU library system management department. </li>
                    <li> Troubleshooting and repaired all malfunction computers. </li>
                    <li> Made sure the internet worked properly across the library.</li>
                    <li> Maintained and upgraded the necessary software on computers. </li>
                    <li> Installed and reinstalled the operating system and necessary software on computers. </li>
                </ul>
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
                <ul>
                    <li> Had considerable close work experience with multinational corporation clients like Nikon, Panasonic to meet client's requirements. </li>
                    <li> Had considerable close work experience with chip providers like iCatch and Ambarella(AMBA) with middleware improvement. </li>
                    <li> Experience of benchmarking product on market and designing specification with Nikon together. </li>
                    <li> Designed firmware architecture and converted abstract specifications into executable code by C language onto camera chips. </li>
                    <li> Image processing by using OpenCV with C++ for a high-quality display of an image. </li>
                    <li> Implemented different functionality for images and videos like edit, display, and so on with good UX. </li>
                    <li> Implemented efficient algorithms to optimize speed for UI operation of cameras. </li>
                    <li> Made load testing scripts and worked closely with QA to make sure every functionality on camera passed over 10k times test. </li>
                    <li> Strong troubleshooting ability to troubleshoot bugs which appeared in 1/10000 possibility across hardware and firmware. </li>
                </ul>
            </h3>
            `
          },
          {
            name: 'Jewel Paymentech',
            jobPosition: 'Software Engineer',
            imageSrc: "work-experience/jewel.svg",
            startTime: "2017 Dec",
            period: "2017 Dec - 2020 Dec",
            urlDescription: {
                title: "Jewel Paymentech",
                url: "https://www.jewelpaymentech.com/"
            },
            detailCardTitle: "Jewel Paymentech",
            detailCardContent:
            `
            <h3>
                <ul>
                    <li> Developed and improved payment fraud detection system by following PCI-DSS and OWASP with CI/CD process and Scrum. </li>
                    <li> Had considerable close work experience with NETS by delivering and deploying the payment fraud detection product at NETS under a severe security environment. </li>
                    <li>
                        Worked closely with data engineer leader and implemented a scalable pluggable multi-model scoring engine for payment fraud detection using microservices with Kafka message broker,
                        multi-model Arangodb data cluster, and kubernetes which improves the overall performance of the system.
                    </li>
                    <li> Had considerable close work experience with Oceanpayment and gather client's requirements. </li>
                    <li> Planed and Conducted of upgrading the production system with no downtime. </li>
                    <li> Designed and Implemented CQRS (Command Query Responsibility Segregation) by segregating the query model to an elasticsearch cluster improving the query performance of the system. </li>
                    <li> Implemented Kibana dashboards for monitoring fraudulent transaction trends and alerts. </li>
                    <li> Provided solution for transaction laundering with 3 colleagues and made the idea adopted by the company. </li>
                </ul>
            </h3>
            `
          },
          {
            name: 'GARMIN',
            jobPosition: 'Software Engineer',
            imageSrc: "work-experience/garmin.svg",
            startTime: "2021 Jan",
            period: "2021 Jan - Present",
            urlDescription: {
                title: "GARMIN",
                url: "https://www.garmin.com/en-US/"
            },
            detailCardTitle: "GARMIN",
            detailCardContent:
            `
            <h3>
                <ul>
                    <li> Developing  industry 4.0 web application which tracking the status of production line machines. </li>
                    <li> Redesigning and improving software architecture to make project more maintainable and testable. </li>
                    <li> Analyzing and integrating data to provide insight for decision makers. </li>
                </ul>
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
                A cadre of Pop Dance Club - Education officer
                <ul>
                    <li> Coordinated and managed affairs for 300+ new members each year with other 10+ cadres. </li>
                    <li> Arranged educational programs and teaching for members. </li>
                    <li> Held large events like the end of the semester performance, public dance battle competitions, and so on. </li>
                </ul>
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
            detailCardTitle: "National Cheng Kung University",
            detailCardContent:
            `
            <h3>
                <ul>
                <li> Major in Control engineering. </li>
                <li> Thesis: Optimal Iterative-Learning Control with Disturbances </li>
                &nbsp;&nbsp;&nbsp;&nbsp;- <a href="http://etds.lib.ncku.edu.tw/etdservice/view_metadata?etdun=U0026-2807201420214000&query_field1=&query_word1=Optimal%20Iterative-Learning%20Control%20with%20Disturbances" target="_blank"> Thesis abstract </a>
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;- OECILC is Implemented to deal with steady-state error from a known or an unknown system with disturbances.
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;- Design a prediction-based digital observer to estimate the states from the system and then apply OECILC.
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;- Apply Observer/Kalman filter identification to deal with unknown systems (a black box system with only known input and output).
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;- Digital redesign to design the controller to improve performance.
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;- Lower degree system model from OKID to control higher degree real system with OECILC.
                <br/>
                <li> The Tool used - Matlab, Simulink. </li>
                </ul>
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