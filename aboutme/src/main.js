import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import vueScrollReveal from 'vue-scroll-reveal';
import ScollAnimation from "./directives/scrollanimation"
Vue.config.productionTip = false;

Vue.directive("scrollanimation", ScollAnimation);
// Using ScrollReveal's default configuration
Vue.use(vueScrollReveal);

// OR specifying custom default options for all uses of the directive
Vue.use(vueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 800,
  scale: 1,
  distance: '10px',
  mobile: true
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
