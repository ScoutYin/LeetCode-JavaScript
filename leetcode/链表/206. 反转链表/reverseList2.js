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
 * 迭代法
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
	let prev = null;
	let cur = head;
	let next;
	while (cur) {
		next = cur.next;
		cur.next = prev;
		prev = cur;
		cur = next;
	}
	return prev;
};
