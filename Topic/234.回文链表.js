/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
/**
 * 方法一：将值复制到数组中后用双指针法
 */
// var isPalindrome = function(head) {
//   let arr = []
//   while(head) {
//     arr.push(head.val)
//     head = head.next
//   }
//   for(let i = 0, j = arr.length - 1; i < j; i++, j--) {
//     if(arr[i] !== arr[j]) return false
//   }
//   return true
// };

/**
 * 方法二：递归法
 */
var isPalindrome = function(head) {

};
// @lc code=end

