// LeetCode原题：https://leetcode-cn.com/problems/partition-labels/

/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
	// 保存每个字母最后一次出现的索引
	const indexMap = {};
	const len = s.length;
	for (let i = 0; i < len; i++) {
		indexMap[s.charAt(i)] = i;
	}

	const result = [];
	let p = 0;
	let q = 0;
	// 片段结束位置的索引
	let end = 0;

	while (q < len) {
		// 这个片段的结束位置一定不会小于当前字母最后一次出现的index，故每次将end更新为较大的那个索引
		end = Math.max(end, indexMap[s.charAt(q)]);
		// 如果当前索引等于end，则说明到达了这个片段的结束位置
		if (end === q) {
			result.push(q - p + 1);
			// 将p更新为新片段的起点
			p = q + 1;
		}
		q++;
	}

	return result;
};

console.log(partitionLabels('ababcbacadefegdehijhklij'));
