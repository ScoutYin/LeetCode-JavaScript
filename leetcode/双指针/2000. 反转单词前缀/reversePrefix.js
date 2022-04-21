// LeetCode原题：https://leetcode-cn.com/problems/reverse-prefix-of-word/

/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
	// 找到 ch 在 word 中第一次出现的下标 index
	const index = word.indexOf(ch);
	if (index > -1) {
		const arr = [...word];
		let left = 0;
		let right = index;
		let temp;
		// 交换对称位置的字符，达到反转效果
		while (left < right) {
			temp = arr[left];
			arr[left] = arr[right];
			arr[right] = temp;
			left++;
			right--;
		}
		return arr.join('');
	}
	return word;
};
