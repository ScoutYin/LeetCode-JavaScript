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
 * https://leetcode.cn/problems/binary-tree-inorder-traversal/solution/jian-dan-yi-dong-javac-pythonjs-er-cha-s-w80i/
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
	const result = [];
	if (!root) return result;

	// 指针
	let curr = root;
	const stack = [];
	// 遍历结束的判定：指针 curr 没有指向有效节点，并且栈也空了，表示已经到达最右端，中序遍历结束
	while (curr || stack.length) {
		// 一直找到最左边的子节点
		while (curr) {
			stack.push(curr);
			curr = curr.left;
		}

		curr = stack.pop();
		result.push(curr.val);
		curr = curr.right;
	}

	return result;
};
