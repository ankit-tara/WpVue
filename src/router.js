import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Singlepost from "./components/Singlepost.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: __dirname,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      props: true
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/:id",
      name: "Singlepost",
      component: Singlepost,
      props: true
    }
  ]
});
