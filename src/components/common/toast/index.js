/*
 * @Author: tron
 * @Date: 2022-08-09 21:34:41
 * @LastEditTime: 2022-08-10 19:48:07
 * @FilePath: \shopapp\src\components\common\toast\index.js
 */
import Toast from "./Toast";

export default {
	install(Vue) {
		//1. 创建组件构造器
		const toastConstructor = Vue.extend(Toast);
		// 实例化组件对象
		const toast = new toastConstructor();

		toast.$mount(document.createElement("div"));

		document.body.appendChild(toast.$el);

		Vue.prototype.$toast = toast;
	},
};
