// LeetCode原题：744. 寻找比目标字母大的最小字母
// https://leetcode-cn.com/problems/find-smallest-letter-greater-than-target/

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
	// 因为题中说明，字母是依序循环出现的，
	// 所以，当target比第一个字母小、或者大于等于最后一个字母时，结果都是第一个字母
	if (target < letters[0] || target >= letters[letters.length - 1]) {
		return letters[0];
	}

	// 剩下的情况就是 target 肯定是在 letters 中的字母的[0, n - 1]范围内的
	// 有序序列中查找某一个特征值，可使用二分查找
	let left = 0;
	let right = letters.length - 1;
	let mid;

	while (left < right) {
		mid = left + Math.floor((right - left) / 2);
		if (letters[mid] <= target) {
			left = mid + 1;
		} else {
			right = mid;
		}
	}
	return letters[left];
};

console.log(nextGreatestLetter(['c', 'f', 'j'], 'a'));
