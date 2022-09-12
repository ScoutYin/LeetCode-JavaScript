// LeetCode原题：https://leetcode.cn/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
	// 存放有效的生成结果
	const result = [];

	/**
	 * 可将生成括号组合的过程抽象成一个树状结构，在每个节点位置都可以选择再拼接 '(' 或者 ')'，
	 * 然后通过剪枝，剔除掉一些不符合条件的分支路径
	 * @param {*} path 已生成的路径
	 * @param {*} openCount '('的已出现个数
	 * @param {*} closeCount ')'的已出现个数
	 * @returns
	 */
	const dfs = (path, openCount, closeCount) => {
		// 剪枝
		if (openCount > n || openCount < closeCount) return;

		// 将符合条件的 path 放入结果数组中
		if (openCount === n && closeCount === n) {
			result.push(path);
			return;
		}

		// 在每个路径后可以选择再拼接 '(' 或者 ')'
		dfs(path + '(', openCount + 1, closeCount);
		dfs(path + ')', openCount, closeCount + 1);
	};

	dfs('', 0, 0);
	return result;
};
