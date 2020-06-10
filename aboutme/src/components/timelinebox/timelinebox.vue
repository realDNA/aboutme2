<template>
    <div class="timelinebox">
        <section>
          <v-card class="elevation-2">
            <v-card-title class="justify-center">
                <h4> {{timeLineCardTitle}} </h4>
            </v-card-title>
            <v-card-text>
                <v-layout row wrap>
                    <v-flex xs12 sm12 md12 lg6 xl6>
                        <div class="card-content">
                            <img :src="require(`@/assets/images/${timeLineCardImage}`)"
                                 alt="work-experience"
                                 height="200px"
                            />
                        </div>
                    </v-flex>
                    <v-flex xs12 sm12 md12 lg6 xl6>
                        <div class="container">
                            <h3 class="card-content-item"> Job title: {{timeLineCardJob}} </h3>
                            <h3 class="card-content-item"> Period: {{timeLineCardPeriod}} </h3>
                            <h3 class="card-content-item">
                                Url:
                                <a :href="timeLineCardUrlDescription.url" target="_blank" alt="company url">
                                    {{timeLineCardUrlDescription.title}}
                                </a>
                            </h3>
                        </div>
                    </v-flex>
                </v-layout>

                <v-row justify="end" class="work-experience-read-more-button">
                  <v-dialog v-model="closeDialog" width="600px">
                    <template v-slot:activator="{ on }">
                      <v-btn color="#6b63ff" dark v-on="on"> Read More </v-btn>
                    </template>
                    <v-card>
                      <v-card-title class="justify-center">
                        <h4> {{detailCardTitle}} </h4>
                      </v-card-title>
                      <v-divider/>
                      <v-card-text>
                        <div class="job-detail-text">
                            <h3 class="job-detail-content-item"> {{detailCardContent}} </h3>
                        </div>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="red darken-1" text @click="closeDialog = false"> Close </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-row>

            </v-card-text>
          </v-card>
      </section>
    </div>
</template>

<script scoped>
    export default {
        name: "timeLineBox",
        props: {
            timeLineCardTitle: {
              type: String,
              required: true
            },
            timeLineCardImage: {
              type: String,
              required: true
            },
            timeLineCardJob: {
              type: String,
              required: true
            },
            timeLineCardPeriod: {
              type: String,
              required: true
            },
            timeLineCardUrlDescription: {
              type: Object,
              required: true,
            },
            detailCardTitle: {
              type: String,
              required: true
            },
            detailCardContent: {
              type: String,
              required: true
            },
        },
        data() {
            return {
                closeDialog: false,
                testUrl: "@/assets/images/work-experience/workchat.svg"
            }
        },
    };
</script>

<style>
a {
    text-decoration: none !important;
}

.work-experience-read-more-button {
    margin-top: 10px;
    margin-right: 0px;
}

.card-content {
    display: flex;
    align-items: center;
    justify-content: center;
}

.card-content-item {
      line-height: 50px;
}

.job-detail-text {
    padding: 15px;
}

.job-detail-content-item {
    line-height: 30px;
}
</style>
