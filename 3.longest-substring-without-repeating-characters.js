/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var i = 0;
  var chars = {};
  var min = 0;
  var maxLength = 0;
  for(i = 0; i < s.length; i++) {
    var current = s[i];
    if(chars[current] === undefined || chars[current] < min) {
      chars[current] = i;

      if(i === s.length - 1) {
        var currentLength = i - min + 1;
        if(currentLength > maxLength) {
          maxLength = currentLength;
        }
      }
    } else {
      var currentLength = i - min;
      if(currentLength > maxLength) {
        maxLength = currentLength;
      }
      min = chars[current] + 1;
      chars[current] = i;
    }
  }

  return maxLength;
};

