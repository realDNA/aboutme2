<template>
  <div class="experience">
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="6" lg="6" xl="6">
          <div class="text-center experience-introduce">
            <h1>Experiences</h1>
            <div class="experience-introduce-sub">
              Taking on challenges, knowing every experience makes me stronger,
              wiser and better prepared for the future.
            </div>
            <ScrollDownArrow />
          </div>
        </v-col>

        <v-col cols="12" sm="12" md="6" lg="6" xl="6">
          <img
            :src="require('@/assets/images/work-experience/workchat.svg')"
            alt="work-experience"
          />
        </v-col>
      </v-row>
    </v-container>

    <v-container class="experience-work-timeline-section">
      <v-row align-center>
        <v-row
          align="center"
          justify="center"
          class="experience-timeline-work-title"
        >
          <h2>Work</h2>
        </v-row>
      </v-row>

      <div class="experience-timeline">
        <v-timeline
          style="
            grid-template-columns: minmax(0, 7fr) minmax(0, 1fr) minmax(0, 7fr);
          "
        >
          <v-timeline-item
            class="mx-auto"
            v-for="item in workExperienceItems"
            :key="item.name + item.jobPosition"
            dot-color="#dbdcff"
          >
            <template v-slot:opposite>
              <div
                :class="`pt-1 headline font-weight-bold`"
                v-text="item.startTime"
              ></div>
            </template>
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
      <v-row align-center>
        <v-row
          align="center"
          justify="center"
          class="experience-timeline-work-title"
        >
          <h2>Education</h2>
        </v-row>
      </v-row>

      <div class="experience-timeline">
        <v-timeline
          reverse
          style="
            grid-template-columns: minmax(0, 7fr) minmax(0, 1fr) minmax(0, 7fr);
          "
        >
          <v-timeline-item
            class="mx-auto"
            v-for="item in educationExperienceItems"
            :key="item.name + item.degree"
            dot-color="#dbdcff"
          >
            <template v-slot:opposite>
              <div
                :class="`pt-1 headline font-weight-bold`"
                v-text="item.startTime"
              ></div>
            </template>
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
  name: "workExperience",
  components: {
    ScrollDownArrow,
    workTimelinebox,
    educationTimelinebox,
  },
  data() {
    return {
      workExperienceItems: [
        {
          name: "Mediatek",
          jobPosition: "Technical Manager",
          imageSrc: "work-experience/mediatek.svg",
          startTime: "2022 May",
          period: "2022 May - Present",
          urlDescription: {
            title: "Mediatek",
            url: "https://www.mediatek.com/",
          },
          detailCardTitle: "Mediatek",
          detailCardContent: `
            <h3>
                <ul>
                    <li>
                        <span style="color: blue;">System Architecture Design</span>: Specialize in microservice architecture using Domain-Driven Design (DDD) and microservice design patterns.
                    </li>
                    <li>
                        <span style="color: blue;">Fullstack Development</span>: Build scalable and highly available microservices with Django, React, Oracle, Redis, Celery, RabbitMQ, Nginx, Gunicorn, and Docker.
                    </li>
                    <li>
                        <span style="color: blue;">DevOps</span>: Automate and streamline deployments using Kubernetes and Jenkins as part of the DevOps strategy.
                    </li>
                    <li>
                        <span style="color: blue;">Application Lifecycle Management (ALM)</span>: Implement ALM processes aligned with the V-Model for automotive projects.
                    </li>
                    <li>
                        <span style="color: blue;">Proof of Concept (PoC) Development</span>: Explore and build PoCs for auto-generating web applications through ChatGPT integration.
                    </li>
                </ul>
            </h3>
            `,
        },
        {
          name: "GARMIN",
          jobPosition: "Lead Developer",
          imageSrc: "work-experience/garmin.svg",
          startTime: "2021 Jan",
          period: "2021 Jan - 2022 Apr",
          urlDescription: {
            title: "GARMIN",
            url: "https://www.garmin.com/en-US/",
          },
          detailCardTitle: "GARMIN",
          detailCardContent: `
            <h3>
                <ul>
                    <li>
                      <span style="color: blue;">Team Leadership</span>: Led a web development team, ensuring smooth project execution and effective cross-functional collaboration.
                    </li>
                    <li>
                        <span style="color: blue;">Industry 4.0 Application Development</span>: Built real-time web applications to monitor and track production-line machine status and performance.
                    </li>
                    <li>
                        <span style="color: blue;">Software Architecture Redesign</span>: Redesigned core software architecture to improve maintainability, scalability, and automated test coverage.
                    </li>
                    <li>
                        <span style="color: blue;">Data Analysis and Integration</span>: Integrated production and business data to deliver actionable insights that support operational and management decisions.
                    </li>
                    <li>
                        <span style="color: blue;">OKR System Implementation</span>: Implemented an OKR management system for a 100-staff department, enhancing transparency, alignment, and process efficiency.
                    </li>
                </ul>
            </h3>
            `,
        },
        {
          name: "ADVANCE.BizQ (Jewel Paymentech)",
          jobPosition: "Software Engineer",
          imageSrc: "work-experience/jewel.svg",
          startTime: "2017 Dec",
          period: "2017 Dec - 2020 Dec",
          urlDescription: {
            title: "ADVANCE.BizQ",
            url: "https://www.jewelpaymentech.com/",
          },
          detailCardTitle: "ADVANCE.BizQ (Jewel Paymentech)",
          detailCardContent: `
            <h3>
                <ul>
                    <li>
                        <span style="color: blue;">Payment Fraud Detection System Development</span>: Developed and enhanced a payment fraud detection system following PCI-DSS and OWASP standards, integrated with CI/CD pipelines, and implemented within a Scrum framework.
                    </li>
                    <li>
                        <span style="color: blue;">Scalable Scoring Engine Implementation</span>: Collaborated with the data engineering lead to design and implement a scalable, pluggable multi-model scoring engine using microservices architecture with Kafka, a multi-model ArangoDB data cluster, and Kubernetes, significantly improving system performance. , with development driven by Test-Driven Development (TDD).
                    </li>
                    <li>
                        <span style="color: blue;">Client Engagement</span>: Partnered with Oceanpayment to gather and translate client requirements into actionable deliverables. Worked closely with NETS to deploy the fraud detection product under strict security conditions, ensuring smooth delivery and operational compliance.
                    </li>
                    <li>
                        <span style="color: blue;">CQRS Architecture Design</span>: Designed and implemented a CQRS architecture by segregating the query model into an Elasticsearch cluster, enhancing query performance.
                    </li>
                    <li>
                        <span style="color: blue;">Fraud Monitoring with Kibana Dashboards</span>: Developed Kibana dashboards to monitor fraudulent transaction trends and trigger alerts in real time.
                    </li>
                    <li>
                        <span style="color: blue;">Solution for Transaction Laundering</span>: Collaborated with three colleagues to design an innovative solution for transaction laundering, which was successfully adopted by the company.
                    </li>
                </ul>
            </h3>
            `,
        },
        {
          name: "Ability",
          jobPosition: "Firmware Engineer",
          imageSrc: "work-experience/camera.svg",
          startTime: "2014 Nov",
          period: "2014 Nov - 2017 Oct",
          urlDescription: {
            title: "Ability",
            url: "http://www.abilitycorp.com.tw/html/index.php",
          },
          detailCardTitle: "Ability",
          detailCardContent: `
            <h3>
                <ul>
                    <li>
                        <span style="color: blue;">Collaboration with Clients</span>: Worked closely with clients such as Nikon and Panasonic to meet the product expectation.
                    </li>
                    <li>
                        <span style="color: blue;">Partnership with Chip Providers</span>: Collaborated with iCatch and Ambarella (AMBA) on middleware improvements.
                    </li>
                    <li>
                        <span style="color: blue;">Product Benchmarking and Specification Design</span>: Benchmarked products against the market and co-designed product specifications with Nikon.
                    </li>
                    <li>
                        <span style="color: blue;">Firmware Architecture and Development</span>: Designed firmware architecture and translated abstract specifications into executable code in C for camera chips.
                    </li>
                    <li>
                        <span style="color: blue;">Image Processing with OpenCV</span>: Developed high-quality image display solutions using OpenCV with C++.
                    </li>
                    <li>
                        <span style="color: blue;">Image and Video Functionality Development</span>: Implemented editing, display, and other media functionalities with a focus on delivering a good user experience (UX).
                    </li>
                    <li>
                        <span style="color: blue;">Algorithm Optimization for UI Performance</span>: Designed efficient algorithms to optimize camera UI operations for speed and performance.
                    </li>
                    <li>
                        <span style="color: blue;">Load Testing and QA Collaboration</span>: Created load testing scripts and worked closely with QA to ensure all camera functionalities passed over 10,000 test cycles.
                    </li>
                    <li>
                        <span style="color: blue;">Advanced Troubleshooting Across Hardware and Firmware</span>: Demonstrated strong debugging skills, resolving rare bugs occurring with a 1 in 10,000 probability across hardware and firmware components.
                    </li>
                </ul>
            </h3>
            `,
        },
        {
          name: "National Cheng Kung University",
          imageSrc: "work-experience/ncku.svg",
          jobPosition: "Intern",
          startTime: "2012 Nov",
          period: "2012 Nov - 2014 Jun",
          urlDescription: {
            title: "NCKU",
            url: "https://web.ncku.edu.tw/",
          },
          detailCardTitle: "National Cheng Kung University",
          detailCardContent: `
            <h3>
                <ul>
                    <li>
                        <span style="color: blue;">Internship at NCKU Library System Management Department</span>: Gained hands-on experience in IT support and system management.
                    </li>
                    <li>
                        <span style="color: blue;">Computer Troubleshooting and Repair</span>: Diagnosed and resolved issues across all malfunctioning computers.
                    </li>
                    <li>
                        <span style="color: blue;">Network Maintenance</span>: Ensured stable internet connectivity throughout the library.
                    </li>
                    <li>
                        <span style="color: blue;">Software Maintenance and Upgrades</span>: Maintained and upgraded essential software on library computers.
                    </li>
                    <li>
                        <span style="color: blue;">OS Installation and Configuration</span>: Installed, reinstalled, and configured operating systems along with necessary software.
                    </li>
                </ul>
            </h3>
            `,
        },
      ],
      educationExperienceItems: [
        {
          name: "National Cheng Kung University",
          imageSrc: "education-experience/nckuee.svg",
          degree: "Master",
          department: "Electrical Engineering",
          startTime: "2012 Sep",
          period: "2012 Sep - 2014 July",
          urlDescription: {
            title: "NCKU EE",
            url: "https://www.ee.ncku.edu.tw/en/",
          },
          detailCardTitle: "National Cheng Kung University",
          detailCardContent: `
            <h3>
                <ul>
                <li> <span style="color: blue;"> Major in Control engineering. </span> </li>
                <li> <span style="color: blue;">Thesis: Optimal Iterative-Learning Control with Disturbances </span> </li>
                &nbsp;&nbsp;&nbsp;&nbsp;- <a href="https://thesis.lib.ncku.edu.tw/thesis/detail/ac2e4d059c3bee45cf1ce35c468fca25/?seq=1" target="_blank"> Thesis abstract </a>
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;- OECILC is implemented to handle steady-state error from known or unknown systems with disturbances.
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;- Designed a prediction-based digital observer to estimate system states and applied OECILC.
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;- Applied Observer/Kalman filter identification to handle unknown systems (black-box systems with only known inputs and outputs).
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;- Performed digital redesign of the controller to enhance performance.
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;- Developed a lower-degree system model using OKID to control higher-degree real systems with OECILC.
                <br/>
                <li> <span style="color: blue;"> The Tool used </span> - Matlab, Simulink. </li>
                </ul>
            </h3>
            `,
        },
        {
          name: "National Cheng Kung University",
          imageSrc: "education-experience/nckues.svg",
          degree: "Bachelor",
          department: "Engineering Science",
          startTime: "2008 Sep",
          period: "2008 Sep - 2012 Jun",
          urlDescription: {
            title: "NCKU ES",
            url: "http://www.es.ncku.edu.tw/esncku/en/",
          },
          detailCardTitle: "National Cheng Kung University",
          detailCardContent: `
            <h3>
                <ul>
                    <li>
                        <span style="color: blue;">Pop Dance Club Cadre – Education Officer</span>: Served as the education officer in a leadership role.
                    </li>
                    <li>
                        <span style="color: blue;">Coordination and Management</span>: Managed affairs for over 300 new members annually, collaborating with 10+ other cadres.
                    </li>
                    <li>
                        <span style="color: blue;">Educational Programs and Teaching</span>: Organized and arranged educational programs, workshops, and dance lessons for members.
                    </li>
                    <li>
                        <span style="color: blue;">Event Planning and Execution</span>: Organized large-scale events, including end-of-semester performances and public dance battles.
                    </li>
                </ul>
            </h3>
            `,
        },
      ],
    };
  },
  methods: {},
  mounted() {},
};
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
  padding: 0px 0px 100px 0px;
}

.experience-timeline-work-title {
  margin-bottom: 5%;
}
</style>
