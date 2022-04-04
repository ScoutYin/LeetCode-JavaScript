/**
 * 迭代法（自底向上）
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

const mergeSort = (arr) => {
	const len = arr.length;
	if (len < 2) return;

	// 子序列元素个数，为1时，子序列仅有1个元素，如[3]和[5]合并，以此类推
	let k = 1;

	while (k < len) {
		// 两个完整子序列（完整：子序列元素个数为k）合并完后的元素个数
		const count = 2 * k;
		let i;
		// i < len - count是为了保证在这个for循环中的合并都是完整子序列合并
		for (i = 0; i < len - count; i += count) {
			merge(arr, i, i + k - 1, i + count - 1);
		}

		// 最后可能存在一个子序列，则不需要合并，因为每个子序列已是有序的；
		// 最后如果存在两个子序列（i + k < len 的情况），两个子序列可能不全是完整子序列，比如[3,5,8,16]和[2,7]，
		// 如果按照上面的for循环中right传入i + count - 1的话，将会超出arr的长度，故单独处理
		if (i + k < len) {
			merge(arr, i, i + k - 1, len - 1);
		}
		k *= 2;
	}
};

// test case:
const arr = Array.from({ length: 90 }).map(() =>
	Math.floor(Math.random() * 1000)
);
mergeSort(arr);
console.log(arr);
