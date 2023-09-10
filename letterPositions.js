const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    //console.log(sentence[i]);
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

// Test Code
console.log(letterPositions("hello")); // => { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] }

module.exports = letterPositions;
