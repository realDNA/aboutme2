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
                        <span style="color: blue;">Automotive Compliance & ALM</span>: Led a joint MediaTek–NVIDIA automotive project as process digitalization owner, implementing ISO 26262 / ISO 21434 / ASPICE–compliant ALM workflows.
                    </li>
                    <li>
                        <span style="color: blue;">Project management</span>: Managed and developed 5 company-wide web services for task progress and status tracking, improving project visibility and reducing manual operations by 30%.
                    </li>
                    <li>
                        <span style="color: blue;">System Architecture Design</span>: Architected enterprise-scale microservice ecosystems using Domain-Driven Design (DDD) principles, establishing robust design patterns that improved system modularity and reduced deployment complexity.
                    </li>
                    <li>
                        <span style="color: blue;">Fullstack Development</span>: Engineered high-performance applications using Django, React, Oracle, Redis, Celery, RabbitMQ, and Kubernetes, delivering systems that serve company-wide traffic and mission-critical workflows.
                    </li>
                    <li>
                        <span style="color: blue;">AI-Powered Innovation</span>: Developed Semantic Kernel + MCP–based AI assistants that guide users through compliance steps and significantly reduce operation time.
                    </li>
                    <li>
                        <span style="color: blue;">DevOps Excellence</span>: Automated infrastructure using Kubernetes and Jenkins CI/CD pipelines, reducing deployment time from hours to minutes while improving system stability and high availability.
                    </li>
                    <li>
                        <span style="color: blue;">MediaTek vAwards</span>: Honored with vAwards each year from 2022–2025 in recognition of consistently demonstrating the company’s core values.
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
                      <span style="color: blue;">Engineering Leadership</span>: Led a web development team delivering manufacturing monitoring and digital transformation solutions across multiple Garmin product lines (e.g., Forerunner, Venu, fēnix).
                    </li>
                    <li>
                      <span style="color: blue;">Operational Transformation</span>: Drove executive alignment to close a 5-year workflow digitalization adoption gap at one plant, increasing adoption from 20% → 95%.
                    </li>
                    <li>
                      <span style="color: blue;">OKR System Implementation</span>: Led 6 cross-functional teams in adopting an OKR system for a 100-person department, boosting transparency, alignment, and process efficiency.
                    </li>
                    <li>
                        <span style="color: blue;">Software Architecture Transformation</span>: Redesigned a legacy monolith into a microservices architecture, improving maintainability and scalability while achieving over 80% automated test coverage.
                    </li>
                    <li>
                        <span style="color: blue;">Real-time Monitoring Platforms</span>: Built Industry 4.0 applications to track production-line performance, costs, and efficiency, improving overall operational effectiveness.
                    </li>
                    <li>
                        <span style="color: blue;">Data Infrastructure & Analytics</span>: Integrated disparate production and business systems, creating unified dashboards that enabled data-driven decision making for C-level executives.
                    </li>
                </ul>
            </h3>
            `,
        },
        {
          name: "ADVANCE.AI",
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
                        <span style="color: blue;">Scalable Payment Systems</span>: Developed enterprise fraud detection system for banks and payment processors, processing millions of transactions daily and ensuring compliance with PCI-DSS and OWASP security standards.
                    </li>
                    <li>
                        <span style="color: blue;">Distributed Systems Architecture</span>: Architected multi-model scoring engine using Kafka event streaming, ArangoDB clustering, and Kubernetes orchestration, improving fraud detection performance 30% and scalability.
                    </li>
                    <li>
                        <span style="color: blue;">CQRS Implementation</span>: Designed and implemented Command Query Responsibility Segregation architecture with Elasticsearch optimization, reducing database load and improving dashboard query performance by 15 times.
                    </li>
                    <li>
                        <span style="color: blue;">Real-time Monitoring System</span>: Implement fraud detection visualization monitoring using Kibana dashboards, enabling instant detection and alerting for suspicious transaction patterns.
                    </li>
                    <li>
                        <span style="color: blue;">Cross-team Innovation</span>: Co-designed transaction laundering detection solution that achieved company-wide adoption.
                    </li>
                    <li>
                        <span style="color: blue;">Strategic Client Delivery</span>: Partnered with Oceanpayment and NETS to deploy fraud detection system under strict security protocols.
                    </li>
                </ul>
            </h3>
            `,
        },
        {
          name: "Ability",
          jobPosition: "Software Engineer",
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
                        <span style="color: blue;">Embedded Systems Development</span>: Implemented C/C++ firmware and software modules on camera SoCs, improving UI responsiveness through efficient memory use and targeted algorithm optimizations.
                    </li>
                    <li>
                        <span style="color: blue;">Computer Vision Engineering</span>: Built advanced image processing solutions using OpenCV and C++, delivering superior visual quality and effect on camera products.
                    </li>
                    <li>
                        <span style="color: blue;">Quality Assurance Leadership</span>: Established comprehensive testing frameworks ensuring 99.99% reliability across 10,000+ test cycles through collaboration with QA teams.
                    </li>
                    <li>
                        <span style="color: blue;">Complex Problem Solving</span>: Resolved critical system integration issues with 1-in-10,000 occurrence rates, preventing project delays and cost overruns.
                    </li>
                    <li>
                        <span style="color: blue;">Product Strategy Collaboration</span>: Attend market analysis and co-designed specifications with customers(Nikon, Panasonic), influencing multi-million dollar product roadmap decisions.
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
