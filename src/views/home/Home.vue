<template>
	<div id="home">
		<nav-bar class="home-nav">
			<template #center>
				<div id="home_title">购物街</div>
			</template>
		</nav-bar>

		<scroll
			class="content"
			ref="scroll"
			:probe-type="2"
			:pull-up-load="true"
			@scroll="contentScroll"
			@pullingUp="loadMore"
		>
			<home-swiper :banners="banners"></home-swiper>
			<recommend-view :recommends="recommends"></recommend-view>
			<feature-view></feature-view>
			<tab-control
				class="home-tab-control"
				:titles="titles"
				@tabClick="tabClick"
			></tab-control>
			<goods-list :goods="setGoodsData"></goods-list>
		</scroll>
		<back-top @click.native="backClick" v-show="isShowBackTop" />
	</div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import Scroll from "@/components/common/scroll/Scroll.vue";
import TabControl from "@/components/content/tabControl/TabControl.vue";
import GoodsList from "@/components/content/goods/GoodsList.vue";
import BackTop from "@/components/content/backTop/BackTop.vue";

import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";

import { getHomeMultidata, getHomeGoods } from "network/home.js";

export default {
	name: "Home",
	components: {
		NavBar,
		Scroll,
		TabControl,
		GoodsList,
		BackTop,
		HomeSwiper,
		RecommendView,
		FeatureView,
	},
	data() {
		return {
			banners: [],
			recommends: [],
			titles: ["流行", "新款", "精选"],
			goods: {
				pop: { page: 0, list: [] },
				new: { page: 0, list: [] },
				sell: { page: 0, list: [] },
			},
			currentType: "pop",
			isShowBackTop: false,
		};
	},
	created() {
		this.getHomeMultidata();
		this.getHomeGoods("pop");
		this.getHomeGoods("new");
		this.getHomeGoods("sell");
	},
	computed: {
		setGoodsData() {
			return this.goods[this.currentType].list;
		},
	},
	methods: {
		/**
		 * 监听事件
		 */

		//商品浏览分类导航的监听
		tabClick(index) {
			switch (index) {
				case 0:
					this.currentType = "pop";
					break;
				case 1:
					this.currentType = "new";
					break;
				case 2:
					this.currentType = "sell";
					break;
			}
		},
		backClick() {
			this.$refs.scroll.scrollTo(0, 0);
		},
		contentScroll(pos) {
			// console.log(pos);
			this.isShowBackTop = -pos.y > 1000;
		},
		loadMore() {
			this.getHomeGoods(this.currentType);
		},
		/**
		 * 网络请求
		 */
		//请求首页数据
		getHomeMultidata() {
			getHomeMultidata().then((res) => {
				this.banners = res.data.banner.list;
				this.recommends = res.data.recommend.list;
				// console.log(res.data);
			});
		},
		getHomeGoods(type) {
			const page = this.goods[type].page + 1;
			getHomeGoods(type, page).then((res) => {
				this.goods[type].list.push(...res.data.list);
				this.goods[type].page += 1;
				// console.log(type, this.goods[type]);
				this.$refs.scroll.finishPullUp();
				this.$refs.scroll.refresh();
			});
		},
	},
};
</script>

<style scoped>
#home {
	padding: 44px 0 49px;
	height: 100vh;
}
#home_title {
	letter-spacing: 2px;
}
.home-nav {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	background-color: var(--color-tint);
	color: white;
	border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.home-tab-control {
	position: sticky;
	top: 44px;
	z-index: 9;
}
.content {
	height: 100%;
	/* height: 300px; */
	overflow: hidden;
}
</style>
