// LeetCode 原题：2149. 按符号重排数组
// https://leetcode-cn.com/problems/rearrange-array-elements-by-sign/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
	// 用于扫描正整数的指针
	let pos = 0;
	// 用于扫描负整数的指针
	let neg = 0;
	const result = [];
	// n对正负数组合
	const n = nums.length / 2;

	// 每for循环一次，可以找到一对正负数组合
	for (let i = 1; i <= n; i++) {
		// pos指针右移，直到找到一个正整数
		while (nums[pos] < 0) {
			pos++;
		}
		result.push(nums[pos++]);
		// neg指针右移，直到找到一个负整数
		while (nums[neg] > 0) {
			neg++;
		}
		result.push(nums[neg++]);
	}

	return result;
};

console.log(rearrangeArray([3, 1, -2, -5, 2, -4]));
