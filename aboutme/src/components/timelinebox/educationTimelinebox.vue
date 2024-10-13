<template>
  <div class="timelinebox">
    <section>
      <v-card class="elevation-2">
        <v-card-title class="text-center card-title">
          <h4> {{ timeLineCardTitle }} </h4>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="12" md="6" lg="6" xl="6">
              <v-responsive>
                <img :src="require(`@/assets/images/${timeLineCardImage}`)"
                     alt="education-experience"
                     class="responsive-img"
                />
              </v-responsive>
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="6" xl="6">
              <div class="container">
                <h3 class="card-content-item"> Degree: {{ timeLineCardDegree }} </h3>
                <h3 class="card-content-item"> Dept.: {{ timeLineCardDepartment }} </h3>
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

          <v-row justify="end" class="education-experience-read-more-button">
            <v-dialog v-model="closeDialog" width="1100px" scroll-strategy="none">
              <template v-slot:activator="{ props }">
                <v-btn color="#6b63ff" dark v-bind="props"> Read More </v-btn>
              </template>
              <v-card>
                <v-card-title class="justify-center">
                  <h4> {{ detailCardTitle }} </h4>
                </v-card-title>
                <v-divider/>
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
    timeLineCardDegree: {
      type: String,
      required: true,
    },
    timeLineCardDepartment: {
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
/* Ensure the button has proper margins */
.education-experience-read-more-button {
  margin-top: 10px;
  margin-right: 0px;
}

/* Ensure that the card title has spacing */
.card-title {
  margin-bottom: 30px;
}

/* Make the image responsive */
.responsive-img {
  width: 100%; /* Full width image for responsiveness */
  height: auto; /* Maintain aspect ratio */
}

/* Align card content */
.card-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Ensure card text has good spacing */
.card-content-item {
  line-height: 40px;
}

/* Padding for detailed job descriptions */
.job-detail-text {
  padding: 15px;
}

.job-detail-content-item {
  line-height: 30px;
}

/* Adjust padding on smaller screens */
@media only screen and (max-width: 600px) {
  .card-content-item {
    font-size: 1.2em;
    line-height: 30px;
  }

  .container {
    padding: 10px;
  }
}
</style>