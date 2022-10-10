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
/**
 * 1. 模拟判断(分三种情况循环,l1为null,l2为null,都不为null计算,同时用r记录是否相加超过10)
 * (判断情况太多,代码太累赘)
 */
// var addTwoNumbers = function(l1, l2) {
//   let res = new ListNode()
//   let t = res
//   let r = false
//   let val = 0
//   while(l1 || l2) {
//     if(!l1) {
//       if(r) {
//         if(l2.val === 9){
//           val = 0
//         } else {
//           val = l2.val + 1
//           r = false
//         }
//       } else {
//         val = l2.val
//       }
//       t.next = new ListNode(val)   
//     } else if(!l2) {
//       if(r) {
//         if(l1.val === 9){
//           val = 0
//         } else {
//           val = l1.val + 1
//           r = false
//         }
//       } else {
//         val = l1.val
//       }
//       t.next = new ListNode(val) 
//     } else {
//       if(l1.val + l2.val >= 10) {
//         if(r) {
//           t.next = new ListNode((l1.val + l2.val) % 10 + 1)
//         } else {
//           t.next = new ListNode((l1.val + l2.val) % 10)
//         }
//         r = true
//       } else {
//         if(r) {
//           if(l1.val + l2.val === 9) {
//             val = 0
//           } else {
//             val = l1.val + l2.val + 1
//             r = false
//           }
//         } else {
//           val = l1.val + l2.val
//         }
//         t.next = new ListNode(val)
//       }
//     }
//     t = t.next
//     l1 && (l1 = l1.next)
//     l2 && (l2 = l2.next)
//     console.log(res.next)
//   }
//   if(r) t.next = new ListNode(1)
//   return res.next
// };

/**
 * 2. 模拟(将两个链表的值依此取出相加处理,如果l1为null,则值为0处理,相加的结果取余和取整处理)
 */
var addTwoNumbers = function(l1, l2) {
  let head = null, tail = null
  let carry = 0
  while(l1 || l2) {
    const n1 = l1 ? l1.val : 0
    const n2 = l2 ? l2.val : 0
    const sum = n1 + n2 + carry
    if(!head) {
      head = tail = new ListNode(sum % 10)
    } else {
      tail.next = new ListNode(sum % 10)
      tail = tail.next
    }
    carry = Math.floor(sum / 10)
    if(l1) {
      l1 = l1.next
    }
    if(l2) {
      l2 = l2.next
    }
  }
  if(carry > 0) tail.next = new ListNode(carry)
  return head
}
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

