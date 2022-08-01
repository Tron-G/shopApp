<template>
	<div class="recommend">
		<div
			v-for="(item, index) in recommends"
			:key="index"
			class="recommend-item"
		>
			<a :href="item.link">
				<img :src="item.image" alt="" @load="imageLoad" />
				<div>{{ item.title }}</div>
			</a>
		</div>
	</div>
</template>

<script>
/**
 * 轮播图下面的推荐模块
 */
export default {
	name: "RecommendView",
	components: {},
	props: {
		recommends: {
			type: Array,
			default() {
				return [];
			},
		},
	},
	data() {
		return {
			isload: false,
		};
	},
	computed: {},
	methods: {
		imageLoad() {
			if (!this.isload) {
				this.isload = true;
				this.$emit("recommendImageLoad", "recommend");
			}
		},
	},
};
</script>

<style scoped>
.recommend {
	display: flex;
	width: 100%;
	text-align: center;
	font-size: 12px;
	padding: 10px 0 20px;
	border-bottom: 8px solid #eee;
}
.recommend-item {
	flex: 1;
}
.recommend-item img {
	width: 70px;
	height: 70px;
}
</style>
