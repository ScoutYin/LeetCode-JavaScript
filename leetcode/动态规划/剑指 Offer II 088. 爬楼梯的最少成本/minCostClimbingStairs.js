// LeetCode 原题：剑指 Offer II 088. 爬楼梯的最少成本
// https://leetcode.cn/problems/GzCJIP/

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
	const n = cost.length;
	// prev，curr 用于保存到达前一个和当前阶梯需要花费的最小体力
	let prev;
	let curr;
	for (let i = 0; i <= n; i++) {
		// 初始位置可为0和1层阶梯，故体力消耗为0
		if (i === 0 || i === 1) {
			prev = 0;
			curr = 0;
		} else {
			// 到达下一个阶梯，可由前一个阶梯爬 2 个阶梯到达，也可由当前阶梯爬 1 个阶梯到达
			// 取这两种情况的耗费体力最小的，next为耗费的最小体力
			const next = Math.min(prev + cost[i - 2], curr + cost[i - 1]);
			prev = curr;
			curr = next;
		}
	}

	return curr;
};

// test case
console.log(minCostClimbingStairs([10, 15, 20]) === 15);
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]) === 6);
