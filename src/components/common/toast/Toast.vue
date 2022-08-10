<!--
 * @Author: tron
 * @Date: 2022-08-09 21:13:50
 * @LastEditTime: 2022-08-10 20:03:17
 * @FilePath: \shopapp\src\components\common\toast\Toast.vue
-->
<template>
	<div class="toast" v-show="isShow">{{ message }}</div>
</template>

<script>
export default {
	name: "Toast",
	data() {
		return {
			message: "",
			isShow: false,
		};
	},
	computed: {},
	methods: {
		show(message = "default show message", duration = 1000) {
			this.isShow = true;
			this.message = message;
			setTimeout(() => {
				this.isShow = false;
				this.message = "";
			}, duration);
		},
	},
};
</script>

<style scoped>
.toast {
	position: fixed;
	z-index: 999;
	top: 50%;
	left: 50%;
	width: 180px;
	height: 120px;
	transform: translate(-50%, -50%);
	background-color: rgba(0, 0, 0, 0.5);
	font-size: 16px;
	color: white;
	font-weight: bold;
	border-radius: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
