/*
 * @Author: tron 1285771266@qq.com
 * @Date: 2022-08-01 19:42:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-09 19:56:18
 * @FilePath: \shopapp\src\common\utils.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function debounce(fn, delay = 500) {
	let timer = null;
	return function (...args) {
		if (timer != null) clearTimeout(timer);
		timer = setTimeout(() => {
			fn.call(this, args);
		}, delay);
	};
}

function formatDate(date, fmt) {
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(
			RegExp.$1,
			(date.getFullYear() + "").substr(4 - RegExp.$1.length)
		);
	}
	let o = {
		"M+": date.getMonth() + 1,
		"d+": date.getDate(),
		"h+": date.getHours(),
		"m+": date.getMinutes(),
		"s+": date.getSeconds(),
	};
	for (let k in o) {
		if (new RegExp(`(${k})`).test(fmt)) {
			let str = o[k] + "";
			fmt = fmt.replace(
				RegExp.$1,
				RegExp.$1.length === 1 ? str : padLeftZero(str)
			);
		}
	}
	return fmt;
}

function padLeftZero(str) {
	return ("00" + str).slice(str.length);
}

/**
 * @description: 浮点数相加
 * @param {Float} arg1
 * @param {Float} arg2
 * @return {Float} sum
 */
function FloatAdd(arg1, arg2) {
	var r1, r2, m;
	try {
		r1 = arg1.toString().split(".")[1].length;
	} catch (e) {
		r1 = 0;
	}
	try {
		r2 = arg2.toString().split(".")[1].length;
	} catch (e) {
		r2 = 0;
	}
	m = Math.pow(10, Math.max(r1, r2));
	return (arg1 * m + arg2 * m) / m;
}

export { debounce, formatDate, FloatAdd };
