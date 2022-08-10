<template>
	<div id="detail">
		<detail-nav-bar ref="nav" @item-click="titleClick" class="detail-nav" />
		<scroll
			class="content"
			ref="scroll"
			:probe-type="3"
			@scroll="contentScroll"
		>
			<detail-swiper :top-images="topImages"></detail-swiper>
			<detail-base-info v-if="goods" :goods="goods"></detail-base-info>
			<detail-shop-info v-if="shop" :shop="shop"></detail-shop-info>
			<detail-goods-info
				v-if="detailInfo"
				:detail-info="detailInfo"
				@image-loaded="imageLoad"
			></detail-goods-info>
			<detail-param-info
				v-if="paramInfo"
				:param-info="paramInfo"
				ref="params"
			></detail-param-info>
			<detail-comment-info
				:comment-info="commentInfo"
				ref="comment"
			></detail-comment-info>

			<goods-list :goods="recommends" ref="recommend"></goods-list>
		</scroll>
		<back-top @click.native="backClick" v-show="isShowBackTop" />
		<detail-bottom-bar @add-to-cart="AddToCart"></detail-bottom-bar>
	</div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";

import Scroll from "@/components/common/scroll/Scroll";
import GoodsList from "@/components/content/goods/GoodsList";

import { mapActions } from "vuex";

import { itemMixin, backTopMixin } from "@/common/mixin";
import { debounce } from "@/common/utils";

import {
	getDetail,
	getRecommend,
	GoodsInfo,
	Shop,
	GoodsParam,
} from "network/detail.js";

export default {
	name: "Detail",
	mixins: [itemMixin, backTopMixin],
	components: {
		DetailNavBar,
		DetailSwiper,
		DetailBaseInfo,
		DetailShopInfo,
		DetailGoodsInfo,
		DetailParamInfo,
		DetailCommentInfo,
		DetailBottomBar,
		GoodsList,
		Scroll,
	},

	data() {
		return {
			iid: null,
			topImages: [],
			goods: null,
			shop: {},
			detailInfo: {},
			paramInfo: {},
			commentInfo: {},
			recommends: [],
			// 保存组件位置
			themeTopY: [],
			// 防抖获取组件位置
			getThemeTopY: null,
			// 保存导航位置
			currentIndex: 0,
		};
	},
	created() {
		this.iid = this.$route.query.iid;
		getDetail(this.iid).then((res) => {
			// console.log(res);
			const data = res.result;
			// 轮播图
			this.topImages = data.itemInfo.topImages;
			// 商品信息数据对象
			this.goods = new GoodsInfo(
				data.itemInfo,
				data.columns,
				data.shopInfo.services
			);
			// 店铺信息数据对象
			this.shop = new Shop(data.shopInfo);

			// 商品详细信息
			this.detailInfo = data.detailInfo;

			this.paramInfo = new GoodsParam(
				data.itemParams.info,
				data.itemParams.rule
			);
			if (data.rate.cRate !== 0) {
				this.commentInfo = data.rate.list[0];
			}

			this.$nextTick(() => {
				this.getThemeTopY = debounce(() => {
					this.themeTopY = [];
					this.themeTopY.push(0);
					this.themeTopY.push(this.$refs.params.$el.offsetTop - 44);
					this.themeTopY.push(this.$refs.comment.$el.offsetTop - 44);
					this.themeTopY.push(this.$refs.recommend.$el.offsetTop - 44);
					// 极大值封底，简化判断条件，也可以添加Infinity
					this.themeTopY.push(Number.MAX_VALUE);
				}, 200);
			});

			// this.$nextTick(() => {
			// 	this.themeTopY.push(0);
			// 	this.themeTopY.push(this.$refs.params.$el.offsetTop);
			// 	this.themeTopY.push(this.$refs.comment.$el.offsetTop);
			// 	this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
			// 	console.log(this.themeTopY);
			// });
		});

		getRecommend().then((res) => {
			this.recommends = res.data.list;
		});
	},
	computed: {},
	methods: {
		...mapActions(["addCart"]),

		titleClick(index) {
			// console.log(index);
			this.$refs.scroll.scrollTo(0, -this.themeTopY[index], 800);
		},
		imageLoad() {
			this.getThemeTopY();
			this.refreshDebouncer();
		},

		contentScroll(pos) {
			this.listenShowBackTop(pos);
			// console.log(pos);
			const posY = -pos.y;
			const len = this.themeTopY.length;
			for (let i = 0; i < len - 1; i++) {
				if (this.currentIndex !== i) {
					if (this.themeTopY[i] <= posY && posY < this.themeTopY[i + 1]) {
						this.currentIndex = i;
						this.$refs.nav.changeIndex(this.currentIndex);
					}
				}
			}
		},

		AddToCart() {
			// 获取购物车要展示的信息
			const product = {};
			product.image = this.topImages[0];
			product.title = this.goods.title;
			product.desc = this.goods.desc;
			product.price = this.goods.realPrice;
			product.iid = this.iid;

			this.addCart(product).then(
				(res) => {
					this.$toast.show(res, 1000);
				},
				(err) => {
					this.$toast.show("添加失败", 1000);
					console.log(err);
				}
			);
		},
	},
};
</script>

<style scoped>
#detail {
	position: relative;
	background-color: #fff;
	z-index: 9;
	height: 100vh;
}
.detail-nav {
	position: relative;
	z-index: 9;
	background-color: white;
}

.content {
	height: calc(100% - 44px);
}
</style>
