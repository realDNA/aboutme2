<template>
<div class="not-found">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm12 md6 lg6 xl6>
            <div class="text-center not-found-introduce">
                <h1 > Page Not Found </h1>
                <div class="not-found-introduce-sub">
                    I am sorry, The Page could not be found.
                    <br/>
                    Error: 404
                </div>
                <ScrollDownArrow/>
            </div>
        </v-flex>

        <v-flex xs12 sm12 md6 lg6 xl6>
            <img src="@/assets/images/not-found/not-found.svg"
            alt="not-found"
            :height="500">
        </v-flex>
      </v-layout>

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