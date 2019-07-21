/*
 * @lc app=leetcode id=85 lang=javascript
 *
 * [85] Maximal Rectangle
 */
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  if(matrix.length === 0) {
    return 0;
  }
  var i, j;
  var n = matrix.length;
  var m = matrix[0].length;
  var numbers = [];

  for(i = 0; i < n; i++) {
    numbers[i] = new Array(m).fill(0);
  }

  for(i = 0; i < n; i++) {
    for(j = 0; j < m; j++) {
      if(i === 0) {
        numbers[i][j] = matrix[i][j] === '1' ? 1 : 0;
      } else if(matrix[i][j] === '1') {
        numbers[i][j] += numbers[i - 1][j] + 1;
      }
    }
  }

  var area = 0, max = 0;
  for(i = 0; i < n; i++) {
    area = largestRectangleArea(numbers[i]);
    max = Math.max(area, max);
  }

  return max;
};

var largestRectangleArea = function(heights) {
  if(heights.length === 0) {
    return 0;
  }

  var i = 0, j = 0;
  var max = null;
  var caches = new Array(heights.length).fill(new Array(heights.length).fill(0));
  var area;
  
  for(i = 0; i < heights.length; i++) {
    for(j = 0; j <= i; j++) {
      var length = i - j + 1;
      var height
      if(j !== i) {
        height = Math.min(caches[i - 1][j], heights[i]);
      } else {
        height = heights[i];
      }
      caches[i][j] = height;
      area = height * length;

      if(max === null || area > max) {
        max = area;
      }
    }
  }

  return max;
};

// [
//   ["1","0","1","0","0"],
//   ["1","0","1","1","1"],
//   ["1","1","1","1","1"],
//   ["1","0","0","1","0"]
// ]

// [ 
//   [ 1, 0, 1, 0, 0 ],
//   [ 2, 0, 2, 1, 1 ],
//   [ 3, 1, 3, 2, 2 ],
//   [ 4, 0, 0, 3, 0 ] 
// ]

// ["3","1","3","2","2"]
//    0  1  2  3  4
// 0: 3  2  3  4  5
// 1:    1  2  3  4
// 2:       3  4  6
// 3:          2  4
// 4:             2 
