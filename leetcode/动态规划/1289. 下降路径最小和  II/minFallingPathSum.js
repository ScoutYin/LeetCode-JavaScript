// LeetCode 原题：1289. 下降路径最小和  II
// https://leetcode.cn/problems/minimum-falling-path-sum-ii/

/**
 * 找到上一行中最小和次最小的路径和
 * 然后判断当前位置的列索引是否和上一行的最小索引相同，
 * 如果不相同就取最小索引位置的，否则取次最小的
 * 时间复杂度 O(n^2)
 * 空间复杂度 O(n), 因为使用了状态压缩，只记录上一行和当前行的状态
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function (grid) {
	const dp = [[], []];
	const n = grid.length;
	// 上一行的最小路径和的列索引
	let minIndex = -1;
	// 上一行的次最小路径和的列索引
	let subMinIndex = -1;

	// 先循环第一行，确定第一行的minIndex和subMinIndex
	for (let j = 0; j < n; j++) {
		const value = grid[0][j];
		// 第一行就是其本身
		dp[1][j] = value;
		// 更新minIndex和subMinIndex
		if (minIndex === -1 || value < dp[1][minIndex]) {
			minIndex = j;
		} else if (subMinIndex === -1 || value < dp[1][subMinIndex]) {
			subMinIndex = j;
		}
	}
	// 交换一下状态数组
	[dp[1], dp[0]] = [dp[0], dp[1]];

	for (let i = 1; i < n; i++) {
		// 当前行的最小索引与次最小索引
		let tempMinIndex = -1;
		let tempSubMinIndex = -1;
		for (let j = 0; j < n; j++) {
			const value = grid[i][j];
			if (j === minIndex) {
				// 如果和上一行的minIndex同列，则取次最小
				dp[1][j] = dp[0][subMinIndex] + value;
			} else {
				// 否则取最小
				dp[1][j] = dp[0][minIndex] + value;
			}

			// 更新当前行的最小索引与次最小索引
			if (tempMinIndex === -1 || dp[1][j] < dp[1][tempMinIndex]) {
				tempSubMinIndex = tempMinIndex;
				tempMinIndex = j;
			} else if (tempSubMinIndex === -1 || dp[1][j] < dp[1][tempSubMinIndex]) {
				tempSubMinIndex = j;
			}
		}
		// 当前行循环完毕，将当前行的最小索引作为上一行的，然后再开始下一行的循环
		minIndex = tempMinIndex;
		subMinIndex = tempSubMinIndex;
		// 依然交换一下状态数组
		[dp[1], dp[0]] = [dp[0], dp[1]];
	}

	// 最终最小的就是dp[0]中的最小索引对应的路径和
	return dp[0][minIndex];
};

// test case
console.log(
	minFallingPathSum([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9]
	]) === 13
);
console.log(
	minFallingPathSum([
		[-73, 61, 43, -48, -36],
		[3, 30, 27, 57, 10],
		[96, -76, 84, 59, -15],
		[5, -49, 76, 31, -7],
		[97, 91, 61, -46, 67]
	]) === -192
);
