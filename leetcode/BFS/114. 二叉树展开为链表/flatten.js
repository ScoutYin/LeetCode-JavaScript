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

	const stack = [root];
	let prev;
	while (stack.length) {
		const curr = stack.pop();
		if (prev) {
			prev.right = curr;
			prev.left = null;
		}

		if (curr.right) {
			stack.push(curr.right);
		}
		if (curr.left) {
			stack.push(curr.left);
		}
		prev = curr;
	}
};
