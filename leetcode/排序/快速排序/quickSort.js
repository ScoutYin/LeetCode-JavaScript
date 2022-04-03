/**
 * 交换数组中的某两项
 */
const swap = (arr, i, j) => {
	const temp = arr[j];
	arr[j] = arr[i];
	arr[i] = temp;
};

const quickSort = (arr, left, right) => {
	// 如果left >= right，说明该序列中没有元素或者只有一个元素，不需要排序
	if (left >= right) return;

	// 取序列中第一个数作为基准数
	const pivot = arr[left];
	let i = left;
	let j = right;

	// i等于j时，while终止
	while (i < j) {
		// 这个while终止，说明遇到了小于基准数的，就停止
		while (i < j && arr[j] >= pivot) {
			j--;
		}
		// 然后从左到右，找到第一个大于基准数的
		while (i < j && arr[i] <= pivot) {
			i++;
		}
		// 交换这两个数的位置
		swap(arr, i, j);
	}

	// 将基准数换到中间来
	swap(arr, i, left);
	// 再递归地对左右两个子序列进行相同的排序处理
	quickSort(arr, left, i - 1);
	quickSort(arr, i + 1, right);
};

// test case:
const arr = Array.from({ length: 100 }).map(() =>
	Math.floor(Math.random() * 1000)
);
quickSort(arr, 0, arr.length - 1);
console.log(arr);
