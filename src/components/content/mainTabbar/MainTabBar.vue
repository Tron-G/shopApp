<!--
 * @Author: tron 1285771266@qq.com
 * @Date: 2022-07-19 21:41:16
 * @LastEditors: tron 1285771266@qq.com
 * @LastEditTime: 2022-08-07 16:16:27
 * @FilePath: \shopapp\src\components\content\mainTabbar\MainTabBar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
	<div id="main_tab_bar">
		<tab-bar>
			<tab-bar-item path="/home" :activeColor="activecolor">
				<template v-slot:item-icon>
					<img src="~assets/img/tabbar/home.svg" alt="" />
				</template>
				<template #item-icon-active>
					<img src="~assets/img/tabbar/home_active.svg" alt="" />
				</template>
				<template #item-text>
					<div>首页</div>
				</template>
			</tab-bar-item>

			<tab-bar-item path="/category" :activeColor="activecolor">
				<template v-slot:item-icon>
					<img src="~assets/img/tabbar/category.svg" alt="" />
				</template>
				<template #item-icon-active>
					<img src="~assets/img/tabbar/category_active.svg" alt="" />
				</template>
				<template #item-text>
					<div>分类</div>
				</template>
			</tab-bar-item>

			<tab-bar-item path="/cart" :activeColor="activecolor">
				<template v-slot:item-icon>
					<img src="~assets/img/tabbar/shopcart.svg" alt="" />
				</template>
				<template #item-icon-active>
					<img src="~assets/img/tabbar/shopcart_active.svg" alt="" />
				</template>
				<template #item-text>
					<div>购物车</div>
				</template>
			</tab-bar-item>

			<tab-bar-item path="/profile" :activeColor="activecolor">
				<template v-slot:item-icon>
					<img src="~assets/img/tabbar/profile.svg" alt="" />
				</template>
				<template #item-icon-active>
					<img src="~assets/img/tabbar/profile_active.svg" alt="" />
				</template>
				<template #item-text>
					<div>我的</div>
				</template>
			</tab-bar-item>
		</tab-bar>
	</div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
	name: "MainTabBar",
	components: {
		TabBar,
		TabBarItem,
	},
	data() {
		return {
			activecolor: "#FF5777",
		};
	},
	computed: {},
	methods: {},
};
</script>

<style scoped>
#tab-bar {
	z-index: 5;
}
</style>
