/*
 * @lc app=leetcode id=84 lang=javascript
 *
 * [84] Largest Rectangle in Histogram
 */
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  if(heights.length === 0) {
    return 0;
  }

  var i = 0, j = 0;
  var max = null;
  var minHeights = new Array(heights.length).fill(
    new Array(heights.length).fill(0)
  );
  var area;
  
  for(i = 0; i < heights.length; i++) {
    for(j = i; j >= 0; j--) {
      var height
      if(j === i) {
        height = heights[i];
        area = height;
      } else {
        height = Math.min(minHeights[i - 1][j], heights[i]);
        area = height * (i - j + 1);
      }
      minHeights[i][j] = height;
      max = Math.max(area, max);
    }
  }

  return max;
};

//   1 2   3   4   5
// 1 1 1+1 2+1 3+1 4+1
// 2 - 2   2*2 2*3 2*4
// 3 - -   3   3*2 3*3
// 4 - -   -   4   4*2
// 5 - -   -   -   5

