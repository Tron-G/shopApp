<!--
 * @Author: tron
 * @Date: 2022-08-09 14:18:39
 * @LastEditTime: 2022-08-09 17:20:47
 * @FilePath: \shopapp\src\views\cart\childComps\CartListItem.vue
-->
<template>
	<div class="cart-item">
		<div class="item-selector">
			<check-button
				:is-checked="product.checked"
				@btn-click="btnClick"
			></check-button>
		</div>
		<div class="item-img">
			<img :src="product.image" alt="商品图片" />
		</div>
		<div class="item-info">
			<div class="item-title">{{ product.title }}</div>
			<div class="item-desc">{{ product.desc }}</div>
			<div class="info-bottom">
				<div class="price">￥{{ product.price }}</div>
				<div class="count">x{{ product.count }}</div>
			</div>
		</div>
	</div>
</template>

<script>
import CheckButton from "@/components/content/checkButton/CheckButton.vue";

export default {
	name: "CartListItem",
	components: { CheckButton },
	props: {
		product: {
			type: Object,
			default() {
				return {};
			},
		},
	},
	data() {
		return {};
	},
	computed: {},
	methods: {
		btnClick() {
			this.product.checked = !this.product.checked;
		},
	},
};
</script>

<style scoped>
.cart-item {
	width: 97%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 5px;
	background-color: #fff;
	margin: 2% 1.5%;
	border-radius: 15px;
	/* border-bottom: 5px solid #eeeeee; */
}
.item-selector {
	width: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.item-img {
	margin: 5px;
}
.item-img img {
	width: 85px;
	height: 110px;
	display: block;
	border-radius: 10px;
}
.item-info {
	width: 65%;
	padding: 5px 8px 5px 0;
	overflow: hidden;
	font-size: 17px;
	color: #333;
}
.item-title,
.item-desc {
	width: 100%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.item-title {
	color: black;
}
.item-desc {
	margin-top: 10px;
	font-size: 14px;
	color: #666;
	background-color: rgb(245, 245, 245);
}

.info-bottom {
	padding: 8px 0;
	margin-top: 20px;
	display: flex;
	justify-content: space-between;
}

.price {
	color: var(--color-high-text);
	/* font-size: 20px; */
	font-weight: bold;
}

.count {
	font-size: 13px;
	padding: 4px 8px;
	border: 1px solid #e6e6e6;
	border-radius: 8px;
}
</style>
