<!--
 * @Author: tron
 * @Date: 2022-08-09 16:07:36
 * @LastEditTime: 2022-08-09 19:04:16
 * @FilePath: \shopapp\src\views\cart\childComps\CartBottomBar.vue
-->
<template>
	<div class="bottom-bar">
		<div class="check-content">
			<check-button
				:isChecked="isAllSelect"
				class="check-btn"
				@btn-click="btnClick"
			></check-button>
			<div>全选</div>
		</div>

		<div class="price">合计: ￥{{ totalPrice }}</div>

		<div class="buy">去付款: ({{ cartLength }})</div>
	</div>
</template>

<script>
import CheckButton from "@/components/content/checkButton/CheckButton";
import { mapGetters } from "vuex";
export default {
	name: "CartBottomBar",
	components: { CheckButton },
	data() {
		return {
			isChecked: true,
		};
	},
	computed: {
		...mapGetters(["cartLength", "totalPrice", "cartList", "isAllSelect"]),
	},
	methods: {
		btnClick() {
			console.log("rm");
			this.$store.dispatch("seletAll");
		},
	},
};
</script>

<style scoped>
.bottom-bar {
	position: relative;
	width: 100%;
	height: 50px;
	display: flex;
	line-height: 50px;
	bottom: 0;
	background-color: white;
	border-top: 1px solid rgb(218, 218, 218);
}
.check-content {
	margin-left: 10px;
	display: flex;
	align-items: center;
	width: 65px;
}
.check-btn {
	line-height: 20px;
	margin-right: 10px;
}

.price {
	flex: 1;
	display: flex;
	justify-content: right;
	padding-right: 10px;
}
.buy {
	width: 120px;
	color: white;
	font-weight: bold;
	font-size: 15px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--color-tint);
	border-radius: 20px;
	margin: 8px 10px 8px 0;
}
</style>
