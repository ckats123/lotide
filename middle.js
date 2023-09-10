const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

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
