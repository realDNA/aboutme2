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
                Full-stack development means building both the front end (what users see) and the back end (server-side logic and data) of an application. I handle the entire stack—from designing intuitive user interfaces to managing infrastructure, APIs, databases, and business logic. Owning the full lifecycle helps me keep all parts well integrated, scalable, and efficient.
                <br/><br/><hr/><br/>
                Tools & Technologies:
                <br/>
                <ul>
                    <li>
                        Frontend languages -
                        <strong style="color:blue;">HTML</strong>,
                        <strong style="color:blue;">CSS</strong>,
                        <strong style="color:blue;">JavaScript</strong>,
                        <strong style="color:blue;">jQuery</strong>
                    </li>

                    <li>
                        Frontend frameworks -
                        <strong style="color:blue;">React</strong>,
                        <strong style="color:blue;">Angular</strong>,
                        <strong style="color:blue;">Vue.js</strong>,
                        <strong style="color:blue;">Next.js</strong>,
                    </li>

                    <li>
                        Design tools -
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
                        Backend frameworks -
                        <strong style="color:blue;">Django</strong>,
                        <strong style="color:blue;">Flask</strong>,
                        <strong style="color:blue;">.NET Core</strong>
                    </li>

                    <li>
                        Messaging & background processing - 
                        <strong style="color:blue;">Redis</strong>,
                        <strong style="color:blue;">RabbitMQ</strong>,
                        <strong style="color:blue;">Celery</strong>
                    </li>

                    <li>
                        Databases -
                        <strong style="color:blue;">Oracle</strong>,
                        <strong style="color:blue;">MongoDB</strong>,
                        <strong style="color:blue;">ArangoDB</strong>,
                        <strong style="color:blue;">PostgreSQL</strong>
                    </li>

                    <li>
                        Web / reverse proxy servers - 
                        <strong style="color:blue;">Nginx</strong>,
                        <strong style="color:blue;">Caddy</strong>,
                        <strong style="color:blue;">OpenResty</strong>
                    </li>

                    <li>
                        Application servers - 
                        <strong style="color:blue;">Gunicorn (WSGI)</strong>,
                        <strong style="color:blue;">Django Channels (ASGI)</strong>
                    </li>

                    <li>
                        Cloud & hosting - <strong style="color:blue;">AWS</strong>
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
                Data engineering means designing and building the data infrastructure that lets organizations reliably collect, move, and transform information at scale. I handle end-to-end data flows—from ingestion and streaming pipelines to storage, indexing, and monitoring—so data stays accurate, traceable, and ready for analysis.
                <br/><br/><hr/><br/>
                Tools & Technologies:
                <br/>
                <ul>
                    <li>
                        Big data / logging -
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
                Firmware development means creating low-level software that runs directly on specific hardware, such as microcontrollers and application-specific integrated circuits (ASICs). I handle things from driver-level code to application logic and performance tuning under tight memory and timing constraints, ensuring devices behave reliably in real-world conditions.
                <br/><br/><hr/><br/>
                Tools & Technologies:
                <br/>
                <ul>
                    <li>
                        Chips -
                        <strong style="color:blue;">Microcontroller 8051</strong>,
                        <strong style="color:blue;">iCatch V35</strong>,
                        <strong style="color:blue;">iCatch V50</strong>,
                        <strong style="color:blue;">Ambrella Amba chips</strong>
                    </li>

                    <li>
                        Programming languages -
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
               DevOps focuses on unifying development (Dev) and operations (Ops) by using automation, CI/CD, and monitoring to streamline workflows and make releases faster and more reliable. I handle the full lifecycle—from version control and continuous integration to deployment and production monitoring—so systems stay stable while shipping changes frequently.
                <br/><br/><hr/><br/>
                Tools & Technologies:
                <br/>
                <ul>
                    <li>
                        Continuous development - <strong style="color:blue;">Git  (version control)</strong>
                    </li>
                    <li>
                        Continuous integration -
                        <strong style="color:blue;">Jenkins</strong>,
                        <strong style="color:blue;">Travis CI</strong>
                    </li>
                    <li>
                        Continuous Deployment:
                        <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;- Virtualization & containerization -
                            <strong style="color:blue;">Docker</strong>,
                            <strong style="color:blue;">Docker Compose</strong>,
                            <strong style="color:blue;">Kubernetes</strong>,
                            <strong style="color:blue;">Virtual Machines</strong>
                            <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;- Configuration management - <strong style="color:blue;">Ansible</strong>
                            <br/>
                    </li>
                    <li>
                        Continuous testing - <strong style="color:blue;">Selenium</strong>
                    </li>
                    <li>
                        Continuous monitoring - <strong style="color:blue;">Zabbix</strong>
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
                Web scraping focuses on automatically extracting data from websites and turning it into structured formats such as CSV or JSON, making it easier to reuse for analysis, automation, or integration with other systems. I also use browser automation for end-to-end testing, ensuring scraped data and web flows behave as expected.
                <br/><br/><hr/><br/>
                Tools & Technologies:
                <br/>
                <ul>
                    <li>
                        Web automation & driver - <strong style="color:blue;">Selenium (for scraping & testing)</strong>
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
                Artificial intelligence (AI) enables machines to approximate human intelligence by understanding language, recognizing patterns, and making decisions autonomously. It powers applications like ChatGPT, autonomous driving, and recommendation systems, transforming how we interact with software and automating complex tasks across industries.
                <br/>
                I apply AI in enterprise environments by integrating LLMs and ML workflows into automotive ALM processes, building assistants that guide users through ISO 26262, ISO 21434, and ASPICE–compliant workflows and significantly reduce manual effort and operation time.
                <br/><br/><hr/><br/>
                Tools & Technologies:
                <br/>
                <ul>
                    <li>
                        Neural network library: <strong style="color:blue;">Keras</strong>
                    </li>
                    <li>
                        Programming language: <strong style="color:blue;">R</strong>
                    </li>
                    <li>
                        Conversational AI & LLM APIs -
                         <strong style="color:blue;">ChatGPT</strong>
                         <strong style="color:blue;">ChatGPT API</strong>
                    </li>
                    <li>
                        AI application framework: <strong style="color:blue;">LangChain</strong>
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
