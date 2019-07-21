/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  var i = 0;
  var j;
  var result = "";

  for(i; i < s.length; i++) {
    j = i + 1;
    for(j; j <= s.length; j++) {
      if(s[i] === s[j] && s[i] === s[j + 1]) {
        continue;
      }

      var substr = s.substring(i, j);
      var isPalin = isPal(substr);
      if(isPalin && substr.length > result.length) {
        result = substr;
      }
    }
  }

  return result;
};

var isPal = function(s) {
  var i = 0;
  var l = s.length;
  var m = Math.floor(l / 2);
  for(i; i < m; i++) {
    if(s[i] !== s[l - 1 - i]) {
      return false;
    }
  }

  return true;
}

