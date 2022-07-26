<template>
	<div id="hy-swiper">
		<div
			id="swiper"
			@touchstart="touchStart"
			@touchmove="touchMove"
			@touchend="touchEnd"
		>
			<slot></slot>
		</div>
		<div class="indicator">
			<slot name="indicator" v-if="showIndicator && slideCount >= 1">
				<div
					v-for="(item, index) in slideCount"
					:key="index"
					class="indicator-item"
					:class="{ active: index === currentIndex - 1 }"
				></div>
			</slot>
		</div>
	</div>
</template>

<script>
/**
 * 轮播图
 * */
export default {
	name: "Swiper",
	props: {
		//默认3秒换一张图片
		interval: {
			type: Number,
			default: 3000,
		},
		//轮播动画时间
		animDuration: {
			tye: Number,
			default: 200,
		},
		//默认用户滑动到4/1图片就跳过去
		moveRatio: {
			type: Number,
			default: 0.25,
		},
		//是否显示下方标记
		showIndicator: {
			type: Boolean,
			default: true,
		},
	},
	data() {
		return {
			slideCount: 0, // 元素个数
			totalWidth: 0, // swiper的宽度
			swiperStyle: {}, // swiper样式
			currentIndex: 1, // 当前的index
			scrolling: false, // 是否正在滚动
		};
	},
	mounted() {
		//nextTick将回调函数延迟在下一次dom更新数据后调用
		this.$nextTick(() => {
			setTimeout(() => {
				this.handleDom();
				this.startTimer();
			}, 800);
		});
	},
	methods: {
		/**
		 * 定时器操作
		 */
		startTimer() {
			this.playTimer = window.setInterval(() => {
				this.currentIndex++;
				this.scrollContent(-this.currentIndex * this.totalWidth);
			}, this.interval);
		},
		stopTimer() {
			window.clearInterval(this.playTimer);
		},
		/**
		 * 操作DOM, 在DOM前后添加Slide
		 */
		handleDom() {
			this.$nextTick(() => {
				// 1.获取要操作的元素
				let swiperEl = document.querySelector("#swiper");
				let slideEls = swiperEl.getElementsByClassName("slide");
				// 2.保存个数
				this.slideCount = slideEls.length;

				// 3.如果大于1个, 那么在前后分别添加一个slide
				if (this.slideCount > 1) {
					let cloneFirst = slideEls[0].cloneNode(true);
					let cloneLast = slideEls[this.slideCount - 1].cloneNode(true);
					swiperEl.insertBefore(cloneLast, slideEls[0]);
					swiperEl.appendChild(cloneFirst);
					//获取元素宽度和样式
					this.totalWidth = swiperEl.offsetWidth;
					this.swiperStyle = swiperEl.style;
				}
				// 4.让swiper元素, 显示第一个(目前是显示前面添加的最后一个元素)
				this.setTransform(-this.totalWidth);
			});
		},

		/**
		 * 滚动到正确的位置
		 */

		scrollContent(currentPosition) {
			// 0.设置正在滚动
			this.scrolling = true;
			// 1.开始滚动动画
			this.swiperStyle.transition = "transform " + this.animDuration + "ms";
			this.setTransform(currentPosition);
			// 2.判断滚动到的位置
			this.checkPosition();
			// 4.滚动完成
			this.scrolling = false;
		},
		/**
		 * 左右平移
		 */
		setTransform(position) {
			this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
			//Safari 和 Chrome
			this.swiperStyle[
				"-webkit-transform"
			] = `translate3d(${position}px, 0, 0)`;
			//ie9
			this.swiperStyle["-ms-transform"] = `translate3d(${position}px, 0, 0)`;
		},
		/**
		 * 校验正确的位置
		 */
		checkPosition() {
			window.setTimeout(() => {
				this.swiperStyle.transition = "0ms";
				if (this.currentIndex > this.slideCount) {
					this.currentIndex = 1;
					this.setTransform(-this.currentIndex * this.totalWidth);
				} else if (this.currentIndex < 1) {
					this.currentIndex = this.slideCount;
					this.setTransform(-this.currentIndex * this.totalWidth);
				}
				this.$emit("transitionEnd", this.currentIndex - 1);
			}, this.animDuration);
		},

		touchStart(e) {
			// 1.如果正在滚动, 不可以拖动
			if (this.scrolling) return;
			this.stopTimer();
			// 3.保存开始滚动的位置
			this.startX = e.touches[0].pageX;
		},

		touchMove(e) {
			// 1.计算出用户拖动的距离
			this.currentX = e.touches[0].pageX;
			this.distance = this.currentX - this.startX;
			// 2.设置当前的位置
			let currentPosition = -this.currentIndex * this.totalWidth;
			let moveDistance = this.distance + currentPosition;
			this.setTransform(moveDistance);
		},

		touchEnd(e) {
			// 1.获取移动的距离
			let currentMove = Math.abs(this.distance);
			let movelimit = this.totalWidth * this.moveRatio;
			// 2.判断最终的距离
			if (this.distance === 0) {
				return;
			} else if (this.distance > 0 && currentMove > movelimit) {
				//右移
				this.currentIndex--;
			} else if (this.distance < 0 && currentMove > movelimit) {
				//左移
				this.currentIndex++;
			}
			// 3.移动到正确的位置
			this.scrollContent(-this.currentIndex * this.totalWidth);

			this.startTimer();
		},
	},
};
</script>

<style scoped>
#hy-swiper {
	position: relative;
	overflow: hidden;
}

#swiper {
	display: flex;
}

.indicator {
	display: flex;
	justify-content: center;
	position: absolute;
	width: 100%;
	bottom: 8px;
}

.indicator-item {
	box-sizing: border-box;
	width: 8px;
	height: 8px;
	border-radius: 4px;
	background-color: white;
	line-height: 8px;
	text-align: center;
	font-size: 12px;
	margin: 0 5px;
}
.active {
	background-color: rgba(212, 62, 46, 1);
}
</style>
