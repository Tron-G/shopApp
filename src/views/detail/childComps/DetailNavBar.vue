<!--
 * @Author: tron 1285771266@qq.com
 * @Date: 2022-08-02 22:11:30
 * @LastEditors: tron 1285771266@qq.com
 * @LastEditTime: 2022-08-08 21:00:34
 * @FilePath: \shopapp\src\views\detail\childComps\DetailNavBar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
	<div id="detail-navbar">
		<nav-bar class="detial-nav">
			<template #left>
				<div class="back" @click="backClick">
					<img src="~assets/img/common/back.svg" alt="" />
				</div>
			</template>

			<template #center>
				<div class="detail-title">
					<div
						v-for="(item, index) in titles"
						:key="item"
						class="title-item"
						@click="itemClick(index)"
						:class="{ active: index == currentIndex }"
					>
						{{ item }}
					</div>
				</div>
			</template>
		</nav-bar>
	</div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
	name: "DetailNavBar",
	components: { NavBar },
	data() {
		return {
			titles: ["商品", "参数", "评论", "推荐"],
			currentIndex: 0,
		};
	},
	computed: {},
	methods: {
		itemClick(index) {
			this.currentIndex = index;
			this.$emit("item-click", index);
		},
		backClick() {
			this.$router.go(-1);
		},
		changeIndex(new_index) {
			this.currentIndex = new_index;
		},
	},
};
</script>

<style scoped>
.detail-title {
	display: flex;
	justify-content: center;
	font-size: 15px;
}
.title-item {
	flex: 1;
}

.active {
	color: var(--color-high-text);
}

.back img {
	width: 20px;
	height: 20px;
}
.back {
	margin-top: 5px;
	vertical-align: middle;
}
</style>
