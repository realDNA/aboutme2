<template>
  <div class="home">

    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm12 md6 lg6 xl6>
            <div class="text-center home-introduce">
                <h1 class="home-introduce-title"> Aaron Wei </h1>
                <div class="home-introduce-sub">
                    Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu
                </div>
                <div id="social-icons">
                    <img src="@/assets/images/social-icon/linkedin.svg" alt="linkedin-logo" class="social-icon">
                    <img src="@/assets/images/social-icon/github.svg" alt="github-logo" class="social-icon">
                    <img src="@/assets/images/social-icon/facebook.svg" alt="facebook-logo" class="social-icon">
                    <img src="@/assets/images/social-icon/gmail.svg" alt="gmail-logo" class="social-icon">
                </div>
            </div>
        </v-flex>

        <v-flex xs12 sm12 md6 lg6 xl6>
            <img src="@/assets/images/main/focus.svg" alt="about-me-logo">
        </v-flex>
      </v-layout>
    </v-container>

  </div>

</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {
  },
  created () {
  },
  data() {
    return {
    };
  },
  methods: {
    background() {

    }
  },
};
</script>


<style scoped>
.home-introduce {
    margin: 100px;
}

.home-introduce-sub {
    margin-top: 25px;
    margin-bottom: 25px;
    font-size: 1.5em;
}

.social-icon {
    width: 40px;
    margin-right: 25px;

}

#social-icons {
    margin-top: 40px;
}
</style>
