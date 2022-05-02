// LeetCode 原题：1346. 检查整数及其两倍数是否存在
// https://leetcode-cn.com/problems/check-if-n-and-its-double-exist/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
	// 建立一个哈希表用于存储每个出现过的数
	const map = {};
	for (let i = 0; i < arr.length; i++) {
		// 如果在哈希表中找到一个值是当前数的两倍或者一半时，则命中
		if (map[arr[i] * 2] || map[arr[i] / 2]) return true;
		// 存入哈希表
		map[arr[i]] = true;
	}
	return false;
};

console.log(checkIfExist([7, 1, 14, 11]));
