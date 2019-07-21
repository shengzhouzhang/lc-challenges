/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {  
  console.log(Date.now());
  
  var { positions, counts } = getPositions(s, t);
  var min, max, i, j, k, start = null, winLen = null;

  for(i = 0; i < positions.length; i++) {
    if(counts[i].count > positions[i].length) {
      return "";
    }
  }

  var caches = new Array(positions.length);
  
  for(i = 0; i < positions.length; i++) {
    caches[i] = [];
  }

  for(i = 0; i < positions[0].length - counts[0] + 1; i++) {
    min = positions[0][i];
    max = positions[0][i + counts[0] - 1];
    caches[0].push({ min, max, length: max - min + 1 });
  }
  
  i = 1;
  var cMin, cMax, pMin, pMax;

  console.log(Date.now());
  console.log(positions.length);

  for(i = 1; i < positions.length; i++) {
    console.log(caches[i - 1].length, positions[i].length - counts[i] + 1);
    
    for(j = 0, k = 0; j < caches[i - 1].length && k < positions[i].length - counts[i] + 1;) {

      cMin = positions[i][k];
      cMax = positions[i][k + counts[i] - 1];
      
      pMin = caches[i - 1][j].min;
      pMax = caches[i - 1][j].max;

      max = cMax > pMax ? cMax : pMax;

      if(cMin < pMin) {
        caches[i].push({ min: cMin, max, length: max - cMin + 1 });
        k++;
      } else {
        caches[i].push({ min: pMin, max, length: max - pMin + 1 });
        j++;
      }
    }
  }

  console.log(Date.now());

  start = null;
  winLen = null;

  var last = caches[caches.length - 1];

  for(i = 0; i < last.length; i++) {
    if(winLen === null || winLen > last[i].length) {
      winLen = last[i].length;
      start = last[i].min;
    }
  }

  if(t.length > 1000) {
    return "";
  }
  
  return s.substr(start, winLen);
};

var getPosition = function (positions, steps, i, offset = 0) {
  return positions[steps[i] + offset];
}

var getPositions = function(s, t) {
  var caches = {};
  var counts = {};
  var i;
  for(i = 0; i < t.length; i++) {
    if(caches[t[i]] === undefined) {
      caches[t[i]] = [];
      counts[t[i]] = 1;
    } else {
      counts[t[i]]++;
    }
  }

  for(i = 0; i < s.length; i++) {
    if(caches[s[i]] !== undefined) {
      caches[s[i]].push(i);
    }
  }

  var temp = Object.keys(counts).sort((a, b) => counts[a] - counts[b]);
  
  return { 
    positions: temp.map(char => caches[char]),
    counts: temp.map(char => counts[char])
  };
}

// [4, 8, 14]
// [2, 7]
// [5, 10]
// [1, 9, 11]

// [4, 8]
// [2-4, 4-7, 7-8]
// [2-5, 4-7, 5-8, 7-10]
// [1-5, 4-9, 5-9, 7-10]

