function debounce(fn, delay) {
	let timer = null;
	return function (...args) {
		if (timer != null) clearTimeout(timer);
		timer = setTimeout(() => {
			fn.call(this, args);
		}, delay);
	};
}

export { debounce };
