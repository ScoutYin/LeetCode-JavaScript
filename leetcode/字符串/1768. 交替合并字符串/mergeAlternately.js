// LeetCode原题：https://leetcode-cn.com/problems/merge-strings-alternately/

/**
 * 遍历次数为两个字符串中长度较长的那个字符串的长度
 * 时间复杂度O(n)，空间复杂度O(1)
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
	const len1 = word1.length;
	const len2 = word2.length;
	let result = '';

	for (let i = 0; i < len1 || i < len2; i++) {
		if (i < len1) {
			result += word1.charAt(i);
		}
		if (i < len2) {
			result += word2.charAt(i);
		}
	}
	return result;
};
