<template>
  <div class="timelinebox">
    <section>
      <v-card>
        <v-card-title class="justify-center align-center text-center">
            <h4> {{timeLineCardTitle}} </h4>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="12" md="6" lg="6" xl="6">
              <v-responsive>
                <img
                  :src="require(`@/assets/images/${timeLineCardImage}`)"
                  alt="work-experience"
                  class="responsive-img"
                />
              </v-responsive>
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="6" xl="6">
              <div class="container">
                <h3 class="card-content-item"> Job title: {{ timeLineCardJob }} </h3>
                <h3 class="card-content-item"> Period: {{ timeLineCardPeriod }} </h3>
                <h3 class="card-content-item">
                  Url:
                  <a :href="timeLineCardUrlDescription.url" target="_blank" alt="company url">
                    {{ timeLineCardUrlDescription.title }}
                  </a>
                </h3>
              </div>
            </v-col>
          </v-row>

          <v-row justify="end" class="work-experience-read-more-button">
            <!-- Correcting the Activator -->
            <v-dialog v-model="closeDialog" width="1100px" scroll-strategy="none">
              <template v-slot:activator="{ props }">
                <v-btn color="#6b63ff" dark v-bind="props"> Read More </v-btn>
              </template>
              <v-card>
                <v-card-title class="justify-center">
                  <h4>{{ detailCardTitle }}</h4>
                </v-card-title>
                <v-divider />
                <v-card-text>
                  <div class="job-detail-text">
                    <div class="job-detail-content-item">
                      <slot></slot>
                    </div>
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="red darken-1" text @click="closeDialog = false">Close</v-btn>
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
      required: true,
    },
    timeLineCardImage: {
      type: String,
      required: true,
    },
    timeLineCardJob: {
      type: String,
      required: true,
    },
    timeLineCardPeriod: {
      type: String,
      required: true,
    },
    timeLineCardUrlDescription: {
      type: Object,
      required: true,
    },
    detailCardTitle: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      closeDialog: false,
    };
  },
};
</script>

<style scoped>
.work-experience-read-more-button {
  margin-top: 10px;
}

.card-title {
  margin-bottom: 20px;
}

.card-content {
  display: flex;
  justify-content: center;
}

.responsive-img {
  width: 100%;
  height: auto;
}

.card-content-item {
  line-height: 30px;
  margin-bottom: 10px;
}

.job-detail-text {
  padding: 15px;
}

.job-detail-content-item {
  line-height: 30px;
}

/* Adjust layout for smaller screens */
@media (max-width: 600px) {
  .card-content-item {
    font-size: 1.2em;
  }
  .card-title {
    font-size: 1.5em;
  }
}
</style>