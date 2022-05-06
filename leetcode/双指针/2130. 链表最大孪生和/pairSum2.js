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
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
	let slow = head;
	let fast = head;
	// while 终止时slow将刚好在前半部分的末尾节点
	while (fast.next && fast.next.next) {
		// 慢指针走一步，快指针走两步
		slow = slow.next;
		fast = fast.next.next;
	}

	// 反转后面一半链表，如[1, 2, 3, 4, 5, 6] -> [1, 2, 3, 6, 5, 4]
	let last = slow.next;
	let cur;
	while (last.next) {
		cur = last.next;
		last.next = cur.next;
		cur.next = slow.next;
		slow.next = cur;
	}

	let max = 0;
	// 分别从头节点和被反转过的后半部分第一个节点开始，计算最大孪生和
	let p = head;
	let q = slow.next;
	while (q) {
		max = Math.max(max, p.val + q.val);
		p = p.next;
		q = q.next;
	}

	return max;
};
