const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

/*Implement middle which will take in an array and return the middle-most element(s)
of the given array.

The middle function should return an array with only the middle element(s) of the
provided array. This means that the length of the returned elements could vary.

For arrays with one or two elements, there is no middle. Return an empty array:
middle([1]) // => []
middle([1, 2]) // => []

For arrays with odd number of elements, an array containing a single middle element
should be returned:
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

For arrays with an even number of elements, an array containing the two elements in
the middle should be returned:
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
*/

const middle = function (array) {
  let middleArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array.length <= 2) {
      return [];
    } else if (array.length % 2 === 0) {
      middleArray.push(
        array[array.length / 2 - 1],
        array[array.length / 2]
      );
      return middleArray;
    } else {
      middleArray.push(array[Math.floor(array.length / 2)]);
      return middleArray;
    }
  }
  return middleArray;
};
module.exports = middle;

/*
const middle = function (array) {
  let middleFirst = 0;
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[array.length / 2 - 1], array[array.length / 2]];
  } else {
    return [array[Math.floor(array.length / 2)]];
  }
  return middleFirst;
};
*/
