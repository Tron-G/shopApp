<template>
	<div class="tab-bar-item" @click="itemClick">
		<div v-if="!isActice"><slot name="item-icon"></slot></div>
		<div v-else><slot name="item-icon-active"></slot></div>
		<div :style="activeStyle">
			<slot name="item-text"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "TabBarItem",
	components: {},
	props: {
		path: String,
		activeColor: {
			type: String,
			default: "red",
		},
	},
	data() {
		return {
			// isActice: false,
		};
	},
	computed: {
		isActice() {
			return this.$route.path.indexOf(this.path) != -1;
		},
		activeStyle() {
			return this.isActice ? { color: this.activeColor } : {};
		},
	},
	methods: {
		itemClick() {
			if (this.path !== this.$route.path) {
				this.$router.replace(this.path);
			}
		},
	},
};
</script>

<style scoped>
.tab-bar-item {
	flex: 1;
	text-align: center;
	height: 49px;
	font-size: 14px;
}
.tab-bar-item img {
	width: 24px;
	height: 24px;
	margin-top: 3px;
	vertical-align: middle;
}
.active {
	color: red;
}
</style>
