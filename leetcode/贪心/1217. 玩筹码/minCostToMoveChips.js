// LeetCode 原题：1217. 玩筹码
// https://leetcode.cn/problems/minimum-cost-to-move-chips-to-the-same-position/

/**
 * 根据题目可知，间隔一位变换是不需要代价的，只有相邻位变换需要代价
 * 既然间隔位变换不需要代价，那么两个位置之间不管间隔了多少位，
 * 其实都可以无代价地将其变换到同一个位置上（都是奇数位或者都是偶数位），或者相邻的两个位置上（一个奇数位，一个偶数位）
 * 最终需要代价的变换只是相邻两个位置变换的代价，要最小代价，当然就是将数目更少的那个位置上的都移到数目多的那个位置上
 * 换句话说，就转换为求这些筹码在奇数位置和偶数位置上的数目的较小值了
 * 因此只要遍历一次position，分别统计奇数位置的筹码个数和偶数位置的筹码个数，将它们俩的较小值作为结果返回即可。
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
	let oddCount = 0;
	let evenCount = 0;
	const length = position.length;
	for (let i = 0; i < length; i++) {
		position[i] % 2 === 0 ? evenCount++ : oddCount++;
	}
	return Math.min(oddCount, evenCount);
};

// test case
console.log(minCostToMoveChips([2, 2, 2, 3, 3]) === 2);
console.log(minCostToMoveChips([1, 1000000000]) === 1);
