/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
/**
 * function1: 递归合并两个有序链表
 */
//  function mergeTwoLists(l1, l2) {
//   if(l1 === null) return l2
//   if(l2 === null) return l1
//   if(l1.val < l2.val) {
//     l1.next = mergeTwoLists(l1.next, l2)
//     return l1
//   } else {
//     l2.next = mergeTwoLists(l1, l2.next)
//     return l2
//   }
// }

/**
 * function2: 迭代合并两个有序链表
 */
function mergeTwoLists(l1, l2) {
  let prehead = new ListNode(-1), p = prehead
  while(l1 && l2) {
    if(l1.val < l2.val) {
      p.next = l1
      l1 = l1.next
    } else {
      p.next = l2
      l2 = l2.next
    }
    p = p.next
  }
  p.next = l1 === null ? l2 : l1
  return prehead.next
}
/**
 * 方法1：对数组每次两个递归合并
 */
var mergeKLists = function(lists) {
  let res = null
  for(let i = 0; i < lists.length; i++) {
    res = mergeTwoLists(res, lists[i])
  }
  return res
};
// @lc code=end

