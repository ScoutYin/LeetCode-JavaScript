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
 * 迭代解法
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
	if (!root) return [];

	let curr = root;
	const result = [];
	const stack = [];
	// 记录以遍历的前一个节点
	let prev;

	while (curr || stack.length) {
		while (curr) {
			stack.push(curr);
			curr = curr.left;
		}

		const node = stack.pop();
		// 如果 prev 是当前节点的右子节点，说明右节点已经遍历完了
		if (!node.right || prev === node.right) {
			result.push(node.val);
			prev = node;
			curr = null;
		} else {
			// 将当前节点重新压栈，遍历其右子节点
			stack.push(node);
			curr = node.right;
		}
	}

	return result;
};
