<template>
	<div id="tab-bar">
		<slot></slot>
	</div>
</template>

<script>
/**
 * app底部导航栏
 * */
export default {
	name: "",
	components: {},
	data() {
		return {};
	},
	computed: {},
	methods: {},
};
</script>

<style scoped>
#tab-bar {
	background-color: #f6f6f6;
	display: flex;
	width: 100%;
	position: fixed;
	left: 0;
	/* right: 0; */
	bottom: 0;
	box-shadow: 0 -2px 2px rgba(100, 100, 100, 0.1);
}
</style>
