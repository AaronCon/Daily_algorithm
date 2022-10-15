/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  if(head == null) return head
  let prehead = new ListNode(-1)
  prehead.next = head
  let p = prehead
  while(p.next) {
    if(p.next.val == val) {
      p.next = p.next.next 
    } else {
      p = p.next
    }
  }
  return prehead.next
};
// @lc code=end

