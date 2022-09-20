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
 * 递归解法
 * https://leetcode.cn/problems/binary-tree-preorder-traversal/solution/jian-dan-yi-dong-javac-pythonjs-er-cha-s-3vyq/
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
	if (!root) return [];

	const traverse = (node, result) => {
		if (!node) return;

		result.push(node.val);
		traverse(node.left, result);
		traverse(node.right, result);
	};
	const result = [];
	traverse(root, result);
	return result;
};
