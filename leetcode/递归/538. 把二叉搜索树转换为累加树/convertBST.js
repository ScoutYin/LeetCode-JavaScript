// LeetCode 原题：https://leetcode.cn/problems/convert-bst-to-greater-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * 中序遍历（左 -> 根 -> 右）是一个递增序列
 * 那么反序中序（右 -> 根 -> 左）遍历就是一个递减序列
 * 递归解法
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
	let sum = 0;
	const traverse = (node) => {
		if (!node) return;
		traverse(node.right);
		sum += node.val;
		node.val = sum;
		traverse(node.left);
	};
	traverse(root);

	return root;
};
