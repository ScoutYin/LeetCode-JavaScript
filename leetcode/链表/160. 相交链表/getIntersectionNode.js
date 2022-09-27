// LeetCode 原题：https://leetcode.cn/problems/intersection-of-two-linked-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 假设「第一个公共节点」为 node ，「链表 headA」的节点数量为 a ，「链表 headB」的节点数量为 b ，「两链表的公共尾部」的节点数量为 c ，则有：
 * 头节点 headA 到 node 中间共有 a-c 个节点
 * 头节点 headB 到 node 中间共有 b-c 个节点
 * 那么我们分别使用指针 pA 和 pB 遍历链表 headA 和 headB
 * 当 pA 指针走完 headA 的时，让 pA 指向 headB 头节点继续往后遍历
 * 同样，当 pB 指针走完 headB 的时，让 pB 指向 headA 头节点继续往后遍历
 * 那么会有这种情况：
 * 当 pA 和 pB 都走到 node 节点时，pA 和 pB 走过的节点数是相等的
 * 即：a+(b-c) = b+(a-c)
 * 那么如果 node 存在，则 pA 就会等于 pB，也就是他们都指向 node
 * 如果不存在 node，则 pA 和 pB 最后指向的都是 null
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
	let pA = headA;
	let pB = headB;

	while (pA !== pB) {
		pA = pA ? pA.next : headB;
		pB = pB ? pB.next : headA;
	}

	return pA;
};
