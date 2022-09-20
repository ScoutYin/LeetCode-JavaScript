// LeetCode 原题：https://leetcode.cn/problems/invert-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 时间复杂度：O(N)
 * 空间复杂度：O(depth)
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
	if (!root) return root;

	const temp = root.left;
	root.left = root.right;
	root.right = temp;

	if (root.left) {
		invertTree(root.left);
	}
	if (root.right) {
		invertTree(root.right);
	}
	return root;
};
