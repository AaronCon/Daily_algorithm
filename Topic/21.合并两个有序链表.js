/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
/**
 * 方法一: 递归(mergeTwoLists表示合并两个链表，先判断链表是否为空，然后判断链表表头大小，如果链表l1小则，l1指向重新递归的函数结果)
 */
// var mergeTwoLists = function(list1, list2) {
//   if(list1 === null) {
//     return list2
//   } else if(list2 === null) {
//     return list1
//   } else if(list1.val < list2.val){
//     list1.next = mergeTwoLists(list1.next, list2)
//     return list1
//   } else {
//     list2.next = mergeTwoLists(list1, list2.next)
//     return list2
//   }
// };

/**
 * 方法二: 迭代(定义一个虚拟头节点，然后循环遍历l1,l2,如果l1.val小于l2.val,则让虚拟头节点指向l1,同时虚拟头节点等于它的下一位,同时l1 = l1.next)
 */
var mergeTwoLists = function(list1, list2) {
  let prehead = new ListNode(-1)
  let prev = prehead
  while(list1 && list2) {
    if(list1.val < list2.val) {
      prev.next = list1
      list1 = list1.next
    } else {
      prev.next = list2
      list2 = list2.next
    }
    prev = prev.next
  }
  prev.next = list1 === null ? list2 : list1
  return prehead.next
}
// @lc code=end

