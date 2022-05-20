// LeetCode 原题：1561. 你可以获得的最大硬币数目
// https://leetcode.cn/problems/maximum-number-of-coins-you-can-get/

/**
 * 贪心
 * 要拿到最大硬币数目，则必须每一轮都是我拿场上剩余的硬币堆中硬币第二多的那一堆
 * 所以按从多到少排序，然后按索引从0开始，我应该拿前面 length-length/3 堆中的奇数堆（索引上的奇数）第1堆、第3堆、第5堆...
 * 为什么只要遍历前面 length-length/3 堆，
 * 因为每一次Bob都必须拿场上剩余的硬币堆中硬币最少的那一堆，最终会拿走后面的倒数 length/3 堆
 * 前面的都是Alice和我的
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
	// 按照每堆的硬币数从多到少排序
	piles.sort((a, b) => b - a);

	const n = piles.length - piles.length / 3;
	let count = 0;
	for (let i = 1; i <= n; i += 2) {
		count += piles[i];
	}
	return count;
};

// test case
console.log(maxCoins([2, 4, 1, 2, 7, 8]));
