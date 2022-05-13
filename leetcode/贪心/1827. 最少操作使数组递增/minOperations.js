// LeetCode 原题：1827. 最少操作使数组递增
// https://leetcode.cn/problems/minimum-operations-to-make-the-array-increasing/

/**
 * 思路：贪心
 * 求使数组严格递增的最少操作次数
 * 比如[1, 1]时，只要变成[1, 2]就行，没必要变成[1, 3]
 * 也就是说只要保证满足这个条件：操作完后后一个数刚好大于前一个数即可
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
	let len = nums.length;
	if (len === 1) return 0;

	let ans = 0;
	// 临时变量，保存每次操作的次数
	let count;
	// 第一个整数不需要操作，使用 i 可以从 1 开始
	for (let i = 1; i < len; i++) {
		// 只用当前一个数大于或等于当前数时，才需要对当前数进行操作，操作次数为 两者的差值+1
		if (nums[i - 1] >= nums[i]) {
			// 本次要操作的次数
			count = nums[i - 1] - nums[i] + 1;
			nums[i] += count;
			ans += count;
		}
	}
	return ans;
};

// test case
console.log(minOperations([1, 1, 1]));
console.log(minOperations([1, 5, 2, 4, 1]));
