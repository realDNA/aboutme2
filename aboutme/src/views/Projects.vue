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
                    <li> Project in GARMIN. </li>
                    <li> Web application for integrating data from production lines to provide insight. </li>
                    <li> Developed by .NET framework and C# language with Angular frontend framework. </li>
                    <li> Micorservices architecture with Containers </li>
                    <li> Microsoft SQL Server as SQL database. </li>
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
                    <li> Product in Jewelpaymentech. </li>
                    <li> Payment fraud detection product follows PCI-DSS and OWASP. </li>
                    <li> Developed by flask python framework and python language following pep8. </li>
                    <li> CI/CD (Git, Ansible, Jenkins, Travis, Sonarqube, Zabbix) for the software development lifecycle. </li>
                    <li> Apache2 as the webserver. </li>
                    <li> MongoDB as NoSQL database. </li>
                    <li> AWS EC2 and S3 for web hosting. </li>
                    <li> Elasticsearch and Kibana are implemented with CQRS as a search engine for transactions. </li>
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
                    <li> The payment fraud detection scoring engine follows PCI-DSS and OWASP. </li>
                    <li> Microservices structure to separate different functionality. </li>
                    <li> Application container technology is applied by using Docker and Kubernetes to make microservices more portable and efficient. </li>
                    <li> Developed by scala language with TDD (test-driven development). </li>
                    <li> CI/CD for the software development lifecycle. </li>
                    <li> Kafka and Alpakka for message streaming. </li>
                    <li> AWS ECR, EKS, and MSK for Deployment. </li>
                    <li> Arango as multi-model database. </li>
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
                    <li> <a href="https://otnhotnews.com/" target="_blank">Website url</a> （Shut down already) </li>
                    <li> Personal side project. </li>
                    <li> News combines social media web application that people can discuss news and make friends. </li>
                    <li> Developed by Django python framework and python language following pep8. </li>
                    <li> Application container technology is applied by using docker and docker-compose to make application more portable and efficient. </li>
                    <li> Django-channel and WebSocket for the messaging system. </li>
                    <li> Natural language processing for the word cloud. </li>
                    <li> AWS EC2, S3, Route53 for web hosting. </li>
                    <li> Nginx + gunicorn as the webserver. </li>
                    <li> Postgres as SQL database. </li>
                    <li> WSGI for receiving normal requests, Asgi for receiving messages. </li>
                    <li> Redis as a message broker. </li>
                    <li> Google Analytics for tracking website traffic. </li>
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
                        <a href="https://www.panasonic.com/uk/consumer/cameras-camcorders/lumix-digital-cameras/tough-compact-cameras/dc-ft7.html" target="_blank">Website url</a> /
                        <a href="https://www.youtube.com/watch?v=5MLdQKI6DSM" target="_blank">Video url</a>
                    </li>
                    <li> Panasonic Product developed by Ability corp (ODM). </li>
                    <li> developed by C language. </li>
                    <li> Development on iCatch V50 chip. </li>
                    <li> Closely worked with iCatch chip vendor. </li>
                    <li> performance-critical  product. Implemented great methods and algorithms to optimize speed and memory. </li>
                    <li> Charged in playback all functions on camera and the display on the monitor with HDMI. </li>
                    <li> Manipulated image and video file data to achieve various functions like display, edit, and so on, all playback functions that can be found on the camera. </li>
                    <li> Load test and highly troubleshooting skills for extremely strict quality assurance. </li>
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
                        <a href="http://www.nikon.com.sg/en_SG/product/action-cameras/keymission-170" target="_blank">Website url</a> /
                        <a href="https://www.youtube.com/watch?v=sbGPTOa6USI" target="_blank">Video url</a>
                    </li>
                    <li> Nikon Product developed by Ability corp (ODM). </li>
                    <li> Developed by C language. </li>
                    <li> Development on Ambarella Amba chip. </li>
                    <li> Closely worked with the Amba chip vendor. </li>
                    <li> performance-critical  product. Implemented great methods and algorithms to optimize speed and memory. </li>
                    <li> Charged in playback all functions on camera and the display on the monitor with HDMI. </li>
                    <li> Manipulated image and video file data to achieve various functions like display, edit, and so on, all playback functions that can be found on the camera. </li>
                    <li> Closely designed and discussed for spec with Nikon. </li>
                    <li> Load test and highly troubleshooting skills for extremely strict quality assurance. </li>
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
                <li> Accuracy 0.9998. </li>
                <li> Rank 480 out of 1225 teams. </li>
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
                    <li> A combat lego robot. </li>
                    <li> Project in university. </li>
                    <li> Developed by a paid SDK provided by the university (I forgot the SDK name, the programming language used like Matlab). </li>
                    <li> Controlled sound, vision sensor and robot's logical activity. </li>
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
