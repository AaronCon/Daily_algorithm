/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 模拟判断(代码太累赘)
var addTwoNumbers = function(l1, l2) {
  let res = new ListNode()
  let t = res
  let r = false
  let val = 0
  while(l1 || l2) {
    if(!l1) {
      if(r) {
        if(l2.val === 9){
          val = 0
        } else {
          val = l2.val + 1
          r = false
        }
      } else {
        val = l2.val
      }
      t.next = new ListNode(val)   
    } else if(!l2) {
      if(r) {
        if(l1.val === 9){
          val = 0
        } else {
          val = l1.val + 1
          r = false
        }
      } else {
        val = l1.val
      }
      t.next = new ListNode(val) 
    } else {
      if(l1.val + l2.val >= 10) {
        if(r) {
          t.next = new ListNode((l1.val + l2.val) % 10 + 1)
        } else {
          t.next = new ListNode((l1.val + l2.val) % 10)
        }
        r = true
      } else {
        if(r) {
          if(l1.val + l2.val === 9) {
            val = 0
          } else {
            val = l1.val + l2.val + 1
            r = false
          }
        } else {
          val = l1.val + l2.val
        }
        t.next = new ListNode(val)
      }
    }
    t = t.next
    l1 && (l1 = l1.next)
    l2 && (l2 = l2.next)
    console.log(res.next)
  }
  if(r) t.next = new ListNode(1)
  return res.next
};
// @lc code=end


// 1.
// if(r) {
//   if(l1.val + l2.val == 9) {
//     val = 0
//   } else {
//     val = l1.val + l2.val + 1
//     r = false
//   }
// } else {
//   val = l1.val + l2.val
// }

// 2.
// (r && (l1.val + l2.val == 9) && (val = 0)) 
// || (r && (val = l1.val + l2.val + 1) && (r = false)) 
// || (val = l1.val + l2.val)

// 1 2 为什么不是同样的效果

