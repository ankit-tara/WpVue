import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.filter("strip-html", function(value) {
  if (value === null || value === "") return false;
  else value = value.toString();
  return value.replace(/<[^>]*>/g, "");
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
