<template>
<div class="projects">

    <div id="projects-landing">
        <v-container>
          <v-row row wrap>
            <v-col cols="12" sm="12" md="6" lg="6" xl="6">
                <div class="text-center projects-introduce">
                    <h1 > Projects </h1>
                    <div class="projects-introduce-sub">
                        Keep believing and striving to make things better, positively impact the world, and change the game for the better.
                    </div>
                    <ScrollDownArrow/>
                </div>
            </v-col>

            <v-col cols="12" sm="12" md="6" lg="6" xl="6">
                <img :src="require('@/assets/images/projects/projects.svg')" alt="projects">
            </v-col>
          </v-row>
        </v-container>
    </div>

    <div class="projects-section-white">
        <div id="app">
          <v-app id="inspire">
            <v-row justify="center">
                <v-container>
                  <v-row row wrap>
                    <v-col cols="12" sm="6" md="4" lg="4" xl="4"
                        v-for="projectItem in projectsItems"
                        :key="projectItem.name">
                        <div class="text-center projects-introduce project-item" v-scrollanimation>
                            <projectBox
                            :projectBoxImage="projectItem.imageSrc"
                            :projectBoxName="projectItem.name"
                            :projectDetailTitle="projectItem.name"
                            >
                                <div v-html="projectItem.projectDetailContent"></div>
                            </projectBox>
                        </div>
                    </v-col>
                  </v-row>
                </v-container>
            </v-row>
          </v-app>
        </div>
    </div>

</div>
</template>

<script>
import ScrollDownArrow from "@/components/scrolldown/scrolldown.vue";
import projectBox from "@/components/projectbox/projectbox.vue";

