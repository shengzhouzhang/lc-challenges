/*
 * @lc app=leetcode id=32 lang=javascript
 *
 * [32] Longest Valid Parentheses
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  var i = 0;
  var max = 0;
  var last = 0;
  var current = 0;
  var balance = 0;
  var validchars = [];

  for(i; i< s.length; i++) {
    validchars
  }  

  for(i; i< s.length; i++) {
    var char = s[i];

    if(char === '(') {
      balance += 1;
      // last = current;
      // current = 0;
    } else { // )
      if(balance > 0) {
        balance -= 1;
        current += 2;
      }

      if(balance === 0) {
        current += last;
        last = 0;
      } 
      
      if (current > max) {
        max = last;
      }
    }
  }    

  if (current > max) {
    max = current;
  }

  return max;
};

// ()()(()()()()

