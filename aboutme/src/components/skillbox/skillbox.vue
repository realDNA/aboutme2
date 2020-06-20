<template>
<div class="skillBox"
@click.stop="dialog = true">
    <img :src="require(`@/assets/images/${skillBoxImage}`)"
    alt="skills"
    height="100px"
    />

    <div class="skill-title">
        <h3> {{skillBoxName}} </h3>
    </div>

    <v-dialog
    v-model="dialog"
    max-width="1200"
    >
        <v-card>
            <v-card-title class="justify-center">
                <h4> {{skillDetailTitle}} </h4>
            </v-card-title>

            <v-card-text>
                <div class="skill-detail-text">
                    <div class="skill-detail-content-item">
                        <slot></slot>
                     </div>
                </div>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red darken-1" text @click="dialog = false"> Close </v-btn>
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
    padding: 15px;
}

.skill-detail-content-item {
    line-height: 30px;
}
</style>
