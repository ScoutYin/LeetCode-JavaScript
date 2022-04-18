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
 * 方法二：双指针
 * 思路：
 * 倒数第k个节点后面存在k个节点
 * 设置fast和slow两个指针，两个指针初始位置都是头节点
 * 让fast指针先走k步，此时快慢指针间的间隔为k
 * 然后让快慢指针同时向后走，直到fast指针超出尾结点，此时的slow节点就是倒数第k个节点
 * 此方法时间复杂度也为O(n)，但只需要遍历一次链表
 * 空间复杂度为O(1)
 */
var getKthFromEnd = function (head, k) {
	let fast = head;
	let slow = head;
	while (k > 0) {
		fast = fast.next;
		k--;
	}
	while (fast) {
		[fast, slow] = [fast.next, slow.next];
	}
	return slow;
};
