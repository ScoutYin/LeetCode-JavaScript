// LeetCode 原题：https://leetcode.cn/problems/longest-substring-without-repeating-characters/

/**
 * 滑动窗口
 * 时间复杂度：O(n)
 * 空间复杂度：O(m)，m 为字符的种数
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	const length = s.length;
	if (length <= 1) return length;

	// 空格用 `$$` 作为缓存中标识的key
	const getKey = (char) => (char === ' ' ? '$$' : char);

	let left = 0;
	let right = 1;
	let max = 1;
	// 缓存已出现的字符的索引
	const indexCache = {
		[getKey(s[0])]: 0
	};
	let index;
	let char;

	while (right < length) {
		char = getKey(s[right]);
		index = indexCache[char];
		// index >= left 限制索引是在窗口内的，
		// 如果在窗口内出现和 right 位置重复的字符，
		// 则更新窗口的左边界为重复字符（index 位置的）的右边一个
		if (index !== undefined && index >= left) {
			max = Math.max(right - 1 - left, max);
			// 更新窗口的左边界为重复字符（index 位置的）的右边一个
			left = index + 1;
		} else {
			max = Math.max(right + 1 - left, max);
		}
		// 更新索引缓存
		indexCache[char] = right;
		// 右边界右移
		right++;
	}
	return max;
};
