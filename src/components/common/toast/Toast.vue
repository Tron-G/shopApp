<!--
 * @Author: tron
 * @Date: 2022-08-09 21:13:50
 * @LastEditTime: 2022-08-09 21:24:21
 * @FilePath: \shopapp\src\components\common\toast\Toast.vue
-->
<template>
	<div class="toast" v-show="show">{{ message }}</div>
</template>

<script>
export default {
	name: "Toast",
	components: {},
	props: {
		message: {
			type: String,
			default: "",
		},
		show: {
			type: Boolean,
			default: false,
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
.toast {
	position: fixed;
	top: 50%;
	left: 50%;
	width: 200px;
	height: 150px;
	transform: translate(-50%, -50%);
	background-color: rgba(0, 0, 0, 0.5);
	font-size: 18px;
	color: white;
	font-weight: bold;
	border-radius: 20px;

	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
