/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let s = 0
  let current = new ListNode(null)
  current.next = head
  let arr1 = current
  let arr2 = current
  do{
    arr1 = arr1.next
    s++
  } while(arr1)
  for(let i = 0; i < s - n - 1; i++) {
    arr2 = arr2.next
  }
  if(arr2.next) arr2.next = arr2.next.next
  return current.next
};
// @lc code=end

