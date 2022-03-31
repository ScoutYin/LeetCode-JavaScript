/**
 * 插入排序
 */
const insertionSort = (arr) => {
	console.time('使用二分查找的插入排序耗时');

	const len = arr.length;

	// i为无序序列的起始索引，从1开始即可，因为第0个可以认为已经处于有序序列中
	for (let i = 1; i < len; i++) {
		// 要插入的数
		const target = arr[i];
		// 二分查找指针
		let left = 0;
		let right = i - 1;
		let mid;

		// while循环结束后，left对应的索引就是我们要找的结果（第一个比target小的数或者有序序列左端点）
		while (left <= right) {
			mid = left + Math.floor((right - left) / 2);
			if (arr[mid] <= target) {
				left = mid + 1;
			} else {
				right = mid - 1;
			}
		}

		for (let j = i - 1; j >= left; j--) {
			// 将比target大的数依次往后移一位
			arr[j + 1] = arr[j];
		}

		// 将target插入到对应位置
		arr[left] = target;
	}

	console.timeEnd('使用二分查找的插入排序耗时');

	return arr;
};

// test case:
const arr = Array.from({ length: 200000 }).map(() =>
	Math.floor(Math.random() * 10000)
);
console.log(insertionSort(arr));
