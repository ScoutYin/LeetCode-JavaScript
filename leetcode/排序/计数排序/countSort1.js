/**
 * 计数排序
 * 一般适用于数值的范围不大的正整数（也可包括0）数组
 * （如果需要考虑负整数，可考虑将数组分为两个数组，一个正整数数组、一个负整数数组，分别处理，再合并）
 * 1、第一步找到这个数组中的最大值，用于决定计数数组count的长度
 * 2、遍历数组，将出现的数字arr[i]作为count数组的下标，每出现一次这个数字，则count[arr[i]]++，最后count数组将记录下原数组中每个数字出现的次数
 * 3、遍历count数组，某个数字出现几次，就向结果数组中push几个该数字
 */

const countSort = (arr) => {
	let len = arr.length;
	let max = arr[0];
	// 找到数组中的最大值
	for (let i = 0; i < len; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}

	const count = new Array(max + 1).fill(0);

	// 计数
	for (let i = 0; i < len; i++) {
		count[arr[i]]++;
	}

	len = count.length;
	const result = [];
	for (let i = 0; i < len; i++) {
		while (count[i] > 0) {
			result.push(i);
			count[i]--;
		}
	}

	return result;
};

// test case:
const arr = Array.from({ length: 100 }).map(() =>
	Math.floor(Math.random() * 100)
);

console.log(countSort(arr));
