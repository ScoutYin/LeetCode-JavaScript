// LeetCode 原题：2078. 两栋颜色不同且距离最远的房子
// https://leetcode.cn/problems/two-furthest-houses-with-different-colors/

/**
 * 最大距离最大只可能是 n-1，即colors两端不一样的情况
 * 当两端相同时，需要缩小范围继续找
 * 那么当找到结果时，一定是这种情况 [c1, c1, c1, ..., c2, ..., c3, ..., c1, c1]
 * 那么此时最大距离是第一个c1至c2的距离和倒数第一个c1与c3之间距离的最大值（c2可能等于c3）
 * 换句话说，必定有一个是在端点，才会最大
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
	let n = colors.length;
	let left = 0;
	let right = n - 1;
	// 如果左边界等于右端点，则左边界右移，直到left到达右端点或者找到第一个不等于右端点的颜色
	while (left < n && colors[left] === colors[n - 1]) {
		left++;
	}
	// 同理，如果右边界等于左端点，则右边界左移，直到right到达左端点或者找到第一个不等于左端点的颜色
	while (right > 0 && colors[right] === colors[0]) {
		right--;
	}
	// 然后取这两种情况的最大值
	return Math.max(right, n - 1 - left);
};

// test case
console.log(maxDistance([1, 1, 1, 6, 1, 1, 1]));
