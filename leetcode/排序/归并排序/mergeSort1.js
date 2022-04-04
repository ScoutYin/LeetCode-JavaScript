/**
 * 递归法（自顶向下）
 * 返回新数组
 * 这个方法在代码上理解起来更容易
 * 但是需要开辟left和right数组的内存空间，且排序后的是一个新数组，非原数组
 */

/**
 * 归并排序
 * 1、将包含n个数字的数组分成n个子数组，每个子数组中仅有一项，此时可认为它是有序的
 * 2、两个有序的子数组两两合并，得到一个有序的数组
 * 3、重复进行2步骤，最终得到一个数组，这个数组就是有序的
 */

/**
 * 合并两个子序列
 */
const merge = (left, right) => {
	const result = [];

	while (left.length && right.length) {
		// 因为left和right都是有序的，比较两个数组中谁的头部数字小，就先放进结果数组，保证result是从小到大的顺序
		if (left[0] < right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}

	// 当一个数组已经空了，就把另一个数组依次push进result中
	while (left.length) {
		result.push(left.shift());
	}

	while (right.length) {
		result.push(right.shift());
	}

	return result;
};

const mergeSort = (arr) => {
	const len = arr.length;
	// 如果仅有1项或者0项，无需排序
	if (len < 2) return arr;

	// 在中间位置，将序列分成两个子序列
	const mid = Math.floor(len / 2);
	const left = arr.slice(0, mid);
	const right = arr.slice(mid);

	// 使两个子数组有序，
	// 再将这两个有序子数组合并成一个有序的数组
	return merge(mergeSort(left), mergeSort(right));
};

// test case:
const arr = Array.from({ length: 30 }).map(() =>
	Math.floor(Math.random() * 1000)
);
console.log(mergeSort(arr));
