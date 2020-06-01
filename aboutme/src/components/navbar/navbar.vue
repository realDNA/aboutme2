<template>
    <div class="NavBar">
        <v-app-bar
        :scroll="isScrollToTop"
        :class="{ fixedNav: isIntersecting }">

          <v-toolbar flat>
              <v-tabs
                fixed-tabs
              >
                <v-tabs-slider></v-tabs-slider>
                <v-tab
                  href="#mobile-tabs-5-1"
                  class="primary--text"
                >
                  <v-icon>mdi-phone</v-icon>
                  <div class="nav-bar hidden-sm-and-down">GFGDGFDSGSFDG</div>
                </v-tab>

                <v-tab
                  href="#mobile-tabs-5-2"
                  class="primary--text"
                >
                  <v-icon>mdi-heart</v-icon>
                    <div class="nav-bar hidden-sm-and-down"> GFGDGFDSGSFDG </div>
                </v-tab>

                <v-tab
                  href="#mobile-tabs-5-3"
                  class="primary--text"
                >
                  <v-icon>mdi-account-box</v-icon>
                  <div class="nav-bar hidden-sm-and-down"> GFGDGFDSGSFDG </div>
                </v-tab>

                <v-tab
                  href="#mobile-tabs-5-4"
                  class="primary--text"
                >
                  <v-icon>mdi-account-box</v-icon>
                  <div class="nav-bar hidden-sm-and-down"> GFGDGFDSGSFDG </div>
                </v-tab>
              </v-tabs>
          </v-toolbar>
        </v-app-bar>
    </div>
</template>

<script>
    export default {
        name: "NavbarComponent",
        props: {
        },
        created () {
            window.addEventListener('scroll', this.isScrollToTop);
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.isScrollToTop);
        },
        data: () => ({
            isIntersecting: false,
        }),
        methods: {
            isScrollToTop() {
                if (window.top.scrollY >= 700) {
                    this.isIntersecting = true;
                } else {
                    this.isIntersecting = false;
                }
                this.$emit("input", this.isIntersecting);
            }
        },
    };
</script>

<style>
.fixedNav {
  position: fixed;
  top: 0;
  z-index:1;
}
</style>