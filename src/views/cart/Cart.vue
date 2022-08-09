<template>
	<div class="cart">
		<nav-bar class="nav-bar">
			<template #center>
				<div>购物车({{ cartLength }})</div>
			</template>
		</nav-bar>
		<cart-list :cart-list="cartList" class="cart-list"></cart-list>
		<cart-bottom-bar></cart-bottom-bar>
	</div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

import CartList from "./childComps/CartList";
import CartBottomBar from "./childComps/CartBottomBar";
import { mapGetters } from "vuex";

export default {
	name: "Cart",
	components: { NavBar, CartList, CartBottomBar },
	props: {},
	data() {
		return {};
	},
	computed: {
		...mapGetters(["cartLength", "cartList"]),
	},
	methods: {},
};
</script>

<style scoped>
.cart {
	position: relative;
	width: 100vw;
	height: calc(100vh - 49px);
	background-color: #f5f4f4;
	/* overflow: hidden; */
}

.nav-bar {
	background-color: var(--color-tint);
	color: white;
	font-weight: bold;
	letter-spacing: 2px;
}

.cart-list {
	width: 100%;
}
</style>
