/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
/**
 * 方法一：顺序遍历
 * 思路：
 * 倒数第k个节点，就是正数的第 len-k+1 （从1开始，非索引）个节点
 * 由于链表的长度不知道，所需要先需要计算链表的长度len
 * 知道链表的长度之后，再从head开始找到第 len-k+1 个节点就是要找的倒数第k个节点
 * 此方法时间复杂度为O(n)，且需要遍历两次链表
 * 空间复杂度为O(1)
 */
var getKthFromEnd = function (head, k) {
	if (head === null) return null;
	let len = 0;
	let node = head;
	while (node) {
		node = node.next;
		len++;
	}

	let i = len - k + 1;
	node = head;
	while (i > 1) {
		node = node.next;
		i--;
	}
	return node;
};
