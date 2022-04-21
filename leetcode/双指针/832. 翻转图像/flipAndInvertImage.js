// LeetCode原题：https://leetcode-cn.com/problems/flipping-an-image/

/**
 * 通过分析翻转及反转前后的结果能发现：
 * 当两个位置分别为0和1时，将它们进行翻转和反转操作后，它们依然为0和1，操作前后并未发生变化，因此这种情况我们不需要处理
 * 只有当两个位置都为0或都为1时，才对这两个位置的0和1进行反转操作即可
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
	// 循环矩阵每一行
	for (let i = 0; i < image.length; i++) {
		const row = image[i];
		let left = 0;
		let right = row.length - 1;
		// 对每一行中进行翻转和反转
		while (left < right) {
			// 只有当对称位置的数都为0或都为1时，我们需要将其反转，不需要翻转（因为两个都是一样的）
			if (row[left] === row[right]) {
				// ^ 为异或运算符
				row[left] ^= 1;
				row[right] = row[left];
			}
			left++;
			right--;
		}
		// 当n为奇数时，中间位置left会与right相等，进行反转即可
		if (left === right) {
			row[left] ^= 1;
		}
	}
	return image;
};
