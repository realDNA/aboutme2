import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import ScollAnimation from "./directives/scrollanimation"

Vue.config.productionTip = false;

Vue.use(require('vue-moment'));
Vue.directive("scrollanimation", ScollAnimation);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
