/*
 * @Author: tron
 * @Date: 2022-07-18 19:58:49
 * @LastEditTime: 2022-08-09 10:51:29
 * @FilePath: \shopapp\src\store\index.js
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
const state = {
	cartList: [],
};

export default new Vuex.Store({
	state: state,
	getters: getters,
	// mutation适合单一事件操作，便于跟踪事件
	mutations: mutations,
	actions: actions,
	modules: {},
});
