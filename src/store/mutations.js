/*
 * @Author: tron 1285771266@qq.com
 * @Date: 2022-08-08 23:00:41
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-09 19:02:22
 * @FilePath: \shopapp\src\store\mutations.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ADD_COUNTER, PUSH_TO_CART, SET_ALL_CHECK } from "./mutation-types";

export default {
	[ADD_COUNTER](state, payload) {
		payload.count++;
	},
	[PUSH_TO_CART](state, payload) {
		state.cartList.push(payload);
	},
	[SET_ALL_CHECK](state, flag) {
		state.cartList.forEach((element) => {
			element.checked = flag;
		});
	},
};
