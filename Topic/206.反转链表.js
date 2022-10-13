/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * 方法一: 三节点迭代法
 */
// var reverseList = function(head) {
//   if(head === null || head.next === null) return head
//   let pre = null, cur = head, nex = head.next
//   while(cur) {
//     cur.next = pre
//     pre = cur;
//     (cur = nex) && (nex = nex.next)
//   }
//   return pre
// };

/**
 * 递归法
 */
var reverseList = function(head) {
  if(head === null || head.next === null) return head
  let p = reverseList(head.next)
  head.next.next = head
  head.next = null
  return p
}
// @lc code=end

