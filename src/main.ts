import Vue from "vue";
import "@/plugins";
import { MainTheme } from "@/theme/theme";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  provide() {
    return {
      theme: (this as any).theme,
    };
  },
  data() {
    return {
      theme: MainTheme,
    };
  },
  store,
  render: (h) => h(App),
}).$mount("#app");
