<template>
  <div class="skills">
    <div id="skills-landing">
      <v-container>
        <v-row row wrap>
          <v-col cols="12" sm="12" md="6" lg="6" xl="6">
            <div class="text-center skills-introduce">
              <h1>Skills</h1>
              <div class="skills-introduce-sub">
                Learning is a lifelong journey, with growth fueled by acquiring,
                applying, and refining skills to thrive in a changing world.
              </div>
              <ScrollDownArrow />
            </div>
          </v-col>

          <v-col cols="12" sm="12" md="6" lg="6" xl="6">
            <img
              :src="require('@/assets/images/skills/skills.svg')"
              alt="skills"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="skills-section-white">
      <div id="app">
        <v-app id="inspire">
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
                lg="4"
                xl="4"
                v-for="skillItem in skillsItems"
                :key="skillItem.name"
              >
                <div
                  class="text-center skills-introduce skill-item"
                  v-scrollanimation
                >
                  <skillBox
                    :skillBoxImage="skillItem.imageSrc"
                    :skillBoxName="skillItem.name"
                    :skillDetailTitle="skillItem.name"
                  >
                    <div v-html="skillItem.skillDetailContent"></div>
                  </skillBox>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-app>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollDownArrow from "@/components/scrolldown/scrolldown.vue";
import skillBox from "@/components/skillbox/skillbox.vue";

