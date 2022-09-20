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
 * 迭代解法
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
	if (!root) return root;

	const stack = [];
	let curr = root;
	let sum = 0;
	while (curr || stack.length) {
		while (curr) {
			stack.push(curr);
			curr = curr.right;
		}
		curr = stack.pop();
		sum += curr.val;
		curr.val = sum;
		curr = curr.left;
	}

	return root;
};
