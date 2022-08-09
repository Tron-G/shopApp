<template>
	<div v-if="hasData" class="goods-info">
		<div class="info-text clear-fix">
			<div class="start"></div>
			<div class="info-text">{{ detailInfo.desc }}</div>
			<div class="end"></div>
		</div>
		<div class="info-key">{{ getInfoKey }}</div>
		<div class="info-list">
			<img
				v-for="(item, index) in getImg"
				:key="index"
				:src="item"
				alt=""
				@load="imageLoad"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: "DetailGoodsInfo",
	components: {},
	props: {
		detailInfo: {
			type: Object,
			default() {
				return {};
			},
		},
	},
	data() {
		return {
			timer: null,
		};
	},
	created() {
		// setTimeout(() => {
		// 	console.log(this.detailInfo);
		// }, 500);
	},
	computed: {
		hasData() {
			if (this.detailInfo) return true;
			else return false;
		},
		getInfoKey() {
			return this.detailInfo.detailImage && this.detailInfo.detailImage[0].key;
		},
		getImg() {
			if (
				this.detailInfo.detailImage &&
				this.detailInfo.detailImage.length != 0
			)
				return this.detailInfo.detailImage[0].list;
			else return [];
		},
	},
	methods: {
		imageLoad() {
			this.$emit("image-loaded");
		},
	},
};
</script>

<style lang="less" scoped>
.goods-info {
	padding: 15px 0 0 0;
	border-bottom: 5px solid #f2f5f8;
}
.info-text {
	padding: 0 15px;
	.start,
	.end {
		width: 90px;
		height: 1px;
		background-color: #a3a3a5;
		position: relative;
	}
	.start {
		float: left;
	}
	.end {
		float: right;
	}
	.start::before,
	.end::after {
		content: "";
		position: absolute;
		width: 5px;
		height: 5px;
		background-color: #333;
		bottom: 0;
	}
	.end::after {
		right: 0;
	}

	.info-text {
		padding: 15px 0;
		font-size: 14px;
		color: rgb(107, 106, 106);
	}
}

.info-key {
	padding: 10px 0 10px 15px;
	color: #333;
	font-size: 15px;
	text-align: center;
}

.info-list img {
	width: 100%;
	padding: 0 5px;
}
</style>
