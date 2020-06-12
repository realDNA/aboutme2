<template>
<div class="projectBox"
@click.stop="dialog = true">
    <img :src="require(`@/assets/images/${projectBoxImage}`)"
    alt="projects"
    height="100px"
    />

    <div class="project-title">
        <h3> {{projectBoxName}} </h3>
    </div>

    <v-dialog
    v-model="dialog"
    max-width="600"
    >
        <v-card>
            <v-card-title class="justify-center">
                <h4> {{projectDetailTitle}} </h4>
            </v-card-title>

            <v-card-text>
                <div class="project-detail-text">
                    <div class="project-detail-content-item">
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
        name: "projectItem",
        props: {
            projectBoxImage: {
              type: String,
              required: true
            },
            projectBoxName: {
              type: String,
              required: true
            },
            projectDetailTitle: {
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
.project-detail-text {
    padding: 15px;
}

.project-detail-content-item {
    line-height: 30px;
}
</style>
