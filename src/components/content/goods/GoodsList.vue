<template>
	<div class="goods">
		<goods-list-item
			v-for="(item, index) in goods"
			:key="index"
			:goods-item="item"
		></goods-list-item>
	</div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";
/**
 * 商品展示模块
 */
export default {
	name: "GoodsList",
	components: { GoodsListItem },
	props: {
		goods: {
			type: Array,
			default() {
				return [];
			},
		},
	},
	data() {
		return {};
	},
	computed: {},
	methods: {},
};
</script>

<style scoped>
.goods {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	padding: 2px;
}
</style>
