// LeetCode 原题：64. 最小路径和
// https://leetcode.cn/problems/minimum-path-sum/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
	const m = grid.length;
	const n = grid[0].length;
	const dp = Array(m).fill([]);
	dp[0][0] = grid[0][0];

	// dp[i][j] 为从(0, 0)到达(i, j)的最小路径和
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (i > 0 && j > 0) {
				const top = dp[i - 1][j];
				const left = dp[i][j - 1];
				// 取较小值
				dp[i][j] = Math.min(top, left) + grid[i][j];
			} else if (i > 0) {
				dp[i][j] = dp[i - 1][j] + grid[i][j];
			} else if (j > 0) {
				dp[i][j] = dp[i][j - 1] + grid[i][j];
			}
		}
	}

	return dp[m - 1][n - 1];
};

// test case
console.log(
	minPathSum([
		[1, 3, 1],
		[1, 5, 1],
		[4, 2, 1]
	]) === 7
);
