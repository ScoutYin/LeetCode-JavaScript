/**
 * 双端冒泡排序实现
 * 测试发现，数组长度较大时，该算法实际耗时比常规的单向冒泡少
 */
const bubbleSort = (arr) => {
	console.time('双端冒泡排序耗时');

	let low = 0;
	let high = arr.length - 1;
	let temp;

	// 6, 8, 35, 28, 32, 38, 42
	//    ↑               ↑
	//   low             high
	// 每经历一次while循环，左右两边都进行一轮遍历交换，就能将low和high间的无序范围缩小2
	while (low < high) {
		// 从低到高遍历，每经历完一轮for循环能确定一个大的数字
		for (let i = low; i < high; i++) {
			// 如果左边比右边大，则进行交换
			if (arr[i] > arr[i + 1]) {
				temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
			}
		}
		high--;

		// 再从高到低遍历，每经历完一轮for循环能确定一个小的数字
		for (let j = high; j > low; j--) {
			if (arr[j] < arr[j - 1]) {
				temp = arr[j];
				arr[j] = arr[j - 1];
				arr[j - 1] = temp;
			}
		}
		low++;
	}

	console.timeEnd('双端冒泡排序耗时');

	return arr;
};

// test case:
const arr = Array.from({ length: 50 }).map(() =>
	Math.floor(Math.random() * 100)
);
console.log(bubbleSort(arr));
