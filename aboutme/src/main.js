import { createApp } from 'vue'  // Import createApp for Vue 3
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import ScollAnimation from './directives/scrollanimation'

// Import vue-moment as a plugin
// import VueMoment from 'vue-moment'

const app = createApp(App)

// Register vue-moment plugin
// app.use(VueMoment)

// Register the custom scroll animation directive
app.directive('scrollanimation', ScollAnimation)

// Use router and vuetify
app.use(router)
app.use(vuetify)

// Mount the app to the #app element in your index.html
app.mount('#app')