/**
 * 选择排序
 * 每次都从无序序列中找到一个最小（或最大）的数，放到有序的序列中
 */
const selectionSort = (arr) => {
	console.time('选择排序耗时');

	const len = arr.length;
	let minIndex;
	// 无序序列的起始索引是0
	let i = 0;
	let temp;

	while (i < len - 1) {
		minIndex = i;
		let j = i;
		// 从无序序列中找到最小的数的索引
		while (j < len) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
			j++;
		}
		// 将上面从无序序列中找到的最小的数放到左侧的有序序列中
		temp = arr[i];
		arr[i] = arr[minIndex];
		arr[minIndex] = temp;
		// 将无序序列的起始索引右移一位
		i++;
	}
	console.timeEnd('选择排序耗时');

	return arr;
};

// test case:
const arr = Array.from({ length: 50 }).map(() =>
	Math.floor(Math.random() * 100)
);
console.log(selectionSort(arr));
