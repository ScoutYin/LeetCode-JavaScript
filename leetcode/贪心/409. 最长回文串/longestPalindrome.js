// LeetCode 原题：409. 最长回文串
// https://leetcode.cn/problems/longest-palindrome/

/**
 * 回文串的特点是对称，从坐到右和从右到左读都是一样的
 * 构成的回文串有两种，第一种是偶数个字符，左右构成镜面对称，比如 abccccba
 * 第二种是奇数个字符，最中间存在一个没有与之构成对称的字符，比如 abccdccba
 * 从这点我们可以得出一个结论：能构成回文串的字符需要对称，则需要两两为一对，如果还有剩余字符，则挑选一个放到最中间
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
	// 一个寄存器，用于记录字符是否出现
	let map = {};
	const length = s.length;
	let ans = 0;
	for (let i = 0; i < length; i++) {
		// 如果map中该字符的记录为true，则说明已经有一次记录，可以和这个字符刚好凑成一对
		// 因此可以将回文串的长度加2
		if (map[s[i]]) {
			ans += 2;
			// 重新将记录置为false
			map[s[i]] = false;
		} else {
			// 如果map中该字符的记录不为true，则将map中该字符记录为true
			map[s[i]] = true;
		}
	}
	// 最后如果回文串的长度小于源字符串的长度，说明还有构不成对称回文串的字符，
	// 那么可以取一个将其放在回文串最中间，构成 abccdccba 这种回文串，所以回文串长度可以再加1
	if (ans < length) {
		ans += 1;
	}
	return ans;
};

// test case
console.log(longestPalindrome('abccccdd') === 7);
