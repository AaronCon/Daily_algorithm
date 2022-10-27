/*
 * @lc app=leetcode.cn id=892 lang=javascript
 *
 * [892] 三维形体的表面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
/**
 * 向每个块的表面积相加，再减去层叠的面积
 */
var surfaceArea = function(grid) {
  let res = 0
  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[i].length; j++) {
      let level = grid[i][j]
      if(level > 0) {
        res += (level << 2) + 2
        res -= i > 0 ? Math.min(level, grid[i - 1][j]) << 1: 0
        res -= j > 0 ? Math.min(level, grid[i][j - 1]) << 1: 0
      }
    }
  }
  return res
};
// @lc code=end

