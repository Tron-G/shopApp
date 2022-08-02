<template>
	<swiper :interval="2000" class="swiper">
		<swiper-item v-for="(item, index) in banners" :key="index">
			<template>
				<a :href="item.link">
					<img :src="item.image" alt="" />
				</a>
			</template>
		</swiper-item>
	</swiper>
</template>

<script>
/**
 * 轮播图
 */
import { Swiper, SwiperItem } from "@/components/common/swiper";
export default {
	name: "HomeSwiper",
	data() {
		return {
			isload: false,
		};
	},
	props: {
		banners: {
			type: Array,
			default() {
				return [];
			},
		},
	},
	components: {
		Swiper,
		SwiperItem,
	},

	computed: {},
	methods: {},
};
</script>

<style scoped>
.swiper {
	/* margin-top: 1px; */
}
.swiper img {
	width: 100vw;
	height: 30vh;
}
</style>
