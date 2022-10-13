/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * 链表反转: 翻转一个分组内的子链表，参考206
 */
const myReverse = (head, tail) => {
  let prev = tail.next
  let p = head
  while(prev !== tail) {
    const nex = p.next
    p.next = prev
    prev = p
    p = nex
  }
  return [tail, head]
}
var reverseKGroup = function(head, k) {
  const hair = new ListNode(0)
  hair.next = head
  let pre = hair
  
  while(head) {
    let tail = pre
    for(let i = 0; i < k; ++i) {
      tail = tail.next
      if (!tail) {
        return hair.next
      }
    }
    const nex = tail.next; //这里要加上分号
    [head, tail] = myReverse(head, tail)
    pre.next = head
    tail.next = nex
    pre = tail
    head = tail.next
  }
  return hair.next
};
// @lc code=end

