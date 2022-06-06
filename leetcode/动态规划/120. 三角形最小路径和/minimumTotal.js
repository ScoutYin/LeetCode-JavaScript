// LeetCode 原题：120. 三角形最小路径和
// https://leetcode.cn/problems/triangle/

/**
 * 动态规划、空间复杂度压缩
 * 本来dp应该是个二维数组，dp[i][j]，i是行索引，j是列索引
 * 但我们发现dp[i][j]其实只跟他下面相邻的两个路径和有关
 * 比如题目中的5只和他下面的1和8有关，
 * 所以其实我们不用耗费那么多内存空间去保存其他行的状态，
 * 而只需要使用一个一维数组保存，循环到哪行就用这行的状态去替换这个一维dp数组中的状态
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
	const dp = [];
	const h = triangle.length;
	let bottomRow = triangle[h - 1];
	// 我们采用从底部到顶部的顺序，
	// 将最底部的一行作为dp数组初始状态，
	// 因为此时最底部一行的最小路径和就是它本身
	for (let i = 0; i < bottomRow.length; i++) {
		// dp[i]标识当前行的第 i 列的最小路径和
		dp[i] = bottomRow[i];
	}

	// 从倒数第二行开始遍历
	for (let i = h - 2; i >= 0; i--) {
		const len = triangle[i].length;
		for (let j = 0; j < len; j++) {
			// 当前行的第 j 列的最小路径和为他下面那行的第 j 列和第 j+1 列的最小路径和的较小值加上自身值
			dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
		}
	}

	return dp[0];
};

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]) === 11);
