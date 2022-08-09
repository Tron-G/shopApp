<template>
	<div class="cart-list">
		<scroll class="content" ref="scroll">
			<cart-list-item
				v-for="(item, index) in cartList"
				:key="index"
				:product="item"
			></cart-list-item>
		</scroll>
	</div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";

import CartListItem from "./CartListItem";

export default {
	name: "CartList",
	components: { Scroll, CartListItem },
	props: {
		cartList: {
			type: Array,
			default() {
				return [];
			},
		},
	},
	mounted() {
		console.log(this.cartList);
	},
	activated() {
		this.$refs.scroll.refresh();
	},
	data() {
		return {};
	},
	computed: {},
	methods: {},
};
</script>

<style scoped>
.cart-list {
	position: relative;
	height: calc(100% - 44px - 51px);
	overflow: hidden;
}

.content {
	height: 100%;
	/* background-color: white; */
}
</style>
