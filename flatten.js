const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

const flatten = function (array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      newArray = newArray.concat(array[i]);
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

// Test code
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log(flatten([1, 2, [3, 4, 5], 7, [6]])); // => [1, 2, 3, 4, 5, 7, 6]
console.log(flatten([[1, 2, 3], 4, 5, 5, [6, 7, 8]])); // => [1, 2, 3, 4, 5, 5, 6, 7, 8]
console.log(flatten([1, 2, [3, 4, 5], 5, [6, 7, 8, 9, 10]])); // => [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10]
