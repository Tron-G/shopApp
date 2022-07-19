<template>
	<div id="home">
		<nav-bar class="home-nav">
			<template #center>
				<div id="home_title">购物街</div>
			</template>
		</nav-bar>
	</div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
	name: "Home",
	components: {
		NavBar,
	},
	data() {
		return {};
	},
	computed: {},
	methods: {},
};
</script>

<style scoped>
#home_title {
	font-weight: bold;
}
.home-nav {
	background-color: var(--color-tint);
	color: white;
}
</style>
