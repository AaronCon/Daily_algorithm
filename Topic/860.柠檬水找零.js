/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let five = ten = twenty = 0
  for(let i = 0; i < bills.length; i++) {
    if(bills[i] === 5) {
      five++
    } else if(bills[i] === 10) {
      if(!five) return false
      five--;
      ten++;
    } else if(bills[i] === 20) {
      if(five && ten) {
        five--;
        ten--;
        twenty++;
      } else if (five >= 3) {
        five = five - 3;
        twenty++;
      } else {
        return false
      }
    }
  }
  return true;
};
// @lc code=end

