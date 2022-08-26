// LeetCode原题：https://leetcode.cn/problems/path-sum/

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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
	if (!root) return false;
	const nodeQuene = [root];
	const sumQuene = [root.val];

	let target;
	let sum;
	while (nodeQuene.length) {
		// 从节点队列首取出一个节点
		target = nodeQuene.shift();
		// 从和队列首取出一个和，即根节点到节点队列第一个节点（target）的路径和
		sum = sumQuene.shift();
		// 如果是叶子结点且sum等于targetSum了，则满足题意，返回true
		if (!target.left && !target.right && sum === targetSum) {
			return true;
		}
		// 否则的话，将当前节点的子节点以及其和依次加入队列
		if (target.left) {
			nodeQuene.push(target.left);
			sumQuene.push(target.left.val + sum);
		}
		if (target.right) {
			nodeQuene.push(target.right);
			sumQuene.push(target.right.val + sum);
		}
	}
	return false;
};
