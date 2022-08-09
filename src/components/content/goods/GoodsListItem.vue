<!--
 * @Author: tron 1285771266@qq.com
 * @Date: 2022-07-25 20:37:03
 * @LastEditors: tron 1285771266@qq.com
 * @LastEditTime: 2022-08-08 16:16:30
 * @FilePath: \shopapp\src\components\content\goods\GoodsListItem.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
	<div class="goods-item">
		<img :src="showImage" alt="" @click="itemClicked" />
		<div class="goods-info">
			<p>{{ goodsItem.title }}</p>
			<span class="price">{{ goodsItem.price }}</span>
			<span class="collect">{{ goodsItem.cfav }}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "GoodsListItem",
	components: {},
	props: {
		goodsItem: {
			type: Object,
			default() {
				return {};
			},
		},
	},
	data() {
		return {};
	},
	computed: {
		showImage() {
			return this.goodsItem.image || this.goodsItem.show.img;
		},
	},
	methods: {
		itemClicked() {
			// this.$router.push("/detail");
			// console.log(this.goodsItem);
			this.$router.push({
				path: "/detail",
				query: {
					iid: this.goodsItem.iid,
				},
			});
		},
	},
};
</script>

<style scoped>
.goods-item {
	padding-bottom: 40px;
	position: relative;
	width: 48%;
}

.goods-item img {
	width: 100%;
	height: 100%;
	border-radius: 5px;
}

.goods-info {
	position: absolute;
	bottom: 5px;
	left: 0;
	right: 0;
	overflow: hidden;
	text-align: center;
	font-size: 12px;
}

.goods-info p {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	margin-bottom: 3px;
}

.goods-info .price {
	color: var(--color-high-text);
	margin-right: 20px;
}

.goods-info .collect {
	position: relative;
}

.goods-info .collect::before {
	content: "";
	position: absolute;
	left: -15px;
	top: -1px;
	width: 14px;
	height: 14px;
	background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
