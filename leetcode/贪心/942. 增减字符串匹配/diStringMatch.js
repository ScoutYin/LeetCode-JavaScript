// LeetCode 原题：942. 增减字符串匹配
// https://leetcode.cn/problems/di-string-match/

/**
 * 当 perm[i] 为当前剩余数字中最小的，则一定能满足 perm[i] < perm[i + 1]，即 s 中对应为‘I’
 * 当 perm[i] 为当前剩余数字中最大的，则一定能满足 perm[i] > perm[i + 1]，即 s 中对应为‘D’
 * 所以只要从 0 开始循环到 n，如果 s[i] 对应位置为 I，则 perm[i] 就取当前剩余数字中最小的，
 * 如果 s[i] 对应位置为 D，则 perm[i] 就取当前剩余数字中最大的。
 *
 * 时间复杂度 O(n)
 * 空间复杂度 o(1)，结果数组不算空间复杂度
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
	const n = s.length;
	let low = 0;
	let high = n;
	const perm = [];
	for (let i = 0; i < n; i++) {
		perm[i] = s[i] === 'I' ? low++ : high--;
	}
	// 最后 low === high
	perm[n] = low;
	return perm;
};

// test case
console.log(diStringMatch('IDID'));
