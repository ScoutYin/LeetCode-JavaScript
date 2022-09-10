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
 * 广度优先遍历
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)，最佳情况 O(1)
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
	if (root === null) return 0;

	const quene = [root];
	let depth = 0;

	while (quene.length) {
		let length = quene.length;

		while (length > 0) {
			const target = quene.shift();
			if (target.left !== null) {
				quene.push(target.left);
			}
			if (target.right !== null) {
				quene.push(target.right);
			}
			length--;
		}

		depth++;
	}

	return depth;
};
