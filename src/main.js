// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import "babel-polyfill"
// import "es6-promise/auto"
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import api from "./api";

Vue.use(ElementUI);
Vue.prototype.$ajax = api;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
