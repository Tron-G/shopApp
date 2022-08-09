<template>
	<div class="back-top">
		<img src="~assets/img/common/top.png" alt="" />
	</div>
</template>

<script>
export default {
	name: "BackTop",
	components: {},
	data() {
		return {};
	},
	computed: {},
	methods: {},
};
</script>

<style scoped>
.back-top {
	position: fixed;
	z-index: 9;
	bottom: 62px;
	right: 5px;
}
.back-top img {
	filter: opacity(100%);
	height: 43px;
	width: 43px;
}
</style>
