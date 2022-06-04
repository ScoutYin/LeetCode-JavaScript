// LeetCode 原题：62. 不同路径
// https://leetcode.cn/problems/unique-paths/

/**
 * 动态规划
 * 定义dp[i][j]为到达位置（i, j）的路径总数
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
	const dp = Array(m).fill([]);
	// 初始状态
	dp[0][0] = 1;

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (i > 0 && j > 0) {
				// 状态转移方程
				dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
			} else if (i > 0) {
				dp[i][j] = dp[i - 1][j];
			} else if (j > 0) {
				dp[i][j] = dp[i][j - 1];
			}
		}
	}

	return dp[m - 1][n - 1];
};

// test case
console.log(uniquePaths(3, 7) === 28);