export default {
  "name": 'projects',
  components: {
    ScrollDownArrow,
    projectBox,
  },
  data() {
    return {
        projectsItems: [
        {
            name: 'Smart Factory',
            imageSrc: "projects/smart-factory.jpeg",
            projectDetailContent:
            `
            <h3>
                <ul>
                    <li> Project at GARMIN. </li>
                    <li> A web application that integrates production line data to deliver actionable insights. </li>
                    <li> Built with the .NET framework and C#, using Angular for the frontend. </li>
                    <li> Designed with a microservices architecture running in containers. </li>
                    <li> Microsoft SQL Server used as the database. </li>
                </ul>
            </h3>
            `
          },
          {
            name: 'Fraud Wall',
            imageSrc: "projects/fraudwall.svg",
            projectDetailContent:
            `
            <h3>
                <ul>
                    <li> Product at Jewelpaymentech. </li>
                    <li> A payment fraud detection solution compliant with PCI-DSS and OWASP standards. </li>
                    <li> Built with the Flask Python framework, following PEP8 guidelines. </li>
                    <li> CI/CD pipeline includes Git, Ansible, Jenkins, Travis, SonarQube, and Zabbix. </li>
                    <li> Apache2 used as the web server. </li>
                    <li> MongoDB serves as the NoSQL database. </li>
                    <li> AWS EC2 and S3 provide hosting and storage. </li>
                    <li> Elasticsearch and Kibana implemented with CQRS architecture to power the transaction search engine. </li>
                </ul>
            </h3>
            `
          },
          {
            name: 'Quick Silver',
            imageSrc: "projects/quicksilver.png",
            projectDetailContent:
            `
            <h3>
                <ul>
                    <li> Payment Fraud Detection Scoring Engine compliant with PCI-DSS and OWASP standards. </li>
                    <li> Built with microservices architecture to modularize functionality. </li>
                    <li> Docker for containerization and Kubernetes for orchestration, enhancing application portability and operational efficiency. </li>
                    <li> Developed with Scala following Test-Driven Development (TDD) principles. </li>
                    <li> CI/CD pipeline integrated into the software lifecycle. </li>
                    <li> Kafka and Alpakka for message streaming. </li>
                    <li> AWS ECR, EKS, and MSK used for deployment. </li>
                    <li> ArangoDB serves as the multi-model database. </li>
                </ul>
            </h3>
            `
          },
          {
            name: 'OTN Hot News',
            imageSrc: "projects/otnhotnews.png",
            projectDetailContent:
            `
            <h3>
                <ul>
                    <li> Personal side project - <a href="https://otnhotnews.com/" target="_blank">Website url</a> （now shut down) </li>
                    <li> A social news platform where users could discuss current events and connect with others. </li>
                    <li> Built with the Django Python framework, following PEP8 coding standards. </li>
                    <li> Docker and Docker Compose applied for containerization, improving portability and efficiency. </li>
                    <li> Django Channels and WebSocket enabled real-time messaging. </li>
                    <li> Natural Language Processing (NLP) powered the word cloud feature. </li>
                    <li> Hosted on AWS EC2, with S3 for storage and Route53 for domain management. </li>
                    <li> Nginx and Gunicorn served as the web server. </li>
                    <li> PostgreSQL used as the SQL database. </li>
                    <li> WSGI handled HTTP requests, while ASGI managed real-time messaging. </li>
                    <li> Redis operated as the message broker. </li>
                    <li> Google Analytics tracked website traffic. </li>
                </ul>
            </h3>
            `
          },
          {
            name: 'Lumix-FT7',
            imageSrc: "projects/lumix-FT7.png",
            projectDetailContent:
            `
            <h3>
                <ul>
                    <li>
                        <a href="https://www.panasonic.com/mea/en/consumer/cameras-camcorders/lumix-g-micro-four-thirds-system/cameras/dc-ft7.html" target="_blank">Website url</a> /
                        <a href="https://www.youtube.com/watch?v=5MLdQKI6DSM" target="_blank">Video url</a>
                    </li>
                    <li> Panasonic Product developed by Ability corp (ODM). </li>
                    <li> Programmed in C language on the iCatch V50 chip platform. </li>
                    <li> Collaborated closely with the iCatch chip vendor to optimize integration and performance. </li>
                    <li> Focused on a performance-critical product, implementing advanced algorithms to enhance speed and minimize memory usage. </li>
                    <li> Responsible for all playback functions on the camera and HDMI monitor display. </li>
                    <li> Manipulated image and video data to enable features like display, editing, and playback, ensuring full camera functionality. </li>
                    <li> Conducted load testing and applied extensive troubleshooting techniques to meet strict quality assurance standards. </li>
                </ul>
            </h3>
            `
          },
          {
            name: 'KeyMission170',
            imageSrc: "projects/keyMission170.png",
            projectDetailContent:
            `
            <h3>
                <ul>
                    <li>
                        <a href="https://www.nikon-image.com/products/action/lineup/170/" target="_blank">Website url</a> /
                        <a href="https://www.youtube.com/watch?v=sbGPTOa6USI" target="_blank">Video url</a>
                    </li>
                    <li> Nikon Product developed by Ability corp (ODM). </li>
                    <li> Programmed in C language on the Ambarella Amba chip. </li>
                    <li> Collaborated closely with the Amba chip vendor to ensure seamless integration and performance optimization. </li>
                    <li> Designed and discussed product specifications directly with Nikon. </li>
                    <li> Developed a performance-critical product, implementing advanced algorithms to enhance speed and memory efficiency. </li>
                    <li> Managed all playback functions on the camera and HDMI monitor display. </li>
                    <li> Manipulated image and video data to support features like display, editing, and playback, ensuring comprehensive camera functionality. </li>
                    <li> Conducted load testing and applied extensive troubleshooting to meet Nikon’s stringent quality assurance standards. </li>
                </ul>
            </h3>
            `
          },
          {
            name: 'Cactus Identification',
            imageSrc: "projects/cactus.png",
            projectDetailContent:
            `
            <h3>
                <ul>
                <li> <a href="https://www.kaggle.com/c/aerial-cactus-identification/" target="_blank"> A competition on Kaggle </a> </li>
                <li> Neural network with kekas was used. </li>
                <li> Achieved an accuracy of 99.98%. </li>
                <li> Ranked 480th out of 1,225 teams. </li>
                </ul>
            </h3>
            `
          },
          {
            name: 'Lego Robot',
            imageSrc: "projects/lego.png",
            projectDetailContent:
            `
            <h3>
                <ul>
                    <li> <a href="https://www.youtube.com/watch?v=H1ym5zC1lZQ" target="_blank">Video url</a> </li>
                    <li> A combat Lego robot project at university. </li>
                    <li> Developed using a paid SDK provided by the university. </li>
                    <li> Controlled sound sensors, vision sensors, and the robot’s logical operations. </li>
                    <li> Focused on integrating multiple inputs to achieve responsive and intelligent behavior. </li>
                </ul>
            </h3>
            `
          },
          {
            name: 'And More ...',
            imageSrc: "projects/more.svg",
            projectDetailContent:
            `
            <h3>
                <ul>
                    <li> <a href="https://dna-31494.herokuapp.com/" target="_blank">NodeJs practice</a> </li>
                    <li>
                        web Scraper:
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;- <a href="https://github.com/realDNA/stockFilter" target="_blank">Filter Taiwan stocks which have robust financial basis</a>
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;- <a href="https://github.com/realDNA/webScrawler/blob/master/scootscrawler.py" target="_blank">Filter cheaper scoot flight ticket for one way or round trip</a>
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;- <a href="https://github.com/realDNA/webScrawler/blob/master/catchPTTtitle_driver.py" target="_blank">Find news and pretty girls images then share to friends</a>
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;- <a href="https://github.com/realDNA/webScrawler/blob/master/weatherscrawler.py" target="_blank">Get Taiwan weather information</a>
                    </li>
                    <li> <a href="https://github.com/realWHY/Java_Practice" target="_blank">Java practive</a> </li>
                    <li> <a href="https://github.com/realWHY/Android-practice" target="_blank">Android practice</a> </li>
                    <li> <a href="https://github.com/realWHY/Machine-learning" target="_blank">Machine learning practice</a> </li>
                    <li> <a href="https://github.com/realWHY/Deep_learning" target="_blank">Deep learning practice</a> </li>
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
.projects-introduce {
    margin: 50px;
    margin-top: 150px;
}

.projects-introduce-sub {
    margin-top: 25px;
    margin-bottom: 25px;
    font-size: 1.5em;
}

.projects-section-white {
    background-color: white;
    padding-bottom:50px;
}

.project-item {
    transition: all .2s ease-in-out;
}

.project-item:hover  {
    transform: scale(1.15);
    cursor: pointer;
}

.project-title {
    margin-top: 15px;
}

#projects-landing {
    padding-bottom:150px;
}
</style>
