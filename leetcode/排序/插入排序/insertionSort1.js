/**
 * 插入排序
 */
const insertionSort = (arr) => {
	console.time('插入排序耗时');

	const len = arr.length;

	// i为无序序列的起始索引，从1开始即可，因为第0个可以认为已经处于有序序列中
	for (let i = 1; i < len; i++) {
		// 要插入的数
		const target = arr[i];
		// scanIndex为扫描指针，初始值为有序序列的末位索引
		let scanIndex = i - 1;

		// 终止条件为：找到第一个比target小或者等于target的数或者扫描到有序序列左端点
		while (scanIndex >= 0 && arr[scanIndex] > target) {
			// 扫描过程中，将比target大的数依次往后移一位
			arr[scanIndex + 1] = arr[scanIndex];
			// 扫描指针往前移一位
			scanIndex--;
		}
		// 将target插入到对应位置
		arr[scanIndex + 1] = target;
	}

	console.timeEnd('插入排序耗时');

	return arr;
};

// test case:
const arr = Array.from({ length: 200000 }).map(() =>
	Math.floor(Math.random() * 10000)
);
console.log(insertionSort(arr));
