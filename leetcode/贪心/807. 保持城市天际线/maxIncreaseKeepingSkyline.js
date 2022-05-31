// LeetCode 原题：807. 保持城市天际线
// https://leetcode.cn/problems/max-increase-to-keep-city-skyline/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
	const n = grid.length;
	// 每行的最高的高度
	const rows = Array(n).fill(0);
	// 每列的最高高度
	const cols = Array(n).fill(0);
	let cell;
	// 遍历整个矩阵，统计rows和cols
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			cell = grid[i][j];
			if (cell > rows[i]) {
				rows[i] = cell;
			}
			if (cell > cols[j]) {
				cols[j] = cell;
			}
		}
	}

	let ans = 0;
	// 遍历整个矩阵，计算每个位置可以增加的最大增量
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			// 最多只能增加到当前位置所在的行和列的最高高度的较小值，才能保证天际线不被破坏
			ans += Math.min(rows[i], cols[j]) - grid[i][j];
		}
	}

	return ans;
};

// test case
console.log(
	maxIncreaseKeepingSkyline([
		[3, 0, 8, 4],
		[2, 4, 5, 7],
		[9, 2, 6, 3],
		[0, 3, 1, 0]
	]) === 35
);
