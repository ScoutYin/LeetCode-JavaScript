// LeetCode 原题：2130. 链表最大孪生和
// https://leetcode-cn.com/problems/maximum-twin-sum-of-a-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 时间复杂度 O(n) 需要遍历两次，一次 n，一次 n/2
 * 空间复杂度 O(n) 需要一个长度为 n 的 values 数组保存节点值
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
	// 保存所有节点值
	const values = [];
	let node = head;
	while (node) {
		values.push(node.val);
		node = node.next;
	}

	let max = 0;
	// 双指针
	let left = 0;
	let right = values.length - 1;
	while (left < right) {
		// 维护最大孪生和
		max = Math.max(max, values[left++] + values[right--]);
	}

	return max;
};
