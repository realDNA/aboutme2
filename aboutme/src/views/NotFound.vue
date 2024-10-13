<template>
<div class="not-found">
    <v-container>
      <v-row row wrap>
        <v-col cols="12" sm="12" md="6" lg="6" xl="6">
            <div class="text-center not-found-introduce">
                <h1 > Page Not Found </h1>
                <div class="not-found-introduce-sub">
                    I am sorry, The Page could not be found.
                    <br/>
                    Error: 404
                </div>
                <ScrollDownArrow/>
            </div>
        </v-col>

        <v-col cols="12" sm="12" md="6" lg="6" xl="6">
            <img :src="require('@/assets/images/not-found/not-found.svg')"
            alt="not-found"
            :height="500">
        </v-col>
      </v-row>

    </v-container>
</div>
</template>

<script>
export default {
  "name": 'notFound'
}
</script>

<style scoped>
.not-found-introduce {
    margin: 50px;
    margin-top: 150px;
}

.not-found-introduce-sub {
    margin-top: 25px;
    margin-bottom: 25px;
    font-size: 1.5em;
}

</style>