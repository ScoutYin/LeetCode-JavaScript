// LeetCode原题：1877. 数组中最大数对和的最小值
// https://leetcode-cn.com/problems/minimize-maximum-pair-sum-in-array/

/**
 * 题目要我们返回最小的 最大数对和
 * 那么什么情况下最大数对和会是最小的呢？
 * 当然是在所有的数对和之间的最大差值最小的情况下
 * 也就是数对是这样组合时：(最小的数, 最大的数),(第二小的数, 第二大的数)...(第k小的数, 第k大的数)
 * 它们的数对和的最大差值最小
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
	// 第一步先将nums进行从小到大排序
	nums.sort((a, b) => a - b);

	let res = 0;
	let left = 0;
	let right = nums.length - 1;
	while (left < right) {
		// 然后求最大数对和，这里(第k小的数, 第k大的数)进行组合成一个数对
		res = Math.max(res, nums[left++] + nums[right--]);
	}

	return res;
};

console.log(minPairSum([3, 5, 2, 3]));
