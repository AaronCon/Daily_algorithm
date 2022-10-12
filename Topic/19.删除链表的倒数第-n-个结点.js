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
/**
 * 方法一：先将链表走完，记录链表总长度s，再重新将链表走s-n-1步，走到要删除元素的前一个元素，进行删除操作
 */
// var removeNthFromEnd = function(head, n) {
//   let s = 0
//   let current = new ListNode(null)
//   current.next = head
//   let arr1 = current
//   let arr2 = current
//   do{
//     arr1 = arr1.next
//     s++
//   } while(arr1)
//   for(let i = 0; i < s - n - 1; i++) {
//     arr2 = arr2.next
//   }
//   if(arr2.next) arr2.next = arr2.next.next
//   return current.next
// };

/**
 * 方法二:快慢指针，先让指针1先走n步，然后指针1和指针2同时走，当指针1的下一位为null时，指针2走到了需要删除节点的前一位，然后进行删除操作
 */
var removeNthFromEnd = function(head, n) {
  let p = new ListNode(-1), p1 = p, p2 = p, res = p
  p.next = head
  while(n--) {
    p1 = p1.next
  }
  while(1) {
    if(p1.next === null) {
      p2.next = p2.next.next
      return res.next
    }
    p1 = p1.next
    p2 = p2.next
  }
}
// @lc code=end

