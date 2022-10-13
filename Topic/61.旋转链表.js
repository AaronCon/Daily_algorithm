/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
/**
 * 将链表首尾相连成环
 */
var rotateRight = function(head, k) {
  if(head === null) return head
  let p = head, sum = 1
  while(p.next) {
    p = p.next
    sum++
  }
  p.next = head
  k %= sum
  k = sum - k
  while(k--) p = p.next
  head = p.next
  p.next = null
  return head
};
// @lc code=end

