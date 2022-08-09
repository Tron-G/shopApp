<template>
	<div id="home">
		<nav-bar class="home-nav">
			<template #center>
				<div id="home_title">购物街</div>
			</template>
		</nav-bar>
		<tab-control
			class="replace-tab-control"
			:titles="titles"
			@tab-click="tabClick"
			v-show="isTabFixed"
			ref="replace_tabControl"
		></tab-control>

		<scroll
			class="content"
			ref="scroll"
			:probe-type="2"
			:pull-up-load="true"
			@scroll="contentScroll"
			@pulling-up="loadMore"
		>
			<home-swiper :banners="banners"></home-swiper>
			<recommend-view :recommends="recommends"></recommend-view>
			<feature-view />
			<tab-control
				class="goods-tab-control"
				:titles="titles"
				@tab-click="tabClick"
				ref="tabControl"
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

import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";

import { getHomeMultidata, getHomeGoods } from "network/home.js";

import { backTopMixin } from "@/common/mixin";

export default {
	name: "Home",
	mixins: [backTopMixin],
	components: {
		NavBar,
		Scroll,
		TabControl,
		GoodsList,
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
			isTabFixed: false,
			saveY: 0,
		};
	},
	created() {
		this.getHomeMultidata();
		this.getHomeGoodsData("pop");
		this.getHomeGoodsData("new");
		this.getHomeGoodsData("sell");
	},
	mounted() {},
	destroyed() {
		console.log("destroy");
	},
	activated() {
		this.$refs.scroll.scrollTo(0, this.saveY);
		this.$refs.scroll.refresh();
	},
	deactivated() {
		this.saveY = this.$refs.scroll.getScrollY();
	},
	computed: {
		setGoodsData() {
			return this.goods[this.currentType].list;
		},
		tabControlTop() {
			return this.$refs.tabControl.$el.offsetTop;
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
			this.$refs.replace_tabControl.indexChange(index);
			this.$refs.tabControl.indexChange(index);
			// this.$refs.scroll.scrollTo(0, -this.tabControlTop, 2);
		},
		// backClick() {
		// 	this.$refs.scroll.scrollTo(0, 0);
		// },
		contentScroll(pos) {
			//判断回到顶部按钮是否显示
			this.listenShowBackTop(pos);
			//判断tabControl是否吸顶
			this.isTabFixed = this.tabControlTop + pos.y <= 0;
		},
		loadMore() {
			this.getHomeGoodsData(this.currentType);
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
		getHomeGoodsData(type) {
			const page = this.goods[type].page + 1;
			getHomeGoods(type, page).then((res) => {
				this.goods[type].list.push(...res.data.list);
				this.goods[type].page += 1;
				// console.log(type, this.goods[type]);
				this.$refs.scroll.finishPullUp();
				// this.$refs.scroll.refresh();
			});
		},
	},
};
</script>

<style scoped>
#home {
	position: relative;
	height: 100vh;
}
#home_title {
	letter-spacing: 2px;
	font-weight: bold;
}

.content {
	position: absolute;
	top: 44px;
	bottom: 49px;
	left: 0;
	right: 0;
	/* height: 300px; */
	overflow: hidden;
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

.replace-tab-control {
	position: relative;
	top: 44px;
	z-index: 9;
}
</style>
