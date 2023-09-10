const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

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
