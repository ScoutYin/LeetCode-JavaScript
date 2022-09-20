// LeetCode 原题：https://leetcode.cn/problems/binary-tree-inorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 中序遍历：左 - 根 - 右
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
	const traverse = (node, result) => {
		if (!node) return;

		traverse(node.left, result);
		result.push(node.val);
		traverse(node.right, result);
	};

	const result = [];
	traverse(root, result);
	return result;
};
