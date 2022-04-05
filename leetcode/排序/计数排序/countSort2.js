/**
 * 计数排序
 * 一般适用于数值的范围不大的正整数（也可包括0）数组
 * （如果需要考虑负整数，可考虑将数组分为两个数组，一个正整数数组、一个负整数数组，分别处理，再合并）
 * 2、遍历数组，将出现的数字arr[i]作为count数组的下标，每出现一次这个数字，则count[arr[i]]++，最后count数组将记录下原数组中每个数字出现的次数
 * 3、遍历count数组，某个数字出现几次，就向结果数组中push几个该数字
 */

const countSort = (arr) => {
	let len = arr.length;
	const count = [];

	// 计数
	for (let i = 0; i < len; i++) {
		count[arr[i]] = (count[arr[i]] || 0) + 1;
	}

	len = count.length;
	const result = [];
	for (let i = 0; i < len; i++) {
		while (count[i]) {
			result.push(i);
			count[i]--;
		}
	}

	return result;
};

// test case:
const arr = Array.from({ length: 300 }).map(() =>
	Math.floor(Math.random() * 100)
);

console.log(countSort(arr));
