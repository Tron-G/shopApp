/*
 * @Author: tron
 * @Date: 2022-07-18 19:58:49
 * @LastEditTime: 2022-08-10 20:11:51
 * @FilePath: \shopapp\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import toast from "@/components/common/toast";
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false;

Vue.use(toast);
const loadimage = require("./assets/img/common/placeholder.png");
Vue.use(VueLazyload, {
	preLoad: 1.3,
	loading: loadimage,
	attempt: 1,
});

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
