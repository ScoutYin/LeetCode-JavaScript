// LeetCode 原题：1974. 使用特殊打字机键入单词的最少时间
// https://leetcode.cn/problems/minimum-time-to-type-word-using-special-typewriter/

/**
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function (word) {
	const length = word.length;
	let ans = 0;
	let cur = 'a';

	for (let i = 0; i < length; i++) {
		// 使用字母对应的Unicode来计算当前指针所指的字母到下一个字母需要的秒数（步数）
		let moveSeconds = Math.abs(word[i].charCodeAt() - cur.charCodeAt());
		// 因为是循环的圆盘，所以任意两个字母之间所需要移动的步数差值最小值肯定是小于等于26的一半的（13）的
		// 比如如果顺时针转需要走20步，那我逆时针转就只要6步了，我们只要最短的路径
		if (moveSeconds > 13) {
			moveSeconds = 26 - moveSeconds;
		}
		// 加上用于键入的一秒
		ans += moveSeconds + 1;
		cur = word[i];
	}
	return ans;
};

// test case
console.log(minTimeToType('abc') === 5);
console.log(minTimeToType('bza') === 7);
