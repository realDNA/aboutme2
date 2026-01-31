<template>
  <div class="skillBox" @click.stop="dialog = true">
    <img
      :src="require(`@/assets/images/${skillBoxImage}`)"
      alt="skills"
      height="100px"
    />

    <div class="skill-title">
      <h3>{{ skillBoxName }}</h3>
    </div>

    <v-dialog v-model="dialog" max-width="1200" scroll-strategy="none">
      <v-card class="skill-dialog-card">
        <v-card-title class="text-center card-title skill-dialog-title">
          <h4>{{ skillDetailTitle }}</h4>
        </v-card-title>
        <v-divider />
        <v-card-text class="skill-dialog-body">
          <div class="skill-detail-text">
            <div class="skill-detail-content-item">
              <slot></slot>
            </div>
          </div>
        </v-card-text>

        <v-card-actions class="skill-dialog-actions">
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="dialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
    export default {
        name: "skillItem",
        props: {
            skillBoxImage: {
              type: String,
              required: true
            },
            skillBoxName: {
              type: String,
              required: true
            },
            skillDetailTitle: {
              type: String,
              required: true
            },
        },
        data() {
            return {
                dialog: false,
            }
        },
    };
</script>

<style scoped>
.skill-detail-text {
  padding: 24px 26px 28px;
}

.skill-detail-content-item {
  line-height: 1.7;
  color: #2f3b4a;
}

.skill-dialog-card {
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(24, 43, 78, 0.25);
}

.skill-dialog-title {
  background: linear-gradient(135deg, #f7fbff 0%, #eef4ff 55%, #f6f1ff 100%);
  padding: 20px 22px;
  border-bottom: 1px solid #e1ebf6;
}

.skill-dialog-title h4 {
  font-size: 1.25rem;
  letter-spacing: 0.2px;
}

.skill-dialog-body {
  padding: 0;
  background: radial-gradient(
      120% 140% at 0% 0%,
      #f7f9ff 0%,
      #ffffff 45%,
      #f9f6ff 100%
    );
}

.skill-dialog-actions {
  background: linear-gradient(180deg, #f9fbff 0%, #f3f7ff 100%);
  border-top: 1px solid #eef3fb;
  padding: 10px 18px 16px;
}

.skill-detail-content-item ul {
  list-style: none;
  margin: 0.75rem 0 0;
  padding: 0;
  display: grid;
  gap: 0.75rem;
}

.skill-detail-content-item li {
  position: relative;
  padding: 0.8rem 1.1rem 0.8rem 2.1rem;
  border-radius: 14px;
  background: linear-gradient(#ffffff, #ffffff) padding-box,
    linear-gradient(120deg, #dbe6ff, #f1e6ff) border-box;
  border: 1px solid transparent;
  box-shadow: 0 10px 22px rgba(24, 43, 78, 0.08);
}

.skill-detail-content-item li::before {
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

.skill-detail-content-item ul ul {
  margin-top: 0.6rem;
  padding-left: 0;
}

.skill-detail-content-item a {
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

.skill-detail-content-item a:hover {
  border-bottom-color: rgba(31, 73, 199, 0.6);
}
</style>
