import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "AboutMe",
    component: () => import("../views/AboutMe.vue")
  },
  {
    path: "/experience",
    name: "WorkExperience",
    component: () => import("../views/WorkExperience.vue")
  },
  {
    path: "/skills",
    name: "Skills",
    component: () => import("../views/Skills.vue")
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("../views/Projects.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  scrollBehavior () {
    return { x: 0, y: 0 };
  },
  base: process.env.BASE_URL,
  routes
});

export default router;
