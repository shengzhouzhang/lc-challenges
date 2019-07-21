/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var number1 = convertToNumber(l1);
    var number2 = convertToNumber(l2);

    var sum = number1 + number2;
    var result = convertToListNode(sum);

    console.log(result);
    return result;
};

var convertToListNode = function (number) {
  var numberStr = number.toString();
  var result = [];
  createListNode(numberStr, result);
  return result;
}

var createListNode = function(numberStr, result) {
  result.push(parseInt(numberStr[numberStr.length - 1]));

  if(numberStr.length > 1) {
    createListNode(numberStr.substr(0, numberStr.length - 1), result);
  }
}

var convertToNumber = function(ln) {
  var numberStr = getNummbers(ln);
  return parseInt(numberStr);
}

var getNummbers = function(ln) {
  if(ln.next) {
    return ln.val.toString() + convertToNumber(ln.next);
  }
  return ln.val.toString();
}

