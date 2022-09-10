// LeetCode原题：https://leetcode.cn/problems/maximum-depth-of-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 深度优先遍历
 * 时间复杂度：O(n)
 * 空间复杂度：O(depth)
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
	if (root === null) return 0;

	return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
