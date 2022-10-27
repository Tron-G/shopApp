/*
 * @Author: tron 1285771266@qq.com
 * @Date: 2022-08-08 23:01:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-10-27 17:04:18
 * @FilePath: \shopapp\src\store\actions.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ADD_COUNTER, PUSH_TO_CART, SET_ALL_CHECK } from "./mutation-types";
export default {
	addCart({ state, commit }, payload) {
		return new Promise((resolve, reject) => {
			let oldGoods = state.cartList.find((item) => item.iid === payload.iid);
			if (oldGoods) {
				// oldGoods.count += 1;
				commit(ADD_COUNTER, oldGoods);
				resolve("商品数量加一");
				// reject("ri");
			} else {
				payload.count = 1;
				payload.checked = true;
				commit(PUSH_TO_CART, payload);
				resolve("添加了新的商品");
				// reject("ri");
			}
			// throw new Error("oh no");
		});
	},
	seletAll({ getters, commit }) {
		if (getters.isAllSelect) {
			commit(SET_ALL_CHECK, false);
		} else {
			commit(SET_ALL_CHECK, true);
		}
	},
};
