// LeetCode 原题：https://leetcode.cn/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

/**
 * 迭代法
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
	const list = new ListNode();
	let curr = list;

	while (list1 && list2) {
		// 两个链表都没遍历完时，优先取较小的节点
		if (list1.val <= list2.val) {
			curr.next = list1;
			// 指针后移
			list1 = list1.next;
		} else {
			curr.next = list2;
			list2 = list2.next;
		}

		// 指针后移
		curr = curr.next;
	}

	// 只剩下一个链表时，直接接上
	curr.next = list1 || list2;

	// 此时头节点是无效的节点，所以取头节点的 next，就是合并后的链表
	return list.next;
};
