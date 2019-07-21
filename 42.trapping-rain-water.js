/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  var min = getMin(height);
  var waterHeight;
  var waterArea = 0;

  for(var i = 0; i < height.length; i++) {

    if(height[i] > min) {
      var { index } = findNextHigher(height, i);
      if(index !== null) {
        waterHeight = Math.min(height[i], height[index]);
        for(i; i < index; i++) {
          waterArea += Math.max(waterHeight - height[i], 0);
        }
        i -= 1;
      }
    }
  }

  return waterArea;
};

var findNextHigher = function(height, start) {
  var i = start + 1;
  var max = null;
  var maxIndex = null;
  for(i; i < height.length; i++) {

    if(max === null || max < height[i]) {
      max = height[i];
      maxIndex = i;
    }

    if(height[i] >= height[start]) {
      break;
    }
  }

  return { index: maxIndex };
}

var getMin = function(height) {
  var min = null;
  var i = 0;
  for(i; i < height.length; i++) {
    if(min === null || min > height[i]) {
      min = height[i];
    }
  }
  
  return min;
}

