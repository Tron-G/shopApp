<template>
	<div class="tab-control">
		<div
			v-for="(item, index) in titles"
			:key="item"
			class="tab-control-item"
			:class="active(index)"
			@click="itemClicked(index)"
		>
			<span>{{ item }}</span>
		</div>
	</div>
</template>

<script>
/**
 * 内容分类导航栏
 */
export default {
	name: "TabControl",
	components: {},
	props: {
		titles: {
			type: Array,
			default() {
				return [];
			},
		},
	},
	data() {
		return {
			currentIndex: 0,
		};
	},
	computed: {},
	methods: {
		active(index) {
			return { active: index == this.currentIndex };
		},
		itemClicked(index) {
			this.currentIndex = index;
			this.$emit("tab-click", index);
		},
		indexChange(new_index) {
			this.currentIndex = new_index;
		},
	},
};
</script>

<style scoped>
.tab-control {
	display: flex;
	text-align: center;
	font-size: 16px;
	background-color: #fff;
	border: gainsboro solid 1px;
}

.tab-control-item {
	flex: 1;
	height: 40px;
	line-height: 40px;
}
.tab-control-item span {
	padding: 5px;
}

.active {
	color: var(--color-high-text);
}
.active span {
	border-bottom: 3px solid var(--color-tint);
}
</style>
