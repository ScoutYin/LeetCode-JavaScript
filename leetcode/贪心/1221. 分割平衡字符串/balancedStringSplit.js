// LeetCode 原题：1221. 分割平衡字符串
// https://leetcode.cn/problems/split-a-string-in-balanced-strings/

/**
 * * 方法一：使用哈希保存L、R出现的次数
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit1 = function (s) {
	const store = {
		L: 0,
		R: 0
	};
	let count = 0;
	let len = s.length;

	for (let i = 0; i < len; i++) {
		store[s.charAt(i)]++;
		if (store.L === store.R) {
			count++;

			store.L = store.R = 0;
		}
	}

	return count;
};

/**
 * 方法二：使用一个数值变量保存 L和R的出现的次数差值
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit2 = function (s) {
	// offset用于记录L和R出现的次数差值
	let offset = 0;
	let count = 0;
	let len = s.length;

	for (let i = 0; i < len; i++) {
		if (s.charAt(i) === 'L') {
			offset++;
		} else {
			offset--;
		}

		// 当offset为0，说明前面这部分字符串已经“平衡”，记一次结果
		if (offset === 0) {
			count++;
		}
	}

	return count;
};

// test case
console.log(balancedStringSplit1('RLRRLLRLRL'));
console.log(balancedStringSplit2('RLLLLRRRLR'));
