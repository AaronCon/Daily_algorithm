/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if(head === null || head.next === null) return null
  let p1 = head
  let p2 = head
  do {
    if(p2.next === null || p2.next.next === null) return null
    p1 = p1.next
    p2 = p2.next.next
  } while(p1 !== p2)
  p1 = head
  while(p1 !== p2) {
    p1 = p1.next
    p2 = p2.next
  }
  return p1
};
// @lc code=end

