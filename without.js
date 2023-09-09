const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

/*
Implement without which will return a subset of a given array, removing unwanted elements.

This function should take in a source array and a itemsToRemove array.
It should return a new array with only those elements from source that are
not present in the itemsToRemove array.*/

/*
Instruction
Use assertArraysEqual to write test cases for various scenarios.

The tests can be written below the definition of your function. */
const without = function (source, itemsToRemove) {
  let newArray = [];
  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      newArray.push(item);
    }
  }
  return newArray;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// Test Code

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["hi", "hello", "bye"], ["bye"])); // => ['hi', 'hello']
console.log(without(words, ["world"])); // => ['hello', 'lighthouse']
