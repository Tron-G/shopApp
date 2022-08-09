/*
 * @Author: tron 1285771266@qq.com
 * @Date: 2022-08-03 21:31:39
 * @LastEditors: tron 1285771266@qq.com
 * @LastEditTime: 2022-08-08 19:09:34
 * @FilePath: \shopapp\src\network\detail.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { request } from "./request";

export function getDetail(iid) {
	return request({
		url: "/detail",
		params: {
			iid,
		},
	});
}

export function getRecommend() {
	return request({
		url: "/recommend",
	});
}

export class GoodsInfo {
	constructor(itemInfo, columns, services) {
		this.title = itemInfo.title;
		this.desc = itemInfo.desc;
		this.newPrice = itemInfo.price;
		this.oldPrice = itemInfo.oldPrice;
		this.discount = itemInfo.discountDesc;
		this.columns = columns;
		this.services = services;
		this.realPrice = itemInfo.lowNowPrice;
	}
}

export class Shop {
	constructor(shopInfo) {
		this.logo = shopInfo.shopLogo;
		this.name = shopInfo.name;
		this.fans = shopInfo.cFans;
		this.sells = shopInfo.cSells;
		this.score = shopInfo.score;
		this.goodsCount = shopInfo.cGoods;
	}
}

export class GoodsParam {
	constructor(info, rule) {
		if (info.images !== undefined) {
			this.image = info.images[0];
		} else this.images = " ";
		this.info = info.set;
		this.sizes = rule.tables;
	}
}
