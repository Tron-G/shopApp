<template>
	<div class="detail-swiper">
		<swiper class="swiper" :interval="2000">
			<swiper-item v-for="(item, index) in topImages" :key="index">
				<img :src="item" alt="" />
			</swiper-item>
		</swiper>
	</div>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper";
export default {
	name: "DetailSwiper",
	components: { Swiper, SwiperItem },
	props: {
		topImages: {
			type: Array,
			default() {
				return [];
			},
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
.swiper {
	height: 300px;
	overflow: hidden;
}
</style>
