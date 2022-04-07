/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = (node) => {
	// 将node的下一个节点复制到当前节点，越过下一个节点，达到删除的效果
	node.val = node.next.val;
	node.next = node.next.next;
};
