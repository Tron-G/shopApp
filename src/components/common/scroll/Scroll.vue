<template>
	<div class="bs_wrapper" ref="wrapper">
		<div class="bs_content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
import BScroll from "better-scroll";
export default {
	name: "Scroll",
	components: {},
	props: {
		probeType: {
			type: Number,
			default: 0,
		},
		pullUpLoad: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			scroll: null,
		};
	},
	mounted() {
		this.scroll = new BScroll(this.$refs.wrapper, {
			click: true,
			observeDOM: true,
			observeImage: true,
			probeType: this.probeType,
			pullUpLoad: this.pullUpLoad,
		});
		if (this.probeType == 2 || this.probeType == 3) {
			this.scroll.on("scroll", (pos) => {
				this.$emit("scroll", pos);
			});
		}
		if (this.pullUpLoad) {
			this.scroll.on("pullingUp", () => {
				this.$emit("pulling-up");
			});
		}
	},
	computed: {},
	methods: {
		scrollTo(x, y, time = 500) {
			this.scroll.scrollTo(x, y, time);
		},
		finishPullUp() {
			this.scroll.finishPullUp();
		},
		refresh() {
			this.scroll.refresh();
		},
		getScrollY() {
			return this.scroll ? this.scroll.y : 0;
		},
	},
};
</script>

<style scoped></style>
