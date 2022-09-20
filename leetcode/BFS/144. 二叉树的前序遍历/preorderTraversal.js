// LeetCode 原题：https://leetcode.cn/problems/binary-tree-preorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 前序遍历：根 -> 左 -> 右
 * 迭代解法
 * https://leetcode.cn/problems/binary-tree-preorder-traversal/solution/jian-dan-yi-dong-javac-pythonjs-er-cha-s-3vyq/
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
	if (!root) return [];

	let curr = root;
	const result = [];
	const stack = [];

	while (curr || stack.length) {
		while (curr) {
			stack.push(curr);
			result.push(curr.val);
			curr = curr.left;
		}
		curr = stack.pop().right;
	}

	return result;
};
