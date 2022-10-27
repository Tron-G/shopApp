<template>
	<div class="wrapper" ref="lists">
		<ul class="content">
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
			<li>123123</li>
		</ul>
	</div>
</template>

<script>
import BScroll from "better-scroll";

export default {
	name: "Category",
	data() {
		return {
			scroll: null,
		};
	},
	components: {},
	created() {},
	mounted() {
		// this.scroll = new BScroll(this.$refs.lists, {});
		let wrapper = document.querySelector(".wrapper");
		this.scroll = new BScroll(this.$refs.lists, {
			probeType: 3,
			pullUpLoad: true,
		});
		this.scroll.on("scroll", (position) => {
			// console.log(position);
		});
		this.scroll.on("pullingUp", () => {
			console.log("shangla");

			setTimeout(() => {
				this.scroll.finishPullUp();
			}, 2000);
		});
	},

	computed: {},
	methods: {},
};
</script>

<style scoped>
.wrapper {
	height: 200px;
	/* overflow-y: scroll; */
	background-color: lightpink;
}
</style>
