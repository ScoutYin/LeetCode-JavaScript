// LeetCode 原题：2160. 拆分数位后四位数字的最小和
// https://leetcode.cn/problems/minimum-sum-of-four-digit-number-after-splitting-digits/

/**
 * 要求和最小
 * 如果存在0，则0只能作为前导0
 * 其他不为0的数位，应该将较小的数放在对值大小贡献度更高的数位，
 * 比如把1和5中更小的1放在十位要比把5放在十位要更小，即 15 < 51
 * 个位数的值放哪边都不影响和的大小，比如[15, 37]和[17,35]
 *
 * 时间复杂度为排序时间复杂度 O(nlogn)
 * 空间复杂度为 O(1)
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
	const digits = [];
	while (num > 0) {
		digits.unshift(num % 10);
		num = Math.floor(num / 10);
	}
	digits.sort((a, b) => a - b);
	// 前两位较小的数分别作为两个整数的十位
	return 10 * (digits[0] + digits[1]) + digits[2] + digits[3];
};

// test case
console.log(minimumSum(2932));
console.log(minimumSum(4009));
