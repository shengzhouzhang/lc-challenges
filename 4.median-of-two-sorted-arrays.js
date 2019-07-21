/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var combine = mergeArrays(nums1, nums2);
  var result = mediam(combine);

  console.log(combine, result);
  return result;
};

var mediam = function(array) {
  if(array.length % 2 === 1) {
    var index = Math.floor(array.length / 2);
    return array[index];
  } else {
    var index1 = Math.floor(array.length / 2);
    var index2 = index1 - 1;
    return (array[index1] + array[index2]) / 2;
  }
}

var mergeArrays = function(array1, array2) {
  var result = [];
  var index1 = 0;
  var index2 = 0;

  while(index1 < array1.length || index2 < array2.length) {
    var number1 = array1[index1];
    var number2 = array2[index2];

    if(number1 === undefined && number2 === undefined) {
      break;
    } else if(number1 === undefined || number2 < number1) {
      result.push(number2);
      index2 += 1;
    } else if(number2 === undefined || number1 <= number2) {
      result.push(number1);
      index1 += 1;
    }
  }

  return result;
}

