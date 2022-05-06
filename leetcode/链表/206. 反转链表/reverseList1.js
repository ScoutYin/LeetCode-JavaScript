// LeetCode 原题：206. 反转链表
// https://leetcode-cn.com/problems/reverse-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 递归法
 * 时间复杂度 O(n)
 * 空间复杂度 O(n) 递归深度
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
	// 递归终止条件
	if (head === null || head.next === null) {
		return head;
	}
	const node = reverseList(head.next);
	// 反转
	head.next.next = head;
	head.next = null;
	return node;
};
