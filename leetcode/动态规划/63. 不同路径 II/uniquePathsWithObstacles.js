// LeetCode 原题：63. 不同路径 II
// https://leetcode.cn/problems/unique-paths-ii/submissions/

/**
 * 这道题与“62. 不同路径”的不同之处在于存在障碍物的那个位置（i, j）的dp[i][j]为0
 * 其他是一样的
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
	const m = obstacleGrid.length;
	const n = obstacleGrid[0].length;
	const dp = Array(m).fill([]);
	dp[0][0] = obstacleGrid[0][0] === 1 ? 0 : 1;

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (obstacleGrid[i][j] === 0) {
				if (i > 0 && j > 0) {
					dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
				} else if (i > 0) {
					dp[i][j] = dp[i - 1][j];
				} else if (j > 0) {
					dp[i][j] = dp[i][j - 1];
				}
			} else {
				// 如果位置(i, j)存在障碍物，则该位置的dp[i][j]为0
				dp[i][j] = 0;
			}
		}
	}

	return dp[m - 1][n - 1];
};

// test case
console.log(
	uniquePathsWithObstacles([
		[0, 0, 0],
		[0, 1, 0],
		[0, 0, 0]
	]) === 2
);
