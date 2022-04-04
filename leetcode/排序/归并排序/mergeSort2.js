/**
 * 递归法（自顶向下）
 * 对原数组排序（不返回新数组）
 */

/**
 * 合并两个子序列
 * 子序列是数组中的[left, right]区间内以mid为界被分开的两个子序列
 */
const merge = (arr, left, mid, right) => {
	let i = left;
	let j = mid + 1;
	// 用于临时存放合并好的结果
	const result = [];

	// 判断两个子序列的头部元素，哪个更小，就优先放进result数组
	while (i <= mid && j <= right) {
		if (arr[i] <= arr[j]) {
			result.push(arr[i++]);
		} else {
			result.push(arr[j++]);
		}
	}

	// 将剩下的一个子序列中的剩余元素依次放进result数组
	while (i <= mid) {
		result.push(arr[i++]);
	}
	while (j <= right) {
		result.push(arr[j++]);
	}

	// 将result中保存的元素依次复制到arr中的对应位置
	// 此处我们从后往前复制
	while (right >= left) {
		arr[right] = result[right - left];
		right--;
	}
};

const sort = (arr, left, right) => {
	// 如果子序列仅有1项或者0项，无需排序
	if (right <= left) return;

	const mid = left + Math.floor((right - left) / 2);

	// 使两个子数组有序，
	sort(arr, left, mid);
	sort(arr, mid + 1, right);
	// 再将这两个有序的子序列合并成一个大的有序序列
	merge(arr, left, mid, right);
};

const mergeSort = (arr) => {
	sort(arr, 0, arr.length - 1);
};

// test case:
const arr = Array.from({ length: 30 }).map(() =>
	Math.floor(Math.random() * 1000)
);
mergeSort(arr);
console.log(arr);
