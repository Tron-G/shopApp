<template>
	<div class="param-info" v-if="hasData">
		<table
			v-for="(table, index) in paramInfo.sizes"
			class="info-size"
			:key="index"
		>
			<tr v-for="(tr, indey) in table" :key="indey">
				<td v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
			</tr>
		</table>

		<table class="info-param" v-if="hasData">
			<tr v-for="(info, index) in paramInfo.info" :key="index">
				<td class="info-param-key">{{ info.key }}</td>
				<td class="param-value">{{ info.value }}</td>
			</tr>
		</table>

		<div class="info-img" v-if="hasImage">
			<img :src="paramInfo.image" alt="" />
		</div>
	</div>
</template>

<script>
export default {
	name: "DetailParamInfo",
	props: {
		paramInfo: {
			type: Object,
			default() {
				return {};
			},
		},
	},
	computed: {
		hasData() {
			if (this.paramInfo) return true;
			else return false;
		},
		hasImage() {
			return this.paramInfo.image && this.paramInfo.image.length !== 0;
		},
	},
};
</script>

<style scoped>
.param-info {
	padding: 20px 15px;
	font-size: 14px;
	border-bottom: 5px solid #f2f5f8;
}
.param-info table {
	width: 100%;
	border-collapse: collapse;
}
.param-info table tr {
	height: 42px;
}
.param-info table tr td {
	border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.info-param-key {
	/*  当value数据量比较大的时候 会挤到key，所以给一个固定的宽度*/
	width: 95px;
}
.info-param {
	border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.param-value {
	color: #eb4868;
}
.info-img img {
	width: 100%;
}
</style>