export default {
  name: "skills",
  components: {
    ScrollDownArrow,
    skillBox,
  },
  data() {
    return {
      skillsItems: [
        {
          name: "Full-Stack Web Development",
          imageSrc: "skills/web.svg",
          skillDetailContent: `
            <h3>
                Full-Stack Development involves building both the front-end (user interface) and back-end (server-side logic) of an application. It requires addressing all aspects of the software, from designing intuitive visual interfaces to managing infrastructure, APIs, databases, and business logic. This holistic approach ensures seamless integration between components, resulting in a functional, scalable, and efficient application.
                <br/><br/>
                The tools and technologies I work with include:
                <br/>
                <ul>
                    <li>
                        Frontend languages -
                        <strong style="color:blue;">HTML</strong>,
                        <strong style="color:blue;">CSS</strong>,
                        <strong style="color:blue;">Javascript</strong>,
                        <strong style="color:blue;">Jquery</strong>
                    </li>

                    <li>
                        Frontend Framework -
                        <strong style="color:blue;">React</strong>,
                        <strong style="color:blue;">Angular</strong>,
                        <strong style="color:blue;">Vue.js</strong>,
                        <strong style="color:blue;">Next.js</strong>,
                    </li>

                    <li>
                        Frontend Design tools -
                        <strong style="color:blue;">Adobe Illustrator</strong>,
                        <strong style="color:blue;">Adobe XD</strong>,
                        <strong style="color:blue;">Adobe Photoshop</strong>
                    </li>

                    <li>
                        Backend languages -
                        <strong style="color:blue;">Python</strong>,
                        <strong style="color:blue;">Scala</strong>,
                        <strong style="color:blue;">C#</strong>
                    </li>

                    <li>
                        Backend Framework -
                        <strong style="color:blue;">Django</strong>,
                        <strong style="color:blue;">Flask</strong>,
                        <strong style="color:blue;">.NET Core</strong>
                    </li>

                    <li>
                        Distributed messaging Systems - 
                        <strong style="color:blue;">Redis</strong>,
                        <strong style="color:blue;">RabbitMQ</strong>,
                        <strong style="color:blue;">Celery</strong>
                    </li>

                    <li>
                        DataBase -
                        <strong style="color:blue;">Oracle</strong>,
                        <strong style="color:blue;">Mongo</strong>,
                        <strong style="color:blue;">Arango</strong>,
                        <strong style="color:blue;">Postgres</strong>
                    </li>

                    <li>
                        Webserver - <strong style="color:blue;">Nginx</strong>
                    </li>

                    <li>
                        WSGI server - <strong style="color:blue;">Gunicorn</strong>
                    </li>

                    <li>
                        Web Hosting - <strong style="color:blue;">AWS</strong>
                    </li>
                </ul>
            </h3>
            `,
        },
        {
          name: "Data Engineering",
          imageSrc: "skills/data.svg",
          skillDetailContent: `
            <h3>
                Data engineering focuses on designing and building the architecture that allows organizations to efficiently collect, process, and analyze data. It ensures data flows smoothly through various systems, supporting data-driven decision-making and optimal system performance.
                <br/><br/>
                The tools and technologies I work with include:
                <br/>
                <ul>
                    <li>
                        Big data tool -
                        <strong style="color:blue;">ELK Stack</strong> (
                        <strong style="color:blue;">Elasticsearch</strong>,
                        <strong style="color:blue;">Kibana</strong>,
                        <strong style="color:blue;">Logstash</strong> )
                    </li>
                    <li>
                        Messaging system - <strong style="color:blue;">Apache Kafka</strong>
                    </li>
                </ul>
            </h3>
            `,
        },
        {
          name: "Firmware Development",
          imageSrc: "skills/firmware.svg",
          skillDetailContent: `
            <h3>
                Firmware is specialized software designed to run on specific hardware, such as microcontrollers and application-specific integrated circuits (ASICs). It provides low-level control for the device, ensuring it performs its intended functions reliably. Firmware development involves programming and optimizing this software to work efficiently within the constraints of the hardware.
                <br/><br/>
                The tools and technologies I work with include:
                <ul>
                    <li>
                        Chips used -
                        <strong style="color:blue;">Microcontroller 8051</strong>,
                        <strong style="color:blue;">iCatch V35</strong>,
                        <strong style="color:blue;">iCatch V50</strong>,
                        <strong style="color:blue;">Ambrella Amba chip</strong>
                    </li>

                    <li>
                        Programming language -
                        <strong style="color:blue;">C</strong>,
                        <strong style="color:blue;">C++</strong>
                    </li>
                </ul>
            </h3>
            `,
        },
        {
          name: "DevOps",
          imageSrc: "skills/devops.svg",
          skillDetailContent: `
            <h3>
               DevOps is a methodology that unites development (Dev) and operations (Ops) teams, leveraging automation tools to streamline workflows and enhance delivery speed and reliability throughout the software lifecycle. It involves the following phases:
                <br/><br/>
                Development (Dev) -
                <br/>
                1. Continuous Development: Plan and code the software.
                <br/>
                2. Continuous Testing: Build and test the software.

                <br/><br/>
                Operations (Ops) -
                <br/>
                1. Continuous Deployment: Release and deploy to production.
                <br/>
                2. Continuous Monitoring: Operate and monitor systems for stability and performance.
                <br/><br/>
                Continuous Integration bridges Dev and Ops by automating code integration and testing.
                <br/><br/>
                The tools and technologies I work with in each phase include:

                <ul>
                    <li>
                        Continuous Development - <strong style="color:blue;">Git  (version control)</strong>
                    </li>
                    <li>
                        Continuous Integration -
                        <strong style="color:blue;">Jenkins</strong>,
                        <strong style="color:blue;">Travis CI</strong>
                    </li>
                    <li>
                        Continuous Deployment -
                        <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;- Virtualization & Containerization -
                            <strong style="color:blue;">Docker</strong>,
                            <strong style="color:blue;">Docker Compose</strong>,
                            <strong style="color:blue;">Kubernetes</strong>,
                            <strong style="color:blue;">Virtual Machine</strong>
                            <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;- Configuration Management - <strong style="color:blue;">Ansible</strong>
                            <br/>
                    </li>
                    <li>
                        Continuous Testing: <strong style="color:blue;">Selenium</strong>
                    </li>
                    <li>
                        Continuous Monitoring - <strong style="color:blue;">Zabbix</strong>
                    </li>
                </ul>
            </h3>
            `,
        },
        {
          name: "Web Scraping",
          imageSrc: "skills/spider.svg",
          skillDetailContent: `
            <h3>
                Web scraping is a technique used to automatically extract large amounts of data from websites. This data is collected and transformed into a structured format, such as CSV or JSON, making it more accessible and useful for analysis.
                <br/><br/>
                The tools and technologies I work with include:
                <ul>
                    <li>
                        Web driver - <strong style="color:blue;">Selenium</strong>
                    </li>
                    <li>
                        HTML parser - <strong style="color:blue;">BeautifulSoup</strong>
                    </li>
                    <li>
                        Programming language - <strong style="color:blue;">Python</strong>
                    </li>
                </ul>
            </h3>
            `,
        },
        {
          name: "Artificial Intelligence",
          imageSrc: "skills/ai.svg",
          skillDetailContent: `
            <h3>
                AI enables machines to mimic human intelligence by understanding language, identifying patterns, and making decisions autonomously. It drives innovations like ChatGPT, autonomous vehicles, and personalized recommendation systems, transforming how we interact with technology and enhancing automation across industries.
                <br/><br/>
                Machine Learning (ML): A core part of AI where systems learn from data to improve over time without explicit programming.
                <br/><br/>
                Deep Learning: A specialized branch of ML using neural networks to process complex data (e.g., text, images) similar to how the human brain works.
                
                <br/><br/>
                Key Learning Approaches:
                <ul>
                    <li>
                        Supervised Learning: Learns from labeled datasets to make predictions.
                    </li>
                    <li>
                        Unsupervised Learning: Discovers hidden patterns in unlabeled data.
                    </li>
                    <li>
                        Semi-supervised Learning: Mixes labeled and unlabeled data for training.
                    </li>
                    <li>
                        Reinforcement Learning: Adapts behavior through feedback to maximize rewards, as seen in AlphaGo or robotics.
                    </li>
                </ul>
                
                <br/><br/>
                The tools and technologies I work with include:
                <ul>
                    <li>
                        Neural network library: <strong style="color:blue;">Keras</strong>
                    </li>
                    <li>
                        Programming language: <strong style="color:blue;">R</strong>
                    </li>
                    <li>
                        Conversational AI: <strong style="color:blue;">ChatGpt</strong>
                    </li>
                    <li>
                        AI Application Framework: <strong style="color:blue;">LangChain</strong>
                    </li>
                    <li>
                        AI orchestration & agents: <strong style="color:blue;">Semantic Kernel + MCP (Model Context Protocol)</strong>
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
.skills-introduce {
  margin: 50px;
  margin-top: 150px;
}

.skills-introduce-sub {
  margin-top: 25px;
  margin-bottom: 25px;
  font-size: 1.5em;
}

.skills-section-white {
  background-color: white;
  padding-bottom: 50px;
}

.skill-item {
  transition: all 0.2s ease-in-out;
}

.skill-item:hover {
  transform: scale(1.15);
  cursor: pointer;
}

.skill-title {
  margin-top: 15px;
}

#skills-landing {
  padding-bottom: 150px;
}
</style>
