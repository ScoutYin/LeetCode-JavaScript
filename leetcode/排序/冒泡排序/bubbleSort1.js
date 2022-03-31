/**
 * 常规的单向遍历冒泡
 * @param {*} arr
 */
const bubbleSort = (arr) => {
	console.time('常规的单向遍历冒泡');

	const len = arr.length;

	for (let i = 0; i < len; i++) {
		let j = 0;
		// 无序序列右端点
		const end = len - 1 - i;

		while (j < end) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
			j++;
		}
	}

	console.timeEnd('常规的单向遍历冒泡');

	return arr;
};

// test case:
const arr = Array.from({ length: 50 }).map(() =>
	Math.floor(Math.random() * 100)
);
console.log(bubbleSort(arr));
