const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(
      "✅✅✅ Assertion Passed: " +
        actual +
        " === " +
        expected +
        "✅✅✅"
    );
  } else {
    console.log(
      "🛑🛑🛑 Assertion Failed: " +
        actual +
        "!== " +
        expected +
        "🛑🛑🛑"
    );
  }
};

const eqArrays = function (array1, array2) {
  let result = true;
  if (array1.length !== array2.length) {
    result = false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      //console.log(array1[i], array2[i]);
      if (array1[i] !== array2[i]) {
        result = false;
      }
    }
  }
  return result;
};

/* Instruction: Create a function flatten which will
take in an array containing elements including nested arrays of elements,
 and return a "flattened" version of the array.
 */

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
