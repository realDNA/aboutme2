<template>
<div class="skills">

    <div id="skills-landing">
        <v-container>
          <v-layout row wrap>
            <v-flex xs12 sm12 md6 lg6 xl6>
                <div class="text-center skills-introduce">
                    <h1 > Skills </h1>
                    <div class="skills-introduce-sub">
                        Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu
                    </div>
                    <ScrollDownArrow/>
                </div>
            </v-flex>

            <v-flex xs12 sm12 md6 lg6 xl6>
                <img src="@/assets/images/skills/skills.svg" alt="skills">
            </v-flex>
          </v-layout>
        </v-container>
    </div>

    <div class="skills-section-white" v-scrollanimation>
        <div id="app">
          <v-app id="inspire">
            <v-row justify="center">
                <v-container>
                  <v-layout row wrap>
                    <v-flex xs12 sm6 md4 lg4 xl4
                        v-for="skillItem in skillsItems"
                        :key="skillItem.name">
                        <div class="text-center skills-introduce skill-item">
                            <skillBox
                            :skillBoxImage="skillItem.imageSrc"
                            :skillBoxName="skillItem.name"
                            :skillDetailTitle="skillItem.name"
                            >
                                <div v-html="skillItem.skillDetailContent"></div>
                            </skillBox>
                        </div>
                    </v-flex>
                  </v-layout>
                </v-container>
            </v-row>
          </v-app>
        </div>
    </div>

</div>
</template>

<script>
import ScrollDownArrow from "@/components/scrolldown/scrolldown.vue";
import skillBox from "@/components/skillbox/skillbox.vue";

export default {
  "name": 'skills',
  components: {
    ScrollDownArrow,
    skillBox,
  },
  data() {
    return {
        skillsItems: [
          {
            name: 'Full-Stack Web Development',
            imageSrc: "skills/web.svg",
            skillDetailContent:
            `
            <h3> Let Google help
                apps determine location.
                This means sending anonymous location data to
                 Google, even when no apps are running.
            </h3>
            <hr/>
            <a href="https://www.w3schools.com">Visit W3Schools.com!</a>
            <h2>fdfadsfasd ffa </h2>
            <h2>fdfadsfasd ffa </h2>
            <h2>fdfadsfasd ffa </h2>
            `
          },
          {
            name: 'Data Engineering',
            imageSrc: "skills/data.svg",
            skillDetailContent:
            `
            <h3>
                Data engineering is to develop the architecture that helps analyze and process data
                in the way the organization needs it, and make sure those systems are performing smoothly.
                <br/><br/>
                The tool involved are :
                <br/>
                Big data tool -
                <strong style="color:red;">ELK Stack</strong> (
                <strong style="color:red;">Elasticsearch</strong>,
                <strong style="color:red;">Kibana</strong>,
                <strong style="color:red;">Logstash</strong> )
                <br/>
                Messaging system - <strong style="color:red;">Apache Kafka</strong>
            </h3>
            `
          },
          {
            name: 'Firmware Development',
            imageSrc: "skills/firmware.svg",
            skillDetailContent:
            `
            <h3>
                Firmware literally means a software running inside an application specific chip
                (like microcontroller). So development of such software is firmware development.
                <br/><br/>
                The tool involved are :
                <br/>
                chips used -
                <strong style="color:red;">Microcontroller 8051</strong>,
                <strong style="color:red;">iCatch V35</strong>,
                <strong style="color:red;">iCatch V50</strong>,
                <strong style="color:red;">Ambrella Amba chip</strong>
                <br/>
                Programming language -
                <strong style="color:red;">C</strong>,
                <strong style="color:red;">C++</strong>
            </h3>
            `
          },
          {
            name: 'DevOps',
            imageSrc: "skills/devops.svg",
            skillDetailContent:
            `
            <h3>
                Devops is a software development methodology which improves the collaboration between developers and
                operations team using various automation tool. The process includes :
                <br/><br/>
                Dev -
                <br/>
                1. Continuous Development: Plan, Code
                <br/>
                2. Continuous Testing: Build, Test

                <br/><br/>
                Ops -
                <br/>
                1. Continuous Deployment: Release, Deploy
                <br/>
                2. Continuous Monitoring: Operate, Monitor
                <br/><br/>
                and Continuous Integration sits between Dev and Ops.
                <br/><br/>
                The tools involved for each phases are:
                <br/>
                Continuous Development - <strong style="color:red;">Git</strong>
                <br/>
                Continuous Integration -
                <strong style="color:red;">Jenkins</strong>,
                <strong style="color:red;">Travis</strong>
                <br/>
                Continuous Deployment -
                <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;* Virtualization & Containerization -
                    <strong style="color:red;">Docker</strong>,
                    <strong style="color:red;">Docker Compose</strong>,
                    <strong style="color:red;">Kubernetes</strong>,
                    <strong style="color:red;">Virtual Machine</strong>
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;* Configuration Management - <strong style="color:red;">Ansible</strong>
                    <br/>
                Continuous Monitoring - <strong style="color:red;">Zabbix</strong>
                <br/>
                Continuous Testing: <strong style="color:red;">Selenium</strong>
            </h3>
            `
          },
          {
            name: 'Web Scraping',
            imageSrc: "skills/spider.svg",
            skillDetailContent:
            `
            <h3>
                Web scraping is a technique to automatically access and extract large amounts of information
                from a website. This information is collected and then exported into a format that is more useful for the user.
                <br/><br/>
                The tool involved are :
                <br/>
                Web driver - <strong style="color:red;">Selenium web driver</strong>
                <br/>
                HTML parser - <strong style="color:red;">BeautifulSoup</strong>
                <br/>
                Programming language - <strong style="color:red;">Python</strong>
            </h3>
            `
          },
          {
            name: 'Artificial Intelligence',
            imageSrc: "skills/ai.svg",
            skillDetailContent:
            `
            <h2>fdfafdfads</h2>
            `
          },
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
    padding-bottom:50px;
}

.skill-item {
    transition: all .2s ease-in-out;
}

.skill-item:hover  {
    transform: scale(1.15);
    cursor: pointer;
}

.skill-title {
    margin-top: 15px;
}

#skills-landing {
    padding-bottom:150px;
}
</style>