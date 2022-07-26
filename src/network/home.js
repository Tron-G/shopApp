import { request } from "./request";

//统一管理首页的网络请求

function getHomeMultidata() {
	return request({
		url: "/home/multidata",
	});
}

function getHomeGoods(type, page) {
	return request({
		url: "/home/data",
		params: {
			type,
			page,
		},
	});
}

export { getHomeMultidata, getHomeGoods };
