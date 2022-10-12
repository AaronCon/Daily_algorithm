/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/**
 * 方法一: 利用虚拟头节点，以两个为单位交换链表
 */
var swapPairs = function(head) {
  if(head === null || head.next === null) return head
  let prehead = new ListNode(-1), p = prehead
  p.next = head
  do {
    let current = p.next.next
    p.next.next = p.next.next.next
    current.next = p.next
    p.next = current
    p = p.next.next
  }while(p.next !== null && p.next.next !== null)
  return prehead.next
};
// @lc code=end

