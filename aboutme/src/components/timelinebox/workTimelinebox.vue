<template>
  <div class="timelinebox">
    <section>
      <v-card>
        <v-card-title class="text-center">
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
              <v-card class="work-dialog-card">
                <v-card-title class="text-center card-title work-dialog-title">
                  <h4>{{ detailCardTitle }}</h4>
                </v-card-title>
                <v-divider />
                <v-card-text class="work-dialog-body">
                  <div class="job-detail-text">
                    <div class="job-detail-content-item">
                      <slot></slot>
                    </div>
                  </div>
                </v-card-text>
                <v-card-actions class="work-dialog-actions">
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
  padding: 24px 26px 28px;
}

.job-detail-content-item {
  line-height: 1.7;
  color: #2f3b4a;
}

.work-dialog-card {
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(24, 43, 78, 0.25);
}

.work-dialog-title {
  background: linear-gradient(135deg, #f7fbff 0%, #eef4ff 55%, #f6f1ff 100%);
  padding: 20px 22px;
  border-bottom: 1px solid #e1ebf6;
}

.work-dialog-title h4 {
  font-size: 1.25rem;
  letter-spacing: 0.2px;
}

.work-dialog-body {
  padding: 0;
  background: radial-gradient(
      120% 140% at 0% 0%,
      #f7f9ff 0%,
      #ffffff 45%,
      #f9f6ff 100%
    );
}

.work-dialog-actions {
  background: linear-gradient(180deg, #f9fbff 0%, #f3f7ff 100%);
  border-top: 1px solid #eef3fb;
  padding: 10px 18px 16px;
}

.job-detail-content-item ul {
  list-style: none;
  margin: 0.75rem 0 0;
  padding: 0;
  display: grid;
  gap: 0.75rem;
}

.job-detail-content-item li {
  position: relative;
  padding: 0.8rem 1.1rem 0.8rem 2.1rem;
  border-radius: 14px;
  background: linear-gradient(#ffffff, #ffffff) padding-box,
    linear-gradient(120deg, #dbe6ff, #f1e6ff) border-box;
  border: 1px solid transparent;
  box-shadow: 0 10px 22px rgba(24, 43, 78, 0.08);
}

.job-detail-content-item li::before {
  content: "";
  position: absolute;
  left: 0.8rem;
  top: 1.05rem;
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 6px;
  background: linear-gradient(135deg, #4b74ff, #7b59ff);
  transform: rotate(45deg);
  box-shadow: 0 6px 14px rgba(75, 116, 255, 0.3);
}

.job-detail-content-item ul ul {
  margin-top: 0.6rem;
  padding-left: 0;
}

.job-detail-content-item a {
  color: #1f49c7;
  font-weight: 600;
  text-decoration: none;
  background-image: linear-gradient(
    120deg,
    rgba(75, 116, 255, 0.15),
    rgba(123, 89, 255, 0.15)
  );
  background-size: 100% 0.35em;
  background-repeat: no-repeat;
  background-position: 0 90%;
  border-bottom: 1px solid rgba(31, 73, 199, 0.15);
  padding-bottom: 1px;
}

.job-detail-content-item a:hover {
  border-bottom-color: rgba(31, 73, 199, 0.6);
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
