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
    path: "/about-me",
    name: "AboutMe",
    component: () => import("../views/AboutMe.vue")
  },
  {
    path: "/work-experience",
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
  base: process.env.BASE_URL,
  routes
});

export default router;
