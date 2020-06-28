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
            <h3>
                Full stack development refers to the development of both front end and back end portions of an application.
                This web development process involves all three layer- Presentation layer(front end part that deals with the user interface),
                Business Logic Layer(back end part that deals with data validation) and the database Layer.
                <br/><br/>
                The tools involved are :
                <br/>
                <ul>
                    <li>
                        Frontend languages -
                        <strong style="color:red;">HTML</strong>,
                        <strong style="color:red;">CSS</strong>,
                        <strong style="color:red;">Javascript</strong>,
                        <strong style="color:red;">Jquery</strong>
                    </li>

                    <li>
                        Frontend Framework -
                        <strong style="color:red;">VueJs</strong>
                    </li>

                    <li>
                        Frontend Design tools -
                        <strong style="color:red;">Adobe Illustrator</strong>,
                        <strong style="color:red;">Adobe XD</strong>,
                        <strong style="color:red;">Adobe Photoshop</strong>
                    </li>

                    <li>
                        Backend languages -
                        <strong style="color:red;">Python</strong>,
                        <strong style="color:red;">Scala</strong>
                    </li>

                    <li>
                        Backend Framework -
                        <strong style="color:red;">Django</strong>,
                        <strong style="color:red;">Flask</strong>
                    </li>

                    <li>
                        DataBase -
                        <strong style="color:red;">Mongo</strong>,
                        <strong style="color:red;">Arango</strong>,
                        <strong style="color:red;">Postgres</strong>
                    </li>

                    <li>
                        Webserver - <strong style="color:red;">Nginx</strong>
                    </li>

                    <li>
                        WSGI server - <strong style="color:red;">Gunicorn</strong>
                    </li>

                    <li>
                        Web Hosting - <strong style="color:red;">AWS</strong>
                    </li>
                </ul>
            </h3>
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
                <ul>
                    <li>
                        Big data tool -
                        <strong style="color:red;">ELK Stack</strong> (
                        <strong style="color:red;">Elasticsearch</strong>,
                        <strong style="color:red;">Kibana</strong>,
                        <strong style="color:red;">Logstash</strong> )
                    </li>
                    <li>
                        Messaging system - <strong style="color:red;">Apache Kafka</strong>
                    </li>
                </ul>
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
                <ul>
                    <li>
                        chips used -
                        <strong style="color:red;">Microcontroller 8051</strong>,
                        <strong style="color:red;">iCatch V35</strong>,
                        <strong style="color:red;">iCatch V50</strong>,
                        <strong style="color:red;">Ambrella Amba chip</strong>
                    </li>

                    <li>
                        Programming language -
                        <strong style="color:red;">C</strong>,
                        <strong style="color:red;">C++</strong>
                    </li>
                </ul>
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

                <ul>
                    <li>
                        Continuous Development - <strong style="color:red;">Git</strong>
                    </li>
                    <li>
                        Continuous Integration -
                        <strong style="color:red;">Jenkins</strong>,
                        <strong style="color:red;">Travis</strong>
                    </li>
                    <li>
                        Continuous Deployment -
                        <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;- Virtualization & Containerization -
                            <strong style="color:red;">Docker</strong>,
                            <strong style="color:red;">Docker Compose</strong>,
                            <strong style="color:red;">Kubernetes</strong>,
                            <strong style="color:red;">Virtual Machine</strong>
                            <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;- Configuration Management - <strong style="color:red;">Ansible</strong>
                            <br/>
                    </li>
                    <li>
                        Continuous Monitoring - <strong style="color:red;">Zabbix</strong>
                    </li>
                    <li>
                        Continuous Testing: <strong style="color:red;">Selenium</strong>
                    </li>
                </ul>
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
                <ul>
                    <li>
                        Web driver - <strong style="color:red;">Selenium web driver</strong>
                    </li>
                    <li>
                        HTML parser - <strong style="color:red;">BeautifulSoup</strong>
                    </li>
                    <li>
                        Programming language - <strong style="color:red;">Python</strong>
                    </li>
                </ul>
            </h3>
            `
          },
          {
            name: 'Artificial Intelligence',
            imageSrc: "skills/ai.svg",
            skillDetailContent:
            `
            <h3>
                Artificial intelligence is a science like mathematics or biology. It studies ways to build intelligent programs and machines that can creatively solve problems.
                <br/>
                People usually heard of Machine learning and Deep learning, what are them?
                <br/>
                Machine learning is a subset of artificial intelligence (AI) that provides systems the ability to automatically learn and improve from experience.
                <br/>
                Deep learning, is a subset of machine learning, which uses the neural networks to analyze different factors with a structure that is similar to the human neural system.
                <br/><br/>
                There are three main types of tasks within Machine learning and Deep learning :
                <ul>
                    <li>
                        Supervised learning - We need to label data, and the process of an algorithm learning from the training dataset.
                    </li>
                    <li>
                        Unsupervised learning - We do not need to label data, and the process of an algorithm learning will work on its own to discover information.
                    </li>
                    <li>
                        Semi-supervised learning - similar to supervised learning, but it only combines a small amount of labeled data with a large amount of unlabeled data during training.
                    </li>
                </ul>
                Moreover, there is also Reinforcement learning which is dynamically learning by adjusting actions based in continuous feedback to maximize a reward. for example: Alpha Go.
                <br/><br/>
                The tool involved is :
                <ul>
                    <li>
                        Neural-network library : <strong style="color:red;">Keras</strong>
                    </li>
                </ul>
            </h3>
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