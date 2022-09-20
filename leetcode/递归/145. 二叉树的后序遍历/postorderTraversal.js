// LeetCode 原题：https://leetcode.cn/problems/binary-tree-postorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 后序遍历：左 -> 右 -> 根
 * 递归解法
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
	if (!root) return [];

	const traverse = (node, result) => {
		if (!node) return;

		traverse(node.left, result);
		traverse(node.right, result);
		result.push(node.val);
	};

	const result = [];
	traverse(root, result);

	return result;
};
