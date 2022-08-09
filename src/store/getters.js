import { FloatAdd } from "@/common/utils";

export default {
	cartLength(state) {
		return state.cartList.length;
	},
	cartList(state) {
		return state.cartList;
	},
	totalPrice(state) {
		return state.cartList
			.filter((item) => item.checked)
			.reduce((total, now) => {
				return FloatAdd(total, now.price * now.count);
			}, 0);
	},
	isAllSelect(state, getters) {
		return (
			!!getters.cartLength &&
			!state.cartList.some((item) => item.checked == false)
		);
	},
};
