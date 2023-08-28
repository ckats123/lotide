/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} ✅✅✅`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑🛑`);
  }
};
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
*/

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

/*
  // TEST CODE
  assertEqual("Lighthouse Labs", "Bootcamp");
  assertEqual(1, 1);
*/

/* Implement a function eqArrays which takes in two arrays and
returns true or false, based on a perfect match. */

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

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

/* Instruction:
Use assertEqual to write test cases for various scenarios.

The tests can be written below the definition of your function.
Here's one example to get you started:

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS */

/* Implement assertArraysEqual which will take in two arrays and
console.log an appropriate message to the console.

The message will be similar to that of assertEqual.
In fact, you could refer to the code for assertEqual to help you implement
this. Instead of doing a simple === check though, this assertion function
will make use of your eqArrays function for array comparison.

Warning
Functions that do not return values and instead print out messages to the
console are more difficult to test using assertions. This is because we
cannot simply compare their return value to an expected value.

For this reason, we will not be writing assertions (test code)
for assertArraysEqual. That said, you can and should call the function
 below its declaration and visually ensure that the message printed
 to the console is accurate. */

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(
      "✅✅✅ Assertion Passed: " +
        array1 +
        " === " +
        array2 +
        "✅✅✅"
    );
  } else {
    console.log(
      "🛑🛑🛑 Assertion Failed: " +
        array1 +
        "!== " +
        array2 +
        "🛑🛑🛑"
    );
  }
};

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
  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.includes(source[i])) {
      newArray = source.splice(i, 1);
    } else {
      newArray = source;
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
