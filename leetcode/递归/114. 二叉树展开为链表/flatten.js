// LeetCode 原题：https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
	if (!root) return;

	const preorderTraversal = (node, result) => {
		if (!node) return;
		result.push(node);
		preorderTraversal(node.left, result);
		preorderTraversal(node.right, result);
	};
	const result = [];
	// 先进行前序遍历得到 result
	preorderTraversal(root, result);

	// 根据前序遍历得到的result，进行链表的生成
	for (let i = 1; i < result.length; i++) {
		result[i - 1].right = result[i];
		result[i - 1].left = null;
	}
};
