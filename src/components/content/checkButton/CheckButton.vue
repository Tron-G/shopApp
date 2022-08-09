<!--
 * @Author: tron
 * @Date: 2022-08-09 15:14:45
 * @LastEditTime: 2022-08-09 17:19:19
 * @FilePath: \shopapp\src\components\content\checkButton\CheckButton.vue
-->
<template>
	<div class="check-button" :class="{ checked: isChecked }" @click="btnClick">
		<img src="~assets/img/cart/tick.svg" alt="" />
	</div>
</template>

<script>
export default {
	name: "CheckButton",
	components: {},
	props: {
		isChecked: {
			type: Boolean,
			default: false,
		},
	},
	computed: {},
	methods: {
		btnClick() {
			this.$emit("btn-click");
		},
	},
};
</script>

<style scoped>
.check-button {
	width: 20px;
	height: 20px;
	border-radius: 50%;
	text-align: center;
	border: 2px solid rgba(100, 100, 100, 0.1);
}
.checked {
	background-color: var(--color-tint);
	border-color: var(--color-tint);
}
</style>
