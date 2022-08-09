<template>
	<div class="bottom-bar">
		<div class="bar-item bar-left">
			<div>
				<i class="icon service"></i>
				<span class="text">客服</span>
			</div>
			<div>
				<i class="icon shop"></i>
				<span class="text">店铺</span>
			</div>
			<div>
				<i class="icon select"></i>
				<span class="text">收藏</span>
			</div>
		</div>

		<div class="bar-item bar-right">
			<div class="cart" @click="addToCart">加入购物车</div>
			<div class="buy">购买</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "DetailBottomBar",
	components: {},
	data() {
		return {};
	},
	methods: {
		addToCart() {
			this.$emit("add-to-cart");
		},
	},
};
</script>

<style scoped>
.bottom-bar {
	height: 58px;
	background-color: white;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	text-align: center;
	border-top: 1px solid rgb(226, 226, 226);
}

.bar-item {
	flex: 1;
	display: flex;
}
.bar-item > div {
	flex: 1;
}
.bar-left .text {
	font-size: 13px;
}
.bar-left .icon {
	display: block;
	width: 22px;
	height: 22px;
	margin: 10px auto 3px;
	background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}
.bar-left .service {
	background-position: 0 -54px;
}
.bar-left .shop {
	background-position: 0 -98px;
}

.bar-right {
	font-size: 14px;
	color: #fff;
	line-height: 58px;
	height: 40px;
	line-height: 40px;
	text-align: center;
	margin: 9px 8px 9px 0;
}
.bar-right .cart {
	background-color: #ffa217;
	color: white;
	font-weight: bold;
	border-radius: 20px 0 0 20px;
}
.bar-right .buy {
	background-color: rgb(252, 129, 170);
	font-weight: bold;
	border-radius: 0 20px 20px 0;
}
</style>
