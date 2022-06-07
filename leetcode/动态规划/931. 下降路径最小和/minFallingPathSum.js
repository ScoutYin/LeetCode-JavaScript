// LeetCode 原题：931. 下降路径最小和
// https://leetcode.cn/problems/minimum-falling-path-sum/

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
	// 由于下一行只与上一行有关，所以只需记录前一行和当前行的状态，状态压缩优化
	const dp = [[], []];
	const n = matrix.length;

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (i === 0) {
				// 第一行的最小路径和就是它们本身
				dp[1][j] = matrix[0][j];
			} else if (j === 0) {
				// 从第二行开始，每行第一个的最小路径和等于上一行的第0个和第1个的较小值加上它本身
				dp[1][j] = Math.min(dp[0][j], dp[0][j + 1]) + matrix[i][j];
			} else if (j === n - 1) {
				// 最后一行，与j等于0时类似，末尾而已
				dp[1][j] = Math.min(dp[0][j - 1], dp[0][j]) + matrix[i][j];
			} else {
				dp[1][j] =
					Math.min(dp[0][j - 1], dp[0][j], dp[0][j + 1]) + matrix[i][j];
			}
		}
		// 每一行循环结束后，翻转一下dp数组，使当前行的状态变为下一行的上一行状态
		[dp[0], dp[1]] = [dp[1], dp[0]];
	}

	// 因为经过了翻转，所以最后的结果是dp[0]中的最小值
	return Math.min.apply(null, dp[0]);
};

// test case
console.log(
	minFallingPathSum([
		[2, 1, 3],
		[6, 5, 4],
		[7, 8, 9]
	]) === 13
);
