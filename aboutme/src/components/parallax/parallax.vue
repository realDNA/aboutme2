<template>
    <v-parallax
      :height="height"
      :src="src"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col class="text-center" cols="12">
            <slot></slot>
        </v-col>
      </v-row>

    </v-parallax>
</template>

<script>
    export default {
        name: "parallax",
        props: {
            height: {
              type: String,
              required: true
            },
            src: {
              type: String,
              required: true
            }
        },
    };
</script>
