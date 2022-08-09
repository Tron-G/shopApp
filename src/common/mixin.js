/*
 * @Author: tron 1285771266@qq.com
 * @Date: 2022-08-08 16:44:02
 * @LastEditors: tron 1285771266@qq.com
 * @LastEditTime: 2022-08-08 22:11:48
 * @FilePath: \shopapp\src\common\mixin.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { debounce } from "./utils";
import { BACK_TOP_POS } from "@/common/constValue";

const itemMixin = {
	data() {
		return {
			refreshDebouncer: null,
		};
	},
	mounted() {
		this.refreshDebouncer = debounce(this.$refs.scroll.refresh, 500);
	},
	methods: {},
};

import BackTop from "@/components/content/backTop/BackTop.vue";
const backTopMixin = {
	data() {
		return {
			isShowBackTop: false,
		};
	},
	components: {
		BackTop,
	},
	methods: {
		backClick() {
			this.$refs.scroll.scrollTo(0, 0);
		},
		listenShowBackTop(pos) {
			//判断回到顶部按钮是否显示
			this.isShowBackTop = -pos.y > BACK_TOP_POS;
		},
	},
};

export { backTopMixin, itemMixin };
