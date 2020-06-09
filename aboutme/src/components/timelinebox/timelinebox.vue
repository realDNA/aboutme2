<template>
    <div class="timelinebox">
        <section>
          <v-card class="elevation-2">
            <v-card-title class="headline">{{timeLineCardTitle}}</v-card-title>
            <v-card-text>
                Job title: {{timeLineCardContent}}
                <div>
                    <img :src="require(`@/assets/images/${timeLineCardImage}`)"
                         width="200px"
                         alt="work-experience">
                </div>

                <v-row justify="end" class="work-experience-read-more-button">
                  <v-dialog v-model="closeDialog" width="600px">
                    <template v-slot:activator="{ on }">
                      <v-btn color="#6b63ff" dark v-on="on"> Read More </v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        {{detailCardTitle}}
                      </v-card-title>
                      <v-card-text>
                         {{detailCardContent}}
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

<script>
    export default {
        name: "timeLineBox",
        props: {
            timeLineCardTitle: {
              type: String,
              required: true
            },
            timeLineCardContent: {
              type: String,
              required: true
            },
            timeLineCardImage: {
              type: String,
              required: true
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
.work-experience-read-more-button {
    margin-top: 10px;
    margin-right: 0px;
}
</style>
